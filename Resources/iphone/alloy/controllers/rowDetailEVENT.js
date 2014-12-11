function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openEvent() {
        editedFlag || updateDisplay();
        editedFlag = false;
    }
    function updateDisplay(par_edited_aspect) {
        var asp_obj;
        asp_obj = _.isUndefined(par_edited_aspect) ? selAspect : par_edited_aspect;
        $.mapview.removeAllAnnotations();
        var eventMarker = Alloy.Globals.Map.createAnnotation({
            latitude: asp_obj.location.latitude,
            longitude: asp_obj.location.longitude,
            title: asp_obj.location.name,
            pincolor: Alloy.Globals.Map.ANNOTATION_RED
        });
        $.mapview.region = {
            latitude: asp_obj.location.latitude,
            longitude: asp_obj.location.longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
        $.mapview.addAnnotation(eventMarker);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailEVENT";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
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
    openEvent ? $.__views.win.addEventListener("postlayout", openEvent) : __defers["$.__views.win!postlayout!openEvent"] = true;
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
        id: "mapview"
    });
    $.__views.wrapper.add($.__views.mapview);
    $.__views.__alloyId207 = Ti.UI.createView({
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId207"
    });
    $.__views.wrapper.add($.__views.__alloyId207);
    $.__views.eventIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-event-on.png",
        id: "eventIcon"
    });
    $.__views.__alloyId207.add($.__views.eventIcon);
    $.__views.__alloyId208 = Ti.UI.createView({
        className: "itemRow",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId208"
    });
    $.__views.__alloyId207.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createView({
        top: 2,
        left: 2,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId209"
    });
    $.__views.__alloyId208.add($.__views.__alloyId209);
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
    $.__views.__alloyId209.add($.__views.dataInizio);
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
    $.__views.__alloyId209.add($.__views.dataFine);
    $.__views.__alloyId210 = Ti.UI.createView({
        top: 2,
        left: 2,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId210"
    });
    $.__views.__alloyId208.add($.__views.__alloyId210);
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
    $.__views.__alloyId210.add($.__views.location);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var selAspect = args.selectedAspect;
    var parsedAspect = _.clone(selAspect);
    parsedAspect.data = JSON.stringify(parsedAspect.data);
    var editedFlag = false;
    $.dataInizio.text = moment(selAspect.data.startTime.time).format("DD-MM-YYYY HH:MM");
    $.dataFine.text = selAspect.data.startTime.time !== selAspect.data.endTime.time ? moment(selAspect.data.endTime.time).format("DD-MM-YYYY HH:MM") : "";
    $.location.text = selAspect.location.name;
    $.win.open();
    __defers["$.__views.win!postlayout!openEvent"] && $.__views.win.addEventListener("postlayout", openEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;