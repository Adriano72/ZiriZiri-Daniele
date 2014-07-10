function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId70.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId62 = models[i];
            __alloyId62.__transform = transformData(__alloyId62);
            var __alloyId64 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId64);
            showDetail ? __alloyId64.addEventListener("click", showDetail) : __defers["__alloyId64!click!showDetail"] = true;
            var __alloyId66 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId64.add(__alloyId66);
            var __alloyId67 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId62.__transform["temp_importo"] ? __alloyId62.__transform["temp_importo"] : __alloyId62.get("temp_importo")
            });
            __alloyId66.add(__alloyId67);
            var __alloyId68 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId62.__transform["temp_tipoMovimento"] ? __alloyId62.__transform["temp_tipoMovimento"] : __alloyId62.get("temp_tipoMovimento")
            });
            __alloyId66.add(__alloyId68);
            var __alloyId69 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId62.__transform["temp_pagamentoIncasso"] ? __alloyId62.__transform["temp_pagamentoIncasso"] : __alloyId62.get("temp_pagamentoIncasso")
            });
            __alloyId66.add(__alloyId69);
        }
        $.__views.aspectTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.temp_importo = attrs.data.importo + "€";
        attrs.temp_tipoMovimento = _.isUndefined(attrs.data.tipoMovimento) || _.isNull(attrs.data.tipoMovimento) ? "" : attrs.data.tipoMovimento.codice;
        attrs.temp_pagamentoIncasso = _.isUndefined(attrs.data.pagamentoIncasso) || _.isNull(attrs.data.pagamentoIncasso) ? "" : attrs.data.pagamentoIncasso.descrizioneBreve;
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
    $.__views.__alloyId61 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId61"
    });
    $.__views.briefCashflow.add($.__views.__alloyId61);
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
    var __alloyId70 = Alloy.Collections["aspettiCashflow"] || aspettiCashflow;
    __alloyId70.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId70.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION CASHFLOW: " + JSON.stringify(Alloy.Collections.aspettiCashflow));
    syncAspects();
    $.briefCashflow.addEventListener("close", function() {
        $.briefCashflow.destroy();
    });
    __defers["__alloyId64!click!showDetail"] && __alloyId64.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;