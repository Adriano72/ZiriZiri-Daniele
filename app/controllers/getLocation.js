var args = arguments[0] || {};

var location_result = null;

var res_reverseGeo;

var res_forwardGeo;

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
	
	reverseGeocoding();

};

function reverseGeocoding() {

	var u_location = require('getUserLocation');

	u_location.reverseGeo(function(locationData) {

		//args(locationData);
		
		updateDisplay(locationData);
		
		
		
		//$.window.close();

		//Ti.API.info("RESULT LOCATION: " + JSON.stringify(locationData));
	});

};

function forwardGeocoding() {

	var searchAddress = require('getUserLocation');

	searchAddress.forwardGeo($.searchAddress.value, function(locationData) {
		
		updateDisplay(locationData);
		
		
		
		//args(locationData);
		/*
		var eventMarker = Alloy.Globals.Map.createAnnotation({
		latitude : locationData.latitude,
		longitude : locationData.longitude,
		title : locationData.address,
		pincolor : Alloy.Globals.Map.ANNOTATION_RED
		});

		$.mapview.region = {
		latitude : locationData.latitude,
		longitude : locationData.longitude,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
		};

		$.mapview.addAnnotation(eventMarker);

		$.location.value = locationData.address;
		location_result = locationData;
		*/
		//$.window.close();

		//Ti.API.info("RESULT LOCATION: " + JSON.stringify(locationData));
	});

};

function updateDisplay(locationData) {

	//args(locationData);
	
	$.mapview.removeAllAnnotations();
	
	var eventMarker = Alloy.Globals.Map.createAnnotation({
		latitude : locationData.latitude,
		longitude : locationData.longitude,
		title : locationData.address,
		pincolor : Alloy.Globals.Map.ANNOTATION_RED
	});

	$.mapview.region = {
		latitude : locationData.latitude,
		longitude : locationData.longitude,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	};

	$.mapview.addAnnotation(eventMarker);

	$.location.value = locationData.address;
	location_result = locationData;

};

function storeLocation() {

	args(location_result);
	$.win.close();

};
