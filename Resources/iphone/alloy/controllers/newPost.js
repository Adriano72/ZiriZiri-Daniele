function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openEvent() {
        "camera" == Alloy.Globals.shortcutMode && savePost();
    }
    function openCategoryList() {
        Alloy.createController("selezionaCategoria", function(cat) {
            $.categoria.text = cat;
        }).getView();
    }
    function checkForSync() {
        args();
    }
    function savePost() {
        if ("camera" == Alloy.Globals.shortcutMode || "gallery" == Alloy.Globals.shortcutMode) {
            Alloy.Models.Post_template.set("name", "");
            Alloy.Models.Post_template.set("rating", 0);
            Alloy.Models.Post_template.set("category", {
                id: "5529",
                code: "09.04.01",
                name: "Foto"
            });
            Alloy.Models.Post_template.set("referenceTime", timeNow);
            Alloy.createController("crea-modifica-post", function() {
                $.win.close();
                args();
            }).getView();
        } else if ("" !== $.titolo.value && 9999 != $.pkrCategoria.getSelectedRow(0).id) {
            Alloy.Models.Post_template.set("name", $.titolo.value);
            Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
            Alloy.Models.Post_template.set("category", {
                id: $.pkrCategoria.getSelectedRow(0).id,
                code: $.pkrCategoria.getSelectedRow(0).code,
                name: $.pkrCategoria.getSelectedRow(0).title
            });
            Alloy.Models.Post_template.set("description", $.descrizione.value);
            Alloy.Models.Post_template.set("referenceTime", timeNow);
            Alloy.createController("crea-modifica-post", function() {
                $.win.close();
                args();
            }).getView();
        } else alert("Il campo Titolo e il campo Categoria sono obbligatori!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newPost";
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
        id: "win",
        title: "Nuovo Post"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    checkForSync ? $.__views.win.addEventListener("close", checkForSync) : __defers["$.__views.win!close!checkForSync"] = true;
    var __alloyId113 = [];
    $.__views.__alloyId114 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId114"
    });
    __alloyId113.push($.__views.__alloyId114);
    $.__views.titolo = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Titolo",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "titolo"
    });
    $.__views.__alloyId114.add($.__views.titolo);
    $.__views.__alloyId115 = Ti.UI.createTableViewRow({
        id: "__alloyId115"
    });
    __alloyId113.push($.__views.__alloyId115);
    $.__views.starwidget = Alloy.createWidget("starrating", "widget", {
        top: 10,
        bottom: 10,
        id: "starwidget",
        max: "5",
        initialRating: "0",
        __parentSymbol: $.__views.__alloyId115
    });
    $.__views.starwidget.setParent($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId116"
    });
    __alloyId113.push($.__views.__alloyId116);
    $.__views.descrizione = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Descrizione",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "descrizione"
    });
    $.__views.__alloyId116.add($.__views.descrizione);
    $.__views.__alloyId117 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        hasDetail: "true",
        id: "__alloyId117"
    });
    __alloyId113.push($.__views.__alloyId117);
    $.__views.categoria = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Categoria",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "categoria"
    });
    $.__views.__alloyId117.add($.__views.categoria);
    openCategoryList ? $.__views.categoria.addEventListener("singletap", openCategoryList) : __defers["$.__views.categoria!singletap!openCategoryList"] = true;
    $.__views.__alloyId118 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId118"
    });
    __alloyId113.push($.__views.__alloyId118);
    $.__views.tag = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Tag",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "tag"
    });
    $.__views.__alloyId118.add($.__views.tag);
    $.__views.__alloyId119 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId119"
    });
    __alloyId113.push($.__views.__alloyId119);
    $.__views.storie = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Storie",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "storie"
    });
    $.__views.__alloyId119.add($.__views.storie);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId113,
        id: "newPostTable"
    });
    $.__views.win.add($.__views.newPostTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    require("net");
    var timeNow = moment();
    Ti.API.info("**** timeNow: " + timeNow);
    $.starwidget.init();
    $.win.open();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.win!close!checkForSync"] && $.__views.win.addEventListener("close", checkForSync);
    __defers["$.__views.categoria!singletap!openCategoryList"] && $.__views.categoria.addEventListener("singletap", openCategoryList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;