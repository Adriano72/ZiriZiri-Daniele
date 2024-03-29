function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId111() {
        $.__views.win.removeEventListener("open", __alloyId111);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId108 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-delete.png",
                id: "mn_delete",
                title: "Cancella"
            };
            $.__views.mn_delete = e.menu.add(_.pick(__alloyId108, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_delete.applyProperties(_.omit(__alloyId108, Alloy.Android.menuItemCreateArgs));
            var __alloyId109 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-cancel.png",
                id: "mn_cancel",
                title: "Annulla"
            };
            $.__views.mn_cancel = e.menu.add(_.pick(__alloyId109, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_cancel.applyProperties(_.omit(__alloyId109, Alloy.Android.menuItemCreateArgs));
            var __alloyId110 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-save2.png",
                id: "mn_save",
                title: "Salva"
            };
            $.__views.mn_save = e.menu.add(_.pick(__alloyId110, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_save.applyProperties(_.omit(__alloyId110, Alloy.Android.menuItemCreateArgs));
            submitPost ? $.__views.mn_save.addEventListener("click", submitPost) : __defers["$.__views.mn_save!click!submitPost"] = true;
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
    function openEvent() {}
    function resetShortcut() {
        Alloy.Globals.shortcutMode = false;
    }
    function submitPost() {
        var aspettiArray = _.pluck(tempContainer, "aspetto");
        Alloy.Globals.loading.show("Salvataggio in corso...", false);
        Ti.API.info("JSON POST: " + JSON.stringify(Alloy.Models.Post_template));
        Ti.API.info("JSON POST CON ASPETTI: " + JSON.stringify(Alloy.Models.Post_template));
        aspettiArray.length > 0;
        Ti.API.info("*** APPLIED PATCH 17122014 ***");
        ZZ.API.Core.Post.commit(Alloy.Models.Post_template.toJSON(), function(response) {
            Ti.API.info("ZZ.API.Core.Post.commit success [response : " + JSON.stringify(response) + "]");
            ZZ.API.Core.Posts.list(function(posts) {
                Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");
                Alloy.Collections.Timeline.reset(posts);
                Alloy.Globals.loading.hide();
                $.win.close();
                args.p_callback();
            }, function(error) {
                Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");
            });
        }, function(error) {
            Ti.API.error("ZZ.API.Core.Post.commit error [error : " + error + "]");
        });
    }
    function editPost() {
        Alloy.createController("editPost", function() {
            Alloy.Models.Post_template.trigger("change");
            modJson = Alloy.Models.Post_template.toJSON();
            $.category.text = _.isNull(modJson.category) ? "" : modJson.category.name;
        }).getView();
    }
    function addEvent() {
        var randomKey = _.random(0, 99999);
        Alloy.createController("addEvent", function(objRet) {
            tempContainer.push({
                key: randomKey,
                aspetto: objRet
            });
            var _corePostAspectsAddCallback = function(addedAspect) {
                Ti.API.info("ZZ.API.Core.Post.Aspects.add success [response : " + JSON.stringify(addedAspect) + "]");
            };
            ZZ.API.Core.Post.Aspects.add(objRet, null, _corePostAspectsAddCallback, function(error) {
                Ti.API.error("ZZ.API.Core.Post.Aspects.add error [error : " + error + "]");
            });
            Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));
            var riga = Alloy.createController("rowEvent", {
                obj_aspetto: objRet,
                keyIndex: randomKey,
                _editFunc: function(updatedAspect, arrayKey) {
                    var recordToUpdate = _.find(tempContainer, function(value) {
                        return value.key === arrayKey;
                    });
                    Ti.API.info("ASPETTO PRIMA: " + JSON.stringify(recordToUpdate.aspetto));
                    recordToUpdate && (recordToUpdate.aspetto = updatedAspect);
                    Ti.API.info("ASPETTO DOPO: " + JSON.stringify(recordToUpdate.aspetto));
                }
            }).getView();
            $.postTable.appendRow(riga);
        }).getView().open();
    }
    function addCashflow() {
        var randomKey = _.random(0, 99999);
        Alloy.createController("addCashflow", function(objRet) {
            tempContainer.push({
                key: randomKey,
                aspetto: objRet
            });
            var _corePostAspectsAddCallback = function(addedAspect) {
                Ti.API.info("ZZ.API.Core.Post.Aspects.add success [response : " + JSON.stringify(addedAspect) + "]");
            };
            ZZ.API.Core.Post.Aspects.add(objRet, null, _corePostAspectsAddCallback, function(error) {
                Ti.API.error("ZZ.API.Core.Post.Aspects.add error [error : " + error + "]");
            });
            Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));
            var riga = Alloy.createController("rowCASHFLOW", {
                obj_aspetto: objRet,
                keyIndex: randomKey,
                _editFunc: function(updatedAspect, arrayKey) {
                    var recordToUpdate = _.find(tempContainer, function(value) {
                        return value.key === arrayKey;
                    });
                    Ti.API.info("ASPETTO PRIMA: " + JSON.stringify(recordToUpdate.aspetto));
                    recordToUpdate && (recordToUpdate.aspetto = updatedAspect);
                    Ti.API.info("ASPETTO DOPO: " + JSON.stringify(recordToUpdate.aspetto));
                }
            }).getView();
            $.postTable.appendRow(riga);
        }).getView().open();
    }
    function addDocument() {
        var randomKey = _.random(0, 99999);
        Alloy.createController("addDocument", {
            _callback: function(objRet) {
                tempContainer.push({
                    key: randomKey,
                    aspetto: objRet
                });
                Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));
                var _allegaDocumento = function(addedAspect) {
                    Ti.API.info("ZZ.API.Core.Post.Aspects.add success [response : " + JSON.stringify(addedAspect) + "]");
                    var blob = Alloy.Globals.blobImage;
                    ZZ.API.Files.Attachment.set(addedAspect, blob, function(response) {
                        Ti.API.info("ZZ.API.Files.Attachment.set success [response : " + response + "]");
                    }, function(error) {
                        Ti.API.error("ZZ.API.Files.Attachment.set error [error : " + error + "]");
                    });
                };
                ZZ.API.Core.Post.Aspects.add(objRet, null, _allegaDocumento, function(error) {
                    Ti.API.error("ZZ.API.Core.Post.Aspects.add error [error : " + error + "]");
                });
                var riga = Alloy.createController("rowDOCUMENT", {
                    obj_aspetto: objRet,
                    keyIndex: randomKey,
                    _editFunc: function(updatedAspect, arrayKey) {
                        var recordToUpdate = _.find(tempContainer, function(value) {
                            return value.key === arrayKey;
                        });
                        Ti.API.info("ASPETTO PRIMA: " + JSON.stringify(recordToUpdate.aspetto));
                        recordToUpdate && (recordToUpdate.aspetto = updatedAspect);
                        Ti.API.info("ASPETTO DOPO: " + JSON.stringify(recordToUpdate.aspetto));
                    }
                }).getView();
                $.postTable.appendRow(riga);
            },
            shortcut: args.shortcut
        }).getView().open();
    }
    function addLink() {
        var randomKey = _.random(0, 99999);
        Alloy.createController("addLink", function(objRet) {
            tempContainer.push({
                key: randomKey,
                aspetto: objRet
            });
            var _corePostAspectsAddCallback = function(addedAspect) {
                Ti.API.info("ZZ.API.Core.Post.Aspects.add success [response : " + JSON.stringify(addedAspect) + "]");
            };
            ZZ.API.Core.Post.Aspects.add(objRet, null, _corePostAspectsAddCallback, function(error) {
                Ti.API.error("ZZ.API.Core.Post.Aspects.add error [error : " + error + "]");
            });
            Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));
            var riga = Alloy.createController("rowLINK", {
                obj_aspetto: objRet,
                keyIndex: randomKey,
                _editFunc: function(updatedAspect, arrayKey) {
                    var recordToUpdate = _.find(tempContainer, function(value) {
                        return value.key === arrayKey;
                    });
                    Ti.API.info("ASPETTO PRIMA: " + JSON.stringify(recordToUpdate.aspetto));
                    recordToUpdate && (recordToUpdate.aspetto = updatedAspect);
                    Ti.API.info("ASPETTO DOPO: " + JSON.stringify(recordToUpdate.aspetto));
                }
            }).getView();
            $.postTable.appendRow(riga);
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
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    resetShortcut ? $.__views.win.addEventListener("close", resetShortcut) : __defers["$.__views.win!close!resetShortcut"] = true;
    $.__views.win.addEventListener("open", __alloyId111);
    var __alloyId112 = [];
    $.__views.__alloyId113 = Ti.UI.createTableViewRow({
        bottom: 10,
        id: "__alloyId113"
    });
    __alloyId112.push($.__views.__alloyId113);
    editPost ? $.__views.__alloyId113.addEventListener("click", editPost) : __defers["$.__views.__alloyId113!click!editPost"] = true;
    $.__views.__alloyId114 = Ti.UI.createView({
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
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.topWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 10,
        touchEnabled: false,
        layout: "horizontal",
        id: "topWrapper"
    });
    $.__views.__alloyId114.add($.__views.topWrapper);
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
        id: "name",
        text: "TESTO DA AGGIORNARE"
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
    $.__views.__alloyId114.add($.__views.middleWrapper);
    $.__views.__alloyId115 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 0,
        id: "__alloyId115"
    });
    $.__views.middleWrapper.add($.__views.__alloyId115);
    $.__views.cat_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-category.png",
        left: 0,
        id: "cat_icon"
    });
    $.__views.__alloyId115.add($.__views.cat_icon);
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
    $.__views.__alloyId115.add($.__views.category);
    $.__views.__alloyId116 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId116"
    });
    $.__views.middleWrapper.add($.__views.__alloyId116);
    $.__views.tag_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-tag.png",
        left: 0,
        id: "tag_icon"
    });
    $.__views.__alloyId116.add($.__views.tag_icon);
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
    $.__views.__alloyId116.add($.__views.tags);
    $.__views.__alloyId117 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId117"
    });
    $.__views.middleWrapper.add($.__views.__alloyId117);
    $.__views.stories_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-story.png",
        left: 0,
        id: "stories_icon"
    });
    $.__views.__alloyId117.add($.__views.stories_icon);
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
    $.__views.__alloyId117.add($.__views.stories);
    $.__views.postTable = Ti.UI.createTableView({
        bottom: 50,
        separatorColor: "transparent",
        layout: "vertical",
        data: __alloyId112,
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
    $.__views.__alloyId118 = Ti.UI.createLabel({
        left: 0,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-event-dark.png",
        id: "__alloyId118"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId118);
    addEvent ? $.__views.__alloyId118.addEventListener("click", addEvent) : __defers["$.__views.__alloyId118!click!addEvent"] = true;
    $.__views.__alloyId119 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-finance-dark.png",
        id: "__alloyId119"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId119);
    addCashflow ? $.__views.__alloyId119.addEventListener("click", addCashflow) : __defers["$.__views.__alloyId119!click!addCashflow"] = true;
    $.__views.__alloyId120 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-document-dark.png",
        id: "__alloyId120"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId120);
    addDocument ? $.__views.__alloyId120.addEventListener("click", addDocument) : __defers["$.__views.__alloyId120!click!addDocument"] = true;
    $.__views.__alloyId121 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-note-dark.png",
        id: "__alloyId121"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId121);
    addNote ? $.__views.__alloyId121.addEventListener("click", addNote) : __defers["$.__views.__alloyId121!click!addNote"] = true;
    $.__views.__alloyId122 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-link-dark.png",
        id: "__alloyId122"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId122);
    addLink ? $.__views.__alloyId122.addEventListener("click", addLink) : __defers["$.__views.__alloyId122!click!addLink"] = true;
    $.__views.__alloyId123 = Ti.UI.createLabel({
        left: 40,
        width: 20,
        height: 20,
        backgroundImage: "/images/kernel-comunicazioni-dark.png",
        id: "__alloyId123"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId123);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("ARGS FUNC***: " + JSON.stringify(args));
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    require("net");
    var timeNow = moment();
    var arrayAspetti = [];
    var tempContainer = [];
    var modJson = Alloy.Models.Post_template.toJSON();
    Ti.API.info("MODEL JSON: " + JSON.stringify(modJson));
    Ti.API.info("MODEL CATEGORY: " + modJson.category.name);
    $.postIcon.image = _.isNull(modJson.category.code) ? "/images/android-robot.jpg" : "/images/" + modJson.category.code.slice(0, 2) + ".png";
    $.date.text = moment(Alloy.Models.Post_template.get("referenceTime")).fromNow();
    $.category.text = _.isNull(modJson.category) ? "" : modJson.category.name;
    $.name.text = modJson.name;
    Ti.API.info("CATEGORIA: " + modJson.category.name);
    var rating = Alloy.Models.Post_template.get("rating");
    $.rating_1.image = rating > 0 ? "/images/star-small.png" : "";
    $.rating_2.image = rating > 1 ? "/images/star-small.png" : "";
    $.rating_3.image = rating > 2 ? "/images/star-small.png" : "";
    $.rating_4.image = rating > 3 ? "/images/star-small.png" : "";
    $.rating_5.image = rating > 4 ? "/images/star-small.png" : "";
    Alloy.Models.Post_template.trigger("change");
    $.win.open();
    true == args.shortcut && addDocument();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.win!close!resetShortcut"] && $.__views.win.addEventListener("close", resetShortcut);
    __defers["$.__views.mn_save!click!submitPost"] && $.__views.mn_save.addEventListener("click", submitPost);
    __defers["$.__views.__alloyId113!click!editPost"] && $.__views.__alloyId113.addEventListener("click", editPost);
    __defers["$.__views.__alloyId118!click!addEvent"] && $.__views.__alloyId118.addEventListener("click", addEvent);
    __defers["$.__views.__alloyId119!click!addCashflow"] && $.__views.__alloyId119.addEventListener("click", addCashflow);
    __defers["$.__views.__alloyId120!click!addDocument"] && $.__views.__alloyId120.addEventListener("click", addDocument);
    __defers["$.__views.__alloyId121!click!addNote"] && $.__views.__alloyId121.addEventListener("click", addNote);
    __defers["$.__views.__alloyId122!click!addLink"] && $.__views.__alloyId122.addEventListener("click", addLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;