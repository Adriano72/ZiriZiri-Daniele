function Controller() {
    function __alloyId32() {
        $.__views.window.removeEventListener("open", __alloyId32);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId31 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/1040-checkmark.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId31, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId31, Alloy.Android.menuItemCreateArgs));
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
        });
    }
    function forwardGeocoding() {
        var searchAddress = require("getUserLocation");
        searchAddress.forwardGeo(function() {});
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
    $.__views.window.addEventListener("open", __alloyId32);
    $.__views.mapview = Alloy.Globals.Map.createView({
        height: 130,
        top: 5,
        width: Ti.UI.FILL,
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.window.add($.__views.mapview);
    var __alloyId33 = [];
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId34"
    });
    __alloyId33.push($.__views.__alloyId34);
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
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "location"
    });
    $.__views.__alloyId34.add($.__views.location);
    $.__views.centra = Ti.UI.createButton({
        backgroundImage: "/images/845-location-target.png",
        left: 5,
        width: 30,
        height: 30,
        id: "centra"
    });
    $.__views.__alloyId34.add($.__views.centra);
    reverseGeocoding ? $.__views.centra.addEventListener("click", reverseGeocoding) : __defers["$.__views.centra!click!reverseGeocoding"] = true;
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId35"
    });
    __alloyId33.push($.__views.__alloyId35);
    $.__views.indirizzo = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        left: 5,
        width: "85%",
        height: Ti.UI.SIZE,
        hintText: "Cerca Indirizzo",
        id: "indirizzo"
    });
    $.__views.__alloyId35.add($.__views.indirizzo);
    $.__views.cerca = Ti.UI.createButton({
        backgroundImage: "/images/708-search.png",
        left: 5,
        width: 30,
        height: 30,
        id: "cerca"
    });
    $.__views.__alloyId35.add($.__views.cerca);
    forwardGeocoding ? $.__views.cerca.addEventListener("click", forwardGeocoding) : __defers["$.__views.cerca!click!forwardGeocoding"] = true;
    $.__views.getLocationTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId33,
        id: "getLocationTable"
    });
    $.__views.window.add($.__views.getLocationTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var location_result = null;
    __defers["$.__views.window!open!reverseGeocoding"] && $.__views.window.addEventListener("open", reverseGeocoding);
    __defers["$.__views.salva!click!storeLocation"] && $.__views.salva.addEventListener("click", storeLocation);
    __defers["$.__views.centra!click!reverseGeocoding"] && $.__views.centra.addEventListener("click", reverseGeocoding);
    __defers["$.__views.cerca!click!forwardGeocoding"] && $.__views.cerca.addEventListener("click", forwardGeocoding);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;