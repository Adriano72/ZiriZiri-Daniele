function Controller() {
    function __alloyId1() {
        $.__views.window.removeEventListener("open", __alloyId1);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId0 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/785-floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId0, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId0, Alloy.Android.menuItemCreateArgs));
            saveAspect ? $.__views.salva.addEventListener("click", saveAspect) : __defers["$.__views.salva!click!saveAspect"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function saveAspect() {
        if (9999 != $.pkrPagamentoIncasso.getSelectedRow(0).id && 9999 != $.pkrTipoMovimento.getSelectedRow(0).id) {
            var tipoMovCodice = $.pkrTipoMovimento.getSelectedRow(0).codice;
            var tipoMovId = $.pkrTipoMovimento.getSelectedRow(0).id;
            var tipoMovVersion = $.pkrTipoMovimento.getSelectedRow(0).version;
            var pagamIncID = $.pkrPagamentoIncasso.getSelectedRow(0).id;
            var pagamIncVersion = $.pkrPagamentoIncasso.getSelectedRow(0).version;
            var objCashFlow = {
                kind: {
                    code: "CASHFLOWDATATYPE_CODE"
                },
                tipoMovimento: {
                    codice: tipoMovCodice,
                    id: tipoMovId,
                    version: tipoMovVersion
                },
                pagamentoIncasso: {
                    id: pagamIncID,
                    version: pagamIncVersion
                },
                importo: $.importo.value
            };
            args(objCashFlow);
            $.window.close();
        } else alert("I campi Tipo Movimento e Pagamento Incasso sono obbligatori!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addCashflow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuovo CashFlow"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.window.addEventListener("open", __alloyId1);
    var __alloyId2 = [];
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
    __alloyId2.push($.__views.__alloyId3);
    $.__views.pkrTipoMovimento = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrTipoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId3.add($.__views.pkrTipoMovimento);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.importo = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Importo",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "importo"
    });
    $.__views.__alloyId4.add($.__views.importo);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    $.__views.pkrPagamentoIncasso = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrPagamentoIncasso",
        selectionIndicator: "true"
    });
    $.__views.__alloyId5.add($.__views.pkrPagamentoIncasso);
    $.__views.newCashflowTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId2,
        id: "newCashflowTable"
    });
    $.__views.window.add($.__views.newCashflowTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
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
    __defers["$.__views.salva!click!saveAspect"] && $.__views.salva.addEventListener("click", saveAspect);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;