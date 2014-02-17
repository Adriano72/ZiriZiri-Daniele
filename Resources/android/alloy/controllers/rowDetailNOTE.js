function Controller() {
    function composeDate(d_par) {
        var p_toDate = new Date(d_par);
        var day = p_toDate.getDate();
        var month = p_toDate.getCMonth();
        var year = p_toDate.getFullYear();
        return day + " " + month + " " + year;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailNOTE";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowDetailNOTE = Ti.UI.createTableViewSection({
        id: "rowDetailNOTE"
    });
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        id: "__alloyId36"
    });
    $.__views.rowDetailNOTE.add($.__views.__alloyId36);
    $.__views.name = Ti.UI.createLabel({
        width: "95%",
        height: 40,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 24
        },
        color: "#56A845",
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#ffffff",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        id: "name"
    });
    $.__views.__alloyId36.add($.__views.name);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        id: "__alloyId37"
    });
    $.__views.rowDetailNOTE.add($.__views.__alloyId37);
    $.__views.category = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "category"
    });
    $.__views.__alloyId37.add($.__views.category);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        id: "__alloyId38"
    });
    $.__views.rowDetailNOTE.add($.__views.__alloyId38);
    $.__views.timestamp = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "timestamp"
    });
    $.__views.__alloyId38.add($.__views.timestamp);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        id: "__alloyId39"
    });
    $.__views.rowDetailNOTE.add($.__views.__alloyId39);
    $.__views.content = Ti.UI.createWebView({
        width: "95%",
        height: 300,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "content"
    });
    $.__views.__alloyId39.add($.__views.content);
    $.__views.rowDetailNOTE && $.addTopLevelView($.__views.rowDetailNOTE);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.name.text = "  " + icons.edit_sign + "  " + args.name;
    $.category.text = "Categoria: " + args.category;
    $.timestamp.text = "Timestamp: " + composeDate(args.timestamp);
    $.content.html = args.content;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;