function Controller() {
    function __alloyId180() {
        $.__views.win.removeEventListener("open", __alloyId180);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function() {}; else {
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
        updateDisplay();
    }
    function updateDisplay() {
        $.mapview.removeAllAnnotations();
        var eventMarker = Alloy.Globals.Map.createAnnotation({
            latitude: args.location.latitude,
            longitude: args.location.longitude,
            title: args.location.name,
            pincolor: Alloy.Globals.Map.ANNOTATION_RED
        });
        $.mapview.region = {
            latitude: args.location.latitude,
            longitude: args.location.longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
        $.mapview.addAnnotation(eventMarker);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailEVENT";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        title: "Evento"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId180);
    $.__views.wrapper = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "wrapper"
    });
    $.__views.win.add($.__views.wrapper);
    $.__views.mapview = Alloy.Globals.Map.createView({
        height: 130,
        top: 5,
        right: 5,
        left: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.wrapper.add($.__views.mapview);
    $.__views.__alloyId181 = Ti.UI.createView({
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId181"
    });
    $.__views.wrapper.add($.__views.__alloyId181);
    $.__views.eventIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-event-on.png",
        id: "eventIcon"
    });
    $.__views.__alloyId181.add($.__views.eventIcon);
    $.__views.__alloyId182 = Ti.UI.createView({
        className: "itemRow",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId182"
    });
    $.__views.__alloyId181.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createView({
        top: 2,
        left: 2,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
    $.__views.dataInizio = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        backgroundColor: "white",
        textAlign: "center",
        height: Ti.UI.SIZE,
        width: 140,
        left: 0,
        id: "dataInizio"
    });
    $.__views.__alloyId183.add($.__views.dataInizio);
    $.__views.dataFine = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        backgroundColor: "white",
        textAlign: "center",
        height: Ti.UI.SIZE,
        width: 140,
        id: "dataFine"
    });
    $.__views.__alloyId183.add($.__views.dataFine);
    $.__views.__alloyId184 = Ti.UI.createView({
        top: 2,
        left: 2,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId184"
    });
    $.__views.__alloyId182.add($.__views.__alloyId184);
    $.__views.location = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#999",
        backgroundColor: "white",
        textAlign: "center",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        left: 5,
        wordWrap: false,
        ellipsize: true,
        id: "location"
    });
    $.__views.__alloyId184.add($.__views.location);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.dataInizio.text = moment(args.data.startTime.time).format("DD-MM-YYYY HH:MM");
    $.dataFine.text = moment(args.data.endTime.time).format("DD-MM-YYYY HH:MM");
    $.location.text = args.location.name;
    $.win.open();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;