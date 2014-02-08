function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowLINK";
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
        color: "#4682EA",
        left: 5,
        top: 5,
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#ffffff",
        borderRadius: Alloy.Globals.borderRad,
        width: "95%",
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.title = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "title"
    });
    $.__views.row.add($.__views.title);
    $.__views.type = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "type"
    });
    $.__views.row.add($.__views.type);
    $.__views.content = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontFamily: "AppIcons",
            fontSize: 16
        },
        left: 5,
        top: 5,
        width: Ti.UI.FILL,
        id: "content"
    });
    $.__views.row.add($.__views.content);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.description.text = "  " + icons.link + "  " + args.description;
    $.title.text = "Titolo: " + args.title;
    $.type.text = "Tipo: " + args.type, $.content.text = "Contenuto: " + args.content;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;