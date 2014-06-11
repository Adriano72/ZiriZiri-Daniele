function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId51.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId43 = models[i];
            __alloyId43.__transform = transformData(__alloyId43);
            var __alloyId45 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId45);
            var __alloyId47 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId45.add(__alloyId47);
            var __alloyId48 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId43.__transform["name"] ? __alloyId43.__transform["name"] : __alloyId43.get("name")
            });
            __alloyId47.add(__alloyId48);
            var __alloyId49 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId43.__transform["tipoFile"] ? __alloyId43.__transform["tipoFile"] : __alloyId43.get("tipoFile")
            });
            __alloyId47.add(__alloyId49);
            var __alloyId50 = Ti.UI.createLabel({
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
            __alloyId47.add(__alloyId50);
        }
        $.__views.aspectDocumentTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.tipoFile = attrs.data.format.name;
        return attrs;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefDocument";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
    $.__views.__alloyId42 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId42"
    });
    $.__views.briefDocument.add($.__views.__alloyId42);
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
    var __alloyId51 = Alloy.Collections["aspettiDocument"] || aspettiDocument;
    __alloyId51.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId51.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION DOCUMENT: " + JSON.stringify(Alloy.Collections.aspettiDocument));
    syncAspects();
    $.briefDocument.addEventListener("close", function() {
        $.briefDocument.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;