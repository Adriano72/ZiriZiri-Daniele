var args = arguments[0] || {};
Ti.API.info("CIAO");

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

var modJson = Alloy.Models.Post.toJSON();

$.postIcon.image = modJson.catImage;
$.date.text = modJson.tmp_referenceTime;
$.name.text = modJson.name;
$.category.text = modJson.categoria;
$.rating_1.image = modJson.rating_1;
$.rating_2.image = modJson.rating_2;
$.rating_3.image = modJson.rating_3;
$.rating_4.image = modJson.rating_4;
$.rating_5.image = modJson.rating_5;
$.tags.text = modJson.tag;

function IsJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
};

function openEvent() {
	//Ti.API.info("WINDOW OPEN");
	theActionBar = $.win.activity.actionBar;

	$.win.activity.invalidateOptionsMenu();

	theActionBar = $.win.activity.actionBar;
	if (theActionBar != undefined) {
		theActionBar.displayHomeAsUp = true;
		theActionBar.setIcon('images/logo-test.png');
		//theActionBar.setTitle(self.title);
		theActionBar.onHomeIconItemSelected = function() {
			$.win.close({
				animate : true
			});
		};
	};

};

function editPost() {

	Alloy.createController("editPost", {
		existingPost : true,
		_callback : function(p_data) {
			modJson = Alloy.Models.Post.toJSON();
			Alloy.Models.Post.set("categoria", (!_.isNull(modJson.category) ? modJson.category.name : ""), {
				silent : true
			});
			Alloy.Models.Post.trigger('change');

			Alloy.Globals.loading.show();

			net.editPost(Alloy.Models.Post, function(post_id, postToAddToTimeline) {

				Ti.API.info("ID POST UPDATATO: " + post_id);
				$.win.close();
				args(true);

				alert("Post updatato");

			});

		}
	}).getView();
};

Ti.API.info("MODEL: " + JSON.stringify(Alloy.Models.Post));

Ti.API.info("NULL CATEG: " + _.isNull(Alloy.Models.Post.get("category")));

//Alloy.Models.Post.trigger('change', Alloy.Models.Post);

//Alloy.Models.Post.set("name", "TestTransformName", {silent: true});

Alloy.Models.Post.set("tmp_referenceTime", moment(Alloy.Models.Post.get("referenceTime")).fromNow(), {
	silent : true
});

Alloy.Models.Post.set("categoria", (!_.isNull(modJson.category) ? modJson.category.name : ""), {
	silent : true
});

var rating = Alloy.Models.Post.get("rating");
//Alloy.Models.Post.set("catImage", (!_.isNull(modJson.category.code)) ? '/images/' + modJson.category.code.slice(0, 2) + ".png" : '/images/android-robot.jpg');
Alloy.Models.Post.set("catImage", (!_.isNull(modJson.category)) ? '/images/' + modJson.category.code.slice(0, 2) + ".png" : '/images/android-robot.jpg');
Alloy.Models.Post.set("rating_1", (rating > 0) ? "/images/star-small.png" : "");
Alloy.Models.Post.set("rating_2", (rating > 1) ? "/images/star-small.png" : "");
Alloy.Models.Post.set("rating_3", (rating > 2) ? "/images/star-small.png" : "");
Alloy.Models.Post.set("rating_4", (rating > 3) ? "/images/star-small.png" : "");
Alloy.Models.Post.set("rating_5", (rating > 4) ? "/images/star-small.png" : "");

//Alloy.Models.Post.set("tag", (_.isNull(modJson.tags)) ? "" : modJson.tags[0].name);

var aspects = modJson.aspects;

Ti.API.info("ASPETTI JSON: " + JSON.stringify(aspects));

Alloy.Models.Post.trigger('change');

// GESTIONE RIEPILOGO ASPETTI *******

var aspettoEvento = _.filter(aspects, function(item) {
	return item.kind.code == "EVENTDATATYPE_CODE";
});

Alloy.Collections.aspettoEvento.reset(aspettoEvento);

if (aspettoEvento.length > 0) {
	$.aspectsEventsWrapper.add(Alloy.createController('briefEvento').getView());
}

// ASPETTI CASHFLOW *********
var allAspettiCashflow = _.filter(aspects, function(item) {
	return item.kind.code == "CASHFLOWDATATYPE_CODE";
});


Alloy.Collections.aspettiCashflow.reset(allAspettiCashflow);

if (allAspettiCashflow.length > 0) {
	$.aspectsCashflowWrapper.add(Alloy.createController('briefCashflow').getView());
}

// ASPETTI DOCUMENT *********
var allAspettiDocuments = _.filter(aspects, function(item) {
	return item.kind.code == "FILEDOCUMENTDATATYPE_CODE";
});

Alloy.Collections.aspettiDocument.reset(allAspettiDocuments);

if (allAspettiDocuments.length > 0) {
	$.aspectsDocumentWrapper.add(Alloy.createController('briefDocument').getView());
}

// ASPETTI NOTES *********

var aspettiNotes = _.filter(aspects, function(item) {
	return item.kind.code == "NOTEDATATYPE_CODE";
});

var aspettiLinks = _.filter(aspects, function(item) {
	return item.kind.code == "FILELINKDATATYPE_CODE";
});

var aspettiComunications = _.filter(aspects, function(item) {
	return item.kind.code == "COMMUNICATIONDATATYPE_CODE";
});

$.win.open();

$.win.addEventListener("close", function() {
	$.destroy();
});
