function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId92.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId82 = models[i];
            __alloyId82.__transform = transformData(__alloyId82);
            var __alloyId84 = Ti.UI.createTableViewRow({
                className: "itemRow",
                layout: "vertical",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId84);
            showDetail ? __alloyId84.addEventListener("click", showDetail) : __defers["__alloyId84!click!showDetail"] = true;
            var __alloyId86 = Ti.UI.createView({
                top: 2,
                left: 2,
                layout: "horizontal",
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL
            });
            __alloyId84.add(__alloyId86);
            var __alloyId87 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId82.__transform["dataDa"] ? __alloyId82.__transform["dataDa"] : __alloyId82.get("dataDa")
            });
            __alloyId86.add(__alloyId87);
            var __alloyId88 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#444",
                backgroundColor: "white",
                textAlign: "center",
                height: Ti.UI.SIZE,
                width: 140,
                text: "undefined" != typeof __alloyId82.__transform["dataA"] ? __alloyId82.__transform["dataA"] : __alloyId82.get("dataA")
            });
            __alloyId86.add(__alloyId88);
            var __alloyId90 = Ti.UI.createView({
                top: 2,
                left: 2,
                layout: "horizontal",
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL
            });
            __alloyId84.add(__alloyId90);
            var __alloyId91 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId82.__transform["posizione"] ? __alloyId82.__transform["posizione"] : __alloyId82.get("posizione")
            });
            __alloyId90.add(__alloyId91);
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    $.__views.__alloyId81 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId81"
    });
    $.__views.briefEvento.add($.__views.__alloyId81);
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
    var __alloyId92 = Alloy.Collections["aspettoEvento"] || aspettoEvento;
    __alloyId92.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId92.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION EVENT: " + JSON.stringify(Alloy.Collections.aspettoEvento));
    syncAspects();
    $.briefEvento.addEventListener("close", function() {
        $.briefEvento.destroy();
    });
    __defers["__alloyId84!click!showDetail"] && __alloyId84.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;