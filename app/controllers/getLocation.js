var args = arguments[0] || {};

var location_result = null;

var res_reverseGeo;

var res_forwardGeo;

function reverseGeocoding() {

	var u_location = require('getUserLocation');

	u_location.reverseGeo(function(locationData) {

		//args(locationData);
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
		//$.window.close();

		//Ti.API.info("RESULT LOCATION: " + JSON.stringify(locationData));
	});

};

function forwardGeocoding(){
	
	var searchAddress = require('getUserLocation');
	
	searchAddress.forwardGeo($.indirizzo.value,function(locationData) {

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

function storeLocation() {

	args(location_result);
	$.window.close();

};
