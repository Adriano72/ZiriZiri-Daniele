function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId4 = Ti.UI.createTableViewRow({
                hasChild: "true"
            });
            rows.push(__alloyId4);
            mostraDettaglioEvento ? __alloyId4.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId4!click!mostraDettaglioEvento"] = true;
            var __alloyId5 = Ti.UI.createLabel({});
            __alloyId4.add(__alloyId5);
            var __alloyId6 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId2.__transform["name"] ? __alloyId2.__transform["name"] : __alloyId2.get("name")
            });
            __alloyId4.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId2.__transform["category"] ? __alloyId2.__transform["category"] : __alloyId2.get("category")
            });
            __alloyId4.add(__alloyId7);
        }
        $.__views.timelineTable.setData(rows);
    }
    function mostraDettaglioEvento() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeline";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("events");
    $.__views.timeline = Ti.UI.createWindow({
        title: "Timeline",
        id: "timeline"
    });
    $.__views.timeline && $.addTopLevelView($.__views.timeline);
    $.__views.timelineTable = Ti.UI.createTableView({
        id: "timelineTable"
    });
    $.__views.timeline.add($.__views.timelineTable);
    var __alloyId8 = Alloy.Collections["events"] || events;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
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
    __defers["__alloyId4!click!mostraDettaglioEvento"] && __alloyId4.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;