function Controller() {
    function __alloyId77(e) {
        if (e && e.fromAdapter) return;
        __alloyId77.opts || {};
        var models = __alloyId76.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId64 = models[i];
            __alloyId64.__transform = {};
            var __alloyId66 = Ti.UI.createTableViewRow({
                className: "itemRow",
                height: 120
            });
            rows.push(__alloyId66);
            mostraDettaglioEvento ? __alloyId66.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId66!click!mostraDettaglioEvento"] = true;
            var __alloyId67 = Ti.UI.createView({
                top: 10,
                bottom: 10,
                height: Ti.UI.SIZE,
                layout: "horizontal"
            });
            __alloyId66.add(__alloyId67);
            var __alloyId68 = Ti.UI.createView({
                width: 50,
                height: 60,
                left: 5,
                top: 5,
                backgroundColor: "#CC3939",
                borderRadius: Alloy.Globals.borderRad,
                layout: "vertical"
            });
            __alloyId67.add(__alloyId68);
            var __alloyId69 = Ti.UI.createLabel({
                top: 0,
                width: 50,
                height: 40,
                color: "#000",
                textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: 18,
                    fontWeight: "bold"
                },
                text: "undefined" != typeof __alloyId64.__transform["day"] ? __alloyId64.__transform["day"] : __alloyId64.get("day")
            });
            __alloyId68.add(__alloyId69);
            var __alloyId70 = Ti.UI.createLabel({
                top: 0,
                width: 50,
                height: 20,
                color: "#000",
                textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: 14
                },
                backgroundColor: "#E0E0E0",
                text: "undefined" != typeof __alloyId64.__transform["month"] ? __alloyId64.__transform["month"] : __alloyId64.get("month")
            });
            __alloyId68.add(__alloyId70);
            var __alloyId71 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                left: 5,
                right: 5,
                top: 0,
                layout: "vertical",
                backgroundColor: "#F2F2F2"
            });
            __alloyId67.add(__alloyId71);
            var __alloyId72 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#2C3E52",
                touchEnabled: false,
                font: {
                    fontFamily: "Rosario-Regular",
                    fontSize: "16dp",
                    fontWeight: "bold"
                },
                ellipsize: true,
                wordWrap: false,
                left: 5,
                text: "undefined" != typeof __alloyId64.__transform["name"] ? __alloyId64.__transform["name"] : __alloyId64.get("name")
            });
            __alloyId71.add(__alloyId72);
            var __alloyId73 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#5E5E5E",
                touchEnabled: false,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: "18dp"
                },
                left: 5,
                text: "undefined" != typeof __alloyId64.__transform["aspects"] ? __alloyId64.__transform["aspects"] : __alloyId64.get("aspects")
            });
            __alloyId71.add(__alloyId73);
            var __alloyId74 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#5E5E5E",
                touchEnabled: false,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: 12
                },
                backgroundColor: "#E3E3E3",
                borderRadius: Alloy.Globals.borderRad,
                left: 5,
                text: "undefined" != typeof __alloyId64.__transform["category"] ? __alloyId64.__transform["category"] : __alloyId64.get("category")
            });
            __alloyId71.add(__alloyId74);
            var __alloyId75 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#5E5E5E",
                touchEnabled: false,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: 12
                },
                backgroundColor: "#E3E3E3",
                borderRadius: Alloy.Globals.borderRad,
                left: 5,
                text: "undefined" != typeof __alloyId64.__transform["location"] ? __alloyId64.__transform["location"] : __alloyId64.get("location")
            });
            __alloyId71.add(__alloyId75);
        }
        $.__views.timelineTable.setData(rows);
    }
    function showSpinner() {
        Alloy.Globals.showSpinner();
    }
    function mostraDettaglioEvento(e) {
        showSpinner();
        var selEvent = timelineList.at(e.index).attributes;
        net.getPost(selEvent.id, function(postData) {
            Alloy.createController("dettaglio_post", postData).getView().open();
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeline_win";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("events");
    $.__views.timeline_win = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        layout: "vertical",
        exitOnClose: true,
        title: "Timeline",
        id: "timeline_win"
    });
    $.__views.timeline_win && $.addTopLevelView($.__views.timeline_win);
    showSpinner ? $.__views.timeline_win.addEventListener("open", showSpinner) : __defers["$.__views.timeline_win!open!showSpinner"] = true;
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#BFBFBF",
        id: "timelineTable"
    });
    $.__views.timeline_win.add($.__views.timelineTable);
    var __alloyId76 = Alloy.Collections["events"] || events;
    __alloyId76.on("fetch destroy change add remove reset", __alloyId77);
    exports.destroy = function() {
        __alloyId76.off("fetch destroy change add remove reset", __alloyId77);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var timelineList = Alloy.Collections.events;
    var net = require("net");
    net.getData(function(timelineData) {
        _.forEach(timelineData.data, function(value) {
            var timeline = Alloy.createModel("events", value);
            var creationDate = new Date(value.referenceTime);
            if (!_.isNull(value.location)) var locationRow = " " + icons.map_marker + " " + value.location.name + " ";
            if (!_.isNull(value.category)) var categoriaRow = " " + icons.tag + " " + value.category.name + " ";
            var aspectObj = {
                finance: 0,
                documents: 0,
                links: 0,
                notes: 0
            };
            _.isNull(value.aspects) || _.isUndefined(value.aspects) || _.forEach(value.aspects, function(obj) {
                switch (obj.kind.code) {
                  case "CASHFLOWDATATYPE_CODE":
                    aspectObj.finance += 1;
                    break;

                  case "DOCUMENTDATATYPE_CODE":
                    aspectObj.documents += 1;
                    break;

                  case "NOTEDATATYPE_CODE":
                    aspectObj.notes += 1;
                    break;

                  case "LINKDATATYPE_CODE":
                    aspectObj.links += 1;
                }
            });
            _.isNull(value.aspects) || _.isUndefined(value.aspects) ? "no aspects" : value.aspects;
            var timeline = Alloy.createModel("events", {
                id: value.id,
                name: value.name,
                date: creationDate.getCMonth(),
                day: creationDate.getDate(),
                month: creationDate.getCMonth().toUpperCase(),
                category: categoriaRow,
                location: locationRow,
                aspects: icons.bar_chart_alt + " " + aspectObj.finance + " " + icons.file_text_alt + " " + aspectObj.documents + " " + icons.link + " " + aspectObj.links + " " + icons.edit_sign + " " + aspectObj.notes
            });
            timelineList.add(timeline);
        });
    });
    __defers["$.__views.timeline_win!open!showSpinner"] && $.__views.timeline_win.addEventListener("open", showSpinner);
    __defers["__alloyId66!click!mostraDettaglioEvento"] && __alloyId66.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;