exports.reverseGeo = function(_callback) {

	if (Ti.Geolocation.locationServicesEnabled) {

		Titanium.Geolocation.getCurrentPosition(function(e) {
			if (e.error) {
				Ti.API.error('Error: ' + e.error);
			} else {

				var latitude = e.coords.latitude;
				var longitude = e.coords.longitude;

				Ti.Geolocation.reverseGeocoder(latitude, longitude, function(g) {
					Ti.API.info("RISULTATO REV GEOCODING: " + JSON.stringify(g.places));
					if (!_.isUndefined(g.places)) {
						_callback({
							latitude : latitude,
							longitude : longitude,
							address : g.places[0].displayAddress

						});
					} else {
						
						alert("Errore nel rilevamento della posizione");
					}
				});

				//Alloy.Globals.usr_longitude = e.coords.longitude;
				//Alloy.Globals.usr_latitude = e.coords.latitude;
				//Ti.API.info("LOCATION: Longitudine: " + Alloy.Globals.usr_longitude + " Latitudine: " + Alloy.Globals.usr_latitude);

			}
		});

	} else {
		alert('Servizi di localizzazione non abilitati!');
	}

};

exports.forwardGeo = function(_callback) {

	if (Ti.Geolocation.locationServicesEnabled) {

		
		Ti.Geolocation.forwardGeocoder($.indirizzo.value, function(g) {
					Ti.API.info("RISULTATO FORW GEOCODING: " + JSON.stringify(g.places));
					/*
					 _callback({
					 latitude : latitude,
					 longitude: longitude,
					 address: g.places[0].displayAddress

					 });
					 */
				});

	} else {
		alert('Servizi di localizzazione non abilitati!');
	}

};
