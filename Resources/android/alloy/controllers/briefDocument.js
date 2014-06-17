function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId81.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId73 = models[i];
            __alloyId73.__transform = transformData(__alloyId73);
            var __alloyId75 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId75);
            showDetail ? __alloyId75.addEventListener("click", showDetail) : __defers["__alloyId75!click!showDetail"] = true;
            var __alloyId77 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId75.add(__alloyId77);
            var __alloyId78 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId73.__transform["name"] ? __alloyId73.__transform["name"] : __alloyId73.get("name")
            });
            __alloyId77.add(__alloyId78);
            var __alloyId79 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId73.__transform["tipoFile"] ? __alloyId73.__transform["tipoFile"] : __alloyId73.get("tipoFile")
            });
            __alloyId77.add(__alloyId79);
            var __alloyId80 = Ti.UI.createLabel({
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
            __alloyId77.add(__alloyId80);
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    $.__views.__alloyId72 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId72"
    });
    $.__views.briefDocument.add($.__views.__alloyId72);
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
    var __alloyId81 = Alloy.Collections["aspettiDocument"] || aspettiDocument;
    __alloyId81.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId81.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION DOCUMENT: " + JSON.stringify(Alloy.Collections.aspettiDocument));
    syncAspects();
    $.briefDocument.addEventListener("close", function() {
        $.briefDocument.destroy();
    });
    __defers["__alloyId75!click!showDetail"] && __alloyId75.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;