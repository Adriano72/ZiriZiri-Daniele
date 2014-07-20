function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openEvent() {
        theActionBar = $.win.activity.actionBar;
        $.win.activity.invalidateOptionsMenu();
        theActionBar = $.win.activity.actionBar;
        if (void 0 != theActionBar) {
            theActionBar.displayHomeAsUp = true;
            theActionBar.setIcon("images/kernel-finance-on.png");
            theActionBar.onHomeIconItemSelected = function() {
                $.win.close({
                    animate: true
                });
            };
        }
        $.win.title = args.name;
    }
    function testExistence(param) {
        return !(_.isUndefined(param) || _.isNull(param));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailCASHFLOW";
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
        title: "Cashflow"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.__alloyId126 = Ti.UI.createScrollView({
        id: "__alloyId126"
    });
    $.__views.win.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        layout: "vertical",
        touchEnabled: false,
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId128"
    });
    $.__views.__alloyId127.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Importo:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId129"
    });
    $.__views.__alloyId128.add($.__views.__alloyId129);
    $.__views.importo = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "importo"
    });
    $.__views.__alloyId128.add($.__views.importo);
    $.__views.__alloyId130 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId130"
    });
    $.__views.__alloyId127.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Movimento:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.movimento = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "movimento"
    });
    $.__views.__alloyId130.add($.__views.movimento);
    $.__views.__alloyId132 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId132"
    });
    $.__views.__alloyId127.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Pagamento:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId133"
    });
    $.__views.__alloyId132.add($.__views.__alloyId133);
    $.__views.pagamento = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "pagamento"
    });
    $.__views.__alloyId132.add($.__views.pagamento);
    $.__views.__alloyId134 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId134"
    });
    $.__views.__alloyId127.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Variabilità:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.variabilita = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "variabilita"
    });
    $.__views.__alloyId134.add($.__views.variabilita);
    $.__views.__alloyId136 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId136"
    });
    $.__views.__alloyId127.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Stato:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId137"
    });
    $.__views.__alloyId136.add($.__views.__alloyId137);
    $.__views.stato = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "stato"
    });
    $.__views.__alloyId136.add($.__views.stato);
    $.__views.__alloyId138 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId138"
    });
    $.__views.__alloyId127.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Tipologia:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.tipologia = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "tipologia"
    });
    $.__views.__alloyId138.add($.__views.tipologia);
    $.__views.__alloyId140 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId140"
    });
    $.__views.__alloyId127.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Dichiarazione dei Redditi:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId141"
    });
    $.__views.__alloyId140.add($.__views.__alloyId141);
    $.__views.redditi = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "redditi"
    });
    $.__views.__alloyId140.add($.__views.redditi);
    $.__views.__alloyId142 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId142"
    });
    $.__views.__alloyId127.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Data Valuta:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId143"
    });
    $.__views.__alloyId142.add($.__views.__alloyId143);
    $.__views.datavaluta = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "datavaluta"
    });
    $.__views.__alloyId142.add($.__views.datavaluta);
    $.__views.__alloyId144 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId144"
    });
    $.__views.__alloyId127.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Data Scadenza:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId145"
    });
    $.__views.__alloyId144.add($.__views.__alloyId145);
    $.__views.datascadenza = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "datascadenza"
    });
    $.__views.__alloyId144.add($.__views.datascadenza);
    $.__views.__alloyId146 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        bottom: 20,
        id: "__alloyId146"
    });
    $.__views.__alloyId127.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Data Pagamento:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.datapagamento = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "datapagamento"
    });
    $.__views.__alloyId146.add($.__views.datapagamento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    if ("Entrata" == args.data.tipoMovimento.descrizioneBreve) {
        $.importo.text = "+" + args.data.importo + "€";
        $.importo.color = "#358A27";
    } else if ("Uscita" == args.data.tipoMovimento.descrizioneBreve) {
        $.importo.text = "-" + args.data.importo + "€";
        $.importo.color = "#E01D1D";
    } else {
        $.importo.text = args.data.importo + "€";
        $.importo.color = "#444";
    }
    $.movimento.text = testExistence(args.data.tipoMovimento) ? args.data.tipoMovimento.descrizioneBreve : "";
    $.pagamento.text = testExistence(args.data.pagamentoIncasso) ? args.data.pagamentoIncasso.descrizioneBreve : "";
    $.variabilita.text = testExistence(args.data.tipoVariabilita) ? args.data.tipoVariabilita.descrizioneBreve : "";
    $.stato.text = testExistence(args.data.statoMovimento) ? args.data.statoMovimento.descrizioneBreve : "";
    $.tipologia.text = args.data.flagOrdinarioStraordinario ? "Straordinario" : "Ordinario";
    $.redditi.text = args.data.flagDichiarazioneRedditi ? "Si" : "No";
    $.datavaluta.text = moment(args.data.dataValuta).format("L");
    $.datascadenza.text = moment(args.data.dataScadenza).format("L");
    $.datapagamento.text = moment(args.data.dataPagamentoIncasso).format("L");
    $.win.open();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;