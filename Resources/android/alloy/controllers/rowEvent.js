function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowEvent";
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
    $.__views.__alloyId94 = Ti.UI.createView({
        height: 80,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId94"
    });
    $.__views.row.add($.__views.__alloyId94);
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
    $.__views.__alloyId94.add($.__views.description);
    $.__views.dateFrom = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.SIZE,
        id: "dateFrom"
    });
    $.__views.__alloyId94.add($.__views.dateFrom);
    $.__views.dateTo = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.SIZE,
        id: "dateTo"
    });
    $.__views.__alloyId94.add($.__views.dateTo);
    $.__views.__alloyId95 = Ti.UI.createView({
        height: 80,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId95"
    });
    $.__views.row.add($.__views.__alloyId95);
    $.__views.location = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.SIZE,
        id: "location"
    });
    $.__views.__alloyId95.add($.__views.location);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.id_code = args.id_code, $.description.text = "  " + icons.calendar;
    $.dateFrom.text = args.dataDa;
    $.dateTo.text = args.dataA, $.location.text = args.posizione;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;