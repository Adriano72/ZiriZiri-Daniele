exports.reverseGeo = function(_callback) {
    Titanium.Geolocation.purpose = "Get User Location";
    Ti.Geolocation.locationServicesEnabled ? Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) Ti.API.error("Error: " + e.error); else {
            var latitude = e.coords.latitude;
            var longitude = e.coords.longitude;
            Ti.Geolocation.reverseGeocoder(latitude, longitude, function(g) {
                Ti.API.info("RISULTATO REV GEOCODING: " + JSON.stringify(g));
                _.isUndefined(g.places) ? alert("Errore nel rilevamento della posizione") : _callback({
                    latitude: latitude,
                    longitude: longitude,
                    address: g.places[0].displayAddress
                });
            });
        }
    }) : alert("Servizi di localizzazione non abilitati!");
};

exports.forwardGeo = function(address) {
    Ti.Geolocation.locationServicesEnabled ? Ti.Geolocation.forwardGeocoder(address, function(g) {
        Ti.API.info("RISULTATO FORW GEOCODING: " + JSON.stringify(g));
    }) : alert("Servizi di localizzazione non abilitati!");
};