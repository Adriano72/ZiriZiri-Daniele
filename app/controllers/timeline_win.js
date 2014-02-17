var args = arguments[0] || {};

//$.index.open();

function showSpinner(){
	Alloy.Globals.showSpinner();
};

var timelineList = Alloy.Collections.events;
//todolist.fetch();

var net = require('net');
//var extentedDate = require('extendedDate');
//var encoder = require('encoder');

net.getData(function(timelineData) {

	//Ti.API.info(JSON.stringify(timelineData));

	_.forEach(timelineData.data, function(value, key) {

		//Ti.API.info("VALUE: "+JSON.stringify(value));
		//Ti.API.info("CATEGORY NAME: "+value.category.name);
		var timeline = Alloy.createModel("events", value);

		var descrizioneCategoria = (_.isNull(value.category) || _.isUndefined(value.category.name)) ? "categoria non definita" : value.category.name;

		var creationDate = new Date(value.referenceTime);

		var location = (_.isNull(value.location)) ? null : value.location.name;

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

		Ti.API.info("LOCATIOM: " + location);

		var timeline = Alloy.createModel('events', {
			id : value.id,
			name : value.name,
			date : creationDate.getCMonth(),
			day : creationDate.getDate(),
			month : creationDate.getCMonth().toUpperCase(),
			category : " " + icons.tag + " " + descrizioneCategoria + " ",
			location : " " + icons.map_marker + " " + location + " ",
			aspects : icons.bar_chart_alt + " " + aspectObj.finance + " " + icons.file_text_alt + " " + aspectObj.documents + " " + icons.link + " " + aspectObj.links + " " + icons.edit_sign + " " + aspectObj.notes
		});

		timelineList.add(timeline);

	});
	/*
	for (var i=0; i<feedsWCCM.nodes.length; i++) {
	var feed = Alloy.createModel("feed", feedsWCCM[i]);
	feedlist.add(feed.node);
	}
	*/
	//Ti.API.info(timelineList.toJSON());
});

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