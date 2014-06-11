function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId30.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId22 = models[i];
            __alloyId22.__transform = transformData(__alloyId22);
            var __alloyId24 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId24);
            var __alloyId26 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId24.add(__alloyId26);
            var __alloyId27 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId22.__transform["importo"] ? __alloyId22.__transform["importo"] : __alloyId22.get("importo")
            });
            __alloyId26.add(__alloyId27);
            var __alloyId28 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId22.__transform["tipoMovimento"] ? __alloyId22.__transform["tipoMovimento"] : __alloyId22.get("tipoMovimento")
            });
            __alloyId26.add(__alloyId28);
            var __alloyId29 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId22.__transform["modalitaPagamento"] ? __alloyId22.__transform["modalitaPagamento"] : __alloyId22.get("modalitaPagamento")
            });
            __alloyId26.add(__alloyId29);
        }
        $.__views.aspectTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.importo = attrs.data.importo + "€";
        attrs.tipoMovimento = attrs.data.tipoMovimento.codice;
        attrs.modalitaPagamento = attrs.data.modalitaPagamento.descrizioneBreve;
        return attrs;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefCashflow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
    $.__views.__alloyId21 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId21"
    });
    $.__views.briefCashflow.add($.__views.__alloyId21);
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
    var __alloyId30 = Alloy.Collections["aspettiCashflow"] || aspettiCashflow;
    __alloyId30.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId30.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION CASHFLOW: " + JSON.stringify(Alloy.Collections.aspettiCashflow));
    syncAspects();
    $.briefCashflow.addEventListener("close", function() {
        $.briefCashflow.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;