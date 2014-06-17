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
		
	}).getView().open();;

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
	
	/*

	var retLocation = null;

	if (location_result != null) {
		
		retLocation = {
			name : $.location.text,
			description : $.location.text,
			latitude : location_result.latitude,
			longitude : location_result.longitude

		};
		
	};

	args(retLocation, $.dataFrom.dataRaw, $.dataTo.dataRaw);
	$.window.close();
	*/
};
