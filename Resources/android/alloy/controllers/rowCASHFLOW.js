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
    $.__views.__alloyId0 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId0"
    });
    $.__views.row.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Importo: ",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
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
    $.__views.__alloyId0.add($.__views.importo);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId2"
    });
    $.__views.row.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Data operazione: ",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
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
    $.__views.__alloyId2.add($.__views.dataOperazione);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId4"
    });
    $.__views.row.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Data valuta: ",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
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
    $.__views.__alloyId4.add($.__views.dataValuta);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId6"
    });
    $.__views.row.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Tipo movimento: ",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.codTipoMovimento = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "codTipoMovimento"
    });
    $.__views.__alloyId6.add($.__views.codTipoMovimento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.id_code = args.id_code, $.description.text = "  " + icons.bar_chart_alt + "  " + args.description;
    $.importo.text = "€ " + args.importo;
    $.dataOperazione.text = composeDate(args.dataOperazione);
    $.dataValuta.text = composeDate(args.dataValuta);
    $.codTipoMovimento.text = args.codTipoMovimento;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;