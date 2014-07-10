function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addLink";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuovo Link"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    var __alloyId54 = [];
    $.__views.__alloyId55 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId55"
    });
    __alloyId54.push($.__views.__alloyId55);
    $.__views.titolo = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Titolo",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "titolo"
    });
    $.__views.__alloyId55.add($.__views.titolo);
    $.__views.__alloyId56 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId56"
    });
    __alloyId54.push($.__views.__alloyId56);
    $.__views.descrizione = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Descrizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "descrizione"
    });
    $.__views.__alloyId56.add($.__views.descrizione);
    $.__views.__alloyId57 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId57"
    });
    __alloyId54.push($.__views.__alloyId57);
    $.__views.content = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Link",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "content"
    });
    $.__views.__alloyId57.add($.__views.content);
    $.__views.newLinkTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId54,
        id: "newLinkTable"
    });
    $.__views.window.add($.__views.newLinkTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;