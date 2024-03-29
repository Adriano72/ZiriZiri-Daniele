function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId281() {
        $.__views.win.removeEventListener("open", __alloyId281);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId280 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER,
                id: "mn_logout",
                title: "Logout"
            };
            $.__views.mn_logout = e.menu.add(_.pick(__alloyId280, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_logout.applyProperties(_.omit(__alloyId280, Alloy.Android.menuItemCreateArgs));
            f_logout ? $.__views.mn_logout.addEventListener("click", f_logout) : __defers["$.__views.mn_logout!click!f_logout"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function syncTimeline(e) {
        if (e && e.fromAdapter) return;
        syncTimeline.opts || {};
        var models = __alloyId326.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId282 = models[i];
            __alloyId282.__transform = transformData(__alloyId282);
            var __alloyId284 = Ti.UI.createTableViewRow({
                backgroundColor: "#F9F9F9",
                className: "itemrow",
                height: 170
            });
            rows.push(__alloyId284);
            mostraDettaglioEvento ? __alloyId284.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId284!click!mostraDettaglioEvento"] = true;
            var __alloyId286 = Ti.UI.createView({
                left: 5,
                right: 5,
                top: 5,
                borderRadius: 3,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: "#FFF",
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId284.add(__alloyId286);
            var __alloyId287 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 10,
                right: 10,
                top: 10,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId286.add(__alloyId287);
            var __alloyId288 = Ti.UI.createImageView({
                left: 0,
                top: 0,
                touchEnabled: false,
                width: 70,
                height: 70,
                borderRadius: 4,
                image: "undefined" != typeof __alloyId282.__transform["catImage"] ? __alloyId282.__transform["catImage"] : __alloyId282.get("catImage")
            });
            __alloyId287.add(__alloyId288);
            var __alloyId289 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.SIZE,
                height: 70,
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId287.add(__alloyId289);
            var __alloyId290 = Ti.UI.createView({
                top: 0,
                left: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId289.add(__alloyId290);
            var __alloyId291 = Ti.UI.createLabel({
                top: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#999",
                touchEnabled: false,
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                textAlign: "right",
                wordWrap: false,
                left: 0,
                text: "undefined" != typeof __alloyId282.__transform["postDate"] ? __alloyId282.__transform["postDate"] : __alloyId282.get("postDate")
            });
            __alloyId290.add(__alloyId291);
            var __alloyId292 = Ti.UI.createView({
                touchEnabled: false,
                height: Ti.UI.SIZE,
                layout: "horizontal",
                width: 100,
                left: 20,
                top: 0
            });
            __alloyId290.add(__alloyId292);
            var __alloyId293 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId282.__transform["rating_1"] ? __alloyId282.__transform["rating_1"] : __alloyId282.get("rating_1")
            });
            __alloyId292.add(__alloyId293);
            var __alloyId294 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId282.__transform["rating_2"] ? __alloyId282.__transform["rating_2"] : __alloyId282.get("rating_2")
            });
            __alloyId292.add(__alloyId294);
            var __alloyId295 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId282.__transform["rating_3"] ? __alloyId282.__transform["rating_3"] : __alloyId282.get("rating_3")
            });
            __alloyId292.add(__alloyId295);
            var __alloyId296 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId282.__transform["rating_4"] ? __alloyId282.__transform["rating_4"] : __alloyId282.get("rating_4")
            });
            __alloyId292.add(__alloyId296);
            var __alloyId297 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId282.__transform["rating_5"] ? __alloyId282.__transform["rating_5"] : __alloyId282.get("rating_5")
            });
            __alloyId292.add(__alloyId297);
            var __alloyId298 = Ti.UI.createLabel({
                top: 0,
                width: "70%",
                height: 100,
                color: "#444",
                touchEnabled: false,
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                left: 0,
                ellipsize: true,
                wordWrap: true,
                text: "undefined" != typeof __alloyId282.__transform["name"] ? __alloyId282.__transform["name"] : __alloyId282.get("name")
            });
            __alloyId289.add(__alloyId298);
            var __alloyId299 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.FILL,
                height: 40,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId286.add(__alloyId299);
            var __alloyId301 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 0
            });
            __alloyId299.add(__alloyId301);
            var __alloyId302 = Ti.UI.createImageView({
                width: 20,
                height: 20,
                touchEnabled: false,
                image: "/images/head-category.png",
                left: 0
            });
            __alloyId301.add(__alloyId302);
            var __alloyId303 = Ti.UI.createLabel({
                top: 10,
                width: 70,
                height: 18,
                color: "#999",
                ellipsize: true,
                wordWrap: false,
                font: {
                    fontSize: 14,
                    fontFamily: "SourceSansPro-Regular"
                },
                touchEnabled: false,
                left: 5,
                text: "undefined" != typeof __alloyId282.__transform["categoria"] ? __alloyId282.__transform["categoria"] : __alloyId282.get("categoria")
            });
            __alloyId301.add(__alloyId303);
            var __alloyId305 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 40
            });
            __alloyId299.add(__alloyId305);
            var __alloyId306 = Ti.UI.createImageView({
                width: 20,
                height: 20,
                touchEnabled: false,
                image: "/images/head-tag.png",
                left: 0
            });
            __alloyId305.add(__alloyId306);
            var __alloyId307 = Ti.UI.createLabel({
                top: 10,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#999",
                ellipsize: true,
                wordWrap: false,
                font: {
                    fontSize: 14,
                    fontFamily: "SourceSansPro-Regular"
                },
                touchEnabled: false,
                left: 5,
                text: "undefined" != typeof __alloyId282.__transform["tag"] ? __alloyId282.__transform["tag"] : __alloyId282.get("tag")
            });
            __alloyId305.add(__alloyId307);
            var __alloyId309 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 40
            });
            __alloyId299.add(__alloyId309);
            var __alloyId310 = Ti.UI.createImageView({
                width: 20,
                height: 20,
                touchEnabled: false,
                image: "/images/head-story.png",
                left: 0
            });
            __alloyId309.add(__alloyId310);
            var __alloyId311 = Ti.UI.createLabel({
                top: 10,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#999",
                ellipsize: true,
                wordWrap: false,
                font: {
                    fontSize: 14,
                    fontFamily: "SourceSansPro-Regular"
                },
                touchEnabled: false,
                left: 5,
                text: "storie"
            });
            __alloyId309.add(__alloyId311);
            var __alloyId313 = Ti.UI.createView({
                height: 1,
                top: 0,
                touchEnabled: false,
                backgroundColor: "#D6D6D6",
                width: "100%"
            });
            __alloyId286.add(__alloyId313);
            var __alloyId314 = Ti.UI.createView({
                height: 45,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId286.add(__alloyId314);
            var __alloyId315 = Ti.UI.createImageView({
                left: 5,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId282.__transform["iconEvent"] ? __alloyId282.__transform["iconEvent"] : __alloyId282.get("iconEvent")
            });
            __alloyId314.add(__alloyId315);
            var __alloyId316 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId282.__transform["iconCashFlow"] ? __alloyId282.__transform["iconCashFlow"] : __alloyId282.get("iconCashFlow")
            });
            __alloyId314.add(__alloyId316);
            var __alloyId317 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId282.__transform["iconDocument"] ? __alloyId282.__transform["iconDocument"] : __alloyId282.get("iconDocument")
            });
            __alloyId314.add(__alloyId317);
            var __alloyId318 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId282.__transform["iconNote"] ? __alloyId282.__transform["iconNote"] : __alloyId282.get("iconNote")
            });
            __alloyId314.add(__alloyId318);
            var __alloyId319 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId282.__transform["iconLink"] ? __alloyId282.__transform["iconLink"] : __alloyId282.get("iconLink")
            });
            __alloyId314.add(__alloyId319);
            var __alloyId320 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                backgroundImage: "/images/kernel-comunicazioni-off.png",
                image: "undefined" != typeof __alloyId282.__transform["iconCommunication"] ? __alloyId282.__transform["iconCommunication"] : __alloyId282.get("iconCommunication")
            });
            __alloyId314.add(__alloyId320);
            var __alloyId322 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId314.add(__alloyId322);
            var __alloyId324 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 0,
                width: Ti.UI.FILL
            });
            __alloyId322.add(__alloyId324);
            var __alloyId325 = Ti.UI.createImageView({
                right: 0,
                top: 10,
                bottom: 10,
                image: "/images/kernel-show-all.png",
                touchEnabled: false,
                width: 25,
                height: 25
            });
            __alloyId324.add(__alloyId325);
        }
        $.__views.timelineTable.setData(rows);
    }
    function f_logout() {
        Ti.App.Properties.setObject("timelineProp", null);
        Ti.App.Properties.setBool("authenticated", false);
        presentPage = 0;
        $.win.close();
        Alloy.createController("index").getView().open();
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
    function closeSpinner() {
        Alloy.Globals.loading.hide();
    }
    function checkAspects(node, target) {
        if (_.isUndefined(node) || _.isUndefined(_.find(node, function(value) {
            return value.kind.code == target;
        }))) switch (target) {
          case "EVENTDATATYPE_CODE":
            return "/images/kernel-event-off.png";

          case "CASHFLOWDATATYPE_CODE":
            return "/images/kernel-finance-off.png";

          case "FILEDOCUMENTDATATYPE_CODE":
            return "/images/kernel-document-off.png";

          case "NOTEDATATYPE_CODE":
            return "/images/kernel-note-off.png";

          case "FILELINKDATATYPE_CODE":
            return "/images/kernel-link-off.png";

          case "COMMUNICATIONDATATYPE_CODE":
            return "/images/kernel-comunicazioni-off.png";

          default:
            return;
        } else switch (target) {
          case "EVENTDATATYPE_CODE":
            return "/images/kernel-event-on.png";

          case "CASHFLOWDATATYPE_CODE":
            return "/images/kernel-finance-on.png";

          case "FILEDOCUMENTDATATYPE_CODE":
            return "/images/kernel-document-on.png";

          case "NOTEDATATYPE_CODE":
            return "/images/kernel-note-on.png";

          case "FILELINKDATATYPE_CODE":
            return "/images/kernel-link-on.png";

          case "COMMUNICATIONDATATYPE_CODE":
            return "/images/kernel-comunicazioni-on.png";

          default:
            return;
        }
    }
    function transformData(model) {
        var attrs = model.toJSON();
        var diffTime = moment().diff(attrs.referenceTime, "days");
        attrs.catImage = _.isNull(attrs.category) || _.isNull(attrs.category.code) ? "/images/android-robot.jpg" : "/images/" + attrs.category.code.slice(0, 2) + ".png";
        attrs.postDate = diffTime > 1 ? moment(attrs.referenceTime).format("LL") : moment(attrs.referenceTime).fromNow();
        attrs.categoria = _.isNull(attrs.category) ? "" : attrs.category.name;
        attrs.iconEvent = checkAspects(attrs.aspects, "EVENTDATATYPE_CODE");
        attrs.iconCashFlow = checkAspects(attrs.aspects, "CASHFLOWDATATYPE_CODE");
        attrs.iconDocument = checkAspects(attrs.aspects, "FILEDOCUMENTDATATYPE_CODE");
        attrs.iconNote = checkAspects(attrs.aspects, "NOTEDATATYPE_CODE");
        attrs.iconLink = checkAspects(attrs.aspects, "FILELINKDATATYPE_CODE");
        attrs.iconCommunication = checkAspects(attrs.aspects, "COMMUNICATIONDATATYPE_CODE");
        attrs.rating_1 = attrs.rating > 0 ? "/images/star-small.png" : "";
        attrs.rating_2 = attrs.rating > 1 ? "/images/star-small.png" : "";
        attrs.rating_3 = attrs.rating > 2 ? "/images/star-small.png" : "";
        attrs.rating_4 = attrs.rating > 3 ? "/images/star-small.png" : "";
        attrs.rating_5 = attrs.rating > 4 ? "/images/star-small.png" : "";
        attrs.tag = _.isNull(attrs.tags) ? "" : attrs.tags[0].name;
        return attrs;
    }
    function refreshTable() {
        Alloy.Globals.loading.show("Sincronizzazione...", false);
        ZZ.API.Core.Posts.list(function(posts) {
            Ti.API.info("______________RESPONSE LENGTH: " + posts.length);
            Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");
            Alloy.Collections.Timeline.reset();
            Alloy.Collections.Timeline.reset(posts);
            Ti.API.info("COLLECTION LENGTH AFTER SYNC: " + Alloy.Collections.Timeline.length);
            Alloy.Globals.loading.hide();
        }, function(error) {
            Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");
        });
    }
    function gotoToday() {
        $.timelineTable.scrollToTop(0);
    }
    function mostraDettaglioEvento(e) {
        Alloy.Models.Post.set(Alloy.Collections.Timeline.at(e.index));
        Ti.API.info("STATO POST: " + JSON.stringify(Alloy.Models.Post));
        Alloy.createController("dettaglio_post", function(updated) {
            if (updated) {
                Ti.API.info("UPDATING COLLECTION");
                Alloy.Collections.Timeline.remove(Alloy.Collections.Timeline.at(e.index));
                Alloy.Collections.Timeline.add(Alloy.Models.Post);
                Alloy.Globals.loading.hide();
            }
        }).getView();
    }
    function createNewPost() {
        Alloy.createController("newPost", {
            _callback: function() {
                Alloy.Globals.loading.hide();
            },
            photoShortcut: false
        }).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeline_win";
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
        title: "Diario"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId281);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#transparent",
        bottom: 60,
        id: "timelineTable"
    });
    $.__views.win.add($.__views.timelineTable);
    var __alloyId326 = Alloy.Collections["Timeline"] || Timeline;
    __alloyId326.on("fetch destroy change add remove reset", syncTimeline);
    closeSpinner ? $.__views.timelineTable.addEventListener("postlayout", closeSpinner) : __defers["$.__views.timelineTable!postlayout!closeSpinner"] = true;
    $.__views.bottomBar = Ti.UI.createView({
        backgroundColor: "#5FAEE3",
        width: Ti.UI.FILL,
        touchEnabled: false,
        height: 60,
        bottom: 0,
        id: "bottomBar"
    });
    $.__views.win.add($.__views.bottomBar);
    $.__views.buttonsContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 5,
        height: Ti.UI.SIZE,
        id: "buttonsContainer"
    });
    $.__views.bottomBar.add($.__views.buttonsContainer);
    $.__views.__alloyId327 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 0,
        id: "__alloyId327"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId327);
    refreshTable ? $.__views.__alloyId327.addEventListener("click", refreshTable) : __defers["$.__views.__alloyId327!click!refreshTable"] = true;
    $.__views.bottom_sync = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-refresh.png",
        left: 0,
        id: "bottom_sync"
    });
    $.__views.__alloyId327.add($.__views.bottom_sync);
    $.__views.txt_sync = Ti.UI.createLabel({
        top: 1,
        width: Ti.UI.SIE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 8
        },
        text: "SYNC",
        id: "txt_sync"
    });
    $.__views.__alloyId327.add($.__views.txt_sync);
    $.__views.__alloyId328 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId328"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId328);
    createNewPost ? $.__views.__alloyId328.addEventListener("click", createNewPost) : __defers["$.__views.__alloyId328!click!createNewPost"] = true;
    $.__views.bottom_new = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-new-post.png",
        left: 0,
        id: "bottom_new"
    });
    $.__views.__alloyId328.add($.__views.bottom_new);
    $.__views.txt_new = Ti.UI.createLabel({
        top: 1,
        width: Ti.UI.SIE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 8
        },
        text: "NEW POST",
        id: "txt_new"
    });
    $.__views.__alloyId328.add($.__views.txt_new);
    $.__views.__alloyId329 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId329"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId329);
    gotoToday ? $.__views.__alloyId329.addEventListener("click", gotoToday) : __defers["$.__views.__alloyId329!click!gotoToday"] = true;
    $.__views.bottom_today = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-today.png",
        left: 0,
        id: "bottom_today"
    });
    $.__views.__alloyId329.add($.__views.bottom_today);
    $.__views.txt_today = Ti.UI.createLabel({
        top: 1,
        width: Ti.UI.SIE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 8
        },
        text: "TODAY",
        id: "txt_today"
    });
    $.__views.__alloyId329.add($.__views.txt_today);
    exports.destroy = function() {
        __alloyId326.off("fetch destroy change add remove reset", syncTimeline);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    require("net");
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var presentPage = 0;
    var lastNumberOfRecordsFetched;
    var theActionBar = null;
    var timeTemp = Ti.App.Properties.getObject("timelineProp");
    lastNumberOfRecordsFetched = timeTemp.length;
    Ti.API.info("NUM RECORDS FETCHED AT START: " + lastNumberOfRecordsFetched);
    Ti.API.info("§§§§§§§§§§§ OGGETTO TIMELINE; " + JSON.stringify(Alloy.Collections.Timeline));
    syncTimeline();
    Ti.API.info("LENGTH COLLECTION: " + Alloy.Collections.Timeline.length);
    Ti.API.info("TIMELINE LENGTH STORED PROPERTY: " + timeTemp.length);
    $.win.open();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_logout!click!f_logout"] && $.__views.mn_logout.addEventListener("click", f_logout);
    __defers["__alloyId284!click!mostraDettaglioEvento"] && __alloyId284.addEventListener("click", mostraDettaglioEvento);
    __defers["$.__views.timelineTable!postlayout!closeSpinner"] && $.__views.timelineTable.addEventListener("postlayout", closeSpinner);
    __defers["$.__views.__alloyId327!click!refreshTable"] && $.__views.__alloyId327.addEventListener("click", refreshTable);
    __defers["$.__views.__alloyId328!click!createNewPost"] && $.__views.__alloyId328.addEventListener("click", createNewPost);
    __defers["$.__views.__alloyId329!click!gotoToday"] && $.__views.__alloyId329.addEventListener("click", gotoToday);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;