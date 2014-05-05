var args = arguments[0] || {};

// to keep track of content size on iOS
var startIndex = 0;

// to know when the table is loading
var isLoading = false;

// to trigger loading on iOS
var overlap = 50;

var temp = [];

// get initial table size for iOS
$.timelineTable.addEventListener('postlayout', function() {
	initialTableSize = $.timelineTable.rect.height;
});

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

//$.index.open();

function showSpinner() {
	Alloy.Globals.showSpinner();
	//$.win.invalidateOptionsMenu();
};

var timelineList = Alloy.Collections.events;
//todolist.fetch();

var net = require('net');
//var extentedDate = require('extendedDate');
//var encoder = require('encoder');

// Carico le categorie

/*
 var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'timeline.txt');
 var timelineData = f.read();
 */

function refreshTable(){
	
	showSpinner();
	populateTable();
	
}

function populateTable() {

	temp = [];
	
	timelineList.reset();
	

	net.getData(function(timelineData) {

		//Ti.API.info("DATA FETCHED: "+JSON.stringify(timelineData));
		//var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'timeline.txt');
		//f.write(JSON.stringify(timelineData)); // write to the file

		_.forEach(timelineData.data, function(value, key) {

			//Ti.API.info("VALUE: "+JSON.stringify(value));
			//Ti.API.info("CATEGORY NAME: "+value.category.name);
			//var timeline = Alloy.createModel("events", value);

			var creationDate = new Date(value.referenceTime);

			if (!(_.isNull(value.location))) {
				var locationRow = " " + icons.map_marker + " " + value.location.name + " ";
			};

			if (!(_.isNull(value.category))) {
				var categoriaRow = " " + icons.tag + " " + value.category.name + " ";
			}

			var aspectObj = {

				finance : 0,
				documents : 0,
				links : 0,
				notes : 0
			};

			if (!(_.isNull(value.aspects) || _.isUndefined(value.aspects))) {

				_.forEach(value.aspects, function(obj, key) {

					switch (obj.kind.code) {

						case "CASHFLOWDATATYPE_CODE":

							aspectObj.finance += 1;
							break;

						case "DOCUMENTDATATYPE_CODE":

							aspectObj.documents += 1;
							break;

						case "NOTEDATATYPE_CODE":

							aspectObj.notes += 1;
							break;

						case "LINKDATATYPE_CODE":

							aspectObj.links += 1;
							break;
					}

				});

			}

			//Ti.API.info("FINANZA: "+aspectObj.finance+" DOCUMENTI: "+aspectObj.documents+ " LINKS: "+aspectObj.links+" NOTE: "+aspectObj.notes);

			var aspetti = (_.isNull(value.aspects) || _.isUndefined(value.aspects)) ? "no aspects" : value.aspects;

			//Ti.API.info("MOMENT OUTPUT: " + moment(value.referenceTime).fromNow());

			//(value.referenceTime, "YYYYMMDD").fromNow());

			var timeline = Alloy.createModel('events', {
				id : value.id,
				name : value.name,
				date : moment(value.referenceTime).fromNow(),
				day : creationDate.getDate(),
				month : creationDate.getCMonth().toUpperCase(),
				category : categoriaRow,
				location : locationRow,
				aspects : icons.bar_chart_alt + " " + aspectObj.finance + "   " + icons.file_text_alt + " " + aspectObj.documents + "   " + icons.link + " " + aspectObj.links + "   " + icons.edit_sign + " " + aspectObj.notes
			});

			temp.push(timeline);

			//timelineList.add(timeline);

		});

		//Ti.API.info("TEMP: "+JSON.stringify(temp[0]));

		timelineList.add(temp.slice(0, 20));
		// prende solo gli ultimi 20 posts
		/*
		for (var i=0; i<feedsWCCM.nodes.length; i++) {
		var feed = Alloy.createModel("feed", feedsWCCM[i]);
		feedlist.add(feed.node);
		}
		*/
		//Ti.API.info(timelineList.toJSON());
	});
};

populateTable();

// cross-platform event listener for lazy tableview loading
function lazyload(_evt) {
	if (OS_IOS) {
		if (startIndex - overlap < _evt.contentOffset.y + initialTableSize) {
			Ti.API.info("CIAOOO");
			if (isLoading)
				return;
			isLoading = true;
			timelineList.reset(temp.slice(startIndex, startIndex + 50));
		}
	} else {
		if (_evt.firstVisibleItem + _evt.visibleItemCount == _evt.totalItemCount) {
			if (isLoading)
				return;
			isLoading = true;
			timelineList.reset(temp.slice(startIndex, startIndex + 50));
		}
	}
}

function mostraDettaglioEvento(e) {

	showSpinner();

	var selEvent = timelineList.at(e.index).attributes;

	net.getPost(selEvent.id, function(postData) {
		Alloy.createController("dettaglio_post", postData).getView().open();
	});

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

function createNewPost() {
	Alloy.createController("newPost",function(){refreshTable();}).getView();
}

$.win.open();
