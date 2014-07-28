function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId154() {
        $.__views.win.removeEventListener("open", __alloyId154);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId153 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-save2.png",
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId153, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId153, Alloy.Android.menuItemCreateArgs));
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
            if (flagUpdateImage) {
                Ti.API.info("UPDATED IMAGE TRUE ****");
                modDocumentJSON.data.content = imageContent;
            } else {
                Ti.API.info("UPDATED IMAGE FALSE ****");
                modDocumentJSON.data.content = dataDocument.content;
            }
            modDocumentJSON.data = JSON.stringify(modDocumentJSON.data);
            args._callback(modDocumentJSON);
            $.win.close();
        } else alert("E' necessario scattare una foto o selezionarla dalla galleria, i campi titolo e descrizione sono obbligatori");
    }
    function openCamera() {
        try {
            Ti.Media.showCamera({
                success: function(event) {
                    event.cropRect;
                    var image = event.media;
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
                    flagUpdateImage = true;
                },
                cancel: function() {},
                error: function(error) {
                    var a = Titanium.UI.createAlertDialog({
                        title: "Camera"
                    });
                    error.code == Titanium.Media.NO_CAMERA ? a.setMessage("Impossibile attivare la funzione foto su questo dispositivo") : a.setMessage("Unexpected error: " + error.code);
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
                flagUpdateImage = true;
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
    this.__controllerPath = "editDocument";
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
        title: "Modifica Documento"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    resetGlobals ? $.__views.win.addEventListener("close", resetGlobals) : __defers["$.__views.win!close!resetGlobals"] = true;
    $.__views.win.addEventListener("open", __alloyId154);
    var __alloyId155 = [];
    $.__views.__alloyId156 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId156"
    });
    __alloyId155.push($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "__alloyId157"
    });
    $.__views.__alloyId156.add($.__views.__alloyId157);
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
    $.__views.__alloyId157.add($.__views.titolo);
    $.__views.__alloyId158 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId158"
    });
    __alloyId155.push($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
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
    $.__views.__alloyId159.add($.__views.descrizione);
    $.__views.__alloyId160 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId160"
    });
    __alloyId155.push($.__views.__alloyId160);
    $.__views.picOptionsContainer = Ti.UI.createView({
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "picOptionsContainer"
    });
    $.__views.__alloyId160.add($.__views.picOptionsContainer);
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
    $.__views.__alloyId161 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId161"
    });
    __alloyId155.push($.__views.__alloyId161);
    $.__views.preview = Ti.UI.createImageView({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        height: 200,
        id: "preview"
    });
    $.__views.__alloyId161.add($.__views.preview);
    $.__views.newDocumentTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId155,
        id: "newDocumentTable"
    });
    $.__views.win.add($.__views.newDocumentTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var dataDocument = JSON.parse(args.aspetto.data);
    Ti.API.info("ARGS ****: " + JSON.stringify(dataDocument));
    $.titolo.value = dataDocument.title;
    $.descrizione.value = dataDocument.description;
    $.preview.setImage(Ti.Utils.base64decode(dataDocument.content.base64.substr(dataDocument.content.base64.indexOf(","))));
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    var ImageFactory = require("ti.imagefactory");
    var imageContent = {};
    var flagUpdateImage = false;
    var fileName;
    var fileSize;
    __defers["$.__views.win!close!resetGlobals"] && $.__views.win.addEventListener("close", resetGlobals);
    __defers["$.__views.mn_salva!click!saveDocument"] && $.__views.mn_salva.addEventListener("click", saveDocument);
    __defers["$.__views.picture!click!openCamera"] && $.__views.picture.addEventListener("click", openCamera);
    __defers["$.__views.gallery!click!openGallery"] && $.__views.gallery.addEventListener("click", openGallery);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;