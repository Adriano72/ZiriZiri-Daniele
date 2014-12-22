function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function syncCategorie(e) {
        if (e && e.fromAdapter) return;
        syncCategorie.opts || {};
        var models = __alloyId279.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId276 = models[i];
            __alloyId276.__transform = {};
            var __alloyId278 = Ti.UI.createTableViewRow({
                height: 45,
                width: Ti.UI.FILL,
                backgroundColor: "#F9F9F9",
                className: "itemRow",
                color: "#999",
                title: "undefined" != typeof __alloyId276.__transform["name"] ? __alloyId276.__transform["name"] : __alloyId276.get("name")
            });
            rows.push(__alloyId278);
            selectCategory ? __alloyId278.addEventListener("click", selectCategory) : __defers["__alloyId278!click!selectCategory"] = true;
        }
        $.__views.categorieTable.setData(rows);
    }
    function hideActionBar() {
        $.win.activity.onCreateOptionsMenu = function(e) {
            e.menu.add({
                title: "Table Search",
                icon: Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png",
                actionView: search,
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
            });
        };
        $.win.activity.invalidateOptionsMenu();
    }
    function selectCategory(e) {
        args(Alloy.Collections.categorie.at(e.index).attributes);
        $.win.close({
            animate: true
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "selezionaCategoria";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        layout: "vertical",
        id: "win",
        title: "Categoria"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    hideActionBar ? $.__views.win.addEventListener("open", hideActionBar) : __defers["$.__views.win!open!hideActionBar"] = true;
    $.__views.categorieTable = Ti.UI.createTableView({
        top: 0,
        searchAsChild: "false",
        id: "categorieTable"
    });
    $.__views.win.add($.__views.categorieTable);
    var __alloyId279 = Alloy.Collections["categorie"] || categorie;
    __alloyId279.on("fetch destroy change add remove reset", syncCategorie);
    exports.destroy = function() {
        __alloyId279.off("fetch destroy change add remove reset", syncCategorie);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var search = Alloy.createController("searchView").getView();
    $.categorieTable.search = search;
    syncCategorie();
    $.win.open();
    __defers["$.__views.win!open!hideActionBar"] && $.__views.win.addEventListener("open", hideActionBar);
    __defers["__alloyId278!click!selectCategory"] && __alloyId278.addEventListener("click", selectCategory);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;