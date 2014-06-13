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
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId13"
    });
    __alloyId2.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createView({
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
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.statoMovimento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Stato",
        width: 110,
        color: "#444",
        id: "statoMovimento"
    });
    $.__views.__alloyId14.add($.__views.statoMovimento);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.pkrStatoMovimento = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrStatoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId14.add($.__views.pkrStatoMovimento);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId16"
    });
    __alloyId2.push($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
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
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.variabilita = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Variabilità",
        width: 110,
        color: "#444",
        id: "variabilita"
    });
    $.__views.__alloyId17.add($.__views.variabilita);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.pkrVariabilita = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrVariabilita",
        selectionIndicator: "true"
    });
    $.__views.__alloyId17.add($.__views.pkrVariabilita);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId19"
    });
    __alloyId2.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
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
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId20.add($.__views.leftSubWrapper);
    $.__views.dotSwitchImageLeft = Ti.UI.createImageView({
        width: 25,
        height: Ti.UI.SIZE,
        image: "/images/dot-switch-on.png",
        left: 5,
        id: "dotSwitchImageLeft"
    });
    $.__views.leftSubWrapper.add($.__views.dotSwitchImageLeft);
    $.__views.ordinarioLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Ordinario",
        height: Ti.UI.FILL,
        color: "#444",
        id: "ordinarioLabel"
    });
    $.__views.leftSubWrapper.add($.__views.ordinarioLabel);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId20.add($.__views.rightSubWrapper);
    $.__views.dotSwitchImageRight = Ti.UI.createImageView({
        width: 25,
        height: Ti.UI.SIZE,
        image: "/images/dot-switch-off.png",
        left: 5,
        id: "dotSwitchImageRight"
    });
    $.__views.rightSubWrapper.add($.__views.dotSwitchImageRight);
    $.__views.straordinarioLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Straordinario",
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        color: "#444",
        id: "straordinarioLabel"
    });
    $.__views.rightSubWrapper.add($.__views.straordinarioLabel);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId22"
    });
    __alloyId2.push($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createView({
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
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId23.add($.__views.leftSubWrapper);
    $.__views.dichRedditiLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Dichiarazione dei Redditi",
        height: Ti.UI.FILL,
        color: "#444",
        id: "dichRedditiLabel"
    });
    $.__views.leftSubWrapper.add($.__views.dichRedditiLabel);
    $.__views.ovalSwitchContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 0,
        id: "ovalSwitchContainer"
    });
    $.__views.__alloyId23.add($.__views.ovalSwitchContainer);
    $.__views.ovalSwitchRedditi = Ti.UI.createImageView({
        width: 30,
        height: Ti.UI.SIZE,
        image: "/images/oval-switch-off.png",
        right: 5,
        id: "ovalSwitchRedditi"
    });
    $.__views.ovalSwitchContainer.add($.__views.ovalSwitchRedditi);
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
    var rowsStatoMovimento = [ Ti.UI.createPickerRow({
        title: "",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("statoMovimento"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsStatoMovimento.push(pkrRow);
    });
    $.pkrStatoMovimento.add(rowsStatoMovimento);
    var rowsVariabilita = [ Ti.UI.createPickerRow({
        title: "",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("tipoVariabilita"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsVariabilita.push(pkrRow);
    });
    $.pkrVariabilita.add(rowsVariabilita);
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_salva!click!saveCashflow"] && $.__views.mn_salva.addEventListener("click", saveCashflow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;