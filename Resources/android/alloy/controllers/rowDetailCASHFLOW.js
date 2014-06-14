function Controller() {
    function composeDate(d_par) {
        var p_toDate = new Date(d_par);
        var day = p_toDate.getDate();
        var month = p_toDate.getCMonth();
        var year = p_toDate.getFullYear();
        return day + " " + month + " " + year;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailCASHFLOW";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "vertical",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.description = Ti.UI.createLabel({
        height: 30,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        color: "#DB4C3F",
        left: 5,
        right: 5,
        top: 5,
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#E3E3E3",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.category = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "AppIcons",
            fontSize: 12
        },
        backgroundColor: "#E3E3E3",
        borderRadius: Alloy.Globals.borderRad,
        height: 18,
        width: Ti.UI.SIZE,
        color: "#5E5E5E",
        left: 5,
        top: 5,
        bottom: 10,
        id: "category"
    });
    $.__views.row.add($.__views.category);
    $.__views.__alloyId107 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId107"
    });
    $.__views.row.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Importo",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
    $.__views.importo = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "importo"
    });
    $.__views.__alloyId107.add($.__views.importo);
    $.__views.__alloyId109 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId109"
    });
    $.__views.row.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Data operazione",
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.dataOperazione = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "dataOperazione"
    });
    $.__views.__alloyId109.add($.__views.dataOperazione);
    $.__views.__alloyId111 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId111"
    });
    $.__views.row.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Data valuta",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.dataValuta = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "dataValuta"
    });
    $.__views.__alloyId111.add($.__views.dataValuta);
    $.__views.__alloyId113 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId113"
    });
    $.__views.row.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Ord/Straord",
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.flagOrdinarioStraordinario = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "flagOrdinarioStraordinario"
    });
    $.__views.__alloyId113.add($.__views.flagOrdinarioStraordinario);
    $.__views.__alloyId115 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId115"
    });
    $.__views.row.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Stato movimento",
        id: "__alloyId116"
    });
    $.__views.__alloyId115.add($.__views.__alloyId116);
    $.__views.statoMovimento = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "statoMovimento"
    });
    $.__views.__alloyId115.add($.__views.statoMovimento);
    $.__views.__alloyId117 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId117"
    });
    $.__views.row.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Tipo movimento",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.tipoMovimento = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "tipoMovimento"
    });
    $.__views.__alloyId117.add($.__views.tipoMovimento);
    $.__views.__alloyId119 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId119"
    });
    $.__views.row.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Tipo variabilità",
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
    $.__views.tipoVariabilita = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "tipoVariabilita"
    });
    $.__views.__alloyId119.add($.__views.tipoVariabilita);
    $.__views.__alloyId121 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId121"
    });
    $.__views.row.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Modalità pagamento",
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.modalitaPagamento = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "modalitaPagamento"
    });
    $.__views.__alloyId121.add($.__views.modalitaPagamento);
    $.__views.__alloyId123 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId123"
    });
    $.__views.row.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Stumento pagamento/incasso",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.strumentoPagamentoIncasso = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "strumentoPagamentoIncasso"
    });
    $.__views.__alloyId123.add($.__views.strumentoPagamentoIncasso);
    $.__views.__alloyId125 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId125"
    });
    $.__views.row.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Fonte liquidità",
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.fonteLiquidita = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "fonteLiquidita"
    });
    $.__views.__alloyId125.add($.__views.fonteLiquidita);
    $.__views.__alloyId127 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId127"
    });
    $.__views.row.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Tipo fonte Liquidità",
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.tipoFonteLiquidita = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "tipoFonteLiquidita"
    });
    $.__views.__alloyId127.add($.__views.tipoFonteLiquidita);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.description.text = "  " + icons.bar_chart_alt + "  " + args.description;
    $.category.text = _.isNull(args.category) ? null : " " + icons.tag + " " + args.category;
    $.importo.text = "€ " + args.importo;
    $.dataOperazione.text = composeDate(args.dataOperazione);
    $.dataValuta.text = composeDate(args.dataValuta);
    $.flagOrdinarioStraordinario.text = args.flagOrdinarioStraordinario;
    $.statoMovimento.text = args.statoMovimento;
    $.tipoMovimento.text = args.tipoMovimento;
    $.tipoVariabilita.text = args.tipoVariabilita;
    $.modalitaPagamento.text = args.modalitaPagamento;
    $.strumentoPagamentoIncasso.text = args.strumentoPagamentoIncasso;
    $.fonteLiquidita.text = args.fonteLiquidita;
    $.tipoFonteLiquidita.text = args.tipoFonteLiquidita;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;