function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId1() {
        $.__views.win.removeEventListener("open", __alloyId1);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId0 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-save2.png",
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId0, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId0, Alloy.Android.menuItemCreateArgs));
            saveCashflow ? $.__views.mn_salva.addEventListener("click", saveCashflow) : __defers["$.__views.mn_salva!click!saveCashflow"] = true;
            if ($.__views.win.activity.actionBar) {
                $.__views.win.activity.actionBar.displayHomeAsUp = true;
                $.__views.win.activity.actionBar.icon = "images/logo-test.png";
                $.__views.win.activity.actionBar.onHomeIconItemSelected = homeIconSelected;
            }
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
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
    function homeIconSelected() {
        $.win.close({
            animate: true
        });
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
    function saveCashflow() {
        var modCashflowJSON = Alloy.Models.Cashflow_template.toJSON();
        modCashflowJSON = _.omit(modCashflowJSON, "kind.id");
        Ti.API.info("SEL MOVIMENTO: " + $.pkrTipoMovimento.getSelectedRow(0).id);
        if ($.importoValue.value > 0 && "9999" != $.pkrTipoMovimento.getSelectedRow(0).id) {
            modCashflowJSON.name = Alloy.Models.Post_template.get("name");
            modCashflowJSON.description = Alloy.Models.Post_template.get("description");
            modCashflowJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
            modCashflowJSON.category = Alloy.Models.Post_template.get("category");
            modCashflowJSON.data.importo = $.importoValue.value;
            modCashflowJSON.data.tipoMovimento = {
                id: $.pkrTipoMovimento.getSelectedRow(0).id,
                codice: $.pkrTipoMovimento.getSelectedRow(0).codice,
                descrizioneBreve: $.pkrTipoMovimento.getSelectedRow(0).descrizioneBreve
            };
            modCashflowJSON.data.pagamentoIncasso = {
                id: $.pkrPagamentoIncasso.getSelectedRow(0).id,
                codice: $.pkrPagamentoIncasso.getSelectedRow(0).codice,
                descrizioneBreve: $.pkrPagamentoIncasso.getSelectedRow(0).title
            };
            modCashflowJSON.data.statoMovimento = {
                id: $.pkrStatoMovimento.getSelectedRow(0).id,
                codice: $.pkrStatoMovimento.getSelectedRow(0).codice,
                descrizioneBreve: $.pkrStatoMovimento.getSelectedRow(0).title
            };
            modCashflowJSON.data.tipoVariabilita = {
                id: $.pkrVariabilita.getSelectedRow(0).id,
                codice: $.pkrVariabilita.getSelectedRow(0).codice,
                descrizioneBreve: $.pkrVariabilita.getSelectedRow(0).title
            };
            modCashflowJSON.data.flagOrdinarioStraordinario = staordinario;
            modCashflowJSON.data.flagDichiarazioneRedditi = dichRedditi;
            modCashflowJSON.data.dataValuta = $.dataValuta.dataRaw;
            modCashflowJSON.data.dataScadenza = $.dataScadenza.dataRaw;
            modCashflowJSON.data.dataPagamentoIncasso = $.dataPagamento.dataRaw;
            Ti.API.info("ASPETTO NON ANCORA STRINGIFIZZATO: " + JSON.stringify(modCashflowJSON));
            modCashflowJSON.data = JSON.stringify(modCashflowJSON.data);
            Ti.API.info("ASPETTO VALIDATO: " + JSON.stringify(modCashflowJSON));
            args(modCashflowJSON);
            $.win.close();
        } else alert("I campi Importo e Tipo Movimento sono obbligatori");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addCashflow";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        title: "Nuovo Cashflow"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
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
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
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
    toggleRedditi ? $.__views.__alloyId23.addEventListener("click", toggleRedditi) : __defers["$.__views.__alloyId23!click!toggleRedditi"] = true;
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
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId24"
    });
    __alloyId2.push($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
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
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId25.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId26 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId26"
    });
    $.__views.__alloyId25.add($.__views.__alloyId26);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId25.add($.__views.rightSubWrapper);
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
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId27"
    });
    __alloyId2.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createView({
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
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId28.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId29 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId28.add($.__views.rightSubWrapper);
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
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId30"
    });
    __alloyId2.push($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createView({
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
        id: "__alloyId31"
    });
    $.__views.__alloyId30.add($.__views.__alloyId31);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId31.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId32 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId31.add($.__views.rightSubWrapper);
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
        data: __alloyId2,
        id: "newCashflowTable"
    });
    $.__views.win.add($.__views.newCashflowTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
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
    __defers["$.__views.mn_salva!click!saveCashflow"] && $.__views.mn_salva.addEventListener("click", saveCashflow);
    __defers["$.__views.leftSubWrapper!click!setOrdinario"] && $.__views.leftSubWrapper.addEventListener("click", setOrdinario);
    __defers["$.__views.rightSubWrapper!click!setStraordinario"] && $.__views.rightSubWrapper.addEventListener("click", setStraordinario);
    __defers["$.__views.__alloyId23!click!toggleRedditi"] && $.__views.__alloyId23.addEventListener("click", toggleRedditi);
    __defers["$.__views.dataValuta!click!showDatePicker"] && $.__views.dataValuta.addEventListener("click", showDatePicker);
    __defers["$.__views.dataScadenza!click!showDatePicker"] && $.__views.dataScadenza.addEventListener("click", showDatePicker);
    __defers["$.__views.dataPagamento!click!showDatePicker"] && $.__views.dataPagamento.addEventListener("click", showDatePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;