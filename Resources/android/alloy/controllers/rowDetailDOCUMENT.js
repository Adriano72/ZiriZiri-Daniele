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
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        id: "__alloyId22"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId22);
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
    $.__views.__alloyId22.add($.__views.description);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        id: "__alloyId23"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId23);
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
    $.__views.__alloyId23.add($.__views.category);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        id: "__alloyId24"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId24);
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
    $.__views.__alloyId24.add($.__views.format);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        id: "__alloyId25"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId25);
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
    $.__views.__alloyId25.add($.__views.type);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        id: "__alloyId26"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId26);
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
    $.__views.__alloyId26.add($.__views.name);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        id: "__alloyId27"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId27);
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
    $.__views.__alloyId27.add($.__views.size);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        id: "__alloyId28"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId28);
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
    $.__views.__alloyId28.add($.__views.timestamp);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        id: "__alloyId29"
    });
    $.__views.rowDetailDOCUMENT.add($.__views.__alloyId29);
    $.__views.img_preview = Ti.UI.createImageView({
        width: "95%",
        height: 300,
        id: "img_preview"
    });
    $.__views.__alloyId29.add($.__views.img_preview);
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