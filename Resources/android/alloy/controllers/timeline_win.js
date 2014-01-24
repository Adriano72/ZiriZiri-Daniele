function Controller() {
    function __alloyId19(e) {
        if (e && e.fromAdapter) return;
        __alloyId19.opts || {};
        var models = __alloyId18.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = {};
            var __alloyId14 = Ti.UI.createTableViewRow({
                height: Ti.UI.SIZE,
                className: "eventRow",
                hasChild: "true"
            });
            rows.push(__alloyId14);
            mostraDettaglioEvento ? __alloyId14.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId14!click!mostraDettaglioEvento"] = true;
            var __alloyId15 = Ti.UI.createLabel({
                top: 5,
                width: 50,
                height: 56,
                color: "#000",
                backgroundImage: "/images/todo-list.png",
                left: 5
            });
            __alloyId14.add(__alloyId15);
            var __alloyId16 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: "16dp",
                    fontWeight: "bold"
                },
                left: 70,
                text: "undefined" != typeof __alloyId12.__transform["name"] ? __alloyId12.__transform["name"] : __alloyId12.get("name")
            });
            __alloyId14.add(__alloyId16);
            var __alloyId17 = Ti.UI.createLabel({
                top: 63,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: "14dp"
                },
                left: 5,
                bottom: 10,
                text: "undefined" != typeof __alloyId12.__transform["category"] ? __alloyId12.__transform["category"] : __alloyId12.get("category")
            });
            __alloyId14.add(__alloyId17);
        }
        $.__views.timelineTable.setData(rows);
    }
    function mostraDettaglioEvento() {}
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
        backgroundColor: "white",
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
    var __alloyId18 = Alloy.Collections["events"] || events;
    __alloyId18.on("fetch destroy change add remove reset", __alloyId19);
    exports.destroy = function() {
        __alloyId18.off("fetch destroy change add remove reset", __alloyId19);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var timelineList = Alloy.Collections.events;
    var net = require("net");
    net.getData(function(timelineData) {
        _.each(timelineData.data, function(value) {
            var timeline = Alloy.createModel("events", value);
            var descrizioneCategoria = _.isNull(value.category) || _.isUndefined(value.category.name) ? "non definita" : value.category.name;
            var aspetti = _.isNull(value.aspects) || _.isUndefined(value.aspects) ? "no aspects" : value.aspects;
            Ti.API.info("aspects: " + descrizioneCategoria);
            var timeline = Alloy.createModel("events", {
                name: value.name,
                category: "Categoria: " + descrizioneCategoria,
                aspects: aspetti
            });
            timelineList.add(timeline);
        });
    });
    __defers["__alloyId14!click!mostraDettaglioEvento"] && __alloyId14.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;