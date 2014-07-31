var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

Ti.API.info("ARGS ****: " + JSON.stringify(args));

var dataEvent = args.aspetto.data;

/*
 $.pkrDataInizioEvento.text = moment().format('LLL');
 $.pkrDataInizioEvento.dataRaw = moment();

 $.pkrDataFineEvento.text = moment().format('LLL');
 $.pkrDataFineEvento.dataRaw = moment();
 */

$.pkrDataInizioEvento.text = moment(dataEvent.startTime.time).format('LLL');
$.pkrDataInizioEvento.dataRaw = moment(dataEvent.startTime.time);

$.pkrDataFineEvento.text = moment(dataEvent.endTime.time).format('LLL');
$.pkrDataFineEvento.dataRaw = moment(dataEvent.endTime.time);

$.location.text = args.aspetto.location.name;

var location_result = args.aspetto.location;

var scadenzaStrutturale = false;

function homeIconSelected() {
	$.win.close({
		animate : true
	});
}

function getLocation() {

	var loc = Alloy.createController('getLocation', function(locationData) {
		
		Ti.API.info("LOCATION DATA: " + JSON.stringify(location_result));
		
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
	modEventJSON.id = args.aspetto.id;
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

	args._callback(modEventJSON);
	$.win.close();

};
