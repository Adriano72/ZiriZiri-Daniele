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
        Alloy.createController("editDocument", {
            _callback: function(aspettoEditato) {
                args._editFunc(aspettoEditato);
            },
            aspetto: e.source.obj_aspect,
            tempKey: e.source.arrayKey
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDOCUMENT";
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
    $.__views.__alloyId146 = Ti.UI.createView({
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
        id: "__alloyId146"
    });
    $.__views.riga.add($.__views.__alloyId146);
    $.__views.documentIcon = Ti.UI.createLabel({
        touchEnabled: false,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-document-on.png",
        id: "documentIcon"
    });
    $.__views.__alloyId146.add($.__views.documentIcon);
    $.__views.__alloyId147 = Ti.UI.createView({
        touchEnabled: false,
        width: Ti.UI.SIZE,
        left: 10,
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createView({
        left: 2,
        touchEnabled: false,
        width: "85%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId148"
    });
    $.__views.__alloyId147.add($.__views.__alloyId148);
    $.__views.titolo = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        touchEnabled: false,
        color: "#444",
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        left: 0,
        id: "titolo"
    });
    $.__views.__alloyId148.add($.__views.titolo);
    $.__views.formato = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        touchEnabled: false,
        color: "#999",
        backgroundColor: "white",
        width: 95,
        wordWrap: false,
        ellipsize: true,
        id: "formato"
    });
    $.__views.__alloyId148.add($.__views.formato);
    $.__views.visualizza = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        backgroundColor: "white",
        text: "Visualizza",
        touchEnabled: false,
        width: 95,
        wordWrap: false,
        ellipsize: true,
        id: "visualizza"
    });
    $.__views.__alloyId148.add($.__views.visualizza);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titolo.text = args.obj_aspetto.data.title;
    $.riga.obj_aspect = args.obj_aspetto;
    $.riga.arrayKey = args.keyIndex;
    __defers["$.__views.riga!click!edit"] && $.__views.riga.addEventListener("click", edit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;