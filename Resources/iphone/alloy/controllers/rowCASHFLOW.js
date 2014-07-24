function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function edit(e) {
        Alloy.createController("editCashflow", {
            _callback: function(aspettoEditato) {
                var aspettoToJSON = JSON.parse(aspettoEditato.data);
                $.riga.obj_aspect = aspettoEditato;
                $.titolo.text = aspettoToJSON.title;
                args._editFunc(aspettoEditato, e.source.arrayKey);
            },
            aspetto: $.riga.obj_aspect
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowCASHFLOW";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.riga = Ti.UI.createTableViewRow({
        className: "itemRow",
        width: Ti.UI.FILL,
        id: "riga"
    });
    $.__views.riga && $.addTopLevelView($.__views.riga);
    edit ? $.__views.riga.addEventListener("click", edit) : __defers["$.__views.riga!click!edit"] = true;
    $.__views.__alloyId152 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        bottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E9FA32",
        backgroundColor: "#FFF",
        height: 50,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId152"
    });
    $.__views.riga.add($.__views.__alloyId152);
    $.__views.cashFlowIcon = Ti.UI.createLabel({
        touchEnabled: false,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-finance-on.png",
        id: "cashFlowIcon"
    });
    $.__views.__alloyId152.add($.__views.cashFlowIcon);
    $.__views.__alloyId153 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        touchEnabled: false,
        left: 10,
        id: "__alloyId153"
    });
    $.__views.__alloyId152.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createView({
        left: 2,
        width: "85%",
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId154"
    });
    $.__views.__alloyId153.add($.__views.__alloyId154);
    $.__views.importo = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        touchEnabled: false,
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        left: 0,
        id: "importo"
    });
    $.__views.__alloyId154.add($.__views.importo);
    $.__views.tipoMovimento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#999",
        touchEnabled: false,
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        id: "tipoMovimento"
    });
    $.__views.__alloyId154.add($.__views.tipoMovimento);
    $.__views.modalitaPagamento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#999",
        touchEnabled: false,
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        id: "modalitaPagamento"
    });
    $.__views.__alloyId154.add($.__views.modalitaPagamento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var dataAspetto = JSON.parse(args.obj_aspetto.data);
    Ti.API.info("VALORE PASSATO: " + JSON.stringify(dataAspetto.title));
    $.importo.text = dataAspetto.importo + "€";
    $.tipoMovimento.text = dataAspetto.tipoMovimento.descrizioneBreve;
    $.modalitaPagamento.text = dataAspetto.pagamentoIncasso.descrizioneBreve;
    $.riga.obj_aspect = args.obj_aspetto;
    $.riga.arrayKey = args.keyIndex;
    __defers["$.__views.riga!click!edit"] && $.__views.riga.addEventListener("click", edit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;