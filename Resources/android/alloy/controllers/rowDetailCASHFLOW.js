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
    $.__views.__alloyId124 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId124"
    });
    $.__views.row.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createLabel({
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
        id: "__alloyId125"
    });
    $.__views.__alloyId124.add($.__views.__alloyId125);
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
    $.__views.__alloyId124.add($.__views.importo);
    $.__views.__alloyId126 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId126"
    });
    $.__views.row.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
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
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
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
    $.__views.__alloyId126.add($.__views.dataOperazione);
    $.__views.__alloyId128 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId128"
    });
    $.__views.row.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
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
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
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
    $.__views.__alloyId128.add($.__views.dataValuta);
    $.__views.__alloyId130 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId130"
    });
    $.__views.row.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
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
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
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
    $.__views.__alloyId130.add($.__views.flagOrdinarioStraordinario);
    $.__views.__alloyId132 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId132"
    });
    $.__views.row.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
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
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
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
    $.__views.__alloyId132.add($.__views.statoMovimento);
    $.__views.__alloyId134 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId134"
    });
    $.__views.row.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
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
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
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
    $.__views.__alloyId134.add($.__views.tipoMovimento);
    $.__views.__alloyId136 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId136"
    });
    $.__views.row.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
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
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
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
    $.__views.__alloyId136.add($.__views.tipoVariabilita);
    $.__views.__alloyId138 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId138"
    });
    $.__views.row.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
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
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
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
    $.__views.__alloyId138.add($.__views.modalitaPagamento);
    $.__views.__alloyId140 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId140"
    });
    $.__views.row.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
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
        id: "__alloyId141"
    });
    $.__views.__alloyId140.add($.__views.__alloyId141);
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
    $.__views.__alloyId140.add($.__views.strumentoPagamentoIncasso);
    $.__views.__alloyId142 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId142"
    });
    $.__views.row.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
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
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
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
    $.__views.__alloyId142.add($.__views.fonteLiquidita);
    $.__views.__alloyId144 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId144"
    });
    $.__views.row.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
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
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
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
    $.__views.__alloyId144.add($.__views.tipoFonteLiquidita);
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