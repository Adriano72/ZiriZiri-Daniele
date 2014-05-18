function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addCashflow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuovo CashFlow"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.pkrTipoMovimento = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrTipoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId1.add($.__views.pkrTipoMovimento);
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId2"
    });
    __alloyId0.push($.__views.__alloyId2);
    $.__views.importo = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        hintText: "Importo",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "importo"
    });
    $.__views.__alloyId2.add($.__views.importo);
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId3"
    });
    __alloyId0.push($.__views.__alloyId3);
    $.__views.pkrPagamentoIncasso = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrPagamentoIncasso",
        selectionIndicator: "true"
    });
    $.__views.__alloyId3.add($.__views.pkrPagamentoIncasso);
    $.__views.newCashflowTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId0,
        id: "newCashflowTable"
    });
    $.__views.window.add($.__views.newCashflowTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rowsTipoMov = [ Ti.UI.createPickerRow({
        title: "Tipo Movimento",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoTipoMov"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsTipoMov.push(pkrRow);
    });
    $.pkrTipoMovimento.add(rowsTipoMov);
    var rowsPagamIncasso = [ Ti.UI.createPickerRow({
        title: "Pagamento Incasso",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoPagamIncasso"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsPagamIncasso.push(pkrRow);
    });
    $.pkrPagamentoIncasso.add(rowsPagamIncasso);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;