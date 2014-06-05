function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefCashflow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.briefCashflow = Ti.UI.createView({
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        touchEnabled: false,
        layout: "horizontal",
        id: "briefCashflow"
    });
    $.__views.briefCashflow && $.addTopLevelView($.__views.briefCashflow);
    $.__views.__alloyId31 = Ti.UI.createView({
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
    $.__views.__alloyId32 = Ti.UI.createView({
        left: 10,
        layout: "horizontal",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId32"
    });
    $.__views.briefCashflow.add($.__views.__alloyId32);
    $.__views.importo = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        color: "#444",
        left: 0,
        height: 40,
        width: Ti.UI.SIZE,
        id: "importo"
    });
    $.__views.__alloyId32.add($.__views.importo);
    $.__views.tipoMovimento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        color: "#999",
        left: 70,
        height: 40,
        width: Ti.UI.SIZE,
        id: "tipoMovimento"
    });
    $.__views.__alloyId32.add($.__views.tipoMovimento);
    $.__views.modalitaPagamento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        color: "#999",
        left: 70,
        height: 40,
        width: Ti.UI.SIZE,
        id: "modalitaPagamento"
    });
    $.__views.__alloyId32.add($.__views.modalitaPagamento);
    var __alloyId33 = function() {
        $.importo.text = _.isFunction(Alloy.Models.Aspetto.transform) ? Alloy.Models.Aspetto.transform()["importo"] : Alloy.Models.Aspetto.get("importo");
        $.importo.text = _.isFunction(Alloy.Models.Aspetto.transform) ? Alloy.Models.Aspetto.transform()["importo"] : Alloy.Models.Aspetto.get("importo");
        $.tipoMovimento.text = _.isFunction(Alloy.Models.Aspetto.transform) ? Alloy.Models.Aspetto.transform()["tipoMovimento"] : Alloy.Models.Aspetto.get("tipoMovimento");
        $.tipoMovimento.text = _.isFunction(Alloy.Models.Aspetto.transform) ? Alloy.Models.Aspetto.transform()["tipoMovimento"] : Alloy.Models.Aspetto.get("tipoMovimento");
        $.modalitaPagamento.text = _.isFunction(Alloy.Models.Aspetto.transform) ? Alloy.Models.Aspetto.transform()["modalitaPagamento"] : Alloy.Models.Aspetto.get("modalitaPagamento");
        $.modalitaPagamento.text = _.isFunction(Alloy.Models.Aspetto.transform) ? Alloy.Models.Aspetto.transform()["modalitaPagamento"] : Alloy.Models.Aspetto.get("modalitaPagamento");
    };
    Alloy.Models.Aspetto.on("fetch change destroy", __alloyId33);
    exports.destroy = function() {
        Alloy.Models.Aspetto.off("fetch change destroy", __alloyId33);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var aspectJson = Alloy.Models.Aspetto.toJSON();
    Alloy.Models.Aspetto.set("importo", aspectJson.data.importo + "€", {
        silent: true
    });
    Alloy.Models.Aspetto.set("tipoMovimento", aspectJson.data.tipoMovimento.codice, {
        silent: true
    });
    Alloy.Models.Aspetto.set("modalitaPagamento", aspectJson.data.modalitaPagamento.descrizioneBreve, {
        silent: true
    });
    Alloy.Models.Aspetto.trigger("change");
    $.briefCashflow.addEventListener("close", function() {
        $.briefCashflow.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;