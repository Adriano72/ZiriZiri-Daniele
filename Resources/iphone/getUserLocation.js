function stringify(obj) {
    var itm, arr = [];
    for (itm in obj) arr.push(itm + "=" + escape(obj[itm]));
    return arr.join("&");
}

function download(obj) {
    var xhr = Ti.Network.createHTTPClient();
    var strMode = obj.method || "POST";
    obj.success && (xhr.onload = function() {
        json = JSON.parse(this.responseText);
        obj.success(json);
    });
    obj.error && (xhr.onerror = function(e) {
        obj.error(e);
    });
    if ("POST" === strMode) {
        xhr.open(strMode, obj.url);
        xhr.send(obj.param);
    } else {
        xhr.open(strMode, obj.url + "?" + stringify(obj.param));
        xhr.send();
    }
}

function lookup(obj) {
    download({
        url: "http://maps.google.com/maps/api/geocode/json",
        method: "GET",
        param: {
            address: obj.address,
            region: obj.region || "it",
            language: "it",
            sensor: true
        },
        success: function(json) {
            json.results.length > 0 ? obj.success && obj.success({
                lat: json.results[0].geometry.location.lat,
                lon: json.results[0].geometry.location.lng,
                address: json.results[0].formatted_address
            }) : obj.error && obj.error();
        },
        error: function() {
            obj.error && obj.error();
        }
    });
}

Titanium.Geolocation.purpose = "Get User Location";

exports.reverseGeo = function(_callback) {
    Ti.Geolocation.locationServicesEnabled ? Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) Ti.API.error("Error: " + e.error); else {
            var latitude = e.coords.latitude;
            var longitude = e.coords.longitude;
            Ti.API.info("LAT: " + latitude);
            Ti.API.info("LON: " + longitude);
            lookup({
                address: latitude + "," + longitude,
                success: function(e) {
                    _callback({
                        latitude: e.lat,
                        longitude: e.lon,
                        address: e.address
                    });
                    Ti.API.info("Rev Geocoding Success: " + JSON.stringify(e));
                },
                error: function() {
                    alert("Error");
                }
            });
        }
    }) : alert("Servizi di localizzazione non abilitati!");
};

exports.forwardGeo = function(address, _callback) {
    Ti.Geolocation.locationServicesEnabled ? lookup({
        address: address,
        region: "it",
        success: function(e) {
            _callback({
                latitude: e.lat,
                longitude: e.lon,
                address: e.address
            });
            Ti.API.info("Frwrd Geocoding Success: " + JSON.stringify(e));
        },
        error: function() {
            alert("Error");
        }
    }) : alert("Servizi di localizzazione non abilitati!");
};