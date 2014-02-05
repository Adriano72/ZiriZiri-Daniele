function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowCASHFLOW";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: 100,
        width: Ti.UI.FILL,
        backgroundColor: "white",
        className: "itemRow",
        layout: "vertical",
        id: "row",
        title: "Ciao"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.description = Ti.UI.createLabel({
        height: 70,
        font: {
            fontFamily: "AppIcons",
            fontWeight: "bold",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.importo = Ti.UI.createLabel({
        height: 70,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "importo"
    });
    $.__views.row.add($.__views.importo);
    $.__views.dataOperazione = Ti.UI.createLabel({
        height: 70,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "dataOperazione"
    });
    $.__views.row.add($.__views.dataOperazione);
    $.__views.dataValuta = Ti.UI.createLabel({
        height: "70dp",
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "dataValuta"
    });
    $.__views.row.add($.__views.dataValuta);
    $.__views.codTipoMovimento = Ti.UI.createLabel({
        height: "70dp",
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "codTipoMovimento"
    });
    $.__views.row.add($.__views.codTipoMovimento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("VALORE PASSATO: " + args.description);
    $.description.text = "CAZZO";
    $.importo.text = "CAZZO";
    $.dataOperazione.text = "CAZZO";
    $.dataValuta.text = "CAZZO";
    $.codTipoMovimento.text = "CAZZO";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;