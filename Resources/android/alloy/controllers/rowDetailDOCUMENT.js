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
    $.__views.rowDetailDOCUMENT = Ti.UI.createTableViewSection({
        id: "rowDetailDOCUMENT"
    });
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        id: "__alloyId36"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId36);
    $.__views.description = Ti.UI.createLabel({
        width: "95%",
        height: 40,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 24
        },
        color: "#F2B32A",
        ellipsize: true,
        wordWrap: false,
        backgroundColor: "#ffffff",
        borderRadius: Alloy.Globals.borderRad,
        touchEnabled: false,
        id: "description"
    });
    $.__views.__alloyId36.add($.__views.description);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        id: "__alloyId37"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId37);
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
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId38);
    $.__views.format = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "format"
    });
    $.__views.__alloyId38.add($.__views.format);
    $.__views.__alloyId39 = Ti.UI.createTableViewRow({
        id: "__alloyId39"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId39);
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
    $.__views.__alloyId39.add($.__views.type);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        id: "__alloyId40"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId40);
    $.__views.name = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "name"
    });
    $.__views.__alloyId40.add($.__views.name);
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        id: "__alloyId41"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId41);
    $.__views.size = Ti.UI.createLabel({
        width: "100%",
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        bottom: 5,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        id: "size"
    });
    $.__views.__alloyId41.add($.__views.size);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        id: "__alloyId42"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId42);
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
    $.__views.__alloyId42.add($.__views.timestamp);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        id: "__alloyId43"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId43);
    $.__views.img_preview = Ti.UI.createImageView({
        width: "95%",
        height: 300,
        id: "img_preview"
    });
    $.__views.__alloyId43.add($.__views.img_preview);
    $.__views.rowDetailDOCUMENT && $.addTopLevelView($.__views.rowDetailDOCUMENT);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("PREVIEW: " + args.preview.substr(23));
    var blobPreview = Ti.Utils.base64decode(args.preview.substr(args.preview.indexOf(",")));
    $.description.text = "  " + icons.file_text_alt + "  " + args.description;
    $.category.text = "Categoria: " + args.category;
    $.format.text = "Formato: " + args.format;
    $.type.text = "Tipo: " + args.type;
    $.name.text = "Nome: " + args.name;
    $.size.text = "Dimensioni: " + args.size;
    $.timestamp.text = "Timestamp: " + composeDate(args.timestamp);
    $.img_preview.setImage(blobPreview);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;