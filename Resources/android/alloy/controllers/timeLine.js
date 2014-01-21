function Controller() {
    function __alloyId17(e) {
        if (e && e.fromAdapter) return;
        __alloyId17.opts || {};
        var models = __alloyId16.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId11 = models[i];
            __alloyId11.__transform = {};
            var __alloyId13 = Ti.UI.createTableViewRow({
                hasChild: "true"
            });
            rows.push(__alloyId13);
            mostraDettaglioFeed ? __alloyId13.addEventListener("click", mostraDettaglioFeed) : __defers["__alloyId13!click!mostraDettaglioFeed"] = true;
            var __alloyId14 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId11.__transform["title"] ? __alloyId11.__transform["title"] : __alloyId11.get("title")
            });
            __alloyId13.add(__alloyId14);
            var __alloyId15 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId11.__transform["Teaser"] ? __alloyId11.__transform["Teaser"] : __alloyId11.get("Teaser")
            });
            __alloyId13.add(__alloyId15);
        }
        $.__views.timelineTable.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeLine";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("timeline");
    $.__views.ftimelineWin = Ti.UI.createWindow({
        id: "ftimelineWin",
        title: "Timeline"
    });
    $.__views.ftimelineWin && $.addTopLevelView($.__views.ftimelineWin);
    $.__views.timelineTable = Ti.UI.createTableView({
        id: "timelineTable"
    });
    $.__views.ftimelineWin.add($.__views.timelineTable);
    var __alloyId16 = Alloy.Collections["timeline"] || timeline;
    __alloyId16.on("fetch destroy change add remove reset", __alloyId17);
    exports.destroy = function() {
        __alloyId16.off("fetch destroy change add remove reset", __alloyId17);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["__alloyId13!click!mostraDettaglioFeed"] && __alloyId13.addEventListener("click", mostraDettaglioFeed);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;