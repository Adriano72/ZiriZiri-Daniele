function Controller() {
    function __alloyId63() {
        $.__views.win.removeEventListener("open", __alloyId63);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId62 = {
                icon: "/images/top-save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId62, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId62, Alloy.Android.menuItemCreateArgs));
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
            ({
                name: $.titolo.value,
                description: "DATAPOST-TEMPLATE-DEFAULT-DESC",
                referenceTime: timeNow,
                category: {
                    id: $.pkrCategoria.getSelectedRow(0).id,
                    version: $.pkrCategoria.getSelectedRow(0).version
                },
                location: location,
                startTime: dataFrom,
                endTime: dataTo
            });
            Alloy.Models.Post_template.set("name", $.titolo.value);
            Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
            Alloy.Models.Post_template.set("category", {
                id: $.pkrCategoria.getSelectedRow(0).id,
                code: $.pkrCategoria.getSelectedRow(0).code
            });
            Alloy.Models.Post_template.set("description", $.descrizione.value);
            Alloy.Models.Post_template.set("referenceTime", timeNow);
            Ti.API.info("JSON POST: " + JSON.stringify(Alloy.Models.Template));
            net.savePost(Alloy.Models.Post_template, function(post_id) {
                Alloy.Globals.showSpinner();
                Ti.API.info("ID POST SALVATO: " + post_id);
                if (arrayAspetti.length > 0) callSaveAspects(function(p_arrayIdAspetti) {
                    p_arrayIdAspetti.push(Ti.App.Properties.getList("postTemplateIds"));
                    p_arrayIdAspetti = _.flatten(p_arrayIdAspetti);
                    Ti.API.info("ARRAY ID ASPETTI DA MANDARE IN ASSOCIAZIONE: " + p_arrayIdAspetti);
                    net.linkAspectsToPost(post_id, p_arrayIdAspetti, function() {
                        $.win.close();
                        args();
                    });
                }); else {
                    $.win.close();
                    alert("Post salvato");
                    setTimeout(function() {
                        Ti.App.fireEvent("loading_done");
                        args();
                    }, 500);
                }
            });
        } else alert("Il campo Titolo e il campo Categoria sono obbligatori!");
    }
    function addEvent() {
        if ("" == $.titolo.value && 9999 == $.pkrCategoria.getSelectedRow(0).id) {
            alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
            return;
        }
        Alloy.createController("addEvent", function(p_retLocation, p_dataFrom, p_dataTo) {
            location = p_retLocation;
            dataFrom = moment(p_dataFrom).format("LLL");
            dataTo = moment(p_dataTo).format("LLL");
            Ti.API.info("LOCATION: " + JSON.stringify(location));
            Ti.API.info("DATA DA: " + dataFrom);
            Ti.API.info("DATA A: " + dataTo);
            var riga = Alloy.createController("rowEvent", {
                dataDa: dataFrom,
                dataA: dataTo,
                posizione: location.name
            }).getView();
            $.newPostTable.appendRow(riga);
        }).getView().open();
    }
    function addCashflow() {
        if ("" == $.titolo.value && 9999 == $.pkrCategoria.getSelectedRow(0).id) {
            alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
            return;
        }
        Alloy.createController("addCashflow", function(objRet) {
            var objAspect = {
                kind: {
                    code: "CASHFLOWDATATYPE_CODE",
                    name: "CASHFLOWDATATYPE_NAME",
                    description: "CASHFLOWDATATYPE_DESCRIPTION"
                },
                data: {}
            };
            objAspect.name = $.titolo.value;
            objAspect.referenceTime = timeNow;
            objAspect.category = {
                id: $.pkrCategoria.getSelectedRow(0).id,
                version: $.pkrCategoria.getSelectedRow(0).version
            };
            objAspect.location = {
                name: $.location.value,
                description: $.location.value,
                latitude: location_result.latitude,
                longitude: location_result.longitude
            };
            objAspect.data.tipoMovimento = objRet.tipoMovimento;
            objAspect.data.dataOperazione = timeNow;
            objAspect.data.dataValuta = timeNow;
            objAspect.data.pagamentoIncasso = objRet.pagamentoIncasso;
            objAspect.data.importo = objRet.importo;
            var tempObj = _.clone(objAspect);
            objAspect.data = JSON.stringify(objAspect.data);
            arrayAspetti.push(objAspect);
            Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
            var riga = Alloy.createController("rowCASHFLOW", {
                id_code: arrayAspetti.length - 1,
                name: objAspect.name,
                importo: tempObj.data.importo,
                dataOperazione: tempObj.data.dataOperazione,
                dataValuta: tempObj.data.dataValuta,
                codTipoMovimento: tempObj.data.tipoMovimento.codice
            }).getView();
            $.newPostTable.appendRow(riga);
        }).getView().open();
    }
    function addDocument() {
        if ("" == $.titolo.value && 9999 == $.pkrCategoria.getSelectedRow(0).id) {
            alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
            return;
        }
        Alloy.createController("addDocument", function(objRet) {
            var objAspect = {
                kind: {
                    code: "DOCUMENTDATATYPE_CODE",
                    name: "DOCUMENTDATATYPE_NAME",
                    description: "DOCUMENTDATATYPE_DESCRIPTION"
                },
                data: {}
            };
            objAspect.name = objRet.name;
            objAspect.description = objRet.description;
            objAspect.referenceTime = timeNow;
            objAspect.category = {
                id: $.pkrCategoria.getSelectedRow(0).id,
                version: $.pkrCategoria.getSelectedRow(0).version
            };
            objAspect.data.title = objRet.name;
            objAspect.data.description = objRet.description;
            objAspect.data.name = objRet.fileName;
            objAspect.data.size = objRet.fileSize;
            objAspect.data.timestamp = moment();
            objAspect.data.content = objRet.content;
            Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));
            var tempObj = _.clone(objAspect);
            objAspect.data = JSON.stringify(objAspect.data);
            arrayAspetti.push(objAspect);
            Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
            var riga = Alloy.createController("rowDOCUMENT", {
                id_code: arrayAspetti.length - 1,
                titolo: tempObj.name,
                descrizione: tempObj.description,
                size: tempObj.data.size,
                name: tempObj.data.name
            }).getView();
            $.newPostTable.appendRow(riga);
        }).getView().open();
    }
    function addLink() {
        if ("" == $.titolo.value && 9999 == $.pkrCategoria.getSelectedRow(0).id) {
            alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
            return;
        }
        Alloy.createController("addLink", function(objRet) {
            var objAspect = {
                kind: {
                    code: "LINKDATATYPE_CODE",
                    name: "LINKDATATYPE_NAME",
                    description: "LINKDATATYPE_DESCRIPTION"
                },
                data: {}
            };
            objAspect.name = objRet.name;
            objAspect.description = objRet.description;
            objAspect.referenceTime = timeNow;
            objAspect.category = {
                id: $.pkrCategoria.getSelectedRow(0).id,
                version: $.pkrCategoria.getSelectedRow(0).version
            };
            objAspect.data.format = {
                name: "LINK",
                description: "HTML LINK",
                type: "LINK"
            };
            objAspect.data.title = objRet.name;
            objAspect.data.name = objRet.name;
            objAspect.data.description = objRet.description;
            objAspect.data.content = -1 == objRet.content.indexOf("http://") ? "http://" + objRet.content : objRet.content;
            objAspect.data.preview = null;
            Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));
            var tempObj = _.clone(objAspect);
            objAspect.data = JSON.stringify(objAspect.data);
            arrayAspetti.push(objAspect);
            Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
            var riga = Alloy.createController("rowLINK", {
                id_code: arrayAspetti.length - 1,
                titolo: tempObj.name,
                descrizione: tempObj.description,
                content: tempObj.data.content
            }).getView();
            $.newPostTable.appendRow(riga);
        }).getView().open();
    }
    function addNote() {
        Ti.API.info("**** INSERT NOTE!");
        if ("" == $.titolo.value && 9999 == $.pkrCategoria.getSelectedRow(0).id) {
            alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
            return;
        }
        Alloy.createController("addNote", function(objRet) {
            var objAspect = {
                kind: {
                    code: "NOTEDATATYPE_CODE",
                    name: "NOTEDATATYPE_NAME",
                    description: "NOTEDATATYPE_DESCRIPTION"
                },
                data: {}
            };
            objAspect.name = objRet.name;
            objAspect.description = objRet.description;
            objAspect.referenceTime = timeNow;
            objAspect.category = {
                id: $.pkrCategoria.getSelectedRow(0).id,
                version: $.pkrCategoria.getSelectedRow(0).version
            };
            objAspect.data.title = objRet.name;
            objAspect.data.description = objRet.description;
            objAspect.data.content = objRet.content;
            Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));
            var tempObj = _.clone(objAspect);
            objAspect.data = JSON.stringify(objAspect.data);
            arrayAspetti.push(objAspect);
            Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
            var riga = Alloy.createController("rowNOTE", {
                id_code: arrayAspetti.length - 1,
                titolo: tempObj.data.title,
                content: tempObj.data.content
            }).getView();
            $.newPostTable.appendRow(riga);
        }).getView().open();
    }
    function callSaveAspects(_callback) {
        net.saveAspect(arrayAspetti, function(id_saved_aspects_array) {
            Ti.API.info("ARRAY DEGLI ID ASPETTI SALVATI: " + id_saved_aspects_array);
            _callback(id_saved_aspects_array);
        });
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
        id: "win",
        title: "Nuovo Post"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    initializeThings ? $.__views.win.addEventListener("open", initializeThings) : __defers["$.__views.win!open!initializeThings"] = true;
    $.__views.win.addEventListener("open", __alloyId63);
    var __alloyId64 = [];
    $.__views.__alloyId65 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId65"
    });
    __alloyId64.push($.__views.__alloyId65);
    $.__views.titolo = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        right: 5,
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
    $.__views.__alloyId65.add($.__views.titolo);
    $.__views.__alloyId66 = Ti.UI.createTableViewRow({
        id: "__alloyId66"
    });
    __alloyId64.push($.__views.__alloyId66);
    $.__views.starwidget = Alloy.createWidget("starrating", "widget", {
        top: 10,
        bottom: 10,
        id: "starwidget",
        max: "5",
        initialRating: "0",
        __parentSymbol: $.__views.__alloyId66
    });
    $.__views.starwidget.setParent($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId67"
    });
    __alloyId64.push($.__views.__alloyId67);
    $.__views.descrizione = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        right: 5,
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
    $.__views.__alloyId67.add($.__views.descrizione);
    $.__views.__alloyId68 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        hasDetail: "true",
        id: "__alloyId68"
    });
    __alloyId64.push($.__views.__alloyId68);
    $.__views.pkrCategoria = Ti.UI.createPicker({
        color: "#999",
        top: 5,
        right: 5,
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
    $.__views.__alloyId68.add($.__views.pkrCategoria);
    $.__views.__alloyId69 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId69"
    });
    __alloyId64.push($.__views.__alloyId69);
    $.__views.tag = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        right: 5,
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
    $.__views.__alloyId69.add($.__views.tag);
    $.__views.__alloyId70 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId70"
    });
    __alloyId64.push($.__views.__alloyId70);
    $.__views.storie = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        right: 5,
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
    $.__views.__alloyId70.add($.__views.storie);
    $.__views.__alloyId71 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId71"
    });
    __alloyId64.push($.__views.__alloyId71);
    $.__views.picOptionsContainer = Ti.UI.createView({
        top: 5,
        left: 5,
        right: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "picOptionsContainer"
    });
    $.__views.__alloyId71.add($.__views.picOptionsContainer);
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
        bottom: 50,
        left: 0,
        right: 0,
        separatorColor: "transparent",
        data: __alloyId64,
        id: "newPostTable"
    });
    $.__views.win.add($.__views.newPostTable);
    $.__views.bottomBar = Ti.UI.createView({
        backgroundColor: "#5FAEE3",
        width: Ti.UI.FILL,
        touchEnabled: false,
        height: 50,
        bottom: 0,
        id: "bottomBar"
    });
    $.__views.win.add($.__views.bottomBar);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: "100%",
        id: "__alloyId72"
    });
    $.__views.bottomBar.add($.__views.__alloyId72);
    $.__views.buttonsContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 15,
        height: 25,
        id: "buttonsContainer"
    });
    $.__views.bottomBar.add($.__views.buttonsContainer);
    $.__views.__alloyId73 = Ti.UI.createLabel({
        left: 0,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-event-dark.png",
        id: "__alloyId73"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId73);
    addEvent ? $.__views.__alloyId73.addEventListener("click", addEvent) : __defers["$.__views.__alloyId73!click!addEvent"] = true;
    $.__views.__alloyId74 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-finance-dark.png",
        id: "__alloyId74"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId74);
    addCashflow ? $.__views.__alloyId74.addEventListener("click", addCashflow) : __defers["$.__views.__alloyId74!click!addCashflow"] = true;
    $.__views.__alloyId75 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-document-dark.png",
        id: "__alloyId75"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId75);
    addDocument ? $.__views.__alloyId75.addEventListener("click", addDocument) : __defers["$.__views.__alloyId75!click!addDocument"] = true;
    $.__views.__alloyId76 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-note-dark.png",
        id: "__alloyId76"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId76);
    addNote ? $.__views.__alloyId76.addEventListener("click", addNote) : __defers["$.__views.__alloyId76!click!addNote"] = true;
    $.__views.__alloyId77 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-link-dark.png",
        id: "__alloyId77"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId77);
    addLink ? $.__views.__alloyId77.addEventListener("click", addLink) : __defers["$.__views.__alloyId77!click!addLink"] = true;
    $.__views.__alloyId78 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-comunicazioni-dark.png",
        id: "__alloyId78"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId78);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    var net = require("net");
    var location = null;
    var dataFrom, dataTo = null;
    var timeNow = moment();
    var arrayAspetti = [];
    Ti.API.info("**** timeNow: " + timeNow);
    $.starwidget.init();
    $.win.open();
    __defers["$.__views.win!open!initializeThings"] && $.__views.win.addEventListener("open", initializeThings);
    __defers["$.__views.mn_salva!click!savePost"] && $.__views.mn_salva.addEventListener("click", savePost);
    __defers["$.__views.__alloyId73!click!addEvent"] && $.__views.__alloyId73.addEventListener("click", addEvent);
    __defers["$.__views.__alloyId74!click!addCashflow"] && $.__views.__alloyId74.addEventListener("click", addCashflow);
    __defers["$.__views.__alloyId75!click!addDocument"] && $.__views.__alloyId75.addEventListener("click", addDocument);
    __defers["$.__views.__alloyId76!click!addNote"] && $.__views.__alloyId76.addEventListener("click", addNote);
    __defers["$.__views.__alloyId77!click!addLink"] && $.__views.__alloyId77.addEventListener("click", addLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;