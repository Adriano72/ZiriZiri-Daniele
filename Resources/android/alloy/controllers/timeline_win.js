function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId270() {
        $.__views.win.removeEventListener("open", __alloyId270);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId266 = {
                icon: "/images/top-camera.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_picture",
                title: "TakeAPicture"
            };
            $.__views.mn_picture = e.menu.add(_.pick(__alloyId266, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_picture.applyProperties(_.omit(__alloyId266, Alloy.Android.menuItemCreateArgs));
            takePicture ? $.__views.mn_picture.addEventListener("click", takePicture) : __defers["$.__views.mn_picture!click!takePicture"] = true;
            var __alloyId267 = {
                icon: "/images/top-notifiche.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_notify",
                title: "Notifiche"
            };
            $.__views.mn_notify = e.menu.add(_.pick(__alloyId267, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_notify.applyProperties(_.omit(__alloyId267, Alloy.Android.menuItemCreateArgs));
            var __alloyId268 = {
                icon: "/images/top-search.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_search",
                title: "Immagine"
            };
            $.__views.mn_search = e.menu.add(_.pick(__alloyId268, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_search.applyProperties(_.omit(__alloyId268, Alloy.Android.menuItemCreateArgs));
            var __alloyId269 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_NEVER,
                id: "mn_logout",
                title: "Logout"
            };
            $.__views.mn_logout = e.menu.add(_.pick(__alloyId269, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_logout.applyProperties(_.omit(__alloyId269, Alloy.Android.menuItemCreateArgs));
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
        var models = __alloyId317.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId271 = models[i];
            __alloyId271.__transform = transformData(__alloyId271);
            var __alloyId273 = Ti.UI.createTableViewRow({
                backgroundColor: "#F9F9F9",
                className: "itemrow",
                height: 170
            });
            rows.push(__alloyId273);
            mostraDettaglioEvento ? __alloyId273.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId273!click!mostraDettaglioEvento"] = true;
            var __alloyId275 = Ti.UI.createView({
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
            __alloyId273.add(__alloyId275);
            var __alloyId276 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 10,
                right: 10,
                top: 10,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId275.add(__alloyId276);
            var __alloyId277 = Ti.UI.createImageView({
                left: 0,
                top: 0,
                touchEnabled: false,
                width: 70,
                height: 70,
                borderRadius: 4,
                image: "undefined" != typeof __alloyId271.__transform["catImage"] ? __alloyId271.__transform["catImage"] : __alloyId271.get("catImage")
            });
            __alloyId276.add(__alloyId277);
            var __alloyId278 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.SIZE,
                height: 70,
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId276.add(__alloyId278);
            var __alloyId279 = Ti.UI.createView({
                top: 0,
                left: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId278.add(__alloyId279);
            var __alloyId280 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId271.__transform["postDate"] ? __alloyId271.__transform["postDate"] : __alloyId271.get("postDate")
            });
            __alloyId279.add(__alloyId280);
            var __alloyId281 = Ti.UI.createView({
                touchEnabled: false,
                height: Ti.UI.SIZE,
                layout: "horizontal",
                width: 100,
                left: 20,
                top: 0
            });
            __alloyId279.add(__alloyId281);
            var __alloyId282 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId271.__transform["rating_1"] ? __alloyId271.__transform["rating_1"] : __alloyId271.get("rating_1")
            });
            __alloyId281.add(__alloyId282);
            var __alloyId283 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId271.__transform["rating_2"] ? __alloyId271.__transform["rating_2"] : __alloyId271.get("rating_2")
            });
            __alloyId281.add(__alloyId283);
            var __alloyId284 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId271.__transform["rating_3"] ? __alloyId271.__transform["rating_3"] : __alloyId271.get("rating_3")
            });
            __alloyId281.add(__alloyId284);
            var __alloyId285 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId271.__transform["rating_4"] ? __alloyId271.__transform["rating_4"] : __alloyId271.get("rating_4")
            });
            __alloyId281.add(__alloyId285);
            var __alloyId286 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId271.__transform["rating_5"] ? __alloyId271.__transform["rating_5"] : __alloyId271.get("rating_5")
            });
            __alloyId281.add(__alloyId286);
            var __alloyId287 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId271.__transform["name"] ? __alloyId271.__transform["name"] : __alloyId271.get("name")
            });
            __alloyId278.add(__alloyId287);
            var __alloyId288 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.FILL,
                height: 40,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId275.add(__alloyId288);
            var __alloyId290 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 0
            });
            __alloyId288.add(__alloyId290);
            var __alloyId291 = Ti.UI.createImageView({
                width: 20,
                height: 20,
                touchEnabled: false,
                image: "/images/head-category.png",
                left: 0
            });
            __alloyId290.add(__alloyId291);
            var __alloyId292 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId271.__transform["categoria"] ? __alloyId271.__transform["categoria"] : __alloyId271.get("categoria")
            });
            __alloyId290.add(__alloyId292);
            var __alloyId294 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 40
            });
            __alloyId288.add(__alloyId294);
            var __alloyId295 = Ti.UI.createImageView({
                width: 20,
                height: 20,
                touchEnabled: false,
                image: "/images/head-tag.png",
                left: 0
            });
            __alloyId294.add(__alloyId295);
            var __alloyId296 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId271.__transform["tag"] ? __alloyId271.__transform["tag"] : __alloyId271.get("tag")
            });
            __alloyId294.add(__alloyId296);
            var __alloyId298 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 40
            });
            __alloyId288.add(__alloyId298);
            var __alloyId299 = Ti.UI.createImageView({
                width: 20,
                height: 20,
                touchEnabled: false,
                image: "/images/head-story.png",
                left: 0
            });
            __alloyId298.add(__alloyId299);
            var __alloyId300 = Ti.UI.createLabel({
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
            __alloyId298.add(__alloyId300);
            var __alloyId302 = Ti.UI.createView({
                height: 1,
                top: 0,
                touchEnabled: false,
                backgroundColor: "#D6D6D6",
                width: "100%"
            });
            __alloyId275.add(__alloyId302);
            var __alloyId303 = Ti.UI.createView({
                height: 45,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId275.add(__alloyId303);
            var __alloyId304 = Ti.UI.createImageView({
                left: 5,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId271.__transform["iconEvent"] ? __alloyId271.__transform["iconEvent"] : __alloyId271.get("iconEvent")
            });
            __alloyId303.add(__alloyId304);
            var __alloyId305 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId271.__transform["iconCashFlow"] ? __alloyId271.__transform["iconCashFlow"] : __alloyId271.get("iconCashFlow")
            });
            __alloyId303.add(__alloyId305);
            var __alloyId306 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId271.__transform["iconDocument"] ? __alloyId271.__transform["iconDocument"] : __alloyId271.get("iconDocument")
            });
            __alloyId303.add(__alloyId306);
            var __alloyId307 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId271.__transform["iconNote"] ? __alloyId271.__transform["iconNote"] : __alloyId271.get("iconNote")
            });
            __alloyId303.add(__alloyId307);
            var __alloyId308 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                image: "undefined" != typeof __alloyId271.__transform["iconLink"] ? __alloyId271.__transform["iconLink"] : __alloyId271.get("iconLink")
            });
            __alloyId303.add(__alloyId308);
            var __alloyId309 = Ti.UI.createImageView({
                left: 15,
                top: 10,
                bottom: 10,
                touchEnabled: false,
                center: 45,
                width: 25,
                height: 25,
                backgroundImage: "/images/kernel-comunicazioni-off.png",
                image: "undefined" != typeof __alloyId271.__transform["iconCommunication"] ? __alloyId271.__transform["iconCommunication"] : __alloyId271.get("iconCommunication")
            });
            __alloyId303.add(__alloyId309);
            var __alloyId311 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId303.add(__alloyId311);
            var __alloyId313 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 0,
                width: Ti.UI.FILL
            });
            __alloyId311.add(__alloyId313);
            var __alloyId314 = Ti.UI.createImageView({
                right: 0,
                top: 10,
                bottom: 10,
                image: "/images/kernel-show-all.png",
                touchEnabled: false,
                width: 25,
                height: 25
            });
            __alloyId313.add(__alloyId314);
        }
        $.__views.timelineTable.setData(rows);
    }
    function takePicture() {
        Alloy.Globals.shortcutMode = "camera";
        createNewPost();
    }
    function manageClose() {
        var activity = Titanium.Android.currentActivity;
        activity.finish();
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
            theActionBar.displayHomeAsUp = false;
            theActionBar.setIcon("images/logo-test.png");
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
        net.getData(0, 25, function(timeline_obj) {
            Ti.App.Properties.setObject("timelineProp", timeline_obj.data);
            Alloy.Collections.Timeline.reset(Ti.App.Properties.getObject("timelineProp").slice(0, 10), {
                silent: true
            });
            Ti.API.info("COLLECTION LENGTH AFTER SYNC: " + Alloy.Collections.Timeline.length);
            syncTimeline();
            lastNumberOfRecordsFetched = timeTemp.length;
            presentPage = 0;
            Alloy.Globals.loading.hide();
        });
    }
    function gotoToday() {
        $.timelineTable.scrollToTop(0);
    }
    function loadMoreRows(e) {
        var timelineDataObj = Ti.App.Properties.getObject("timelineProp");
        Ti.API.info("TIMELINE PROPERTY LENGTH PRIMA: " + timelineDataObj.length);
        Ti.API.info("TIMELINE COLLECTION LENGTH PRIMA: " + Alloy.Collections.Timeline.length);
        var startCollectionLength = Alloy.Collections.Timeline.length;
        if (Alloy.Collections.Timeline.length + 10 >= timelineDataObj.length && lastNumberOfRecordsFetched >= 25) {
            presentPage += 1;
            net.getData(presentPage, 25, function(timeline_obj) {
                lastNumberOfRecordsFetched = timeline_obj.data.length;
                Ti.API.info("Last Number Records Fetched: " + lastNumberOfRecordsFetched);
                timelineDataObj = timelineDataObj.concat(timeline_obj.data);
                Ti.App.Properties.setObject("timelineProp", timelineDataObj);
                var begin = Alloy.Collections.Timeline.length;
                var end = Alloy.Collections.Timeline.length + 10;
                var slice = Ti.App.Properties.getObject("timelineProp").slice(begin, end);
                Alloy.Collections.Timeline.add(slice, {
                    silent: true
                });
                if (startCollectionLength == Alloy.Collections.Timeline.length) {
                    Ti.API.info("*******************QUI **********");
                    Ti.App.Properties.setObject("timelineProp", Alloy.Collections.Timeline);
                }
                Ti.API.info("TIMELINE PROPERTY LENGTH DOPO: " + Ti.App.Properties.getObject("timelineProp").length);
                Ti.API.info("TIMELINE COLLECTION LENGTH DOPO: " + Alloy.Collections.Timeline.length);
                syncTimeline();
                e.done();
            });
        } else {
            var begin = Alloy.Collections.Timeline.length;
            var end = Alloy.Collections.Timeline.length + 10;
            var slice = timelineDataObj.slice(begin, end);
            Alloy.Collections.Timeline.add(slice, {
                silent: true
            });
            Ti.API.info("TIMELINE COLLECTION LENGTH DOPO (NO GET DATA): " + Alloy.Collections.Timeline.length);
            syncTimeline();
            e.done();
        }
    }
    function mostraDettaglioEvento(e) {
        Alloy.Models.Post.set(Alloy.Collections.Timeline.at(e.index));
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
        Alloy.createController("newPost", function() {
            Alloy.Globals.loading.hide();
        }).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeline_win";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
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
    manageClose ? $.__views.win.addEventListener("android:back", manageClose) : __defers["$.__views.win!android:back!manageClose"] = true;
    $.__views.win.addEventListener("open", __alloyId270);
    $.__views.is = Alloy.createWidget("nl.fokkezb.infiniteScroll", "widget", {
        id: "is",
        msgDone: "Fine della lista",
        __parentSymbol: __parentSymbol
    });
    loadMoreRows ? $.__views.is.on("end", loadMoreRows) : __defers["$.__views.is!end!loadMoreRows"] = true;
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#transparent",
        bottom: 60,
        footerView: $.__views.is.getProxyPropertyEx("footerView", {
            recurse: true
        }),
        id: "timelineTable"
    });
    $.__views.win.add($.__views.timelineTable);
    var __alloyId317 = Alloy.Collections["Timeline"] || Timeline;
    __alloyId317.on("fetch destroy change add remove reset", syncTimeline);
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
    $.__views.__alloyId318 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 0,
        id: "__alloyId318"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId318);
    refreshTable ? $.__views.__alloyId318.addEventListener("click", refreshTable) : __defers["$.__views.__alloyId318!click!refreshTable"] = true;
    $.__views.bottom_sync = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-refresh.png",
        left: 0,
        id: "bottom_sync"
    });
    $.__views.__alloyId318.add($.__views.bottom_sync);
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
    $.__views.__alloyId318.add($.__views.txt_sync);
    $.__views.__alloyId319 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId319"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId319);
    createNewPost ? $.__views.__alloyId319.addEventListener("click", createNewPost) : __defers["$.__views.__alloyId319!click!createNewPost"] = true;
    $.__views.bottom_new = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-new-post.png",
        left: 0,
        id: "bottom_new"
    });
    $.__views.__alloyId319.add($.__views.bottom_new);
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
    $.__views.__alloyId319.add($.__views.txt_new);
    $.__views.__alloyId320 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId320"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId320);
    gotoToday ? $.__views.__alloyId320.addEventListener("click", gotoToday) : __defers["$.__views.__alloyId320!click!gotoToday"] = true;
    $.__views.bottom_today = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-today.png",
        left: 0,
        id: "bottom_today"
    });
    $.__views.__alloyId320.add($.__views.bottom_today);
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
    $.__views.__alloyId320.add($.__views.txt_today);
    exports.destroy = function() {
        __alloyId317.off("fetch destroy change add remove reset", syncTimeline);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var net = require("net");
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var presentPage = 0;
    var lastNumberOfRecordsFetched;
    var theActionBar = null;
    $.is.init($.timelineTable);
    var timeTemp = Ti.App.Properties.getObject("timelineProp");
    lastNumberOfRecordsFetched = timeTemp.length;
    Ti.API.info("NUM RECORDS FETCHED AT START: " + lastNumberOfRecordsFetched);
    Alloy.Collections.Timeline.reset(timeTemp.slice(0, 10), {
        silent: true
    });
    Alloy.Collections.Timeline.sort({
        silent: true
    });
    Ti.API.info("§§§§§§§§§§§ OGGETTO TIMELINE; " + JSON.stringify(Alloy.Collections.Timeline));
    syncTimeline();
    Ti.API.info("LENGTH COLLECTION: " + Alloy.Collections.Timeline.length);
    Ti.API.info("TIMELINE LENGTH STORED PROPERTY: " + timeTemp.length);
    $.win.open();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.win!android:back!manageClose"] && $.__views.win.addEventListener("android:back", manageClose);
    __defers["$.__views.mn_picture!click!takePicture"] && $.__views.mn_picture.addEventListener("click", takePicture);
    __defers["$.__views.mn_logout!click!f_logout"] && $.__views.mn_logout.addEventListener("click", f_logout);
    __defers["__alloyId273!click!mostraDettaglioEvento"] && __alloyId273.addEventListener("click", mostraDettaglioEvento);
    __defers["$.__views.is!end!loadMoreRows"] && $.__views.is.on("end", loadMoreRows);
    __defers["$.__views.timelineTable!postlayout!closeSpinner"] && $.__views.timelineTable.addEventListener("postlayout", closeSpinner);
    __defers["$.__views.__alloyId318!click!refreshTable"] && $.__views.__alloyId318.addEventListener("click", refreshTable);
    __defers["$.__views.__alloyId319!click!createNewPost"] && $.__views.__alloyId319.addEventListener("click", createNewPost);
    __defers["$.__views.__alloyId320!click!gotoToday"] && $.__views.__alloyId320.addEventListener("click", gotoToday);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;