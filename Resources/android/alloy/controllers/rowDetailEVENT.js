function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId251() {
        $.__views.win.removeEventListener("open", __alloyId251);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId250 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-edit.png",
                id: "mn_edit",
                title: "Modifica"
            };
            $.__views.mn_edit = e.menu.add(_.pick(__alloyId250, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_edit.applyProperties(_.omit(__alloyId250, Alloy.Android.menuItemCreateArgs));
            editAspect ? $.__views.mn_edit.addEventListener("click", editAspect) : __defers["$.__views.mn_edit!click!editAspect"] = true;
            if ($.__views.win.activity.actionBar) {
                $.__views.win.activity.actionBar.title = "Dettaglio Evento";
                $.__views.win.activity.actionBar.displayHomeAsUp = true;
                $.__views.win.activity.actionBar.icon = "/images/kernel-event-on.png";
                $.__views.win.activity.actionBar.onHomeIconItemSelected = homeIconSelected;
            }
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function homeIconSelected() {
        $.win.close({
            animate: true
        });
    }
    function openEvent() {
        editedFlag || updateDisplay();
        editedFlag = false;
    }
    function editAspect() {
        Alloy.createController("editEvent", {
            _callback: function(aspettoEditato) {
                editedFlag = true;
                Ti.API.info("ASP EDITATO: " + JSON.stringify(aspettoEditato));
                var aspettoToJSON = aspettoEditato.data;
                $.dataInizio.text = moment(aspettoToJSON.startTime.time).format("DD-MM-YYYY HH:MM");
                $.dataFine.text = moment(aspettoToJSON.endTime.time).format("DD-MM-YYYY HH:MM");
                $.location.text = aspettoEditato.location.name;
                updateDisplay(aspettoEditato);
                args._callback(aspettoEditato);
            },
            aspetto: parsedAspect
        }).getView().open();
        Ti.API.info("ID Aspetto: " + selAspect.id);
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
    $.__views.win.addEventListener("open", __alloyId251);
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
    $.__views.__alloyId252 = Ti.UI.createView({
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId252"
    });
    $.__views.wrapper.add($.__views.__alloyId252);
    $.__views.eventIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-event-on.png",
        id: "eventIcon"
    });
    $.__views.__alloyId252.add($.__views.eventIcon);
    $.__views.__alloyId253 = Ti.UI.createView({
        className: "itemRow",
        layout: "vertical",
        width: Ti.UI.FILL,
        id: "__alloyId253"
    });
    $.__views.__alloyId252.add($.__views.__alloyId253);
    $.__views.__alloyId254 = Ti.UI.createView({
        top: 2,
        left: 2,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId254"
    });
    $.__views.__alloyId253.add($.__views.__alloyId254);
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
    $.__views.__alloyId254.add($.__views.dataInizio);
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
    $.__views.__alloyId254.add($.__views.dataFine);
    $.__views.__alloyId255 = Ti.UI.createView({
        top: 2,
        left: 2,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "__alloyId255"
    });
    $.__views.__alloyId253.add($.__views.__alloyId255);
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
    $.__views.__alloyId255.add($.__views.location);
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
    __defers["$.__views.mn_edit!click!editAspect"] && $.__views.mn_edit.addEventListener("click", editAspect);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;