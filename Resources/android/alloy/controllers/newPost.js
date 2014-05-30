function Controller() {
    function __alloyId39() {
        $.__views.window.removeEventListener("open", __alloyId39);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId38 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId38, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId38, Alloy.Android.menuItemCreateArgs));
            savePost ? $.__views.salva.addEventListener("click", savePost) : __defers["$.__views.salva!click!savePost"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function populateCategories() {
        var rowsCat = [ Ti.UI.createPickerRow({
            title: "Selezionare una categoria",
            id: 9999
        }) ];
        _.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value) {
            Ti.API.info("CAT: " + JSON.stringify(value));
            var pkrRow = Ti.UI.createPickerRow(value);
            rowsCat.push(pkrRow);
        });
        $.pkrCategoria.add(rowsCat);
    }
    function savePost() {
        if ("" !== $.titolo.value && 9999 != $.pkrCategoria.getSelectedRow(0).id) {
            var postObj = {
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
            };
            Ti.API.info("JSON POST: " + JSON.stringify(postObj));
            net.savePost(postObj, function(post_id) {
                Alloy.Globals.showSpinner();
                Ti.API.info("ID POST SALVATO: " + post_id);
                if (arrayAspetti.length > 0) callSaveAspects(function(p_arrayIdAspetti) {
                    p_arrayIdAspetti.push(Ti.App.Properties.getList("postTemplateIds"));
                    p_arrayIdAspetti = _.flatten(p_arrayIdAspetti);
                    Ti.API.info("ARRAY ID ASPETTI DA MANDARE IN ASSOCIAZIONE: " + p_arrayIdAspetti);
                    net.linkAspectsToPost(post_id, p_arrayIdAspetti, function() {
                        $.window.close();
                        args();
                    });
                }); else {
                    $.window.close();
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
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuovo Post"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    populateCategories ? $.__views.window.addEventListener("open", populateCategories) : __defers["$.__views.window!open!populateCategories"] = true;
    $.__views.window.addEventListener("open", __alloyId39);
    var __alloyId40 = [];
    $.__views.__alloyId41 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId41"
    });
    __alloyId40.push($.__views.__alloyId41);
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
    $.__views.__alloyId41.add($.__views.titolo);
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/list.png",
        id: "__alloyId42"
    });
    __alloyId40.push($.__views.__alloyId42);
    $.__views.pkrCategoria = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: 50,
        id: "pkrCategoria",
        selectionIndicator: "true"
    });
    $.__views.__alloyId42.add($.__views.pkrCategoria);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        bottom: 50,
        left: 10,
        right: 10,
        separatorColor: "transparent",
        data: __alloyId40,
        id: "newPostTable"
    });
    $.__views.window.add($.__views.newPostTable);
    $.__views.bottomBar = Ti.UI.createView({
        backgroundColor: "#EBEBEB",
        width: Ti.UI.FILL,
        touchEnabled: false,
        height: 50,
        bottom: 0,
        id: "bottomBar"
    });
    $.__views.window.add($.__views.bottomBar);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: "100%",
        id: "__alloyId43"
    });
    $.__views.bottomBar.add($.__views.__alloyId43);
    $.__views.buttonsContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 15,
        height: 25,
        id: "buttonsContainer"
    });
    $.__views.bottomBar.add($.__views.buttonsContainer);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        left: 0,
        width: 20,
        height: 20,
        backgroundImage: "/images/851-calendar@2x.png",
        id: "__alloyId44"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId44);
    addEvent ? $.__views.__alloyId44.addEventListener("click", addEvent) : __defers["$.__views.__alloyId44!click!addEvent"] = true;
    $.__views.__alloyId45 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/826-money-1@2x.png",
        id: "__alloyId45"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId45);
    addCashflow ? $.__views.__alloyId45.addEventListener("click", addCashflow) : __defers["$.__views.__alloyId45!click!addCashflow"] = true;
    $.__views.__alloyId46 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/770-paper-clip@2x.png",
        id: "__alloyId46"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId46);
    addDocument ? $.__views.__alloyId46.addEventListener("click", addDocument) : __defers["$.__views.__alloyId46!click!addDocument"] = true;
    $.__views.__alloyId47 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/809-clipboard@2x.png",
        id: "__alloyId47"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId47);
    addNote ? $.__views.__alloyId47.addEventListener("click", addNote) : __defers["$.__views.__alloyId47!click!addNote"] = true;
    $.__views.__alloyId48 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/843-link@2x.png",
        id: "__alloyId48"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId48);
    addLink ? $.__views.__alloyId48.addEventListener("click", addLink) : __defers["$.__views.__alloyId48!click!addLink"] = true;
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
    $.window.open();
    __defers["$.__views.window!open!populateCategories"] && $.__views.window.addEventListener("open", populateCategories);
    __defers["$.__views.salva!click!savePost"] && $.__views.salva.addEventListener("click", savePost);
    __defers["$.__views.__alloyId44!click!addEvent"] && $.__views.__alloyId44.addEventListener("click", addEvent);
    __defers["$.__views.__alloyId45!click!addCashflow"] && $.__views.__alloyId45.addEventListener("click", addCashflow);
    __defers["$.__views.__alloyId46!click!addDocument"] && $.__views.__alloyId46.addEventListener("click", addDocument);
    __defers["$.__views.__alloyId47!click!addNote"] && $.__views.__alloyId47.addEventListener("click", addNote);
    __defers["$.__views.__alloyId48!click!addLink"] && $.__views.__alloyId48.addEventListener("click", addLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;