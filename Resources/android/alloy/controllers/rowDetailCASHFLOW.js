function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId217() {
        $.__views.win.removeEventListener("open", __alloyId217);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId216 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-edit.png",
                id: "mn_edit",
                title: "Modifica"
            };
            $.__views.mn_edit = e.menu.add(_.pick(__alloyId216, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_edit.applyProperties(_.omit(__alloyId216, Alloy.Android.menuItemCreateArgs));
            editAspect ? $.__views.mn_edit.addEventListener("click", editAspect) : __defers["$.__views.mn_edit!click!editAspect"] = true;
            if ($.__views.win.activity.actionBar) {
                $.__views.win.activity.actionBar.title = "Dettaglio Cashflow";
                $.__views.win.activity.actionBar.displayHomeAsUp = true;
                $.__views.win.activity.actionBar.icon = "images/kernel-finance-on.png";
                $.__views.win.activity.actionBar.onHomeIconItemSelected = homeIconSelected;
            }
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function homeIconSelected() {
        $.win.close({
            animate: true
        });
    }
    function openEvent() {}
    function editAspect() {
        Alloy.createController("editCashflow", {
            _callback: function(aspettoEditato) {
                editedFlag = true;
                Ti.API.info("ASP EDITATO: " + JSON.stringify(aspettoEditato));
                var aspettoToJSON = aspettoEditato.data;
                if ("Entrata" == aspettoToJSON.tipoMovimento.descrizioneBreve) {
                    $.importo.text = "+" + aspettoToJSON.importo + "€";
                    $.importo.color = "#358A27";
                } else if ("Uscita" == aspettoToJSON.tipoMovimento.descrizioneBreve) {
                    $.importo.text = "-" + aspettoToJSON.importo + "€";
                    $.importo.color = "#E01D1D";
                } else {
                    $.importo.text = aspettoToJSON.importo + "€";
                    $.importo.color = "#444";
                }
                $.movimento.text = testExistence(aspettoToJSON.tipoMovimento) ? aspettoToJSON.tipoMovimento.descrizioneBreve : "";
                $.pagamento.text = testExistence(aspettoToJSON.pagamentoIncasso) ? aspettoToJSON.pagamentoIncasso.descrizioneBreve : "";
                $.variabilita.text = testExistence(aspettoToJSON.tipoVariabilita) ? aspettoToJSON.tipoVariabilita.descrizioneBreve : "";
                $.stato.text = testExistence(aspettoToJSON.statoMovimento) ? aspettoToJSON.statoMovimento.descrizioneBreve : "";
                $.tipologia.text = aspettoToJSON.flagOrdinarioStraordinario ? "Straordinario" : "Ordinario";
                $.redditi.text = aspettoToJSON.flagDichiarazioneRedditi ? "Si" : "No";
                $.datavaluta.text = moment(aspettoToJSON.dataValuta).format("L");
                $.datascadenza.text = moment(aspettoToJSON.dataScadenza).format("L");
                $.datapagamento.text = moment(aspettoToJSON.dataPagamentoIncasso).format("L");
                args._callback(aspettoEditato);
            },
            aspetto: parsedAspect
        }).getView().open();
        Ti.API.info("ID Aspetto: " + selAspect.id);
    }
    function testExistence(param) {
        return !(_.isUndefined(param) || _.isNull(param));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailCASHFLOW";
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
        title: "Dettaglio Cashflow"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId217);
    $.__views.__alloyId218 = Ti.UI.createScrollView({
        id: "__alloyId218"
    });
    $.__views.win.add($.__views.__alloyId218);
    $.__views.__alloyId219 = Ti.UI.createView({
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
        id: "__alloyId219"
    });
    $.__views.__alloyId218.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId220"
    });
    $.__views.__alloyId219.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createLabel({
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
        id: "__alloyId221"
    });
    $.__views.__alloyId220.add($.__views.__alloyId221);
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
    $.__views.__alloyId220.add($.__views.importo);
    $.__views.__alloyId222 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId222"
    });
    $.__views.__alloyId219.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
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
        id: "__alloyId223"
    });
    $.__views.__alloyId222.add($.__views.__alloyId223);
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
    $.__views.__alloyId222.add($.__views.movimento);
    $.__views.__alloyId224 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId224"
    });
    $.__views.__alloyId219.add($.__views.__alloyId224);
    $.__views.__alloyId225 = Ti.UI.createLabel({
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
        id: "__alloyId225"
    });
    $.__views.__alloyId224.add($.__views.__alloyId225);
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
    $.__views.__alloyId224.add($.__views.pagamento);
    $.__views.__alloyId226 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId226"
    });
    $.__views.__alloyId219.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createLabel({
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
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
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
    $.__views.__alloyId226.add($.__views.variabilita);
    $.__views.__alloyId228 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId228"
    });
    $.__views.__alloyId219.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
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
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
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
    $.__views.__alloyId228.add($.__views.stato);
    $.__views.__alloyId230 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId230"
    });
    $.__views.__alloyId219.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createLabel({
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
        id: "__alloyId231"
    });
    $.__views.__alloyId230.add($.__views.__alloyId231);
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
    $.__views.__alloyId230.add($.__views.tipologia);
    $.__views.__alloyId232 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId232"
    });
    $.__views.__alloyId219.add($.__views.__alloyId232);
    $.__views.__alloyId233 = Ti.UI.createLabel({
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
        id: "__alloyId233"
    });
    $.__views.__alloyId232.add($.__views.__alloyId233);
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
    $.__views.__alloyId232.add($.__views.redditi);
    $.__views.__alloyId234 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId234"
    });
    $.__views.__alloyId219.add($.__views.__alloyId234);
    $.__views.__alloyId235 = Ti.UI.createLabel({
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
        id: "__alloyId235"
    });
    $.__views.__alloyId234.add($.__views.__alloyId235);
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
    $.__views.__alloyId234.add($.__views.datavaluta);
    $.__views.__alloyId236 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId236"
    });
    $.__views.__alloyId219.add($.__views.__alloyId236);
    $.__views.__alloyId237 = Ti.UI.createLabel({
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
        id: "__alloyId237"
    });
    $.__views.__alloyId236.add($.__views.__alloyId237);
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
    $.__views.__alloyId236.add($.__views.datascadenza);
    $.__views.__alloyId238 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        bottom: 20,
        id: "__alloyId238"
    });
    $.__views.__alloyId219.add($.__views.__alloyId238);
    $.__views.__alloyId239 = Ti.UI.createLabel({
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
        id: "__alloyId239"
    });
    $.__views.__alloyId238.add($.__views.__alloyId239);
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
    $.__views.__alloyId238.add($.__views.datapagamento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var selAspect = args.selectedAspect;
    var parsedAspect = _.clone(selAspect);
    parsedAspect.data = JSON.stringify(parsedAspect.data);
    if ("Entrata" == selAspect.data.tipoMovimento.descrizioneBreve) {
        $.importo.text = "+" + selAspect.data.importo + "€";
        $.importo.color = "#358A27";
    } else if ("Uscita" == selAspect.data.tipoMovimento.descrizioneBreve) {
        $.importo.text = "-" + selAspect.data.importo + "€";
        $.importo.color = "#E01D1D";
    } else {
        $.importo.text = selAspect.data.importo + "€";
        $.importo.color = "#444";
    }
    $.movimento.text = testExistence(selAspect.data.tipoMovimento) ? selAspect.data.tipoMovimento.descrizioneBreve : "";
    $.pagamento.text = testExistence(selAspect.data.pagamentoIncasso) ? selAspect.data.pagamentoIncasso.descrizioneBreve : "";
    $.variabilita.text = testExistence(selAspect.data.tipoVariabilita) ? selAspect.data.tipoVariabilita.descrizioneBreve : "";
    $.stato.text = testExistence(selAspect.data.statoMovimento) ? selAspect.data.statoMovimento.descrizioneBreve : "";
    $.tipologia.text = selAspect.data.flagOrdinarioStraordinario ? "Straordinario" : "Ordinario";
    $.redditi.text = selAspect.data.flagDichiarazioneRedditi ? "Si" : "No";
    $.datavaluta.text = moment(selAspect.data.dataValuta).format("L");
    $.datascadenza.text = moment(selAspect.data.dataScadenza).format("L");
    $.datapagamento.text = moment(selAspect.data.dataPagamentoIncasso).format("L");
    $.win.open();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_edit!click!editAspect"] && $.__views.mn_edit.addEventListener("click", editAspect);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;