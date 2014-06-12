function Controller() {
    function __alloyId1() {
        $.__views.win.removeEventListener("open", __alloyId1);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId0 = {
                icon: "/images/top-save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId0, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId0, Alloy.Android.menuItemCreateArgs));
            saveCashflow ? $.__views.mn_salva.addEventListener("click", saveCashflow) : __defers["$.__views.mn_salva!click!saveCashflow"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function openEvent() {
        theActionBar = $.win.activity.actionBar;
        $.win.activity.invalidateOptionsMenu();
        theActionBar = $.win.activity.actionBar;
        if (void 0 != theActionBar) {
            theActionBar.displayHomeAsUp = true;
            theActionBar.setIcon("images/logo-test.png");
            theActionBar.onHomeIconItemSelected = function() {
                $.win.close({
                    animate: true
                });
            };
        }
    }
    function saveCashflow() {
        if (9999 != $.pkrPagamentoIncasso.getSelectedRow(0).id && 9999 != $.pkrTipoMovimento.getSelectedRow(0).id) {
            var tipoMovCodice = $.pkrTipoMovimento.getSelectedRow(0).codice;
            var tipoMovId = $.pkrTipoMovimento.getSelectedRow(0).id;
            var tipoMovVersion = $.pkrTipoMovimento.getSelectedRow(0).version;
            var pagamIncID = $.pkrPagamentoIncasso.getSelectedRow(0).id;
            var pagamIncVersion = $.pkrPagamentoIncasso.getSelectedRow(0).version;
            var objCashFlow = {
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
            $.win.close();
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
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        title: "Nuovo CashFlow"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId1);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.importoLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Importo",
        width: 110,
        color: "#444",
        id: "importoLabel"
    });
    $.__views.__alloyId4.add($.__views.importoLabel);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.importoValue = Ti.UI.createTextField({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        backgroundColor: "#fff",
        width: 200,
        wordWrap: false,
        hintText: "0.00",
        id: "importoValue"
    });
    $.__views.__alloyId4.add($.__views.importoValue);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.valutaImg = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        right: 5,
        text: "€",
        textAlign: "center",
        width: 20,
        color: "#666",
        id: "valutaImg"
    });
    $.__views.__alloyId4.add($.__views.valutaImg);
    $.__views.__alloyId7 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId7"
    });
    __alloyId2.push($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.tipoMovimento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Tipologia",
        width: 110,
        color: "#444",
        id: "tipoMovimento"
    });
    $.__views.__alloyId8.add($.__views.tipoMovimento);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.pkrTipoMovimento = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrTipoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId8.add($.__views.pkrTipoMovimento);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId10"
    });
    __alloyId2.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.pagamentoIncasso = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Pagamento",
        width: 110,
        color: "#444",
        id: "pagamentoIncasso"
    });
    $.__views.__alloyId11.add($.__views.pagamentoIncasso);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.pkrPagamentoIncasso = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrPagamentoIncasso",
        selectionIndicator: "true"
    });
    $.__views.__alloyId11.add($.__views.pkrPagamentoIncasso);
    $.__views.newCashflowTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId2,
        id: "newCashflowTable"
    });
    $.__views.win.add($.__views.newCashflowTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var rowsTipoMov = [ Ti.UI.createPickerRow({
        title: "",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoTipoMov"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsTipoMov.push(pkrRow);
    });
    $.pkrTipoMovimento.add(rowsTipoMov);
    var rowsPagamIncasso = [ Ti.UI.createPickerRow({
        title: "",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoPagamIncasso"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsPagamIncasso.push(pkrRow);
    });
    $.pkrPagamentoIncasso.add(rowsPagamIncasso);
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_salva!click!saveCashflow"] && $.__views.mn_salva.addEventListener("click", saveCashflow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;