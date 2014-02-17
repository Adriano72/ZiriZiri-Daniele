function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailLINK";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowDetailLINK = Ti.UI.createTableViewSection({
        id: "rowDetailLINK"
    });
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        id: "__alloyId30"
    });
    $.__views.rowDetailLINK.add($.__views.__alloyId30);
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
        color: "#4682EA",
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#ffffff",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        id: "name"
    });
    $.__views.__alloyId30.add($.__views.name);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        id: "__alloyId31"
    });
    $.__views.rowDetailLINK.add($.__views.__alloyId31);
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
    $.__views.__alloyId31.add($.__views.category);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        id: "__alloyId32"
    });
    $.__views.rowDetailLINK.add($.__views.__alloyId32);
    $.__views.tags = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "tags"
    });
    $.__views.__alloyId32.add($.__views.tags);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        id: "__alloyId33"
    });
    $.__views.rowDetailLINK.add($.__views.__alloyId33);
    $.__views.type = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "type"
    });
    $.__views.__alloyId33.add($.__views.type);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        id: "__alloyId34"
    });
    $.__views.rowDetailLINK.add($.__views.__alloyId34);
    $.__views.content = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "content"
    });
    $.__views.__alloyId34.add($.__views.content);
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        id: "__alloyId35"
    });
    $.__views.rowDetailLINK.add($.__views.__alloyId35);
    $.__views.img_preview = Ti.UI.createImageView({
        width: "95%",
        height: 300,
        id: "img_preview"
    });
    $.__views.__alloyId35.add($.__views.img_preview);
    $.__views.rowDetailLINK && $.addTopLevelView($.__views.rowDetailLINK);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    if (!_.isNull(args.preview)) {
        var blobPreview = Ti.Utils.base64decode(args.preview.substr(args.preview.indexOf(",")));
        $.img_preview.setImage(blobPreview);
    }
    $.name.text = "  " + icons.link + "  " + args.name;
    $.category.text = "Categoria: " + args.category;
    $.tags.text = args.tags;
    _.isNull(args.tags) && ($.tags.height = 0);
    $.type.text = "Tipo: " + args.type;
    $.content.text = "Contenuto: " + args.content;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;