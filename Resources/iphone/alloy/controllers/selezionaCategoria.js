function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId184(e) {
        if (e && e.fromAdapter) return;
        __alloyId184.opts || {};
        var models = __alloyId183.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId180 = models[i];
            __alloyId180.__transform = {};
            var __alloyId182 = Ti.UI.createTableViewRow({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                backgroundColor: "#F9F9F9",
                className: "itemRow",
                top: 5,
                title: "undefined" != typeof __alloyId180.__transform["title"] ? __alloyId180.__transform["title"] : __alloyId180.get("title")
            });
            rows.push(__alloyId182);
        }
        $.__views.categorieTable.setData(rows);
    }
    function hideActionBar() {
        $.win.activity.actionBar.hide();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "selezionaCategoria";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        title: "Categoria"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    hideActionBar ? $.__views.win.addEventListener("open", hideActionBar) : __defers["$.__views.win!open!hideActionBar"] = true;
    $.__views.categorieTable = Ti.UI.createTableView({
        top: 5,
        id: "categorieTable"
    });
    $.__views.win.add($.__views.categorieTable);
    var __alloyId183 = Alloy.Collections["categorie"] || categorie;
    __alloyId183.on("fetch destroy change add remove reset", __alloyId184);
    exports.destroy = function() {
        __alloyId183.off("fetch destroy change add remove reset", __alloyId184);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.win.open();
    __defers["$.__views.win!open!hideActionBar"] && $.__views.win.addEventListener("open", hideActionBar);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;