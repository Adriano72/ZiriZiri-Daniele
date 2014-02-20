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
        top: 5,
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#E3E3E3",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        width: "95%",
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.category = Ti.UI.createLabel({
        id: "category"
    });
    $.__views.row.add($.__views.category);
    $.__views.__alloyId14 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId14"
    });
    $.__views.row.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Importo: ",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.importo = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "importo"
    });
    $.__views.__alloyId14.add($.__views.importo);
    $.__views.__alloyId16 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId16"
    });
    $.__views.row.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Data operazione: ",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.dataOperazione = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "dataOperazione"
    });
    $.__views.__alloyId16.add($.__views.dataOperazione);
    $.__views.__alloyId18 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId18"
    });
    $.__views.row.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Data valuta: ",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.dataValuta = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "dataValuta"
    });
    $.__views.__alloyId18.add($.__views.dataValuta);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId20"
    });
    $.__views.row.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Ord/Straord: ",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.flagOrdinarioStraordinario = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "flagOrdinarioStraordinario"
    });
    $.__views.__alloyId20.add($.__views.flagOrdinarioStraordinario);
    $.__views.__alloyId22 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId22"
    });
    $.__views.row.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Stato movimento: ",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.statoMovimento = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "statoMovimento"
    });
    $.__views.__alloyId22.add($.__views.statoMovimento);
    $.__views.__alloyId24 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId24"
    });
    $.__views.row.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Tipo movimento: ",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.tipoMovimento = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "tipoMovimento"
    });
    $.__views.__alloyId24.add($.__views.tipoMovimento);
    $.__views.__alloyId26 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId26"
    });
    $.__views.row.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Tipo variabilità: ",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.tipoVariabilita = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "tipoVariabilita"
    });
    $.__views.__alloyId26.add($.__views.tipoVariabilita);
    $.__views.__alloyId28 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId28"
    });
    $.__views.row.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Modalità pagamento: ",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.modalitaPagamento = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "modalitaPagamento"
    });
    $.__views.__alloyId28.add($.__views.modalitaPagamento);
    $.__views.__alloyId30 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId30"
    });
    $.__views.row.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Stumento pagamento/incasso: ",
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.strumentoPagamentoIncasso = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "strumentoPagamentoIncasso"
    });
    $.__views.__alloyId30.add($.__views.strumentoPagamentoIncasso);
    $.__views.__alloyId32 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId32"
    });
    $.__views.row.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Fonte liquidità: ",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.fonteLiquidita = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "fonteLiquidita"
    });
    $.__views.__alloyId32.add($.__views.fonteLiquidita);
    $.__views.__alloyId34 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId34"
    });
    $.__views.row.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Tipo fonte Liquidità: ",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.tipoFonteLiquidita = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "tipoFonteLiquidita"
    });
    $.__views.__alloyId34.add($.__views.tipoFonteLiquidita);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.description.text = "  " + icons.bar_chart_alt + "  " + args.description;
    $.category.text = "Categoria: " + args.category;
    $.importo.text = "Importo: € " + args.importo;
    $.dataOperazione.text = "Data operazione: " + composeDate(args.dataOperazione);
    $.dataValuta.text = "Data Valuta: " + composeDate(args.dataValuta);
    $.flagOrdinarioStraordinario.text = "Ord/Straord: " + args.flagOrdinarioStraordinario;
    $.statoMovimento.text = "Stato movimento: " + args.statoMovimento;
    $.tipoMovimento.text = "Tipo movimento: " + args.tipoMovimento;
    $.tipoVariabilita.text = "Tipo variabilità: " + args.tipoVariabilita;
    $.modalitaPagamento.text = "Modalità pagamento: " + args.modalitaPagamento;
    $.strumentoPagamentoIncasso.text = "Stumento pagamento/incasso: " + args.strumentoPagamentoIncasso;
    $.fonteLiquidita.text = "Fonte liquidità: " + args.fonteLiquidita;
    $.tipoFonteLiquidita.text = "Tipo fonte Liquidità: " + args.tipoFonteLiquidita;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;