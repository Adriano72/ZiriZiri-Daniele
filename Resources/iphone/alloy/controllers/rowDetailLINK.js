function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openLink(e) {
        Ti.API.info("SPURCE TEXT: " + e.source.text);
        Ti.Platform.openURL(e.source.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailLINK";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
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
    $.__views.__alloyId211 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId211"
    });
    $.__views.row.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createLabel({
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
        text: " Tags",
        id: "__alloyId212"
    });
    $.__views.__alloyId211.add($.__views.__alloyId212);
    $.__views.tags = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        id: "tags"
    });
    $.__views.__alloyId211.add($.__views.tags);
    $.__views.__alloyId213 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId213"
    });
    $.__views.row.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
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
        id: "__alloyId214"
    });
    $.__views.__alloyId213.add($.__views.__alloyId214);
    $.__views.type = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        id: "type"
    });
    $.__views.__alloyId213.add($.__views.type);
    $.__views.__alloyId215 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId215"
    });
    $.__views.row.add($.__views.__alloyId215);
    $.__views.__alloyId216 = Ti.UI.createLabel({
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
        text: " Contenuto",
        id: "__alloyId216"
    });
    $.__views.__alloyId215.add($.__views.__alloyId216);
    $.__views.content = Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        font: {
            fontSize: 16
        },
        left: 20,
        right: 5,
        top: 5,
        bottom: 5,
        width: Ti.UI.FILL,
        color: "#0000FF",
        id: "content"
    });
    $.__views.__alloyId215.add($.__views.content);
    openLink ? $.__views.content.addEventListener("click", openLink) : __defers["$.__views.content!click!openLink"] = true;
    $.__views.__alloyId217 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#DEDEDE",
        id: "__alloyId217"
    });
    $.__views.row.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createLabel({
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
        id: "__alloyId218"
    });
    $.__views.__alloyId217.add($.__views.__alloyId218);
    $.__views.img_preview = Ti.UI.createImageView({
        top: 5,
        width: "95%",
        height: 300,
        id: "img_preview"
    });
    $.__views.__alloyId217.add($.__views.img_preview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    if (!_.isNull(args.preview)) {
        var blobPreview = Ti.Utils.base64decode(args.preview.substr(args.preview.indexOf(",")));
        $.img_preview.setImage(blobPreview);
    }
    $.description.text = "  " + icons.link + "  " + args.name;
    $.category.text = _.isNull(args.category) ? null : " " + icons.tag + " " + args.category;
    $.tags.text = _.isNull(args.tags) ? "Nessun tag definito" : args.tags;
    $.type.text = args.type;
    $.content.text = args.content;
    __defers["$.__views.content!click!openLink"] && $.__views.content.addEventListener("click", openLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;