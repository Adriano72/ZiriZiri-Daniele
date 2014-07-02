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

$.is.init($.timelineTable);

/*
 $.win.addEventListener('open', function() {

 Alloy.Globals.loading.show('Sincronizzazione...', false);

 });
 */

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
		theActionBar.displayHomeAsUp = false;
		theActionBar.setIcon('images/logo-test.png');
		//theActionBar.setTitle(self.title);

	};

	/*

	 setTimeout(function() {

	 net.getData(0, 50, function(timeline_obj) {

	 Ti.App.Properties.setObject('timelineProp', timeline_obj.data);
	 Alloy.Collections.Timeline.reset(Ti.App.Properties.getObject("timelineProp").slice(0, 10), {
	 silent : true
	 });
	 Ti.API.info("Sync Executed by SILENT SERVICE");
	 syncTimeline();

	 });

	 }, 5000);
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

//Ti.API.info("OGGETTO PROPERTY TIMELINE; " + JSON.stringify(timeTemp));

//timeTemp = timeTemp.slice(0,10), {silent: true};

Alloy.Collections.Timeline.reset(timeTemp.slice(0, 10), {
	silent : true
});

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
			case "COMMUNICATIONDATATYPE_CODE":
				return ('/images/kernel-comunicazioni-off.png');
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
			case "COMMUNICATIONDATATYPE_CODE":
				return ('/images/kernel-comunicazioni-on.png');
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
	attrs.catImage = ((_.isNull(attrs.category)) || (_.isNull(attrs.category.code)) ) ? '/images/android-robot.jpg' : '/images/' + attrs.category.code.slice(0, 2) + ".png";
	attrs.postDate = moment(attrs.referenceTime).fromNow();
	attrs.categoria = (!_.isNull(attrs.category)) ? attrs.category.name : "";

	//attrs.iconEvent = (_.find(node, function(value) {return value.kind.code == target;}))

	attrs.iconEvent = checkAspects(attrs.aspects, "EVENTDATATYPE_CODE");
	attrs.iconCashFlow = checkAspects(attrs.aspects, "CASHFLOWDATATYPE_CODE");
	attrs.iconDocument = checkAspects(attrs.aspects, "FILEDOCUMENTDATATYPE_CODE");
	attrs.iconNote = checkAspects(attrs.aspects, "NOTEDATATYPE_CODE");
	attrs.iconLink = checkAspects(attrs.aspects, "FILELINKDATATYPE_CODE");
	attrs.iconCommunication = checkAspects(attrs.aspects, "COMMUNICATIONDATATYPE_CODE");

	attrs.rating_1 = (attrs.rating > 0) ? "/images/star-small.png" : "";
	attrs.rating_2 = (attrs.rating > 1) ? "/images/star-small.png" : "";
	attrs.rating_3 = (attrs.rating > 2) ? "/images/star-small.png" : "";
	attrs.rating_4 = (attrs.rating > 3) ? "/images/star-small.png" : "";
	attrs.rating_5 = (attrs.rating > 4) ? "/images/star-small.png" : "";

	attrs.tag = (_.isNull(attrs.tags)) ? "" : attrs.tags[0].name;

	return attrs;
}

//subsetEvents.reset();

//var subsetEvents = Alloy.Collections.events;

//var table = $.subsetEvents.config.adapter.collection_name;
//Ti.API.info("Collection TABLE name: " + table);

//subsetEvents.fetch({ query: 'select * from ' + table + ' where alloy_id = ' + 1});

//var extentedDate = require('extendedDate');
//var encoder = require('encoder');

// Carico le categorie

/*
 var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'timeline.txt');
 var timelineData = f.read();
 */

function refreshTable() {

	if (Alloy.Globals.postSaved) {
		Alloy.Globals.loading.hide();
		alert("Post salvato!");
		Alloy.Globals.postSaved = false;
	} else {

		Alloy.Globals.loading.show('Sincronizzazione...', false);

		net.getData(0, 25, function(timeline_obj) {

			Ti.App.Properties.setObject('timelineProp', timeline_obj.data);
			Alloy.Collections.Timeline.reset(Ti.App.Properties.getObject("timelineProp").slice(0, 10), {
				silent : true
			});
			Ti.API.info("COLLECTION LENGTH AFTER SYNC: " + Alloy.Collections.Timeline.length);
			syncTimeline();
			Alloy.Globals.loading.hide();
			if (Alloy.Globals.postSaved) {
				alert("Post salvato!");
				Alloy.Globals.postSaved = false;
			}

		});

	}
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
			
			if(startCollectionLength == Alloy.Collections.Timeline.length){
				
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

	Alloy.createController("dettaglio_post").getView();

	//Ti.API.info("INDEX RIGA CLICCATA: "+JSON.stringify(e));
	/*
	try {
	showSpinner();

	var selEvent = subsetEvents.at(e.index).attributes;

	net.getPost(selEvent.id, function(postData) {
	Ti.API.info("DETTAGLIO POST: " + JSON.stringify(postData));
	Alloy.createController("dettaglio_post", postData).getView().open();
	});
	} catch(error) {
	Ti.App.fireEvent("loading_done");
	Ti.API.info("ERRORE: " + error);
	}
	*/

	//Ti.API.info("SELECTED DATA ID: "+selEvent.id);

	/*
	 var feedClicked = feedlist.at(e.index).attributes;
	 //Ti.API.info("EVENT "+feedClicked.body);

	 var dettaglioTestoFeedController = Alloy.createController("dettaglioFeed", {titolo: feedClicked.title, body: feedClicked.body});
	 //dueDateController.setParent($);
	 //dueDateController.setPickerDefaultDate($.dateBtn.title);
	 var dettaglioTestoFeedWindow = dettaglioTestoFeedController.getView();
	 dettaglioTestoFeedWindow.open();
	 */
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

/*
 $.win.addEventListener("close", function() {
 $.destroy();
 });
 */
