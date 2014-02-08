function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDOCUMENT";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#d8d8d8",
        className: "itemRow",
        layout: "vertical",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.description = Ti.UI.createLabel({
        height: 40,
        font: {
            fontFamily: "AppIcons",
            fontSize: 24
        },
        color: "#F2B32A",
        left: 5,
        top: 5,
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#ffffff",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        width: "95%",
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.titolo = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "titolo"
    });
    $.__views.row.add($.__views.titolo);
    $.__views.format = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "format"
    });
    $.__views.row.add($.__views.format);
    $.__views.type = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "type"
    });
    $.__views.row.add($.__views.type);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.id_code = args.id_code, $.description.text = "  " + icons.file_text_alt + "  " + args.description;
    $.format.text = "Formato: " + args.format;
    $.type.text = "Tipo: " + args.type;
    $.titolo.text = "Titolo: " + args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;