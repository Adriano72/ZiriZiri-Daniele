function Controller() {
    function __alloyId61() {
        $.__views.win.removeEventListener("open", __alloyId61);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId58 = {
                icon: "/images/top-delete.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_delete",
                title: "Cancella"
            };
            $.__views.mn_delete = e.menu.add(_.pick(__alloyId58, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_delete.applyProperties(_.omit(__alloyId58, Alloy.Android.menuItemCreateArgs));
            var __alloyId59 = {
                icon: "/images/top-cancel.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_cancel",
                title: "Annulla"
            };
            $.__views.mn_cancel = e.menu.add(_.pick(__alloyId59, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_cancel.applyProperties(_.omit(__alloyId59, Alloy.Android.menuItemCreateArgs));
            var __alloyId60 = {
                icon: "/images/top-save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_save",
                title: "Salva"
            };
            $.__views.mn_save = e.menu.add(_.pick(__alloyId60, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_save.applyProperties(_.omit(__alloyId60, Alloy.Android.menuItemCreateArgs));
            submitPost ? $.__views.mn_save.addEventListener("click", submitPost) : __defers["$.__views.mn_save!click!submitPost"] = true;
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
    function submitPost() {
        Ti.API.info("JSON POST: " + JSON.stringify(Alloy.Models.Post_template));
        net.savePost(Alloy.Models.Post_template, function(post_id) {
            Alloy.Globals.showSpinner();
            Ti.API.info("ID POST SALVATO: " + post_id);
            if (arrayAspetti.length > 0) callSaveAspects(function(p_arrayIdAspetti) {
                p_arrayIdAspetti.push(Ti.App.Properties.getList("postTemplateIds"));
                p_arrayIdAspetti = _.flatten(p_arrayIdAspetti);
                Ti.API.info("ARRAY ID ASPETTI DA MANDARE IN ASSOCIAZIONE: " + p_arrayIdAspetti);
                net.linkAspectsToPost(post_id, p_arrayIdAspetti, function() {
                    $.win.close();
                });
            }); else {
                $.win.close();
                args.close();
                Alloy.Globals.postSaved = true;
                setTimeout(function() {
                    Ti.App.fireEvent("loading_done");
                }, 500);
            }
        });
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
    this.__controllerPath = "crea-modifica-post";
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
        title: "Crea/Modifica"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId61);
    $.__views.postTable = Ti.UI.createScrollView({
        bottom: 50,
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
    $.__views.__alloyId62 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E9FA32",
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        id: "__alloyId62"
    });
    $.__views.postTable.add($.__views.__alloyId62);
    $.__views.topWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 10,
        touchEnabled: false,
        layout: "horizontal",
        id: "topWrapper"
    });
    $.__views.__alloyId62.add($.__views.topWrapper);
    $.__views.postIcon = Ti.UI.createImageView({
        left: 0,
        top: 0,
        image: "/images/android-robot.jpg",
        touchEnabled: false,
        width: 70,
        height: 70,
        borderRadius: 4,
        id: "postIcon"
    });
    $.__views.topWrapper.add($.__views.postIcon);
    $.__views.innerWrapper = Ti.UI.createView({
        left: 10,
        top: 0,
        width: Ti.UI.SIZE,
        height: 70,
        touchEnabled: false,
        layout: "vertical",
        id: "innerWrapper"
    });
    $.__views.topWrapper.add($.__views.innerWrapper);
    $.__views.date_rating = Ti.UI.createView({
        top: 0,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "date_rating"
    });
    $.__views.innerWrapper.add($.__views.date_rating);
    $.__views.date = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        color: "#999",
        textAlign: "right",
        wordWrap: false,
        left: 0,
        top: 0,
        id: "date"
    });
    $.__views.date_rating.add($.__views.date);
    $.__views.ratingContainer = Ti.UI.createView({
        touchEnabled: false,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        width: 100,
        left: 20,
        top: 0,
        id: "ratingContainer"
    });
    $.__views.date_rating.add($.__views.ratingContainer);
    $.__views.rating_1 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_1"
    });
    $.__views.ratingContainer.add($.__views.rating_1);
    $.__views.rating_2 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_2"
    });
    $.__views.ratingContainer.add($.__views.rating_2);
    $.__views.rating_3 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_3"
    });
    $.__views.ratingContainer.add($.__views.rating_3);
    $.__views.rating_4 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_4"
    });
    $.__views.ratingContainer.add($.__views.rating_4);
    $.__views.rating_5 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_5"
    });
    $.__views.ratingContainer.add($.__views.rating_5);
    $.__views.name = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: 100,
        width: "70%",
        left: 0,
        ellipsize: true,
        wordWrap: true,
        top: 0,
        id: "name"
    });
    $.__views.innerWrapper.add($.__views.name);
    $.__views.middleWrapper = Ti.UI.createView({
        left: 10,
        top: 10,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "middleWrapper"
    });
    $.__views.__alloyId62.add($.__views.middleWrapper);
    $.__views.__alloyId63 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 0,
        id: "__alloyId63"
    });
    $.__views.middleWrapper.add($.__views.__alloyId63);
    $.__views.cat_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-category.png",
        left: 0,
        id: "cat_icon"
    });
    $.__views.__alloyId63.add($.__views.cat_icon);
    $.__views.category = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        height: 18,
        color: "#999",
        left: 5,
        id: "category"
    });
    $.__views.__alloyId63.add($.__views.category);
    $.__views.__alloyId64 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId64"
    });
    $.__views.middleWrapper.add($.__views.__alloyId64);
    $.__views.tag_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-tag.png",
        left: 0,
        id: "tag_icon"
    });
    $.__views.__alloyId64.add($.__views.tag_icon);
    $.__views.tags = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        height: 18,
        width: Ti.UI.SIZE,
        color: "#999",
        left: 5,
        id: "tags"
    });
    $.__views.__alloyId64.add($.__views.tags);
    $.__views.__alloyId65 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId65"
    });
    $.__views.middleWrapper.add($.__views.__alloyId65);
    $.__views.stories_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-story.png",
        left: 0,
        id: "stories_icon"
    });
    $.__views.__alloyId65.add($.__views.stories_icon);
    $.__views.stories = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        height: 18,
        width: Ti.UI.SIZE,
        color: "#999",
        left: 5,
        id: "stories",
        text: "storie"
    });
    $.__views.__alloyId65.add($.__views.stories);
    $.__views.aspectsCashflowWrapper = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        touchEnabled: false,
        id: "aspectsCashflowWrapper"
    });
    $.__views.__alloyId62.add($.__views.aspectsCashflowWrapper);
    $.__views.aspectsDocumentWrapper = Ti.UI.createView({
        top: 0,
        width: Ti.UI.FILL,
        touchEnabled: false,
        id: "aspectsDocumentWrapper"
    });
    $.__views.__alloyId62.add($.__views.aspectsDocumentWrapper);
    $.__views.bottomBar = Ti.UI.createView({
        backgroundColor: "#5FAEE3",
        width: Ti.UI.FILL,
        touchEnabled: false,
        height: 50,
        bottom: 0,
        id: "bottomBar"
    });
    $.__views.win.add($.__views.bottomBar);
    $.__views.buttonsContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 15,
        height: 25,
        id: "buttonsContainer"
    });
    $.__views.bottomBar.add($.__views.buttonsContainer);
    $.__views.__alloyId66 = Ti.UI.createLabel({
        left: 0,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-event-dark.png",
        id: "__alloyId66"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId66);
    addEvent ? $.__views.__alloyId66.addEventListener("click", addEvent) : __defers["$.__views.__alloyId66!click!addEvent"] = true;
    $.__views.__alloyId67 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-finance-dark.png",
        id: "__alloyId67"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId67);
    addCashflow ? $.__views.__alloyId67.addEventListener("click", addCashflow) : __defers["$.__views.__alloyId67!click!addCashflow"] = true;
    $.__views.__alloyId68 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-document-dark.png",
        id: "__alloyId68"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId68);
    addDocument ? $.__views.__alloyId68.addEventListener("click", addDocument) : __defers["$.__views.__alloyId68!click!addDocument"] = true;
    $.__views.__alloyId69 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-note-dark.png",
        id: "__alloyId69"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId69);
    addNote ? $.__views.__alloyId69.addEventListener("click", addNote) : __defers["$.__views.__alloyId69!click!addNote"] = true;
    $.__views.__alloyId70 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-link-dark.png",
        id: "__alloyId70"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId70);
    addLink ? $.__views.__alloyId70.addEventListener("click", addLink) : __defers["$.__views.__alloyId70!click!addLink"] = true;
    $.__views.__alloyId71 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-comunicazioni-dark.png",
        id: "__alloyId71"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId71);
    var __alloyId72 = function() {
        $.name.text = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["name"] : Alloy.Models.Post_template.get("name");
        $.name.text = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["name"] : Alloy.Models.Post_template.get("name");
        $.tags.text = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["tag"] : Alloy.Models.Post_template.get("tag");
        $.tags.text = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["tag"] : Alloy.Models.Post_template.get("tag");
    };
    Alloy.Models.Post_template.on("fetch change destroy", __alloyId72);
    exports.destroy = function() {
        Alloy.Models.Post_template.off("fetch change destroy", __alloyId72);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var net = require("net");
    var location = null;
    var dataFrom, dataTo = null;
    var timeNow = moment();
    var arrayAspetti = [];
    var modJson = Alloy.Models.Post_template.toJSON();
    Ti.API.info("MODEL JSON: " + JSON.stringify(modJson));
    Ti.API.info("MODEL CATEGORY: " + modJson.category.name);
    $.date.text = moment(Alloy.Models.Post_template.get("referenceTime")).fromNow();
    $.category.text = _.isNull(modJson.category) ? "" : modJson.category.name;
    Ti.API.info("CATEGORIA: " + modJson.category.name);
    var rating = Alloy.Models.Post_template.get("rating");
    $.rating_1.image = rating > 0 ? "/images/star-small.png" : "";
    $.rating_2.image = rating > 1 ? "/images/star-small.png" : "";
    $.rating_3.image = rating > 2 ? "/images/star-small.png" : "";
    $.rating_4.image = rating > 3 ? "/images/star-small.png" : "";
    $.rating_5.image = rating > 4 ? "/images/star-small.png" : "";
    var aspects = modJson.aspects;
    Ti.API.info("ASPETTI JSON: " + JSON.stringify(aspects));
    Alloy.Models.Post_template.trigger("change");
    $.win.open();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_save!click!submitPost"] && $.__views.mn_save.addEventListener("click", submitPost);
    __defers["$.__views.__alloyId66!click!addEvent"] && $.__views.__alloyId66.addEventListener("click", addEvent);
    __defers["$.__views.__alloyId67!click!addCashflow"] && $.__views.__alloyId67.addEventListener("click", addCashflow);
    __defers["$.__views.__alloyId68!click!addDocument"] && $.__views.__alloyId68.addEventListener("click", addDocument);
    __defers["$.__views.__alloyId69!click!addNote"] && $.__views.__alloyId69.addEventListener("click", addNote);
    __defers["$.__views.__alloyId70!click!addLink"] && $.__views.__alloyId70.addEventListener("click", addLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;