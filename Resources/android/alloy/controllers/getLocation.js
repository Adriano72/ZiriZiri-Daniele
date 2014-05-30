function Controller() {
    function __alloyId38() {
        $.__views.window.removeEventListener("open", __alloyId38);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId37 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/1040-checkmark.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId37, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId37, Alloy.Android.menuItemCreateArgs));
            storeLocation ? $.__views.salva.addEventListener("click", storeLocation) : __defers["$.__views.salva!click!storeLocation"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function reverseGeocoding() {
        var u_location = require("getUserLocation");
        u_location.reverseGeo(function(locationData) {
            updateDisplay(locationData);
        });
    }
    function forwardGeocoding() {
        var searchAddress = require("getUserLocation");
        searchAddress.forwardGeo($.searchAddress.value, function(locationData) {
            updateDisplay(locationData);
        });
    }
    function updateDisplay(locationData) {
        $.mapview.removeAllAnnotations();
        var eventMarker = Alloy.Globals.Map.createAnnotation({
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            title: locationData.address,
            pincolor: Alloy.Globals.Map.ANNOTATION_RED
        });
        $.mapview.region = {
            latitude: locationData.latitude,
            longitude: locationData.longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
        $.mapview.addAnnotation(eventMarker);
        $.location.value = locationData.address;
        location_result = locationData;
    }
    function storeLocation() {
        args(location_result);
        $.window.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "getLocation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        layout: "vertical",
        id: "window",
        title: "Posizione"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    reverseGeocoding ? $.__views.window.addEventListener("open", reverseGeocoding) : __defers["$.__views.window!open!reverseGeocoding"] = true;
    $.__views.window.addEventListener("open", __alloyId38);
    $.__views.mapview = Alloy.Globals.Map.createView({
        height: 130,
        top: 5,
        width: Ti.UI.FILL,
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.window.add($.__views.mapview);
    $.__views.topContainer = Ti.UI.createView({
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "topContainer"
    });
    $.__views.window.add($.__views.topContainer);
    $.__views.location = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        ellipsize: true,
        wordWrap: false,
        top: 5,
        left: 5,
        width: "85%",
        autocorrect: false,
        height: Ti.UI.SIZE,
        hintText: "Posizione",
        id: "location"
    });
    $.__views.topContainer.add($.__views.location);
    $.__views.centra = Ti.UI.createButton({
        backgroundImage: "/images/location-target.png",
        left: 5,
        width: 30,
        height: 30,
        id: "centra"
    });
    $.__views.topContainer.add($.__views.centra);
    reverseGeocoding ? $.__views.centra.addEventListener("click", reverseGeocoding) : __defers["$.__views.centra!click!reverseGeocoding"] = true;
    $.__views.searchAddress = Ti.UI.createSearchBar({
        showCancel: true,
        hintText: "Cerca indirizzo",
        height: 50,
        top: 5,
        id: "searchAddress"
    });
    $.__views.window.add($.__views.searchAddress);
    forwardGeocoding ? $.__views.searchAddress.addEventListener("return", forwardGeocoding) : __defers["$.__views.searchAddress!return!forwardGeocoding"] = true;
    $.__views.disambiguazioneTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        id: "disambiguazioneTable"
    });
    $.__views.window.add($.__views.disambiguazioneTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var location_result = null;
    __defers["$.__views.window!open!reverseGeocoding"] && $.__views.window.addEventListener("open", reverseGeocoding);
    __defers["$.__views.salva!click!storeLocation"] && $.__views.salva.addEventListener("click", storeLocation);
    __defers["$.__views.centra!click!reverseGeocoding"] && $.__views.centra.addEventListener("click", reverseGeocoding);
    __defers["$.__views.searchAddress!return!forwardGeocoding"] && $.__views.searchAddress.addEventListener("return", forwardGeocoding);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;