function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addNote";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuova Nota"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    var __alloyId58 = [];
    $.__views.__alloyId59 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId59"
    });
    __alloyId58.push($.__views.__alloyId59);
    $.__views.title = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Titolo nota",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "title"
    });
    $.__views.__alloyId59.add($.__views.title);
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId60"
    });
    __alloyId58.push($.__views.__alloyId60);
    $.__views.content = Ti.UI.createTextArea({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Testo nota",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "content"
    });
    $.__views.__alloyId60.add($.__views.content);
    $.__views.titolo = Ti.UI.createTableView({
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
        data: __alloyId58,
        id: "titolo"
    });
    $.__views.window.add($.__views.titolo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;