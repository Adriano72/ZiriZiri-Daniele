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
        ("camera" == Alloy.Globals.shortcutMode || "gallery" == Alloy.Globals.shortcutMode) && addDocument();
    }
    function resetShortcut() {
        Alloy.Globals.shortcutMode = false;
    }
    function addEvent() {
        Alloy.createController("addEvent", function(objRet) {
            Ti.API.info("EVENTO RICEVUTO: " + JSON.stringify(objRet));
            arrayAspetti.push(objRet);
            var aspettoDataJson = JSON.parse(objRet.data);
            Ti.API.info("DATA PARSATO: " + JSON.stringify(aspettoDataJson));
            var riga = Alloy.createController("rowEvent", {
                startDate: moment(aspettoDataJson.startTime.time).format("DD-MM-YYYY HH:MM"),
                endDate: moment(aspettoDataJson.endTime.time).format("DD-MM-YYYY HH:MM"),
                location: objRet.location.name
            }).getView();
            $.postTable.appendRow(riga);
        }).getView().open();
    }
    function addCashflow() {
        Alloy.createController("addCashflow", function(objRet) {
            arrayAspetti.push(objRet);
            Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
            var aspettoDataJson = JSON.parse(objRet.data);
            Ti.API.info("DATA PARSATO: " + JSON.stringify(aspettoDataJson));
            var riga = Alloy.createController("rowCASHFLOW", {
                importo: aspettoDataJson.importo,
                modalitaPagamento: aspettoDataJson.pagamentoIncasso.descrizioneBreve,
                tipoMovimento: aspettoDataJson.tipoMovimento.descrizioneBreve
            }).getView();
            $.postTable.appendRow(riga);
        }).getView().open();
    }
    function addDocument() {
        var randomKey = _.random(0, 99999);
        Alloy.createController("addDocument", function(objRet) {
            tempContainer.aspetti.push({
                key: randomKey,
                aspetto: objRet
            });
            Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));
            arrayAspetti.length - 1;
            var aspettoDataJson = JSON.parse(objRet.data);
            Ti.API.info("DATA PARSATO: " + JSON.stringify(aspettoDataJson));
            var riga = Alloy.createController("rowDOCUMENT", {
                obj_aspetto: aspettoDataJson,
                keyIndex: randomKey
            }).getView();
            riga.addEventListener("click", function(e) {
                Ti.API.info("OBJ DOC: " + JSON.stringify(e.source.obj_aspect));
                Alloy.createController("editDocument", {
                    _callback: function(row) {
                        return alert(row);
                    },
                    aspetto: e.source.obj_aspect
                }).getView().open();
            });
            $.postTable.appendRow(riga);
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "crea-modifica-post";
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
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    resetShortcut ? $.__views.win.addEventListener("close", resetShortcut) : __defers["$.__views.win!close!resetShortcut"] = true;
    var __alloyId87 = [];
    $.__views.__alloyId88 = Ti.UI.createTableViewRow({
        bottom: 10,
        id: "__alloyId88"
    });
    __alloyId87.push($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        bottom: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#E9FA32",
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        id: "__alloyId89"
    });
    $.__views.__alloyId88.add($.__views.__alloyId89);
    $.__views.topWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 10,
        touchEnabled: false,
        layout: "horizontal",
        id: "topWrapper"
    });
    $.__views.__alloyId89.add($.__views.topWrapper);
    $.__views.postIcon = Ti.UI.createImageView({
        left: 0,
        top: 0,
        touchEnabled: false,
        width: 70,
        height: 70,
        borderRadius: 3,
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
    $.__views.__alloyId89.add($.__views.middleWrapper);
    $.__views.__alloyId90 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 0,
        id: "__alloyId90"
    });
    $.__views.middleWrapper.add($.__views.__alloyId90);
    $.__views.cat_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-category.png",
        left: 0,
        id: "cat_icon"
    });
    $.__views.__alloyId90.add($.__views.cat_icon);
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
    $.__views.__alloyId90.add($.__views.category);
    $.__views.__alloyId91 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId91"
    });
    $.__views.middleWrapper.add($.__views.__alloyId91);
    $.__views.tag_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-tag.png",
        left: 0,
        id: "tag_icon"
    });
    $.__views.__alloyId91.add($.__views.tag_icon);
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
        id: "tags",
        text: "tags"
    });
    $.__views.__alloyId91.add($.__views.tags);
    $.__views.__alloyId92 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId92"
    });
    $.__views.middleWrapper.add($.__views.__alloyId92);
    $.__views.stories_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-story.png",
        left: 0,
        id: "stories_icon"
    });
    $.__views.__alloyId92.add($.__views.stories_icon);
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
    $.__views.__alloyId92.add($.__views.stories);
    $.__views.postTable = Ti.UI.createTableView({
        bottom: 50,
        separatorColor: "transparent",
        layout: "vertical",
        data: __alloyId87,
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
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
    $.__views.__alloyId93 = Ti.UI.createLabel({
        left: 0,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-event-dark.png",
        id: "__alloyId93"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId93);
    addEvent ? $.__views.__alloyId93.addEventListener("click", addEvent) : __defers["$.__views.__alloyId93!click!addEvent"] = true;
    $.__views.__alloyId94 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-finance-dark.png",
        id: "__alloyId94"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId94);
    addCashflow ? $.__views.__alloyId94.addEventListener("click", addCashflow) : __defers["$.__views.__alloyId94!click!addCashflow"] = true;
    $.__views.__alloyId95 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-document-dark.png",
        id: "__alloyId95"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId95);
    addDocument ? $.__views.__alloyId95.addEventListener("click", addDocument) : __defers["$.__views.__alloyId95!click!addDocument"] = true;
    $.__views.__alloyId96 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-note-dark.png",
        id: "__alloyId96"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId96);
    addNote ? $.__views.__alloyId96.addEventListener("click", addNote) : __defers["$.__views.__alloyId96!click!addNote"] = true;
    $.__views.__alloyId97 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-link-dark.png",
        id: "__alloyId97"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId97);
    addLink ? $.__views.__alloyId97.addEventListener("click", addLink) : __defers["$.__views.__alloyId97!click!addLink"] = true;
    $.__views.__alloyId98 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-comunicazioni-dark.png",
        id: "__alloyId98"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId98);
    var __alloyId99 = function() {
        $.win.title = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["name"] : Alloy.Models.Post_template.get("name");
        $.win.title = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["name"] : Alloy.Models.Post_template.get("name");
        $.name.text = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["name"] : Alloy.Models.Post_template.get("name");
        $.name.text = _.isFunction(Alloy.Models.Post_template.transform) ? Alloy.Models.Post_template.transform()["name"] : Alloy.Models.Post_template.get("name");
    };
    Alloy.Models.Post_template.on("fetch change destroy", __alloyId99);
    exports.destroy = function() {
        Alloy.Models.Post_template.off("fetch change destroy", __alloyId99);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("PARAMETRI: " + JSON.stringify(args));
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    require("net");
    var timeNow = moment();
    var arrayAspetti = [];
    var tempContainer = {
        aspetti: []
    };
    var modJson = Alloy.Models.Post_template.toJSON();
    Ti.API.info("MODEL JSON: " + JSON.stringify(modJson));
    Ti.API.info("MODEL CATEGORY: " + modJson.category.name);
    $.postIcon.image = _.isNull(modJson.category.code) ? "/images/android-robot.jpg" : "/images/" + modJson.category.code.slice(0, 2) + ".png";
    $.date.text = moment(Alloy.Models.Post_template.get("referenceTime")).fromNow();
    $.category.text = _.isNull(modJson.category) ? "" : modJson.category.name;
    Ti.API.info("CATEGORIA: " + modJson.category.name);
    var rating = Alloy.Models.Post_template.get("rating");
    $.rating_1.image = rating > 0 ? "/images/star-small.png" : "";
    $.rating_2.image = rating > 1 ? "/images/star-small.png" : "";
    $.rating_3.image = rating > 2 ? "/images/star-small.png" : "";
    $.rating_4.image = rating > 3 ? "/images/star-small.png" : "";
    $.rating_5.image = rating > 4 ? "/images/star-small.png" : "";
    modJson.aspects;
    Alloy.Models.Post_template.trigger("change");
    $.win.open();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.win!close!resetShortcut"] && $.__views.win.addEventListener("close", resetShortcut);
    __defers["$.__views.__alloyId93!click!addEvent"] && $.__views.__alloyId93.addEventListener("click", addEvent);
    __defers["$.__views.__alloyId94!click!addCashflow"] && $.__views.__alloyId94.addEventListener("click", addCashflow);
    __defers["$.__views.__alloyId95!click!addDocument"] && $.__views.__alloyId95.addEventListener("click", addDocument);
    __defers["$.__views.__alloyId96!click!addNote"] && $.__views.__alloyId96.addEventListener("click", addNote);
    __defers["$.__views.__alloyId97!click!addLink"] && $.__views.__alloyId97.addEventListener("click", addLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;