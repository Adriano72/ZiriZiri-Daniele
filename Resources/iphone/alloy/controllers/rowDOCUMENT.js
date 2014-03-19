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
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "vertical",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.description = Ti.UI.createLabel({
        height: 30,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        color: "#F2B32A",
        left: 5,
        top: 5,
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#E3E3E3",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        width: "95%",
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.__alloyId9 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId9"
    });
    $.__views.row.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Titolo: ",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.titolo = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "titolo"
    });
    $.__views.__alloyId9.add($.__views.titolo);
    $.__views.__alloyId11 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId11"
    });
    $.__views.row.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Formato: ",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.format = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "format"
    });
    $.__views.__alloyId11.add($.__views.format);
    $.__views.__alloyId13 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId13"
    });
    $.__views.row.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Tipo: ",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.type = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "type"
    });
    $.__views.__alloyId13.add($.__views.type);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.id_code = args.id_code, $.description.text = "  " + icons.file_text_alt + "  " + args.description;
    $.format.text = args.format;
    $.type.text = args.type;
    $.titolo.text = args.title;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;