function Controller() {
    function __alloyId16(e) {
        if (e && e.fromAdapter) return;
        __alloyId16.opts || {};
        var models = __alloyId15.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId6 = Ti.UI.createTableViewRow({
                className: "itemRow"
            });
            rows.push(__alloyId6);
            mostraDettaglioEvento ? __alloyId6.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId6!click!mostraDettaglioEvento"] = true;
            var __alloyId7 = Ti.UI.createView({
                height: 90,
                backgroundColor: "orange",
                layout: "horizontal"
            });
            __alloyId6.add(__alloyId7);
            var __alloyId8 = Ti.UI.createView({
                width: 50,
                height: 60,
                left: 5,
                top: 5,
                backgroundColor: "red",
                borderRadius: Alloy.Globals.borderRad,
                layout: "vertical"
            });
            __alloyId7.add(__alloyId8);
            var __alloyId9 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId4.__transform["day"] ? __alloyId4.__transform["day"] : __alloyId4.get("day")
            });
            __alloyId8.add(__alloyId9);
            var __alloyId10 = Ti.UI.createLabel({
                top: 0,
                width: 50,
                height: 20,
                color: "#000",
                textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: 14
                },
                backgroundColor: "white",
                text: "undefined" != typeof __alloyId4.__transform["month"] ? __alloyId4.__transform["month"] : __alloyId4.get("month")
            });
            __alloyId8.add(__alloyId10);
            var __alloyId11 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                left: 5,
                top: 5,
                layout: "vertical",
                backgroundColor: "lime"
            });
            __alloyId7.add(__alloyId11);
            var __alloyId12 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                touchEnabled: false,
                font: {
                    fontSize: "16dp",
                    fontWeight: "bold"
                },
                backgroundColor: "yellow",
                left: 5,
                text: "undefined" != typeof __alloyId4.__transform["name"] ? __alloyId4.__transform["name"] : __alloyId4.get("name")
            });
            __alloyId11.add(__alloyId12);
            var __alloyId13 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                touchEnabled: false,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: "18dp"
                },
                left: 5,
                backgroundColor: "pink",
                text: "undefined" != typeof __alloyId4.__transform["aspects"] ? __alloyId4.__transform["aspects"] : __alloyId4.get("aspects")
            });
            __alloyId11.add(__alloyId13);
            var __alloyId14 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                touchEnabled: false,
                font: {
                    fontSize: "14dp"
                },
                left: 5,
                backgroundColor: "blue",
                text: "undefined" != typeof __alloyId4.__transform["category"] ? __alloyId4.__transform["category"] : __alloyId4.get("category")
            });
            __alloyId11.add(__alloyId14);
        }
        $.__views.timelineTable.setData(rows);
    }
    function mostraDettaglioEvento(e) {
        var selEvent = timelineList.at(e.index).attributes;
        Ti.API.info("SELECTED DATA ID: " + selEvent.id);
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
        backgroundColor: "#d8d8d8",
        layout: "vertical",
        exitOnClose: true,
        title: "Timeline",
        id: "timeline_win"
    });
    $.__views.timeline_win && $.addTopLevelView($.__views.timeline_win);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#000",
        id: "timelineTable"
    });
    $.__views.timeline_win.add($.__views.timelineTable);
    var __alloyId15 = Alloy.Collections["events"] || events;
    __alloyId15.on("fetch destroy change add remove reset", __alloyId16);
    exports.destroy = function() {
        __alloyId15.off("fetch destroy change add remove reset", __alloyId16);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var timelineList = Alloy.Collections.events;
    var net = require("net");
    require("extendedDate");
    net.getData(function(timelineData) {
        _.forEach(timelineData.data, function(value) {
            var timeline = Alloy.createModel("events", value);
            var descrizioneCategoria = _.isNull(value.category) || _.isUndefined(value.category.name) ? "non definita" : value.category.name;
            var creationDate = new Date(value.creationTime);
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
            Ti.API.info("FINANZA: " + aspectObj.finance + " DOCUMENTI: " + aspectObj.documents + " LINKS: " + aspectObj.links + " NOTE: " + aspectObj.notes);
            _.isNull(value.aspects) || _.isUndefined(value.aspects) ? "no aspects" : value.aspects;
            Ti.API.info("CATEGORIA: " + descrizioneCategoria);
            var timeline = Alloy.createModel("events", {
                id: value.id,
                name: value.name,
                date: creationDate.getCMonth(),
                day: creationDate.getDate(),
                month: creationDate.getCMonth().toUpperCase(),
                category: "Categoria: " + descrizioneCategoria,
                aspects: icons.bar_chart_alt + " " + aspectObj.finance + " " + icons.file_text_alt + " " + aspectObj.documents + " " + icons.link + " " + aspectObj.links + " " + icons.edit_sign + " " + aspectObj.notes
            });
            timelineList.add(timeline);
        });
    });
    __defers["__alloyId6!click!mostraDettaglioEvento"] && __alloyId6.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;