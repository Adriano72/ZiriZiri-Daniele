function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "getLocation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    exports.getUsrLocation = function(_callback) {
        if (Ti.Geolocation.locationServicesEnabled) {
            Titanium.Geolocation.purpose = "Get Current Location";
            Titanium.Geolocation.getCurrentPosition(function(e) {
                if (e.error) Ti.API.error("Error: " + e.error); else {
                    var latitude = e.coords.latitude;
                    e.coords.longitude;
                    _callback(latitude);
                }
            });
        } else alert("Servizi di localizzazione non abilitati!");
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;