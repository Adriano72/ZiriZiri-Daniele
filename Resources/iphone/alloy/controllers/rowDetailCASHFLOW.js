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
    $.__views.__alloyId178 = Ti.UI.createScrollView({
        id: "__alloyId178"
    });
    $.__views.win.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createView({
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
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createLabel({
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
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
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
    $.__views.__alloyId180.add($.__views.importo);
    $.__views.__alloyId182 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId182"
    });
    $.__views.__alloyId179.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createLabel({
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
        id: "__alloyId183"
    });
    $.__views.__alloyId182.add($.__views.__alloyId183);
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
    $.__views.__alloyId182.add($.__views.movimento);
    $.__views.__alloyId184 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId184"
    });
    $.__views.__alloyId179.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createLabel({
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
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
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
    $.__views.__alloyId184.add($.__views.pagamento);
    $.__views.__alloyId186 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId186"
    });
    $.__views.__alloyId179.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createLabel({
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
        id: "__alloyId187"
    });
    $.__views.__alloyId186.add($.__views.__alloyId187);
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
    $.__views.__alloyId186.add($.__views.variabilita);
    $.__views.__alloyId188 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId188"
    });
    $.__views.__alloyId179.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createLabel({
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
        id: "__alloyId189"
    });
    $.__views.__alloyId188.add($.__views.__alloyId189);
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
    $.__views.__alloyId188.add($.__views.stato);
    $.__views.__alloyId190 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId190"
    });
    $.__views.__alloyId179.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createLabel({
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
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
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
    $.__views.__alloyId190.add($.__views.tipologia);
    $.__views.__alloyId192 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId192"
    });
    $.__views.__alloyId179.add($.__views.__alloyId192);
    $.__views.__alloyId193 = Ti.UI.createLabel({
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
        id: "__alloyId193"
    });
    $.__views.__alloyId192.add($.__views.__alloyId193);
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
    $.__views.__alloyId192.add($.__views.redditi);
    $.__views.__alloyId194 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId194"
    });
    $.__views.__alloyId179.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createLabel({
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
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
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
    $.__views.__alloyId194.add($.__views.datavaluta);
    $.__views.__alloyId196 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId196"
    });
    $.__views.__alloyId179.add($.__views.__alloyId196);
    $.__views.__alloyId197 = Ti.UI.createLabel({
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
        id: "__alloyId197"
    });
    $.__views.__alloyId196.add($.__views.__alloyId197);
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
    $.__views.__alloyId196.add($.__views.datascadenza);
    $.__views.__alloyId198 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        bottom: 20,
        id: "__alloyId198"
    });
    $.__views.__alloyId179.add($.__views.__alloyId198);
    $.__views.__alloyId199 = Ti.UI.createLabel({
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
        id: "__alloyId199"
    });
    $.__views.__alloyId198.add($.__views.__alloyId199);
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
    $.__views.__alloyId198.add($.__views.datapagamento);
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