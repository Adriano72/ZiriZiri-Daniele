function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId34() {
        $.__views.win.removeEventListener("open", __alloyId34);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId33 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-save2.png",
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId33, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId33, Alloy.Android.menuItemCreateArgs));
            saveDocument ? $.__views.mn_salva.addEventListener("click", saveDocument) : __defers["$.__views.mn_salva!click!saveDocument"] = true;
            if ($.__views.win.activity.actionBar) {
                $.__views.win.activity.actionBar.displayHomeAsUp = true;
                $.__views.win.activity.actionBar.icon = "images/logo-test.png";
                $.__views.win.activity.actionBar.onHomeIconItemSelected = homeIconSelected;
            }
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function homeIconSelected() {
        $.win.close({
            animate: true
        });
    }
    function openEvent() {
        "camera" == Alloy.Globals.shortcutMode && openCamera(true);
        "gallery" == Alloy.Globals.shortcutMode && openGallery(true);
    }
    function resetGlobals() {
        Alloy.Globals.shortcutMode = null;
    }
    function saveDocument() {
        var modDocumentJSON = Alloy.Models.Document_template.toJSON();
        modDocumentJSON = _.omit(modDocumentJSON, "kind.id");
        if ("" != $.titolo.value && "" != $.descrizione.value && "" != imageContent) {
            Alloy.Globals.shortcutMode && Alloy.Models.Post_template.set("name", $.titolo.value);
            modDocumentJSON.name = Alloy.Models.Post_template.get("name");
            modDocumentJSON.description = Alloy.Models.Post_template.get("description");
            modDocumentJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
            modDocumentJSON.category = Alloy.Models.Post_template.get("category");
            modDocumentJSON.data.title = $.titolo.value;
            modDocumentJSON.data.name = fileName;
            modDocumentJSON.data.description = $.descrizione.value;
            modDocumentJSON.data.size = fileSize;
            Ti.API.info("ASPETTO DOCUMENT VALIDATO: " + JSON.stringify(modDocumentJSON));
            args(modDocumentJSON);
            $.win.close();
        } else alert("E' necessario scattare una foto o selezionarla dalla galleria, i campi titolo e descrizione sono obbligatori");
    }
    function openCamera() {
        Ti.API.info("SHORTCUT MODE: " + Alloy.Globals.shortcutMode);
        try {
            Ti.Media.showCamera({
                success: function(event) {
                    event.cropRect;
                    var image = event.media;
                    Alloy.Globals.blobImage = image;
                    newBlob = ImageFactory.compress(image, .2);
                    Ti.API.info("Our type was: " + event.mediaType);
                    $.preview.image = newBlob;
                    var hashedImage = "data:image/jpeg;base64," + Ti.Utils.base64encode(newBlob).toString();
                    var tempFile = Ti.Filesystem.createTempFile();
                    tempFile.write(newBlob);
                    Ti.API.info("HASHED IMAGE MIME TYPE: " + image.getMimeType());
                    Ti.API.info("IMAGE FILE SIZE: " + tempFile.size);
                    Ti.API.info("IMAGE FILE NAME: " + tempFile.name);
                    imageContent.base64 = hashedImage;
                    fileSize = tempFile.size;
                    fileName = tempFile.name;
                    if (Alloy.Globals.shortcutMode) {
                        $.titolo.value = "Foto scattata il " + moment().format("DD-MM-YYYY HH:MM");
                        $.descrizione.value = "Foto scattata il " + moment().format("DD-MM-YYYY HH:MM");
                    }
                },
                cancel: function() {},
                error: function(error) {
                    var a = Titanium.UI.createAlertDialog({
                        title: "Camera"
                    });
                    a.setMessage(error.code == Titanium.Media.NO_CAMERA ? "Impossibile attivare la funzione foto su questo dispositivo" : "Unexpected error: " + error.code);
                    a.show();
                },
                saveToPhotoGallery: true,
                allowEditing: false,
                mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
            });
        } catch (error) {
            Ti.API.info("CATCHED ERROR: " + error);
        }
    }
    function openGallery() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                var cropRect = event.cropRect;
                var image = event.media;
                Alloy.Globals.blobImage = image;
                Ti.API.info("Our type was: " + event.mediaType);
                $.preview.image = image;
                Ti.API.info("IMAGE MIME TYPE: " + image.getMimeType());
                var tempFile = Ti.Filesystem.createTempFile();
                tempFile.write(image);
                var content = tempFile.read();
                Ti.API.info("IMAGE FILE SIZE: " + tempFile.size);
                Ti.API.info("IMAGE FILE NAME: " + tempFile.name);
                var hashedImage = "data:image/jpeg;base64," + Ti.Utils.base64encode(content).toString();
                imageContent.base64 = hashedImage;
                fileSize = tempFile.size;
                fileName = tempFile.name;
                Titanium.API.info("PHOTO GALLERY SUCCESS cropRect.x " + cropRect.x + " cropRect.y " + cropRect.y + " cropRect.height " + cropRect.height + " cropRect.width " + cropRect.width);
            },
            cancel: function() {},
            error: function(error) {
                Ti.API.info("ERROR: " + error);
            },
            allowEditing: false,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addDocument";
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
        id: "win",
        title: "Nuovo Documento"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    resetGlobals ? $.__views.win.addEventListener("close", resetGlobals) : __defers["$.__views.win!close!resetGlobals"] = true;
    $.__views.win.addEventListener("open", __alloyId34);
    var __alloyId35 = [];
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId36"
    });
    __alloyId35.push($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.titolo = Ti.UI.createTextField({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        height: 40,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        wordWrap: false,
        hintText: "Titolo",
        id: "titolo"
    });
    $.__views.__alloyId37.add($.__views.titolo);
    $.__views.__alloyId38 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId38"
    });
    __alloyId35.push($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.descrizione = Ti.UI.createTextArea({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 100,
        wordWrap: false,
        hintText: "Descrizione",
        id: "descrizione"
    });
    $.__views.__alloyId39.add($.__views.descrizione);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId40"
    });
    __alloyId35.push($.__views.__alloyId40);
    $.__views.picOptionsContainer = Ti.UI.createView({
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "picOptionsContainer"
    });
    $.__views.__alloyId40.add($.__views.picOptionsContainer);
    $.__views.picture = Ti.UI.createView({
        height: 40,
        width: "49%",
        left: 0,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#5FAEE3",
        backgroundColor: "#5FAEE3",
        id: "picture"
    });
    $.__views.picOptionsContainer.add($.__views.picture);
    openCamera ? $.__views.picture.addEventListener("click", openCamera) : __defers["$.__views.picture!click!openCamera"] = true;
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
        width: "49%",
        right: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "gallery"
    });
    $.__views.picOptionsContainer.add($.__views.gallery);
    openGallery ? $.__views.gallery.addEventListener("click", openGallery) : __defers["$.__views.gallery!click!openGallery"] = true;
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
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId41"
    });
    __alloyId35.push($.__views.__alloyId41);
    $.__views.preview = Ti.UI.createImageView({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        height: 200,
        id: "preview"
    });
    $.__views.__alloyId41.add($.__views.preview);
    $.__views.newDocumentTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId35,
        id: "newDocumentTable"
    });
    $.__views.win.add($.__views.newDocumentTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    var ImageFactory = require("ti.imagefactory");
    var imageContent = {};
    var fileName;
    var fileSize;
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.win!close!resetGlobals"] && $.__views.win.addEventListener("close", resetGlobals);
    __defers["$.__views.mn_salva!click!saveDocument"] && $.__views.mn_salva.addEventListener("click", saveDocument);
    __defers["$.__views.picture!click!openCamera"] && $.__views.picture.addEventListener("click", openCamera);
    __defers["$.__views.gallery!click!openGallery"] && $.__views.gallery.addEventListener("click", openGallery);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;