function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId80.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId72 = models[i];
            __alloyId72.__transform = transformData(__alloyId72);
            var __alloyId74 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId74);
            showDetail ? __alloyId74.addEventListener("click", showDetail) : __defers["__alloyId74!click!showDetail"] = true;
            var __alloyId76 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId74.add(__alloyId76);
            var __alloyId77 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId72.__transform["temp_importo"] ? __alloyId72.__transform["temp_importo"] : __alloyId72.get("temp_importo")
            });
            __alloyId76.add(__alloyId77);
            var __alloyId78 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId72.__transform["temp_tipoMovimento"] ? __alloyId72.__transform["temp_tipoMovimento"] : __alloyId72.get("temp_tipoMovimento")
            });
            __alloyId76.add(__alloyId78);
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
                text: "undefined" != typeof __alloyId72.__transform["temp_pagamentoIncasso"] ? __alloyId72.__transform["temp_pagamentoIncasso"] : __alloyId72.get("temp_pagamentoIncasso")
            });
            __alloyId76.add(__alloyId79);
        }
        $.__views.aspectTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.temp_importo = attrs.data.importo + "€";
        attrs.temp_tipoMovimento = attrs.data.tipoMovimento.codice;
        attrs.temp_pagamentoIncasso = attrs.data.pagamentoIncasso.descrizioneBreve;
        return attrs;
    }
    function showDetail(e) {
        var selectedAspect = Alloy.Collections.aspettiCashflow.at(e.index).attributes;
        Alloy.createController("rowDetailCASHFLOW", selectedAspect).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefCashflow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.briefCashflow = Ti.UI.createView({
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "briefCashflow"
    });
    $.__views.briefCashflow && $.addTopLevelView($.__views.briefCashflow);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId71"
    });
    $.__views.briefCashflow.add($.__views.__alloyId71);
    $.__views.cashFlowIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-finance-on.png",
        id: "cashFlowIcon"
    });
    $.__views.briefCashflow.add($.__views.cashFlowIcon);
    $.__views.aspectTable = Ti.UI.createTableView({
        top: 5,
        left: 5,
        width: "90%",
        height: Ti.UI.SIZE,
        separatorColor: "#transparent",
        id: "aspectTable"
    });
    $.__views.briefCashflow.add($.__views.aspectTable);
    var __alloyId80 = Alloy.Collections["aspettiCashflow"] || aspettiCashflow;
    __alloyId80.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId80.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION CASHFLOW: " + JSON.stringify(Alloy.Collections.aspettiCashflow));
    syncAspects();
    $.briefCashflow.addEventListener("close", function() {
        $.briefCashflow.destroy();
    });
    __defers["__alloyId74!click!showDetail"] && __alloyId74.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;