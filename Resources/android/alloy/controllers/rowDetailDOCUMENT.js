function Controller() {
    function composeDate(d_par) {
        var p_toDate = new Date(d_par);
        var day = p_toDate.getDate();
        var month = p_toDate.getCMonth();
        var year = p_toDate.getFullYear();
        return day + " " + month + " " + year;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailDOCUMENT";
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
        color: "#DB4C3F",
        left: 5,
        right: 5,
        top: 5,
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#E3E3E3",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "description"
    });
    $.__views.row.add($.__views.description);
    $.__views.category = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "AppIcons",
            fontSize: 12
        },
        backgroundColor: "#E3E3E3",
        borderRadius: Alloy.Globals.borderRad,
        height: 18,
        width: Ti.UI.SIZE,
        color: "#5E5E5E",
        left: 5,
        top: 5,
        bottom: 10,
        id: "category"
    });
    $.__views.row.add($.__views.category);
    $.__views.__alloyId104 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId104"
    });
    $.__views.row.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Formato",
        id: "__alloyId105"
    });
    $.__views.__alloyId104.add($.__views.__alloyId105);
    $.__views.format = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "format"
    });
    $.__views.__alloyId104.add($.__views.format);
    $.__views.__alloyId106 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId106"
    });
    $.__views.row.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Tipo",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.type = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "type"
    });
    $.__views.__alloyId106.add($.__views.type);
    $.__views.__alloyId108 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId108"
    });
    $.__views.row.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Nome",
        id: "__alloyId109"
    });
    $.__views.__alloyId108.add($.__views.__alloyId109);
    $.__views.name = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "name"
    });
    $.__views.__alloyId108.add($.__views.name);
    $.__views.__alloyId110 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId110"
    });
    $.__views.row.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Dimensioni",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.size = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "size"
    });
    $.__views.__alloyId110.add($.__views.size);
    $.__views.__alloyId112 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId112"
    });
    $.__views.row.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Timestamp",
        id: "__alloyId113"
    });
    $.__views.__alloyId112.add($.__views.__alloyId113);
    $.__views.timestamp = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        touchEnabled: false,
        width: Ti.UI.FILL,
        id: "timestamp"
    });
    $.__views.__alloyId112.add($.__views.timestamp);
    $.__views.__alloyId114 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId114"
    });
    $.__views.row.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        height: 20,
        width: Ti.UI.FILL,
        backgroundColor: "#787878",
        top: 0,
        font: {
            fontSize: 14,
            fontFamily: "Rosario-Regular"
        },
        touchEnabled: false,
        color: "#FFFFFF",
        text: " Preview",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.img_preview = Ti.UI.createImageView({
        top: 5,
        width: "95%",
        height: 300,
        id: "img_preview"
    });
    $.__views.__alloyId114.add($.__views.img_preview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("PREVIEW: " + args.preview.substr(23));
    var blobPreview = Ti.Utils.base64decode(args.preview.substr(args.preview.indexOf(",")));
    $.description.text = "  " + icons.file_text_alt + "  " + args.description;
    $.category.text = _.isNull(args.category) ? null : " " + icons.tag + " " + args.category;
    $.format.text = args.format;
    $.type.text = args.type;
    $.name.text = args.name;
    $.size.text = args.size;
    $.timestamp.text = composeDate(args.timestamp);
    $.img_preview.setImage(blobPreview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;