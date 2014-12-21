var args = arguments[0] || {};

//$.win.open();

var net = require('net');

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

var presentPage = 0;

// to keep track of content size on iOS
var startIndex = 0;

var lastNumberOfRecordsFetched;

// to know when the table is loading
var isLoading = false;

// to trigger loading on iOS
var overlap = 50;

var theActionBar = null;

var temp = [];

//if (OS_ANDROID) $.is.init($.timelineTable);

/*
 $.win.addEventListener('open', function() {

 Alloy.Globals.loading.show('Sincronizzazione...', false);

 });
 */

function takePicture() {

	Alloy.Globals.shortcutMode = "camera";

	createNewPost();

};

function manageClose() {

	var activity = Titanium.Android.currentActivity;
	activity.finish();

};

function f_logout() {
	Ti.App.Properties.setObject('timelineProp', null);
	Ti.App.Properties.setBool('authenticated', false);
	presentPage = 0;
	$.win.close();
	Alloy.createController("index").getView().open();
};

function openEvent() {
	//Ti.API.info("WINDOW OPEN");
	theActionBar = $.win.activity.actionBar;

	$.win.activity.invalidateOptionsMenu();

	theActionBar = $.win.activity.actionBar;
	if (theActionBar != undefined) {
		theActionBar.displayHomeAsUp = true;
		theActionBar.setIcon('images/logo-test.png');
		theActionBar.onHomeIconItemSelected = function() {
			$.win.close({
				animate : true
			});
		};

	};
	/*
	 setTimeout(function() {

	 net.getData(0, 25, function(timeline_obj) {

	 Ti.App.Properties.setObject('timelineProp', timeline_obj.data);
	 Alloy.Collections.Timeline.reset(Ti.App.Properties.getObject("timelineProp").slice(0, 10), {
	 silent : true
	 });
	 Ti.API.info("Sync Executed by SILENT SERVICE");
	 syncTimeline();

	 });

	 }, 0);
	 */

};

function closeSpinner() {

	Alloy.Globals.loading.hide();
}

//var Timeline = Alloy.Collections.Timeline;

//eventsCollection.fetch();

///////////////////////////////////////// CARICAMENTO TIMELINE /////////////////////////////////////

var timeTemp = Ti.App.Properties.getObject("timelineProp");

lastNumberOfRecordsFetched = timeTemp.length;

Ti.API.info("NUM RECORDS FETCHED AT START: " + lastNumberOfRecordsFetched);

//timeTemp = timeTemp.slice(0,10), {silent: true};
/*
 Alloy.Collections.Timeline.reset(timeTemp.slice(0, 10), {
 silent : true
 });

 Alloy.Collections.Timeline.sort({
 silent : true
 });
 */

Ti.API.info("§§§§§§§§§§§ OGGETTO TIMELINE; " + JSON.stringify(Alloy.Collections.Timeline));

syncTimeline();

Ti.API.info("LENGTH COLLECTION: " + Alloy.Collections.Timeline.length);

Ti.API.info("TIMELINE LENGTH STORED PROPERTY: " + timeTemp.length);

///////////////////////////////////////// FINE CARICAMENTO TIMELINE //////////////////////////////// COMMUNICATIONDATATYPE_CODE

function checkAspects(node, target) {

	if (_.isUndefined(node) || _.isUndefined(_.find(node, function(value) {
		return value.kind.code == target;
	}))) {

		switch(target) {

		case "EVENTDATATYPE_CODE":
			return ('/images/kernel-event-off.png');
			break;
		case "CASHFLOWDATATYPE_CODE":
			return ('/images/kernel-finance-off.png');
			break;
		case "FILEDOCUMENTDATATYPE_CODE":
			return ('/images/kernel-document-off.png');
			break;
		case "NOTEDATATYPE_CODE":
			return ('/images/kernel-note-off.png');
			break;
		case "FILELINKDATATYPE_CODE":
			return ('/images/kernel-link-off.png');
			break;
		case "COMMUNICATIONDATATYPE_CODE":
			return ('/images/kernel-comunicazioni-off.png');
			break;
		default:
			return;
		}

	} else {

		switch(target) {
		case "EVENTDATATYPE_CODE":
			return ('/images/kernel-event-on.png');
			break;
		case "CASHFLOWDATATYPE_CODE":
			return ('/images/kernel-finance-on.png');
			break;
		case "FILEDOCUMENTDATATYPE_CODE":
			return ('/images/kernel-document-on.png');
			break;
		case "NOTEDATATYPE_CODE":
			return ('/images/kernel-note-on.png');
			break;
		case "FILELINKDATATYPE_CODE":
			return ('/images/kernel-link-on.png');
			break;
		case "COMMUNICATIONDATATYPE_CODE":
			return ('/images/kernel-comunicazioni-on.png');
			break;
		default:
			return;
		}
	}

};

