function Controller() {
    function __alloyId7() {
        $.__views.window.removeEventListener("open", __alloyId7);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId6 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/785-floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
            createProtoObj ? $.__views.salva.addEventListener("click", createProtoObj) : __defers["$.__views.salva!click!createProtoObj"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function createProtoObj() {
        if (9999 != $.pkrPagamentoIncasso.getSelectedRow(0).id && 9999 != $.pkrTipoMovimento.getSelectedRow(0).id) {
            $.titolo.value;
            $.descrizione.value;
            $.pkrTipoMovimento.getSelectedRow(0).version;
            $.pkrPagamentoIncasso.getSelectedRow(0).id;
            $.pkrPagamentoIncasso.getSelectedRow(0).version;
            var objDocument = {
                kind: {
                    code: "DOCUMENTDATATYPE_CODE",
                    name: "DOCUMENTDATATYPE_NAME",
                    description: "DOCUMENTDATATYPE_DESCRIPTION"
                }
            };
            args(objDocument);
            $.window.close();
        } else alert("I campi Tipo Movimento e Pagamento Incasso sono obbligatori!");
    }
    function openCamera() {
        Ti.Media.showCamera({
            success: function(event) {
                event.cropRect;
                var image = event.media;
                Ti.API.info("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    $.preview.image = image;
                    var hashedImage = Ti.Utils.base64encode(image).toString();
                    Ti.API.info("HASHED IMAGE : " + hashedImage);
                    Ti.API.info("HASHED IMAGE MIME TYPE: " + image.getMimeType());
                    var tempFile = Ti.Filesystem.createTempFile();
                    tempFile.write(image);
                    Ti.API.info("HASHED IMAGE SIZE: " + tempFile.size);
                } else alert("got the wrong type back =" + event.mediaType);
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
    }
    function openGallery() {
        Titanium.Media.openPhotoGallery({
            success: function(event) {
                var cropRect = event.cropRect;
                var image = event.media;
                Ti.API.info("Our type was: " + event.mediaType);
                if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                    $.preview.setWidth(cropRect.width);
                    $.preview.setHeight(cropRect.height);
                    $.preview.image = image;
                    Ti.API.info("HASHED IMAGE: " + image.getFile());
                    Ti.API.info("HASHED IMAGE MIME TYPE: " + image.getMimeType());
                    var tempFile = Ti.Filesystem.createTempFile();
                    tempFile.write(image);
                    var content = tempFile.read();
                    Ti.API.info("HASHED IMAGE SIZE: " + tempFile.size);
                    var hashedImage = Ti.Utils.base64encode(content).toString();
                    Ti.API.info("HASHED IMAGE : " + hashedImage);
                }
                Titanium.API.info("PHOTO GALLERY SUCCESS cropRect.x " + cropRect.x + " cropRect.y " + cropRect.y + " cropRect.height " + cropRect.height + " cropRect.width " + cropRect.width);
            },
            cancel: function() {},
            error: function() {},
            allowEditing: true,
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
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuovo CashFlow"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.window.addEventListener("open", __alloyId7);
    var __alloyId8 = [];
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId9"
    });
    __alloyId8.push($.__views.__alloyId9);
    $.__views.titolo = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Titolo",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "titolo"
    });
    $.__views.__alloyId9.add($.__views.titolo);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId10"
    });
    __alloyId8.push($.__views.__alloyId10);
    $.__views.descrizione = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Descrizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "descrizione"
    });
    $.__views.__alloyId10.add($.__views.descrizione);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId11"
    });
    __alloyId8.push($.__views.__alloyId11);
    $.__views.foto = Ti.UI.createButton({
        id: "foto",
        title: "Scatta foto"
    });
    $.__views.__alloyId11.add($.__views.foto);
    openCamera ? $.__views.foto.addEventListener("click", openCamera) : __defers["$.__views.foto!click!openCamera"] = true;
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId12"
    });
    __alloyId8.push($.__views.__alloyId12);
    $.__views.gallery = Ti.UI.createButton({
        id: "gallery",
        title: "Scegli foto esistente"
    });
    $.__views.__alloyId12.add($.__views.gallery);
    openGallery ? $.__views.gallery.addEventListener("click", openGallery) : __defers["$.__views.gallery!click!openGallery"] = true;
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId13"
    });
    __alloyId8.push($.__views.__alloyId13);
    $.__views.preview = Ti.UI.createImageView({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: "95%",
        height: 200,
        id: "preview"
    });
    $.__views.__alloyId13.add($.__views.preview);
    $.__views.newDocumentTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId8,
        id: "newDocumentTable"
    });
    $.__views.window.add($.__views.newDocumentTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var args = arguments[0] || {};
    __defers["$.__views.salva!click!createProtoObj"] && $.__views.salva.addEventListener("click", createProtoObj);
    __defers["$.__views.foto!click!openCamera"] && $.__views.foto.addEventListener("click", openCamera);
    __defers["$.__views.gallery!click!openGallery"] && $.__views.gallery.addEventListener("click", openGallery);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;