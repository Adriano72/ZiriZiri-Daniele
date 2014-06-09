function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId40.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId32 = models[i];
            __alloyId32.__transform = transformData(__alloyId32);
            var __alloyId34 = Ti.UI.createTableViewRow({
                backgroundColor: "pink",
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId34);
            var __alloyId36 = Ti.UI.createView({
                left: 10,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId34.add(__alloyId36);
            var __alloyId37 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                color: "#444",
                backgroundColor: "yellow",
                width: 80,
                wordWrap: false,
                ellipsize: true,
                left: 0,
                text: "undefined" != typeof __alloyId32.__transform["importo"] ? __alloyId32.__transform["importo"] : __alloyId32.get("importo")
            });
            __alloyId36.add(__alloyId37);
            var __alloyId38 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                color: "#999",
                backgroundColor: "white",
                width: 80,
                wordWrap: false,
                ellipsize: true,
                left: 5,
                text: "undefined" != typeof __alloyId32.__transform["tipoMovimento"] ? __alloyId32.__transform["tipoMovimento"] : __alloyId32.get("tipoMovimento")
            });
            __alloyId36.add(__alloyId38);
            var __alloyId39 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                color: "#999",
                backgroundColor: "white",
                width: 80,
                wordWrap: false,
                ellipsize: true,
                left: 5,
                text: "undefined" != typeof __alloyId32.__transform["modalitaPagamento"] ? __alloyId32.__transform["modalitaPagamento"] : __alloyId32.get("modalitaPagamento")
            });
            __alloyId36.add(__alloyId39);
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
        backgroundColor: "lime",
        top: 0,
        height: 200,
        width: Ti.UI.FILL,
        touchEnabled: false,
        layout: "horizontal",
        id: "briefCashflow"
    });
    $.__views.briefCashflow && $.addTopLevelView($.__views.briefCashflow);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: Ti.UI.FILL,
        id: "__alloyId31"
    });
    $.__views.briefCashflow.add($.__views.__alloyId31);
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
        left: 30,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        separatorColor: "#transparent",
        backgroundColor: "blue",
        id: "aspectTable"
    });
    $.__views.briefCashflow.add($.__views.aspectTable);
    var __alloyId40 = Alloy.Collections["aspettiCashflow"] || aspettiCashflow;
    __alloyId40.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId40.off("fetch destroy change add remove reset", syncAspects);
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