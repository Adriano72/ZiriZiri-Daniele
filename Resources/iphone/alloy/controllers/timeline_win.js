function Controller() {
    function __alloyId29(e) {
        if (e && e.fromAdapter) return;
        __alloyId29.opts || {};
        var models = __alloyId28.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId16 = models[i];
            __alloyId16.__transform = {};
            var __alloyId18 = Ti.UI.createTableViewRow({
                className: "itemRow",
                height: 120
            });
            rows.push(__alloyId18);
            mostraDettaglioEvento ? __alloyId18.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId18!click!mostraDettaglioEvento"] = true;
            var __alloyId19 = Ti.UI.createView({
                top: 10,
                bottom: 10,
                height: Ti.UI.SIZE,
                layout: "horizontal"
            });
            __alloyId18.add(__alloyId19);
            var __alloyId20 = Ti.UI.createView({
                width: 50,
                height: 60,
                left: 5,
                top: 5,
                backgroundColor: "#8CD5F5",
                borderRadius: Alloy.Globals.borderRad,
                layout: "vertical"
            });
            __alloyId19.add(__alloyId20);
            var __alloyId21 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId16.__transform["day"] ? __alloyId16.__transform["day"] : __alloyId16.get("day")
            });
            __alloyId20.add(__alloyId21);
            var __alloyId22 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId16.__transform["month"] ? __alloyId16.__transform["month"] : __alloyId16.get("month")
            });
            __alloyId20.add(__alloyId22);
            var __alloyId23 = Ti.UI.createView({
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                left: 5,
                right: 5,
                top: 0,
                layout: "vertical",
                backgroundColor: "#d8d8d8"
            });
            __alloyId19.add(__alloyId23);
            var __alloyId24 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId16.__transform["name"] ? __alloyId16.__transform["name"] : __alloyId16.get("name")
            });
            __alloyId23.add(__alloyId24);
            var __alloyId25 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId16.__transform["aspects"] ? __alloyId16.__transform["aspects"] : __alloyId16.get("aspects")
            });
            __alloyId23.add(__alloyId25);
            var __alloyId26 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId16.__transform["category"] ? __alloyId16.__transform["category"] : __alloyId16.get("category")
            });
            __alloyId23.add(__alloyId26);
            var __alloyId27 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId16.__transform["location"] ? __alloyId16.__transform["location"] : __alloyId16.get("location")
            });
            __alloyId23.add(__alloyId27);
        }
        $.__views.timelineTable.setData(rows);
    }
    function mostraDettaglioEvento(e) {
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
        backgroundColor: "#d8d8d8",
        layout: "vertical",
        exitOnClose: true,
        title: "Timeline",
        id: "timeline_win"
    });
    $.__views.timeline_win && $.addTopLevelView($.__views.timeline_win);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#BFBFBF",
        id: "timelineTable"
    });
    $.__views.timeline_win.add($.__views.timelineTable);
    var __alloyId28 = Alloy.Collections["events"] || events;
    __alloyId28.on("fetch destroy change add remove reset", __alloyId29);
    exports.destroy = function() {
        __alloyId28.off("fetch destroy change add remove reset", __alloyId29);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var timelineList = Alloy.Collections.events;
    var net = require("net");
    net.getData(function(timelineData) {
        _.forEach(timelineData.data, function(value) {
            var timeline = Alloy.createModel("events", value);
            var descrizioneCategoria = _.isNull(value.category) || _.isUndefined(value.category.name) ? "categoria non definita" : value.category.name;
            var creationDate = new Date(value.referenceTime);
            var location = _.isNull(value.location) ? null : value.location.name;
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
            Ti.API.info("LOCATIOM: " + location);
            var timeline = Alloy.createModel("events", {
                id: value.id,
                name: value.name,
                date: creationDate.getCMonth(),
                day: creationDate.getDate(),
                month: creationDate.getCMonth().toUpperCase(),
                category: " " + icons.tag + " " + descrizioneCategoria + " ",
                location: " " + icons.map_marker + " " + location + " ",
                aspects: icons.bar_chart_alt + " " + aspectObj.finance + " " + icons.file_text_alt + " " + aspectObj.documents + " " + icons.link + " " + aspectObj.links + " " + icons.edit_sign + " " + aspectObj.notes
            });
            timelineList.add(timeline);
        });
    });
    __defers["__alloyId18!click!mostraDettaglioEvento"] && __alloyId18.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;