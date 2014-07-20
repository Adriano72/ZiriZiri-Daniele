function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowCASHFLOW";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.rowCASHFLOW = Ti.UI.createTableViewRow({
        className: "itemRow",
        width: Ti.UI.FILL,
        id: "rowCASHFLOW"
    });
    $.__views.rowCASHFLOW && $.addTopLevelView($.__views.rowCASHFLOW);
    $.__views.__alloyId120 = Ti.UI.createView({
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
        id: "__alloyId120"
    });
    $.__views.rowCASHFLOW.add($.__views.__alloyId120);
    $.__views.cashFlowIcon = Ti.UI.createLabel({
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-finance-on.png",
        id: "cashFlowIcon"
    });
    $.__views.__alloyId120.add($.__views.cashFlowIcon);
    $.__views.__alloyId121 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId121"
    });
    $.__views.__alloyId120.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        left: 2,
        width: "85%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.importo = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        left: 0,
        id: "importo"
    });
    $.__views.__alloyId122.add($.__views.importo);
    $.__views.tipoMovimento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#999",
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        id: "tipoMovimento"
    });
    $.__views.__alloyId122.add($.__views.tipoMovimento);
    $.__views.modalitaPagamento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#999",
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        id: "modalitaPagamento"
    });
    $.__views.__alloyId122.add($.__views.modalitaPagamento);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.importo.text = args.importo + "€";
    $.tipoMovimento.text = args.tipoMovimento;
    $.modalitaPagamento.text = args.modalitaPagamento;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;