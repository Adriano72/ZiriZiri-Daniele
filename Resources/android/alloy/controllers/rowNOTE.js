function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowNOTE";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#E3E3E3",
        className: "itemRow",
        layout: "vertical",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId201 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId201"
    });
    $.__views.row.add($.__views.__alloyId201);
    $.__views.description = Ti.UI.createLabel({
        height: 30,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        color: "#5C5C5C",
        left: 5,
        top: 5,
        ellipsize: true,
        wordWrap: false,
        touchEnabled: false,
        width: 55,
        id: "description"
    });
    $.__views.__alloyId201.add($.__views.description);
    $.__views.titolo = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.SIZE,
        id: "titolo"
    });
    $.__views.__alloyId201.add($.__views.titolo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("VALORE PASSATO: " + JSON.stringify(args));
    $.row.id_code = args.id_code, $.description.text = "  " + icons.edit_sign;
    $.titolo.text = args.titolo;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;