function transformData(model) {
	var attrs = model.toJSON();
	//attrs.imageUrl = '/' + attrs.direction + '.png';
	/*
	 if(!_.isNull(attrs.category.code)){
	 Ti.API.info("****** Immagine: "+'/images/'+attrs.category.code.slice(0,2)+".png");
	 };
	 Ti.API.info("CAT LETTA*****: "+JSON.stringify(attrs.category));
	 */

	var diffTime = moment().diff(attrs.referenceTime, 'days');

	attrs.catImage = ((_.isNull(attrs.category)) || (_.isNull(attrs.category.code)) ) ? '/images/android-robot.jpg' : '/images/' + attrs.category.code.slice(0, 2) + ".png";
	attrs.postDate = (diffTime > 1) ? moment(attrs.referenceTime).format('LL') : moment(attrs.referenceTime).fromNow();
	attrs.categoria = (!_.isNull(attrs.category)) ? attrs.category.name : "";

	//attrs.iconEvent = (_.find(node, function(value) {return value.kind.code == target;}))

	attrs.iconEvent = checkAspects(attrs.aspects, "EVENTDATATYPE_CODE");
	attrs.iconCashFlow = checkAspects(attrs.aspects, "CASHFLOWDATATYPE_CODE");
	attrs.iconDocument = checkAspects(attrs.aspects, "FILEDOCUMENTDATATYPE_CODE");
	attrs.iconNote = checkAspects(attrs.aspects, "NOTEDATATYPE_CODE");
	attrs.iconLink = checkAspects(attrs.aspects, "FILELINKDATATYPE_CODE");
	attrs.iconCommunication = checkAspects(attrs.aspects, "COMMUNICATIONDATATYPE_CODE");

	//Ti.API.info("TIME DIFFERENCE IN DAYS: "+moment().diff(attrs.referenceTime, 'days'));

	attrs.rating_1 = (attrs.rating > 0) ? "/images/star-small.png" : "";
	attrs.rating_2 = (attrs.rating > 1) ? "/images/star-small.png" : "";
	attrs.rating_3 = (attrs.rating > 2) ? "/images/star-small.png" : "";
	attrs.rating_4 = (attrs.rating > 3) ? "/images/star-small.png" : "";
	attrs.rating_5 = (attrs.rating > 4) ? "/images/star-small.png" : "";

	attrs.tag = (_.isNull(attrs.tags)) ? "" : attrs.tags[0].name;

	return attrs;
}

function refreshTable() {

	Alloy.Globals.loading.show('Sincronizzazione...', false);

	ZZ.API.Core.Posts.list(function(posts) {
		Ti.API.info("______________RESPONSE LENGTH: " + posts.length);
		Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");
		Alloy.Collections.Timeline.reset();
		Alloy.Collections.Timeline.reset(posts);
		Ti.API.info("COLLECTION LENGTH AFTER SYNC: " + Alloy.Collections.Timeline.length);

		Alloy.Globals.loading.hide();

	}, function(error) {

		Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");

	});

}

function gotoToday() {

	//Alloy.Collections.Timeline.first

	$.timelineTable.scrollToTop(0);

};

