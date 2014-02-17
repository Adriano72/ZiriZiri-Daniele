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
    $.__views.rowDetailCASHFLOW = Ti.UI.createTableViewSection({
        id: "rowDetailCASHFLOW"
    });
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        id: "__alloyId8"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId8);
    $.__views.description = Ti.UI.createLabel({
        width: "95%",
        height: 40,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 24
        },
        color: "#DB4C3F",
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#ffffff",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        id: "description"
    });
    $.__views.__alloyId8.add($.__views.description);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        id: "__alloyId9"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId9);
    $.__views.category = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "category"
    });
    $.__views.__alloyId9.add($.__views.category);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        id: "__alloyId10"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId10);
    $.__views.importo = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "importo"
    });
    $.__views.__alloyId10.add($.__views.importo);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        id: "__alloyId11"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId11);
    $.__views.dataOperazione = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "dataOperazione"
    });
    $.__views.__alloyId11.add($.__views.dataOperazione);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        id: "__alloyId12"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId12);
    $.__views.dataValuta = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "dataValuta"
    });
    $.__views.__alloyId12.add($.__views.dataValuta);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        id: "__alloyId13"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId13);
    $.__views.flagOrdinarioStraordinario = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "flagOrdinarioStraordinario"
    });
    $.__views.__alloyId13.add($.__views.flagOrdinarioStraordinario);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        id: "__alloyId14"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId14);
    $.__views.category = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "category"
    });
    $.__views.__alloyId14.add($.__views.category);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        id: "__alloyId15"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId15);
    $.__views.statoMovimento = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "statoMovimento"
    });
    $.__views.__alloyId15.add($.__views.statoMovimento);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        id: "__alloyId16"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId16);
    $.__views.tipoMovimento = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "tipoMovimento"
    });
    $.__views.__alloyId16.add($.__views.tipoMovimento);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        id: "__alloyId17"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId17);
    $.__views.tipoVariabilita = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "tipoVariabilita"
    });
    $.__views.__alloyId17.add($.__views.tipoVariabilita);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        id: "__alloyId18"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId18);
    $.__views.modalitaPagamento = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "modalitaPagamento"
    });
    $.__views.__alloyId18.add($.__views.modalitaPagamento);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        id: "__alloyId19"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId19);
    $.__views.strumentoPagamentoIncasso = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "strumentoPagamentoIncasso"
    });
    $.__views.__alloyId19.add($.__views.strumentoPagamentoIncasso);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        id: "__alloyId20"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId20);
    $.__views.fonteLiquidita = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "fonteLiquidita"
    });
    $.__views.__alloyId20.add($.__views.fonteLiquidita);
    $.__views.__alloyId21 = Ti.UI.createTableViewRow({
        id: "__alloyId21"
    });
    $.__views.rowDetailCASHFLOW.add($.__views.__alloyId21);
    $.__views.tipoFonteLiquidita = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "tipoFonteLiquidita"
    });
    $.__views.__alloyId21.add($.__views.tipoFonteLiquidita);
    $.__views.rowDetailCASHFLOW && $.addTopLevelView($.__views.rowDetailCASHFLOW);
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