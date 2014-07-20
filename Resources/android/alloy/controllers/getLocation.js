function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId125() {
        $.__views.win.removeEventListener("open", __alloyId125);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId124 = {
                icon: "/images/top-save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId124, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId124, Alloy.Android.menuItemCreateArgs));
            storeLocation ? $.__views.mn_salva.addEventListener("click", storeLocation) : __defers["$.__views.mn_salva!click!storeLocation"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function openEvent() {
        theActionBar = $.win.activity.actionBar;
        $.win.activity.invalidateOptionsMenu();
        theActionBar = $.win.activity.actionBar;
        if (void 0 != theActionBar) {
            theActionBar.displayHomeAsUp = true;
            theActionBar.setIcon("images/logo-test.png");
            theActionBar.onHomeIconItemSelected = function() {
                $.win.close({
                    animate: true
                });
            };
        }
        reverseGeocoding();
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
        $.win.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "getLocation";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        layout: "vertical",
        id: "win",
        title: "Location"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId125);
    $.__views.mapview = Alloy.Globals.Map.createView({
        height: 130,
        top: 5,
        right: 5,
        left: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        id: "mapview"
    });
    $.__views.win.add($.__views.mapview);
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "container"
    });
    $.__views.win.add($.__views.container);
    $.__views.location = Ti.UI.createTextField({
        borderColor: "#CCCCCC",
        color: "#336699",
        ellipsize: true,
        wordWrap: false,
        top: 5,
        left: 5,
        right: 40,
        borderRadius: 5,
        borderWidth: 1,
        autocorrect: false,
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        hintText: "Posizione",
        id: "location"
    });
    $.__views.container.add($.__views.location);
    $.__views.centra = Ti.UI.createButton({
        backgroundImage: "/images/location-target.png",
        right: 5,
        width: 30,
        height: 30,
        id: "centra"
    });
    $.__views.container.add($.__views.centra);
    reverseGeocoding ? $.__views.centra.addEventListener("click", reverseGeocoding) : __defers["$.__views.centra!click!reverseGeocoding"] = true;
    $.__views.container = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "container"
    });
    $.__views.win.add($.__views.container);
    $.__views.searchAddress = Ti.UI.createTextField({
        borderColor: "#CCCCCC",
        color: "#336699",
        ellipsize: true,
        wordWrap: false,
        top: 5,
        left: 5,
        right: 40,
        borderRadius: 5,
        borderWidth: 1,
        autocorrect: false,
        height: Ti.UI.SIZE,
        backgroundColor: "#fff",
        hintText: "Cerca Indirizzo",
        id: "searchAddress"
    });
    $.__views.container.add($.__views.searchAddress);
    $.__views.lookAddress = Ti.UI.createButton({
        backgroundImage: "/images/search.png",
        right: 5,
        width: 30,
        height: 30,
        id: "lookAddress"
    });
    $.__views.container.add($.__views.lookAddress);
    forwardGeocoding ? $.__views.lookAddress.addEventListener("click", forwardGeocoding) : __defers["$.__views.lookAddress!click!forwardGeocoding"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var location_result = null;
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_salva!click!storeLocation"] && $.__views.mn_salva.addEventListener("click", storeLocation);
    __defers["$.__views.centra!click!reverseGeocoding"] && $.__views.centra.addEventListener("click", reverseGeocoding);
    __defers["$.__views.lookAddress!click!forwardGeocoding"] && $.__views.lookAddress.addEventListener("click", forwardGeocoding);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;