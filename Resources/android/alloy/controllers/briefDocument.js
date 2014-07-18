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
        var models = __alloyId90.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId82 = models[i];
            __alloyId82.__transform = transformData(__alloyId82);
            var __alloyId84 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId84);
            showDetail ? __alloyId84.addEventListener("click", showDetail) : __defers["__alloyId84!click!showDetail"] = true;
            var __alloyId86 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId84.add(__alloyId86);
            var __alloyId87 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId82.__transform["name"] ? __alloyId82.__transform["name"] : __alloyId82.get("name")
            });
            __alloyId86.add(__alloyId87);
            var __alloyId88 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId82.__transform["tipoFile"] ? __alloyId82.__transform["tipoFile"] : __alloyId82.get("tipoFile")
            });
            __alloyId86.add(__alloyId88);
            var __alloyId89 = Ti.UI.createLabel({
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
            __alloyId86.add(__alloyId89);
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
    $.__views.__alloyId81 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId81"
    });
    $.__views.briefDocument.add($.__views.__alloyId81);
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
    var __alloyId90 = Alloy.Collections["aspettiDocument"] || aspettiDocument;
    __alloyId90.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId90.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION DOCUMENT: " + JSON.stringify(Alloy.Collections.aspettiDocument));
    syncAspects();
    $.briefDocument.addEventListener("close", function() {
        $.briefDocument.destroy();
    });
    __defers["__alloyId84!click!showDetail"] && __alloyId84.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;