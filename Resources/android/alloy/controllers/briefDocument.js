function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId88.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId80 = models[i];
            __alloyId80.__transform = transformData(__alloyId80);
            var __alloyId82 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId82);
            showDetail ? __alloyId82.addEventListener("click", showDetail) : __defers["__alloyId82!click!showDetail"] = true;
            var __alloyId84 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId82.add(__alloyId84);
            var __alloyId85 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#444",
                backgroundColor: "white",
                textAlign: "center",
                width: 95,
                wordWrap: false,
                ellipsize: true,
                left: 0,
                text: "undefined" != typeof __alloyId80.__transform["name"] ? __alloyId80.__transform["name"] : __alloyId80.get("name")
            });
            __alloyId84.add(__alloyId85);
            var __alloyId86 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#999",
                backgroundColor: "white",
                textAlign: "center",
                width: 95,
                wordWrap: false,
                ellipsize: true,
                text: "undefined" != typeof __alloyId80.__transform["tipoFile"] ? __alloyId80.__transform["tipoFile"] : __alloyId80.get("tipoFile")
            });
            __alloyId84.add(__alloyId86);
            var __alloyId87 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#999",
                backgroundColor: "white",
                textAlign: "center",
                width: 95,
                wordWrap: false,
                ellipsize: true,
                text: "Visualizza"
            });
            __alloyId84.add(__alloyId87);
        }
        $.__views.aspectDocumentTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.tipoFile = attrs.data.format.name;
        return attrs;
    }
    function showDetail(e) {
        var selectedAspect = Alloy.Collections.aspettiDocument.at(e.index).attributes;
        Alloy.createController("rowDetailDOCUMENT", selectedAspect).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefDocument";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.briefDocument = Ti.UI.createView({
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "briefDocument"
    });
    $.__views.briefDocument && $.addTopLevelView($.__views.briefDocument);
    $.__views.documentIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-document-on.png",
        id: "documentIcon"
    });
    $.__views.briefDocument.add($.__views.documentIcon);
    $.__views.aspectDocumentTable = Ti.UI.createTableView({
        top: 5,
        left: 5,
        width: "90%",
        height: Ti.UI.SIZE,
        separatorColor: "#transparent",
        id: "aspectDocumentTable"
    });
    $.__views.briefDocument.add($.__views.aspectDocumentTable);
    var __alloyId88 = Alloy.Collections["aspettiDocument"] || aspettiDocument;
    __alloyId88.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId88.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION DOCUMENT: " + JSON.stringify(Alloy.Collections.aspettiDocument));
    syncAspects();
    $.briefDocument.addEventListener("close", function() {
        $.briefDocument.destroy();
    });
    __defers["__alloyId82!click!showDetail"] && __alloyId82.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;