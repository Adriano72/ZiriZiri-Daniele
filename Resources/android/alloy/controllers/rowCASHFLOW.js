function Controller() {
    function composeDate(d_par) {
        var p_toDate = new Date(d_par);
        var day = p_toDate.getDate();
        var month = p_toDate.getCMonth();
        var year = p_toDate.getFullYear();
        return day + " " + month + " " + year;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowCASHFLOW";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#d8d8d8",
        className: "itemRow",
        layout: "vertical",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.description = Ti.UI.createLabel({
        height: 40,
        font: {
            fontFamily: "AppIcons",
            fontSize: 24
        },
        color: "#DB4C3F",
        left: 5,
        top: 5,
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#ffffff",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        width: "95%",
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.importo = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "importo"
    });
    $.__views.row.add($.__views.importo);
    $.__views.dataOperazione = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "dataOperazione"
    });
    $.__views.row.add($.__views.dataOperazione);
    $.__views.dataValuta = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "dataValuta"
    });
    $.__views.row.add($.__views.dataValuta);
    $.__views.codTipoMovimento = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        bottom: 10,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "codTipoMovimento"
    });
    $.__views.row.add($.__views.codTipoMovimento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.id_code = args.id_code, $.description.text = "  " + icons.bar_chart_alt + "  " + args.description;
    $.importo.text = "Importo: € " + args.importo;
    $.dataOperazione.text = "Data operazione: " + composeDate(args.dataOperazione);
    $.dataValuta.text = "Data Valuta: " + composeDate(args.dataValuta);
    $.codTipoMovimento.text = "Tipo movimento: " + args.codTipoMovimento;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;