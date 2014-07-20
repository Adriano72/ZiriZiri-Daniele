function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId99.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId89 = models[i];
            __alloyId89.__transform = transformData(__alloyId89);
            var __alloyId91 = Ti.UI.createTableViewRow({
                className: "itemRow",
                layout: "vertical",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId91);
            showDetail ? __alloyId91.addEventListener("click", showDetail) : __defers["__alloyId91!click!showDetail"] = true;
            var __alloyId93 = Ti.UI.createView({
                top: 2,
                left: 2,
                layout: "horizontal",
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL
            });
            __alloyId91.add(__alloyId93);
            var __alloyId94 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId89.__transform["dataDa"] ? __alloyId89.__transform["dataDa"] : __alloyId89.get("dataDa")
            });
            __alloyId93.add(__alloyId94);
            var __alloyId95 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#444",
                backgroundColor: "white",
                textAlign: "center",
                height: Ti.UI.SIZE,
                width: 140,
                text: "undefined" != typeof __alloyId89.__transform["dataA"] ? __alloyId89.__transform["dataA"] : __alloyId89.get("dataA")
            });
            __alloyId93.add(__alloyId95);
            var __alloyId97 = Ti.UI.createView({
                top: 2,
                left: 2,
                layout: "horizontal",
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL
            });
            __alloyId91.add(__alloyId97);
            var __alloyId98 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId89.__transform["posizione"] ? __alloyId89.__transform["posizione"] : __alloyId89.get("posizione")
            });
            __alloyId97.add(__alloyId98);
        }
        $.__views.aspectEventTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.dataDa = moment(attrs.data.startTime.time).format("DD-MM-YYYY HH:MM");
        attrs.dataA = attrs.data.startTime.time !== attrs.data.endTime.time ? moment(attrs.data.endTime.time).format("DD-MM-YYYY HH:MM") : "";
        attrs.posizione = attrs.location.name;
        return attrs;
    }
    function showDetail(e) {
        var selectedAspect = Alloy.Collections.aspettoEvento.at(e.index).attributes;
        Alloy.createController("rowDetailEVENT", selectedAspect).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefEvento";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.briefEvento = Ti.UI.createView({
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "briefEvento"
    });
    $.__views.briefEvento && $.addTopLevelView($.__views.briefEvento);
    $.__views.eventIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-event-on.png",
        id: "eventIcon"
    });
    $.__views.briefEvento.add($.__views.eventIcon);
    $.__views.aspectEventTable = Ti.UI.createTableView({
        top: 5,
        left: 5,
        width: "90%",
        height: Ti.UI.SIZE,
        separatorColor: "#transparent",
        id: "aspectEventTable"
    });
    $.__views.briefEvento.add($.__views.aspectEventTable);
    var __alloyId99 = Alloy.Collections["aspettoEvento"] || aspettoEvento;
    __alloyId99.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId99.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION EVENT: " + JSON.stringify(Alloy.Collections.aspettoEvento));
    syncAspects();
    $.briefEvento.addEventListener("close", function() {
        $.briefEvento.destroy();
    });
    __defers["__alloyId91!click!showDetail"] && __alloyId91.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;