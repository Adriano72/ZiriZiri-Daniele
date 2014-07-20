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
    this.__controllerPath = "rowEvent";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.rowEvent = Ti.UI.createTableViewRow({
        className: "itemRow",
        width: Ti.UI.FILL,
        id: "rowEvent"
    });
    $.__views.rowEvent && $.addTopLevelView($.__views.rowEvent);
    $.__views.__alloyId193 = Ti.UI.createView({
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
        id: "__alloyId193"
    });
    $.__views.rowEvent.add($.__views.__alloyId193);
    $.__views.eventIcon = Ti.UI.createLabel({
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-event-on.png",
        id: "eventIcon"
    });
    $.__views.__alloyId193.add($.__views.eventIcon);
    $.__views.__alloyId194 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        left: 10,
        layout: "vertical",
        id: "__alloyId194"
    });
    $.__views.__alloyId193.add($.__views.__alloyId194);
    $.__views.__alloyId195 = Ti.UI.createView({
        left: 2,
        width: "85%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId195"
    });
    $.__views.__alloyId194.add($.__views.__alloyId195);
    $.__views.startDate = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        backgroundColor: "white",
        width: 140,
        left: 0,
        id: "startDate"
    });
    $.__views.__alloyId195.add($.__views.startDate);
    $.__views.endDate = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        backgroundColor: "white",
        width: 140,
        id: "endDate"
    });
    $.__views.__alloyId195.add($.__views.endDate);
    $.__views.__alloyId196 = Ti.UI.createView({
        left: 2,
        width: "85%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId196"
    });
    $.__views.__alloyId194.add($.__views.__alloyId196);
    $.__views.location = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        wordWrap: false,
        ellipsize: true,
        id: "location"
    });
    $.__views.__alloyId196.add($.__views.location);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.startDate.text = args.startDate;
    $.endDate.text = args.endDate;
    $.location.text = args.location;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;