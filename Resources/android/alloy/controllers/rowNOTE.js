function Controller() {
    function composeDate(d_par) {
        var p_toDate = new Date(d_par);
        var day = p_toDate.getDate();
        var month = p_toDate.getCMonth();
        var year = p_toDate.getFullYear();
        return day + " " + month + " " + year;
    }
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
        color: "#56A845",
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
    $.__views.__alloyId60 = Ti.UI.createView({
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId60"
    });
    $.__views.row.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createLabel({
        left: 10,
        height: 40,
        font: {
            fontSize: 16
        },
        touchEnabled: false,
        color: "#969696",
        text: "Data: ",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.data = Ti.UI.createLabel({
        height: 40,
        font: {
            fontSize: 16
        },
        left: 5,
        right: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "data"
    });
    $.__views.__alloyId60.add($.__views.data);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.id_code = args.id_code, $.description.text = "  " + icons.edit_sign + "  " + args.description;
    $.data.text = composeDate(args.timestamp);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;