function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId227() {
        $.__views.win.removeEventListener("open", __alloyId227);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function() {}; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function openEvent() {
        theActionBar = $.win.activity.actionBar;
        $.win.activity.invalidateOptionsMenu();
        theActionBar = $.win.activity.actionBar;
        if (void 0 != theActionBar) {
            theActionBar.displayHomeAsUp = true;
            theActionBar.setIcon("images/kernel-document-on.png");
            theActionBar.onHomeIconItemSelected = function() {
                $.win.close({
                    animate: true
                });
            };
        }
        $.win.title = args.data.title;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDetailDOCUMENT";
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
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId227);
    $.__views.__alloyId228 = Ti.UI.createScrollView({
        id: "__alloyId228"
    });
    $.__views.win.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        layout: "vertical",
        touchEnabled: false,
        id: "__alloyId229"
    });
    $.__views.__alloyId228.add($.__views.__alloyId229);
    $.__views.img_preview = Ti.UI.createImageView({
        borderColor: "#000000",
        color: "#336699",
        top: 10,
        left: 5,
        right: 5,
        height: 200,
        id: "img_preview"
    });
    $.__views.__alloyId229.add($.__views.img_preview);
    $.__views.__alloyId230 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId230"
    });
    $.__views.__alloyId229.add($.__views.__alloyId230);
    $.__views.titoloLabel = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Titolo:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "titoloLabel"
    });
    $.__views.__alloyId230.add($.__views.titoloLabel);
    $.__views.titolo = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "titolo"
    });
    $.__views.__alloyId230.add($.__views.titolo);
    $.__views.__alloyId231 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId231"
    });
    $.__views.__alloyId229.add($.__views.__alloyId231);
    $.__views.nomeFileLabel = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Nome File:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "nomeFileLabel"
    });
    $.__views.__alloyId231.add($.__views.nomeFileLabel);
    $.__views.nomeFile = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "nomeFile"
    });
    $.__views.__alloyId231.add($.__views.nomeFile);
    $.__views.__alloyId232 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId232"
    });
    $.__views.__alloyId229.add($.__views.__alloyId232);
    $.__views.tipologiaLabel = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Tipologia:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "tipologiaLabel"
    });
    $.__views.__alloyId232.add($.__views.tipologiaLabel);
    $.__views.tipologia = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "tipologia"
    });
    $.__views.__alloyId232.add($.__views.tipologia);
    $.__views.__alloyId233 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId233"
    });
    $.__views.__alloyId229.add($.__views.__alloyId233);
    $.__views.formatoLabel = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Formato:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "formatoLabel"
    });
    $.__views.__alloyId233.add($.__views.formatoLabel);
    $.__views.formato = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "formato"
    });
    $.__views.__alloyId233.add($.__views.formato);
    $.__views.__alloyId234 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId234"
    });
    $.__views.__alloyId229.add($.__views.__alloyId234);
    $.__views.filesizeLabel = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "File Size:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "filesizeLabel"
    });
    $.__views.__alloyId234.add($.__views.filesizeLabel);
    $.__views.filesize = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "filesize"
    });
    $.__views.__alloyId234.add($.__views.filesize);
    $.__views.__alloyId235 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId235"
    });
    $.__views.__alloyId229.add($.__views.__alloyId235);
    $.__views.filesizeLabel = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Caricato da:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "filesizeLabel"
    });
    $.__views.__alloyId235.add($.__views.filesizeLabel);
    $.__views.caricato = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "caricato"
    });
    $.__views.__alloyId235.add($.__views.caricato);
    $.__views.__alloyId236 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        bottom: 20,
        id: "__alloyId236"
    });
    $.__views.__alloyId229.add($.__views.__alloyId236);
    $.__views.dataDocLabel = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#5FAEE3",
        text: "Data Documento:",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        id: "dataDocLabel"
    });
    $.__views.__alloyId236.add($.__views.dataDocLabel);
    $.__views.dataDoc = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        left: 10,
        ellipsize: true,
        wordWrap: false,
        id: "dataDoc"
    });
    $.__views.__alloyId236.add($.__views.dataDoc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    ZZ.API.Files.Attachment.get(args, function(response) {
        Ti.API.info("ZZ.API.Files.Attachment.get success [response : " + JSON.stringify(response) + "]");
        $.img_preview.setImage(response);
    }, function(error) {
        Ti.API.error("ZZ.API.Files.Attachment.get error [error : " + error + "]");
    });
    $.titolo.text = args.data.title;
    $.nomeFile.text = args.data.name;
    $.tipologia.text = args.data.format.type;
    $.formato.text = args.data.format.name;
    var megaBytes = args.data.size / 1048576;
    var megaBytesRounded = parseFloat(Math.round(100 * megaBytes) / 100).toFixed(2);
    $.filesize.text = megaBytesRounded + "MB";
    $.dataDoc.text = moment(args.data.creationTime).format("L");
    $.win.open();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;