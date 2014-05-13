var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

$.dataFrom.value = moment().format('LLL');
$.dataFrom.dataRaw = moment();

var location_result = null;

function getLocation() {
	
	var loc = Alloy.createController('getLocation', function(locationData) {

		$.location.text = locationData.address;
		
	}).getView().open();;

};

function showDatePicker(e) {

	//Ti.API.info("SOURCE CLICK: " + JSON.stringify(e));

	var riga = Alloy.createController('datePicker', function(p_data) {

		e.source.value = moment(p_data).format('LLL');
		e.source.dataRaw = moment(p_data);

	});

};

function saveEvent() {

	var retLocation = null;

	if (location_result != null) {
		
		retLocation = {
			name : $.location.value,
			description : $.location.value,
			latitude : location_result.latitude,
			longitude : location_result.longitude

		};
		
	};

	args(retLocation, $.dataFrom.dataRaw, $.dataTo.dataRaw);
	$.window.close();
};
