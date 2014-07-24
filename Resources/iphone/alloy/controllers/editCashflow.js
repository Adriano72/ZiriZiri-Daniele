function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

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
    this.__controllerPath = "editCashflow";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        title: "Edit Cashflow"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId105 = [];
    $.__views.__alloyId106 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId106"
    });
    __alloyId105.push($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createView({
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
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
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
    $.__views.__alloyId107.add($.__views.importoLabel);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId108"
    });
    $.__views.__alloyId107.add($.__views.__alloyId108);
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
    $.__views.__alloyId107.add($.__views.importoValue);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId109"
    });
    $.__views.__alloyId107.add($.__views.__alloyId109);
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
    $.__views.__alloyId107.add($.__views.valutaImg);
    $.__views.__alloyId110 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId110"
    });
    __alloyId105.push($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createView({
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
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
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
    $.__views.__alloyId111.add($.__views.tipoMovimento);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId112"
    });
    $.__views.__alloyId111.add($.__views.__alloyId112);
    $.__views.pkrTipoMovimento = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrTipoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId111.add($.__views.pkrTipoMovimento);
    $.__views.__alloyId113 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId113"
    });
    __alloyId105.push($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
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
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
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
    $.__views.__alloyId114.add($.__views.pagamentoIncasso);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.pkrPagamentoIncasso = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrPagamentoIncasso",
        selectionIndicator: "true"
    });
    $.__views.__alloyId114.add($.__views.pkrPagamentoIncasso);
    $.__views.__alloyId116 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId116"
    });
    __alloyId105.push($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
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
        id: "__alloyId117"
    });
    $.__views.__alloyId116.add($.__views.__alloyId117);
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
    $.__views.__alloyId117.add($.__views.statoMovimento);
    $.__views.__alloyId118 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.pkrStatoMovimento = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrStatoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId117.add($.__views.pkrStatoMovimento);
    $.__views.__alloyId119 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId119"
    });
    __alloyId105.push($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createView({
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
        id: "__alloyId120"
    });
    $.__views.__alloyId119.add($.__views.__alloyId120);
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
    $.__views.__alloyId120.add($.__views.variabilita);
    $.__views.__alloyId121 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.pkrVariabilita = Ti.UI.createPicker({
        color: "#999",
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#FFF",
        id: "pkrVariabilita",
        selectionIndicator: "true"
    });
    $.__views.__alloyId120.add($.__views.pkrVariabilita);
    $.__views.__alloyId122 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId122"
    });
    __alloyId105.push($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createView({
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
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId123.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId124 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId124"
    });
    $.__views.__alloyId123.add($.__views.__alloyId124);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId123.add($.__views.rightSubWrapper);
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
    $.__views.__alloyId125 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId125"
    });
    __alloyId105.push($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
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
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    toggleRedditi ? $.__views.__alloyId126.addEventListener("click", toggleRedditi) : __defers["$.__views.__alloyId126!click!toggleRedditi"] = true;
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId126.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId126.add($.__views.ovalSwitchContainer);
    $.__views.ovalSwitchRedditi = Ti.UI.createImageView({
        width: 30,
        height: Ti.UI.SIZE,
        image: "/images/oval-switch-off.png",
        right: 5,
        id: "ovalSwitchRedditi"
    });
    $.__views.ovalSwitchContainer.add($.__views.ovalSwitchRedditi);
    $.__views.__alloyId127 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId127"
    });
    __alloyId105.push($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
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
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId128.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId129 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId128.add($.__views.rightSubWrapper);
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
    $.__views.__alloyId130 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId130"
    });
    __alloyId105.push($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createView({
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
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId131.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId132 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId132"
    });
    $.__views.__alloyId131.add($.__views.__alloyId132);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId131.add($.__views.rightSubWrapper);
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
    $.__views.__alloyId133 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId133"
    });
    __alloyId105.push($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
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
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId134.add($.__views.leftSubWrapper);
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
    $.__views.__alloyId135 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId134.add($.__views.rightSubWrapper);
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
        data: __alloyId105,
        id: "newCashflowTable"
    });
    $.__views.win.add($.__views.newCashflowTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var dataCashflow = JSON.parse(args.aspetto.data);
    Ti.API.info("ARGS ****: " + JSON.stringify(dataCashflow));
    var dichRedditi = false;
    var staordinario = false;
    $.importoValue.value = dataCashflow.importo;
    $.tipoMovimento.value = dataCashflow.tipoMovimento.descrizioneBreve;
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
    _.forEach(Ti.App.Properties.getObject("elencoTipoMov"), function(value, key) {
        value.id == dataCashflow.tipoMovimento.id && Ti.API.info("MATCH: " + key);
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
    __defers["$.__views.leftSubWrapper!click!setOrdinario"] && $.__views.leftSubWrapper.addEventListener("click", setOrdinario);
    __defers["$.__views.rightSubWrapper!click!setStraordinario"] && $.__views.rightSubWrapper.addEventListener("click", setStraordinario);
    __defers["$.__views.__alloyId126!click!toggleRedditi"] && $.__views.__alloyId126.addEventListener("click", toggleRedditi);
    __defers["$.__views.dataValuta!click!showDatePicker"] && $.__views.dataValuta.addEventListener("click", showDatePicker);
    __defers["$.__views.dataScadenza!click!showDatePicker"] && $.__views.dataScadenza.addEventListener("click", showDatePicker);
    __defers["$.__views.dataPagamento!click!showDatePicker"] && $.__views.dataPagamento.addEventListener("click", showDatePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;