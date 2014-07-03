function Controller() {
    function __alloyId34() {
        $.__views.win.removeEventListener("open", __alloyId34);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId33 = {
                icon: "/images/top-save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId33, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId33, Alloy.Android.menuItemCreateArgs));
            saveDocument ? $.__views.mn_salva.addEventListener("click", saveDocument) : __defers["$.__views.mn_salva!click!saveDocument"] = true;
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
        if (Alloy.Globals.shortcutMode) {
            Alloy.Globals.shortcutMode = false;
            openCamera();
        }
    }
    function showDatePicker(e) {
        Ti.API.info("SOURCE CLICK: " + JSON.stringify(e));
        Alloy.createController("datePicker", {
            onlyDate: true,
            _callback: function(p_data) {
                e.source.text = moment(p_data).format("L");
                e.source.dataRaw = moment(p_data);
                Ti.API.info("DATARAW: " + e.source.dataRaw);
            }
        });
    }
    function saveDocument() {
        var modDocumentJSON = Alloy.Models.Document_template.toJSON();
        modDocumentJSON = _.omit(modDocumentJSON, "kind.id");
        if ("" != $.titolo.value && "" != $.descrizione.value && "" != imageContent) {
            modDocumentJSON.name = Alloy.Models.Post_template.get("name");
            modDocumentJSON.description = Alloy.Models.Post_template.get("description");
            modDocumentJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
            modDocumentJSON.category = Alloy.Models.Post_template.get("category");
            modDocumentJSON.data.title = $.titolo.value;
            modDocumentJSON.data.name = fileName;
            modDocumentJSON.data.description = $.descrizione.value;
            modDocumentJSON.data.size = fileSize;
            modDocumentJSON.data.content = imageContent;
            modDocumentJSON.data = JSON.stringify(modDocumentJSON.data);
            Ti.API.info("ASPETTO DOCUMENT VALIDATO: " + JSON.stringify(modDocumentJSON));
            args(modDocumentJSON);
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
                Ti.API.info("*** UNO ***");
                $.preview.image = image;
                Ti.API.info("*** DUE ***");
                Ti.API.info("IMAGE MIME TYPE: " + image.getMimeType());
                Ti.API.info("*** TRE ***");
                var tempFile = Ti.Filesystem.createTempFile();
                tempFile.write(image);
                Ti.API.info("*** QUATTRO ***");
                var content = tempFile.read();
                Ti.API.info("IMAGE FILE SIZE: " + tempFile.size);
                Ti.API.info("IMAGE FILE NAME: " + tempFile.name);
                var hashedImage = "data:image/jpeg;base64," + Ti.Utils.base64encode(content).toString();
                imageContent = imageContent.base64 = hashedImage;
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
        title: "Nuovo Documento"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
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
        borderRadius: 5,
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
        borderRadius: 5,
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
    $.__views.__alloyId41 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId41.add($.__views.leftSubWrapper);
    $.__views.dataDocumentoLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Data Documento",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataDocumentoLabel"
    });
    $.__views.leftSubWrapper.add($.__views.dataDocumentoLabel);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId42"
    });
    $.__views.__alloyId41.add($.__views.__alloyId42);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId41.add($.__views.rightSubWrapper);
    $.__views.dataDocumento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "dataDocumento",
        dataRaw: ""
    });
    $.__views.rightSubWrapper.add($.__views.dataDocumento);
    showDatePicker ? $.__views.dataDocumento.addEventListener("click", showDatePicker) : __defers["$.__views.dataDocumento!click!showDatePicker"] = true;
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId43"
    });
    __alloyId35.push($.__views.__alloyId43);
    $.__views.picOptionsContainer = Ti.UI.createView({
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "picOptionsContainer"
    });
    $.__views.__alloyId43.add($.__views.picOptionsContainer);
    $.__views.picture = Ti.UI.createView({
        height: 40,
        width: "49%",
        left: 0,
        borderRadius: 5,
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
        borderRadius: 5,
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
    $.__views.__alloyId44 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId44"
    });
    __alloyId35.push($.__views.__alloyId44);
    $.__views.preview = Ti.UI.createImageView({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        height: 200,
        id: "preview"
    });
    $.__views.__alloyId44.add($.__views.preview);
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
    var ImageFactory = require("ti.imagefactory");
    $.dataDocumento.text = moment().format("L");
    $.dataDocumento.dataRaw = moment();
    var imageContent = {};
    var fileName;
    var fileSize;
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_salva!click!saveDocument"] && $.__views.mn_salva.addEventListener("click", saveDocument);
    __defers["$.__views.dataDocumento!click!showDatePicker"] && $.__views.dataDocumento.addEventListener("click", showDatePicker);
    __defers["$.__views.picture!click!openCamera"] && $.__views.picture.addEventListener("click", openCamera);
    __defers["$.__views.gallery!click!openGallery"] && $.__views.gallery.addEventListener("click", openGallery);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;