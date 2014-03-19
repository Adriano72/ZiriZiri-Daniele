exports.result = function(_callback) {
    if (Ti.Geolocation.locationServicesEnabled) {
        Titanium.Geolocation.purpose = "Get Current Location";
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (e.error) Ti.API.error("Error: " + e.error); else {
                var latitude = e.coords.latitude;
                var longitude = e.coords.longitude;
                Ti.Geolocation.reverseGeocoder(latitude, longitude, function(g) {
                    Ti.API.info("RISULTATO GEOCODING: " + JSON.stringify(g.places[0].displayAddress));
                    _callback({
                        latitude: latitude,
                        longitude: longitude,
                        address: g.places[0].displayAddress
                    });
                });
            }
        });
    } else alert("Servizi di localizzazione non abilitati!");
};