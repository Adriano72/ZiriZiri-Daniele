function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId178() {
        $.__views.win.removeEventListener("open", __alloyId178);
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
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
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
    $.__views.win.addEventListener("open", __alloyId178);
    $.__views.__alloyId179 = Ti.UI.createScrollView({
        id: "__alloyId179"
    });
    $.__views.win.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createView({
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
        id: "__alloyId180"
    });
    $.__views.__alloyId179.add($.__views.__alloyId180);
    $.__views.img_preview = Ti.UI.createImageView({
        borderColor: "#000000",
        color: "#336699",
        top: 10,
        left: 5,
        right: 5,
        height: 200,
        id: "img_preview"
    });
    $.__views.__alloyId180.add($.__views.img_preview);
    $.__views.__alloyId181 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId181"
    });
    $.__views.__alloyId180.add($.__views.__alloyId181);
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
    $.__views.__alloyId181.add($.__views.titoloLabel);
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
    $.__views.__alloyId181.add($.__views.titolo);
    $.__views.__alloyId182 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId182"
    });
    $.__views.__alloyId180.add($.__views.__alloyId182);
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
    $.__views.__alloyId182.add($.__views.nomeFileLabel);
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
    $.__views.__alloyId182.add($.__views.nomeFile);
    $.__views.__alloyId183 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId183"
    });
    $.__views.__alloyId180.add($.__views.__alloyId183);
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
    $.__views.__alloyId183.add($.__views.tipologiaLabel);
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
    $.__views.__alloyId183.add($.__views.tipologia);
    $.__views.__alloyId184 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId184"
    });
    $.__views.__alloyId180.add($.__views.__alloyId184);
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
    $.__views.__alloyId184.add($.__views.formatoLabel);
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
    $.__views.__alloyId184.add($.__views.formato);
    $.__views.__alloyId185 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        id: "__alloyId185"
    });
    $.__views.__alloyId180.add($.__views.__alloyId185);
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
    $.__views.__alloyId185.add($.__views.filesizeLabel);
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
    $.__views.__alloyId185.add($.__views.filesize);
    $.__views.__alloyId186 = Ti.UI.createView({
        layout: "horizontal",
        top: 30,
        id: "__alloyId186"
    });
    $.__views.__alloyId180.add($.__views.__alloyId186);
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
    $.__views.__alloyId186.add($.__views.filesizeLabel);
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
    $.__views.__alloyId186.add($.__views.caricato);
    $.__views.__alloyId187 = Ti.UI.createView({
        layout: "horizontal",
        top: 10,
        bottom: 20,
        id: "__alloyId187"
    });
    $.__views.__alloyId180.add($.__views.__alloyId187);
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
    $.__views.__alloyId187.add($.__views.dataDocLabel);
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
    $.__views.__alloyId187.add($.__views.dataDoc);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var blobPreview = Ti.Utils.base64decode(args.data.preview.base64.substr(args.data.preview.base64.indexOf(",")));
    $.img_preview.setImage(blobPreview);
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