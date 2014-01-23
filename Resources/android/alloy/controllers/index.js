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
                height: Ti.UI.SIZE,
                className: "eventRow",
                hasChild: "true"
            });
            rows.push(__alloyId4);
            mostraDettaglioEvento ? __alloyId4.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId4!click!mostraDettaglioEvento"] = true;
            var __alloyId5 = Ti.UI.createLabel({
                top: 5,
                width: 50,
                height: 56,
                color: "#000",
                backgroundImage: "/images/todo-list.png",
                left: 5
            });
            __alloyId4.add(__alloyId5);
            var __alloyId6 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: "16dp",
                    fontWeight: "bold"
                },
                left: 70,
                text: "undefined" != typeof __alloyId2.__transform["name"] ? __alloyId2.__transform["name"] : __alloyId2.get("name")
            });
            __alloyId4.add(__alloyId6);
            var __alloyId7 = Ti.UI.createLabel({
                top: 63,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: "14dp"
                },
                left: 5,
                bottom: 10,
                text: "undefined" != typeof __alloyId2.__transform["category"] ? __alloyId2.__transform["category"] : __alloyId2.get("category")
            });
            __alloyId4.add(__alloyId7);
        }
        $.__views.timelineTable.setData(rows);
    }
    function mostraDettaglioEvento() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("timeline");
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        exitOnClose: true,
        title: "Timeline",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#000",
        id: "timelineTable"
    });
    $.__views.index.add($.__views.timelineTable);
    var __alloyId8 = Alloy.Collections["timeline"] || timeline;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.createController("login").getView().open();
    var timelineList = Alloy.Collections.timeline;
    var net = require("net");
    net.getData(function(timelineData) {
        _.each(timelineData.data, function(value) {
            var timeline = Alloy.createModel("timeline", value);
            var descrizioneCategoria = _.isNull(value.category) || _.isUndefined(value.category.name) ? "non definita" : value.category.name;
            var aspetti = _.isNull(value.aspects) || _.isUndefined(value.aspects) ? "no aspects" : value.aspects;
            Ti.API.info("aspects: " + descrizioneCategoria);
            var timeline = Alloy.createModel("timeline", {
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