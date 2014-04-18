function Controller() {
    function __alloyId15() {
        $.__views.window.removeEventListener("open", __alloyId15);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId14 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/785-floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
            savePost ? $.__views.salva.addEventListener("click", savePost) : __defers["$.__views.salva!click!savePost"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function showDatePicker() {
        Ti.API.info("111111111 DATE GOT FROM PICKER: " + $.postDate.value);
        Alloy.createController("datePicker", function(p_data) {
            $.postDate.value = moment(p_data).format("LLL");
            Ti.API.info("22222222 DATE GOT FROM PICKER: " + $.postDate.value);
        });
    }
    function savePost() {
        Ti.API.info("POST DATE VALUE AT BEGINNING; " + $.postDate.value);
        Ti.API.info("POST DATE PARSED AT BEGINNING; " + Date.parse($.postDate.value));
        if ("" !== $.titolo.value && 9999 != $.pkrCategoria.getSelectedRow(0).id) {
            var postObj = {
                name: $.titolo.value,
                description: "DATAPOST-TEMPLATE-DEFAULT-DESC",
                referenceTime: Date.parse($.postDate.value),
                category: {
                    id: $.pkrCategoria.getSelectedRow(0).id,
                    version: $.pkrCategoria.getSelectedRow(0).version
                },
                location: {
                    name: $.location.value,
                    description: $.location.value,
                    latitude: location_result.latitude,
                    longitude: location_result.longitude
                }
            };
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
    function addCashflow() {
        if ("" == $.titolo.value && 9999 == $.pkrCategoria.getSelectedRow(0).id) {
            alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
            return;
        }
        Alloy.createController("addCashflow", function(objRet) {
            Ti.API.info("POST DATE VALUE: " + $.postDate.value);
            var objAspect = {
                kind: {
                    code: "CASHFLOWDATATYPE_CODE"
                },
                data: {}
            };
            objAspect.name = $.titolo.value;
            objAspect.referenceTime = Date.parse($.postDate.value);
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
            objAspect.data.dataOperazione = Date.parse($.postDate.value);
            objAspect.data.dataValuta = Date.parse($.postDate.value);
            objAspect.data.pagamentoIncasso = objRet.pagamentoIncasso;
            objAspect.data.importo = objRet.importo;
            var tempObj = _.clone(objAspect);
            objAspect.data = JSON.stringify(objAspect.data);
            arrayAspetti.push(objAspect);
            Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
            switch (objAspect.kind.code) {
              case "CASHFLOWDATATYPE_CODE":
                var riga = Alloy.createController("rowCASHFLOW", {
                    id_code: arrayAspetti.length - 1,
                    name: objAspect.name,
                    importo: tempObj.data.importo,
                    dataOperazione: tempObj.data.dataOperazione,
                    dataValuta: tempObj.data.dataValuta,
                    codTipoMovimento: tempObj.data.tipoMovimento.codice
                }).getView();
                $.newPostTable.appendRow(riga);
                break;

              case "DOCUMENTDATATYPE_CODE":
                Ti.API.info("ASPECT DESCRIPTION: " + value.name);
                var riga = Alloy.createController("rowDOCUMENT", {
                    id_code: key,
                    description: value.name,
                    format: _.isNull(value.data.format) ? "Non disponibile" : value.data.format.name,
                    type: _.isNull(value.data.format) ? "Non disponibile" : value.data.format.type,
                    title: value.data.title
                }).getView();
                rows.push(riga);
                break;

              case "LINKDATATYPE_CODE":
                var riga = Alloy.createController("rowLINK", {
                    id_code: key,
                    description: value.description,
                    type: value.data.format.type,
                    title: value.data.title,
                    content: value.data.content
                }).getView();
                rows.push(riga);
                break;

              case "NOTEDATATYPE_CODE":
                var riga = Alloy.createController("rowNOTE", {
                    id_code: key,
                    description: value.data.title,
                    timestamp: value.data.timestamp
                }).getView();
                rows.push(riga);
            }
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
            objAspect.referenceTime = Date.parse($.postDate.value);
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
    $.__views.window.addEventListener("open", __alloyId15);
    var __alloyId16 = [];
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId17"
    });
    __alloyId16.push($.__views.__alloyId17);
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
    $.__views.__alloyId17.add($.__views.titolo);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/259-list.png",
        id: "__alloyId18"
    });
    __alloyId16.push($.__views.__alloyId18);
    $.__views.pkrCategoria = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrCategoria",
        selectionIndicator: "true"
    });
    $.__views.__alloyId18.add($.__views.pkrCategoria);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/83-calendar.png",
        id: "__alloyId19"
    });
    __alloyId16.push($.__views.__alloyId19);
    $.__views.postDate = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        editable: false,
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "postDate"
    });
    $.__views.__alloyId19.add($.__views.postDate);
    showDatePicker ? $.__views.postDate.addEventListener("focus", showDatePicker) : __defers["$.__views.postDate!focus!showDatePicker"] = true;
    showDatePicker ? $.__views.postDate.addEventListener("click", showDatePicker) : __defers["$.__views.postDate!click!showDatePicker"] = true;
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/74-location.png",
        id: "__alloyId20"
    });
    __alloyId16.push($.__views.__alloyId20);
    $.__views.location = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        ellipsize: true,
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        autocorrect: false,
        height: Ti.UI.SIZE,
        hintText: "Posizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "location"
    });
    $.__views.__alloyId20.add($.__views.location);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        bottom: 50,
        left: 10,
        right: 10,
        separatorColor: "transparent",
        data: __alloyId16,
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
    $.__views.__alloyId21 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        touchEnabled: false,
        backgroundColor: "#D6D6D6",
        width: "100%",
        id: "__alloyId21"
    });
    $.__views.bottomBar.add($.__views.__alloyId21);
    $.__views.buttonsContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 15,
        height: 25,
        id: "buttonsContainer"
    });
    $.__views.bottomBar.add($.__views.buttonsContainer);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        left: 0,
        width: 20,
        height: 20,
        backgroundImage: "/images/826-money-1.png",
        id: "__alloyId22"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId22);
    addCashflow ? $.__views.__alloyId22.addEventListener("click", addCashflow) : __defers["$.__views.__alloyId22!click!addCashflow"] = true;
    $.__views.__alloyId23 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/770-paper-clip.png",
        id: "__alloyId23"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId23);
    addDocument ? $.__views.__alloyId23.addEventListener("click", addDocument) : __defers["$.__views.__alloyId23!click!addDocument"] = true;
    $.__views.__alloyId24 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/809-clipboard.png",
        id: "__alloyId24"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/843-link.png",
        id: "__alloyId25"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId25);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    var location_result;
    var u_location = require("getUserLocation");
    var net = require("net");
    var arrayAspetti = [];
    u_location.result(function(locationData) {
        location_result = locationData;
        $.location.value = locationData.address;
    });
    $.postDate.value = moment().format("LLL");
    var rowsCat = [ Ti.UI.createPickerRow({
        title: "Selezionare una categoria",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsCat.push(pkrRow);
    });
    $.pkrCategoria.add(rowsCat);
    $.window.open();
    __defers["$.__views.salva!click!savePost"] && $.__views.salva.addEventListener("click", savePost);
    __defers["$.__views.postDate!focus!showDatePicker"] && $.__views.postDate.addEventListener("focus", showDatePicker);
    __defers["$.__views.postDate!click!showDatePicker"] && $.__views.postDate.addEventListener("click", showDatePicker);
    __defers["$.__views.__alloyId22!click!addCashflow"] && $.__views.__alloyId22.addEventListener("click", addCashflow);
    __defers["$.__views.__alloyId23!click!addDocument"] && $.__views.__alloyId23.addEventListener("click", addDocument);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;