function loadMoreRows(e) {

	var timelineDataObj = Ti.App.Properties.getObject('timelineProp');

	//Ti.API.info("OGGETTO PROPERTY: " + JSON.stringify(timelineDataObj));

	Ti.API.info("TIMELINE PROPERTY LENGTH PRIMA: " + timelineDataObj.length);
	Ti.API.info("TIMELINE COLLECTION LENGTH PRIMA: " + Alloy.Collections.Timeline.length);

	var startCollectionLength = Alloy.Collections.Timeline.length;

	if (Alloy.Collections.Timeline.length + 10 >= timelineDataObj.length && lastNumberOfRecordsFetched >= 25) {

		presentPage += 1;

		net.getData(presentPage, 25, function(timeline_obj) {

			lastNumberOfRecordsFetched = timeline_obj.data.length;

			Ti.API.info("Last Number Records Fetched: " + lastNumberOfRecordsFetched);

			timelineDataObj = timelineDataObj.concat(timeline_obj.data);

			Ti.App.Properties.setObject('timelineProp', timelineDataObj);

			//Ti.App.Properties.getObject('timelineProp').push(timeline_obj.data);

			var begin = Alloy.Collections.Timeline.length;

			var end = Alloy.Collections.Timeline.length + 10;

			var slice = Ti.App.Properties.getObject('timelineProp').slice(begin, end);

			Alloy.Collections.Timeline.add(slice, {
				silent : true
			});

			if (startCollectionLength == Alloy.Collections.Timeline.length) {

				Ti.API.info("*******************QUI **********");

				Ti.App.Properties.setObject('timelineProp', Alloy.Collections.Timeline);
			};

			Ti.API.info("TIMELINE PROPERTY LENGTH DOPO: " + Ti.App.Properties.getObject('timelineProp').length);

			Ti.API.info("TIMELINE COLLECTION LENGTH DOPO: " + Alloy.Collections.Timeline.length);

			syncTimeline();

			e.done();
		});

	} else {

		var begin = Alloy.Collections.Timeline.length;

		var end = Alloy.Collections.Timeline.length + 10;

		var slice = timelineDataObj.slice(begin, end);

		Alloy.Collections.Timeline.add(slice, {
			silent : true
		});

		Ti.API.info("TIMELINE COLLECTION LENGTH DOPO (NO GET DATA): " + Alloy.Collections.Timeline.length);

		syncTimeline();
		e.done();
	}

	//syncTimeline();

	//Ti.API.info("COLLECTION LENGTH DOPO: " + Alloy.Collections.Timeline.length);

};
// cross-platform event listener for lazy tableview loading
function lazyload(_evt) {
	if (OS_IOS) {
		if (startIndex - overlap < _evt.contentOffset.y + initialTableSize) {
			//Ti.API.info("CIAOOO");
			if (isLoading)
				return;
			isLoading = true;
			subsetEvents.reset(temp.slice(startIndex, startIndex + 50));
		}
	} else {
		if (_evt.firstVisibleItem + _evt.visibleItemCount == _evt.totalItemCount) {
			if (isLoading)
				return;
			isLoading = true;
			subsetEvents.reset(temp.slice(startIndex, startIndex + 50));
		}
	}
}

function mostraDettaglioEvento(e) {

	Alloy.Models.Post.set(Alloy.Collections.Timeline.at(e.index));

	Ti.API.info("STATO POST: " + JSON.stringify(Alloy.Models.Post));

	Alloy.createController("dettaglio_post", function(updated) {

		if (updated) {
			Ti.API.info("UPDATING COLLECTION");
			Alloy.Collections.Timeline.remove(Alloy.Collections.Timeline.at(e.index));
			Alloy.Collections.Timeline.add(Alloy.Models.Post);
			Alloy.Globals.loading.hide();
		};
	}).getView();

};

function slideRow(e) {
	Ti.API.info("SLIDE****");
	e.source.left -= 50;
	e.source.right += 50;
}

function createNewPost() {
	Alloy.createController("newPost", function() {
		Alloy.Globals.loading.hide();
	}).getView();
};

$.win.open();

$.win.addEventListener("close", function() {
	$.destroy();
});

