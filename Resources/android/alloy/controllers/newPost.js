function Controller() {
    function __alloyId83() {
        $.__views.win.removeEventListener("open", __alloyId83);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId82 = {
                icon: "/images/top-save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId82, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId82, Alloy.Android.menuItemCreateArgs));
            savePost ? $.__views.mn_salva.addEventListener("click", savePost) : __defers["$.__views.mn_salva!click!savePost"] = true;
        }; else {
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
            theActionBar.setIcon("images/logo-test.png");
            theActionBar.onHomeIconItemSelected = function() {
                $.win.close({
                    animate: true
                });
            };
        }
    }
    function checkForSync() {
        Alloy.Globals.postSaved && args();
    }
    function initializeThings() {
        openEvent();
        var rowsCat = [ Ti.UI.createPickerRow({
            fontFamily: "SourceSansPro-Regular",
            fontSize: 8,
            title: "Selezionare una categoria",
            id: 9999
        }) ];
        _.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value) {
            var pkrRow = Ti.UI.createPickerRow(value);
            rowsCat.push(pkrRow);
        });
        $.pkrCategoria.add(rowsCat);
    }
    function savePost() {
        if ("" !== $.titolo.value && 9999 != $.pkrCategoria.getSelectedRow(0).id) {
            Alloy.Models.Post_template.set("name", $.titolo.value);
            Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
            Alloy.Models.Post_template.set("category", {
                id: $.pkrCategoria.getSelectedRow(0).id,
                code: $.pkrCategoria.getSelectedRow(0).code,
                name: $.pkrCategoria.getSelectedRow(0).title
            });
            Alloy.Models.Post_template.set("description", $.descrizione.value);
            Alloy.Models.Post_template.set("referenceTime", timeNow);
            Alloy.createController("crea-modifica-post", $.win).getView();
        } else alert("Il campo Titolo e il campo Categoria sono obbligatori!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newPost";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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
    initializeThings ? $.__views.win.addEventListener("open", initializeThings) : __defers["$.__views.win!open!initializeThings"] = true;
    checkForSync ? $.__views.win.addEventListener("close", checkForSync) : __defers["$.__views.win!close!checkForSync"] = true;
    $.__views.win.addEventListener("open", __alloyId83);
    var __alloyId84 = [];
    $.__views.__alloyId85 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId85"
    });
    __alloyId84.push($.__views.__alloyId85);
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
    $.__views.__alloyId85.add($.__views.titolo);
    $.__views.__alloyId86 = Ti.UI.createTableViewRow({
        id: "__alloyId86"
    });
    __alloyId84.push($.__views.__alloyId86);
    $.__views.starwidget = Alloy.createWidget("starrating", "widget", {
        top: 10,
        bottom: 10,
        id: "starwidget",
        max: "5",
        initialRating: "0",
        __parentSymbol: $.__views.__alloyId86
    });
    $.__views.starwidget.setParent($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId87"
    });
    __alloyId84.push($.__views.__alloyId87);
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
    $.__views.__alloyId87.add($.__views.descrizione);
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        hasDetail: "true",
        id: "__alloyId88"
    });
    __alloyId84.push($.__views.__alloyId88);
    $.__views.pkrCategoria = Ti.UI.createPicker({
        color: "#999",
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "pkrCategoria",
        selectionIndicator: "true"
    });
    $.__views.__alloyId88.add($.__views.pkrCategoria);
    $.__views.__alloyId89 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId89"
    });
    __alloyId84.push($.__views.__alloyId89);
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
    $.__views.__alloyId89.add($.__views.tag);
    $.__views.__alloyId90 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId90"
    });
    __alloyId84.push($.__views.__alloyId90);
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
    $.__views.__alloyId90.add($.__views.storie);
    $.__views.__alloyId91 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId91"
    });
    __alloyId84.push($.__views.__alloyId91);
    $.__views.picOptionsContainer = Ti.UI.createView({
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "picOptionsContainer"
    });
    $.__views.__alloyId91.add($.__views.picOptionsContainer);
    $.__views.picture = Ti.UI.createView({
        height: 40,
        width: "49.5%",
        left: 0,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#5FAEE3",
        backgroundColor: "#5FAEE3",
        id: "picture"
    });
    $.__views.picOptionsContainer.add($.__views.picture);
    $.__views.takePicIcon = Ti.UI.createImageView({
        width: 25,
        height: Ti.UI.SIZE,
        image: "/images/various-take-a-photo.png",
        left: 5,
        id: "takePicIcon"
    });
    $.__views.picture.add($.__views.takePicIcon);
    $.__views.takePicText = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        right: 10,
        text: "Take a Picture!",
        color: "#FFF",
        id: "takePicText"
    });
    $.__views.picture.add($.__views.takePicText);
    $.__views.gallery = Ti.UI.createView({
        height: 40,
        width: "49.5%",
        right: 0,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "gallery"
    });
    $.__views.picOptionsContainer.add($.__views.gallery);
    $.__views.galleryPicIcon = Ti.UI.createImageView({
        width: 25,
        height: Ti.UI.SIZE,
        image: "/images/various-add.png",
        left: 5,
        id: "galleryPicIcon"
    });
    $.__views.gallery.add($.__views.galleryPicIcon);
    $.__views.galleryPicText = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        text: "Gallery",
        color: "#999",
        id: "galleryPicText"
    });
    $.__views.gallery.add($.__views.galleryPicText);
    $.__views.verticalBar = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        right: 45,
        backgroundColor: "#CCCCCC",
        id: "verticalBar"
    });
    $.__views.gallery.add($.__views.verticalBar);
    $.__views.galleryPic2 = Ti.UI.createImageView({
        borderLeft: true,
        width: 40,
        height: Ti.UI.SIZE,
        image: "/images/various-galllery.png",
        right: 5,
        id: "galleryPic2"
    });
    $.__views.gallery.add($.__views.galleryPic2);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId84,
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
    __defers["$.__views.win!open!initializeThings"] && $.__views.win.addEventListener("open", initializeThings);
    __defers["$.__views.win!close!checkForSync"] && $.__views.win.addEventListener("close", checkForSync);
    __defers["$.__views.mn_salva!click!savePost"] && $.__views.mn_salva.addEventListener("click", savePost);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;