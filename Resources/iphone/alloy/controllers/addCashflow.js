function Controller() {
    function setOrdinario() {
        staordinario = false;
        $.dotSwitchImageLeft.image = "/images/dot-switch-on.png";
        $.dotSwitchImageRight.image = "/images/dot-switch-off.png";
        Ti.API.info("STRAORDINARIO FLAG: " + staordinario);
    }
    function setStraordinario() {
        staordinario = true;
        $.dotSwitchImageLeft.image = "/images/dot-switch-off.png";
        $.dotSwitchImageRight.image = "/images/dot-switch-on.png";
        Ti.API.info("STRAORDINARIO FLAG: " + staordinario);
    }
    function toggleRedditi() {
        dichRedditi = !dichRedditi;
        $.ovalSwitchRedditi.image = dichRedditi ? "/images/oval-switch-on.png" : "/images/oval-switch-off.png";
        Ti.API.info("REDDITI FLAG: " + dichRedditi);
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
    function showDatePicker(e) {
        Ti.API.info("SOURCE CLICK: " + JSON.stringify(e));
        Alloy.createController("datePicker", {
            onlyDate: true,
            _callback: function(p_data) {
                e.source.text = moment(p_data).format("L");
                e.source.dataRaw = moment(p_data);
                Ti.API.info("DATARAW: " + e.source.dataRaw);
            }
        });
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
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
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
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
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
    $.__views.__alloyId2.add($.__views.importoLabel);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.importoValue = Ti.UI.createTextField({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        backgroundColor: "#fff",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        width: 200,
        wordWrap: false,
        hintText: "0.00",
        id: "importoValue"
    });
    $.__views.__alloyId2.add($.__views.importoValue);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
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
    $.__views.__alloyId2.add($.__views.valutaImg);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId5"
    });
    __alloyId0.push($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
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
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
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
    $.__views.__alloyId6.add($.__views.tipoMovimento);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.pkrTipoMovimento = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrTipoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId6.add($.__views.pkrTipoMovimento);
    $.__views.__alloyId8 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId8"
    });
    __alloyId0.push($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
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
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
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
    $.__views.__alloyId9.add($.__views.pagamentoIncasso);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.pkrPagamentoIncasso = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrPagamentoIncasso",
        selectionIndicator: "true"
    });
    $.__views.__alloyId9.add($.__views.pkrPagamentoIncasso);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId11"
    });
    __alloyId0.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createView({
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
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
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
    $.__views.__alloyId12.add($.__views.statoMovimento);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.pkrStatoMovimento = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrStatoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId12.add($.__views.pkrStatoMovimento);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId14"
    });
    __alloyId0.push($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createView({
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
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
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
    $.__views.__alloyId15.add($.__views.variabilita);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.pkrVariabilita = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrVariabilita",
        selectionIndicator: "true"
    });
    $.__views.__alloyId15.add($.__views.pkrVariabilita);
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId17"
    });
    __alloyId0.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
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
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId18.add($.__views.leftSubWrapper);
    setOrdinario ? $.__views.leftSubWrapper.addEventListener("click", setOrdinario) : __defers["$.__views.leftSubWrapper!click!setOrdinario"] = true;
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
    $.__views.__alloyId19 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId18.add($.__views.rightSubWrapper);
    setStraordinario ? $.__views.rightSubWrapper.addEventListener("click", setStraordinario) : __defers["$.__views.rightSubWrapper!click!setStraordinario"] = true;
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
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId20"
    });
    __alloyId0.push($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
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
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    toggleRedditi ? $.__views.__alloyId21.addEventListener("click", toggleRedditi) : __defers["$.__views.__alloyId21!click!toggleRedditi"] = true;
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId21.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId21.add($.__views.ovalSwitchContainer);
    $.__views.ovalSwitchRedditi = Ti.UI.createImageView({
        width: 30,
        height: Ti.UI.SIZE,
        image: "/images/oval-switch-off.png",
        right: 5,
        id: "ovalSwitchRedditi"
    });
    $.__views.ovalSwitchContainer.add($.__views.ovalSwitchRedditi);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId22"
    });
    __alloyId0.push($.__views.__alloyId22);
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
    $.__views.dataValutaLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Data Valuta",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataValutaLabel"
    });
    $.__views.leftSubWrapper.add($.__views.dataValutaLabel);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId23.add($.__views.rightSubWrapper);
    $.__views.dataValuta = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataValuta",
        dataRaw: ""
    });
    $.__views.rightSubWrapper.add($.__views.dataValuta);
    showDatePicker ? $.__views.dataValuta.addEventListener("click", showDatePicker) : __defers["$.__views.dataValuta!click!showDatePicker"] = true;
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId25"
    });
    __alloyId0.push($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createView({
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
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId26.add($.__views.leftSubWrapper);
    $.__views.dataScadenzaLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Data Scadenza",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataScadenzaLabel"
    });
    $.__views.leftSubWrapper.add($.__views.dataScadenzaLabel);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId27"
    });
    $.__views.__alloyId26.add($.__views.__alloyId27);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId26.add($.__views.rightSubWrapper);
    $.__views.dataScadenza = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataScadenza",
        dataRaw: ""
    });
    $.__views.rightSubWrapper.add($.__views.dataScadenza);
    showDatePicker ? $.__views.dataScadenza.addEventListener("click", showDatePicker) : __defers["$.__views.dataScadenza!click!showDatePicker"] = true;
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId28"
    });
    __alloyId0.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createView({
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
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId29.add($.__views.leftSubWrapper);
    $.__views.dataPagamentoLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Data Pagamento",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataPagamentoLabel"
    });
    $.__views.leftSubWrapper.add($.__views.dataPagamentoLabel);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId30"
    });
    $.__views.__alloyId29.add($.__views.__alloyId30);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId29.add($.__views.rightSubWrapper);
    $.__views.dataPagamento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataPagamento",
        dataRaw: ""
    });
    $.__views.rightSubWrapper.add($.__views.dataPagamento);
    showDatePicker ? $.__views.dataPagamento.addEventListener("click", showDatePicker) : __defers["$.__views.dataPagamento!click!showDatePicker"] = true;
    $.__views.newCashflowTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId0,
        id: "newCashflowTable"
    });
    $.__views.win.add($.__views.newCashflowTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var dichRedditi = false;
    var staordinario = false;
    $.dataValuta.text = moment().format("L");
    $.dataValuta.dataRaw = moment();
    $.dataScadenza.text = moment().format("L");
    $.dataScadenza.dataRaw = moment();
    $.dataPagamento.text = moment().format("L");
    $.dataPagamento.dataRaw = moment();
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
    __defers["$.__views.leftSubWrapper!click!setOrdinario"] && $.__views.leftSubWrapper.addEventListener("click", setOrdinario);
    __defers["$.__views.rightSubWrapper!click!setStraordinario"] && $.__views.rightSubWrapper.addEventListener("click", setStraordinario);
    __defers["$.__views.__alloyId21!click!toggleRedditi"] && $.__views.__alloyId21.addEventListener("click", toggleRedditi);
    __defers["$.__views.dataValuta!click!showDatePicker"] && $.__views.dataValuta.addEventListener("click", showDatePicker);
    __defers["$.__views.dataScadenza!click!showDatePicker"] && $.__views.dataScadenza.addEventListener("click", showDatePicker);
    __defers["$.__views.dataPagamento!click!showDatePicker"] && $.__views.dataPagamento.addEventListener("click", showDatePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;