var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

$.pkrDataInizioEvento.text = moment().format('LLL');
$.pkrDataInizioEvento.dataRaw = moment();

$.pkrDataFineEvento.text = moment().format('LLL');
$.pkrDataFineEvento.dataRaw = moment();

var location_result = null;
var scadenzaStrutturale = false;

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

function getLocation() {

	var loc = Alloy.createController('getLocation', function(locationData) {

		location_result = locationData;

		$.location.text = locationData.address;

		Ti.API.info("LOCATION DATA: " + JSON.stringify(location_result));

	}).getView().open();

};

// ******** PICKER DATA ***********
function showDatePicker(e) {

	Ti.API.info("SOURCE CLICK: " + JSON.stringify(e));

	var riga = Alloy.createController('datePicker', {
		onlyDate : false,
		_callback : function(p_data) {

			e.source.text = moment(p_data).format('LLL');
			e.source.dataRaw = moment(p_data);
			Ti.API.info("DATARAW: " + e.source.dataRaw);

		}
	});

};

function toggleScadStrutt() {(scadenzaStrutturale) = !(scadenzaStrutturale);

	$.ovalSwitchScadStrutt.image = (scadenzaStrutturale) ? "/images/oval-switch-on.png" : "/images/oval-switch-off.png";
	Ti.API.info("SCAD STRUTT FLAG: " + scadenzaStrutturale);

}

function saveEvent() {

	var modEventJSON = Alloy.Models.Event_template.toJSON();

	Ti.API.info("MODELLO EVENTO: " + JSON.stringify(modEventJSON));

	modEventJSON.name = Alloy.Models.Post_template.get("name");
	modEventJSON.description = Alloy.Models.Post_template.get("description");
	modEventJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
	modEventJSON.category = Alloy.Models.Post_template.get("category");
	modEventJSON.data = {
		"owner" : null,
		"title" : null,
		"type" : "NONE",
		"priority" : "LOW",
		"repeatPeriod" : "NONE",
	};
	modEventJSON.data.startTime = {
		"type" : "NONE",
		"id" : null
	};
	modEventJSON.data.endTime = {
		"type" : "NONE",
		"id" : null
	};
	modEventJSON.data.title = Alloy.Models.Post_template.get("name");
	modEventJSON.data.description = Alloy.Models.Post_template.get("description");

	modEventJSON.location = {
		name : $.location.text,
		description : $.location.text,
		latitude : location_result.latitude,
		longitude : location_result.longitude

	};

	modEventJSON.data.startTime.time = $.pkrDataInizioEvento.dataRaw;
	modEventJSON.data.endTime = {
		time : $.pkrDataFineEvento.dataRaw,
		type : "NONE",
		id : null
	};

	modEventJSON.data = JSON.stringify(modEventJSON.data);

	Ti.API.info("ASPETTO EVENT VALIDATO: " + JSON.stringify(modEventJSON));

	args(modEventJSON);
	$.win.close();

};
