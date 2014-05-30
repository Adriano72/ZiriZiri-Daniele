function Controller() {
    function __alloyId106() {
        $.__views.win.removeEventListener("open", __alloyId106);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId104 = {
                icon: "/images/top-notifiche.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_notify",
                title: "Scrivi"
            };
            $.__views.mn_notify = e.menu.add(_.pick(__alloyId104, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_notify.applyProperties(_.omit(__alloyId104, Alloy.Android.menuItemCreateArgs));
            var __alloyId105 = {
                icon: "/images/top-search.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_search",
                title: "Immagine"
            };
            $.__views.mn_search = e.menu.add(_.pick(__alloyId105, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_search.applyProperties(_.omit(__alloyId105, Alloy.Android.menuItemCreateArgs));
            refreshTable ? $.__views.mn_search.addEventListener("click", refreshTable) : __defers["$.__views.mn_search!click!refreshTable"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function syncTimeline(e) {
        if (e && e.fromAdapter) return;
        syncTimeline.opts || {};
        var models = __alloyId149.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId107 = models[i];
            __alloyId107.__transform = transformData(__alloyId107);
            var __alloyId109 = Ti.UI.createTableViewRow({
                className: "itemRow",
                height: 170
            });
            rows.push(__alloyId109);
            mostraDettaglioEvento ? __alloyId109.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId109!click!mostraDettaglioEvento"] = true;
            var __alloyId111 = Ti.UI.createView({
                left: 5,
                right: 5,
                top: 5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId109.add(__alloyId111);
            slideRow ? __alloyId111.addEventListener("swipe", slideRow) : __defers["__alloyId111!swipe!slideRow"] = true;
            var __alloyId112 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 10,
                right: 10,
                top: 10,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId111.add(__alloyId112);
            var __alloyId113 = Ti.UI.createImageView({
                left: 0,
                top: 0,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                width: 70,
                height: 70,
                borderRadius: 4
            });
            __alloyId112.add(__alloyId113);
            var __alloyId114 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.SIZE,
                height: 70,
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId112.add(__alloyId114);
            var __alloyId115 = Ti.UI.createView({
                top: 0,
                left: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId114.add(__alloyId115);
            var __alloyId116 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId107.__transform["postDate"] ? __alloyId107.__transform["postDate"] : __alloyId107.get("postDate")
            });
            __alloyId115.add(__alloyId116);
            var __alloyId117 = Ti.UI.createLabel({
                top: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#999999",
                touchEnabled: false,
                font: {
                    fontSize: 12
                },
                textAlign: "right",
                left: 20,
                text: "********"
            });
            __alloyId115.add(__alloyId117);
            var __alloyId118 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId107.__transform["name"] ? __alloyId107.__transform["name"] : __alloyId107.get("name")
            });
            __alloyId114.add(__alloyId118);
            var __alloyId119 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.FILL,
                height: 40,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId111.add(__alloyId119);
            var __alloyId121 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 0
            });
            __alloyId119.add(__alloyId121);
            var __alloyId122 = Ti.UI.createLabel({
                top: 10,
                width: 20,
                height: 20,
                color: "#000",
                touchEnabled: false,
                backgroundImage: "/images/head-category.png",
                left: 0
            });
            __alloyId121.add(__alloyId122);
            var __alloyId123 = Ti.UI.createLabel({
                top: 10,
                width: 70,
                height: 18,
                color: "#999",
                ellipsize: true,
                wordWrap: false,
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                touchEnabled: false,
                left: 5,
                text: "undefined" != typeof __alloyId107.__transform["categoria"] ? __alloyId107.__transform["categoria"] : __alloyId107.get("categoria")
            });
            __alloyId121.add(__alloyId123);
            var __alloyId125 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 50
            });
            __alloyId119.add(__alloyId125);
            var __alloyId126 = Ti.UI.createLabel({
                top: 10,
                width: 20,
                height: 20,
                color: "#000",
                touchEnabled: false,
                backgroundImage: "/images/head-tag.png",
                left: 0
            });
            __alloyId125.add(__alloyId126);
            var __alloyId127 = Ti.UI.createLabel({
                top: 10,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#999",
                ellipsize: true,
                wordWrap: false,
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                touchEnabled: false,
                left: 5,
                text: "tags"
            });
            __alloyId125.add(__alloyId127);
            var __alloyId129 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 50
            });
            __alloyId119.add(__alloyId129);
            var __alloyId130 = Ti.UI.createLabel({
                top: 10,
                width: 20,
                height: 20,
                color: "#000",
                touchEnabled: false,
                backgroundImage: "/images/head-story.png",
                left: 0
            });
            __alloyId129.add(__alloyId130);
            var __alloyId131 = Ti.UI.createLabel({
                top: 10,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#999",
                ellipsize: true,
                wordWrap: false,
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                touchEnabled: false,
                left: 5,
                text: "storie"
            });
            __alloyId129.add(__alloyId131);
            var __alloyId133 = Ti.UI.createView({
                height: 1,
                top: 0,
                touchEnabled: false,
                backgroundColor: "#D6D6D6",
                width: "100%"
            });
            __alloyId111.add(__alloyId133);
            var __alloyId134 = Ti.UI.createView({
                height: 45,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId111.add(__alloyId134);
            var __alloyId135 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 5,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "/images/kernel-event-off.png"
            });
            __alloyId134.add(__alloyId135);
            var __alloyId136 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId107.__transform["iconCashFlow"] ? __alloyId107.__transform["iconCashFlow"] : __alloyId107.get("iconCashFlow")
            });
            __alloyId134.add(__alloyId136);
            var __alloyId137 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId107.__transform["iconDocument"] ? __alloyId107.__transform["iconDocument"] : __alloyId107.get("iconDocument")
            });
            __alloyId134.add(__alloyId137);
            var __alloyId138 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId107.__transform["iconNote"] ? __alloyId107.__transform["iconNote"] : __alloyId107.get("iconNote")
            });
            __alloyId134.add(__alloyId138);
            var __alloyId139 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId107.__transform["iconLink"] ? __alloyId107.__transform["iconLink"] : __alloyId107.get("iconLink")
            });
            __alloyId134.add(__alloyId139);
            var __alloyId140 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "/images/kernel-comunicazioni-off.png"
            });
            __alloyId134.add(__alloyId140);
            var __alloyId142 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId134.add(__alloyId142);
            var __alloyId144 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 0,
                width: Ti.UI.FILL
            });
            __alloyId142.add(__alloyId144);
            var __alloyId145 = Ti.UI.createLabel({
                top: 10,
                width: Ti.UI.SIZE,
                height: 25,
                color: "#5FAEE3",
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 14
                },
                right: 30,
                bottom: 10,
                text: "Show All"
            });
            __alloyId144.add(__alloyId145);
            var __alloyId146 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                right: 0,
                bottom: 10,
                backgroundImage: "/images/kernel-show-all.png",
                touchEnabled: false
            });
            __alloyId144.add(__alloyId146);
        }
        $.__views.timelineTable.setData(rows);
    }
    function openEvent() {
        Ti.API.info("WINDOW OPEN");
        theActionBar = $.win.activity.actionBar;
        $.win.activity.invalidateOptionsMenu();
        theActionBar = $.win.activity.actionBar;
        if (void 0 != theActionBar) {
            theActionBar.displayHomeAsUp = false;
            theActionBar.setIcon("images/logo-test.png");
        }
        setTimeout(function() {
            net.getData(0, 0, function(timelineObj) {
                Ti.App.Properties.setObject("cachedTimeline", timelineObj);
            });
        }, 2e3);
    }
    function checkAspects(node, target) {
        if (_.isUndefined(node) || _.isUndefined(_.find(node, function(value) {
            return value.kind.code == target;
        }))) switch (target) {
          case "CASHFLOWDATATYPE_CODE":
            return "/images/kernel-finance-off.png";

          case "DOCUMENTDATATYPE_CODE":
            return "/images/kernel-document-off.png";

          case "NOTEDATATYPE_CODE":
            return "/images/kernel-note-off.png";

          case "LINKDATATYPE_CODE":
            return "/images/kernel-link-off.png";

          default:
            return;
        } else switch (target) {
          case "CASHFLOWDATATYPE_CODE":
            return "/images/kernel-finance-on.png";

          case "DOCUMENTDATATYPE_CODE":
            return "/images/kernel-document-on.png";

          case "NOTEDATATYPE_CODE":
            return "/images/kernel-note-on.png";

          case "LINKDATATYPE_CODE":
            return "/images/kernel-link-on.png";

          default:
            return;
        }
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.postDate = moment(attrs.referenceTime).fromNow(), attrs.categoria = _.isNull(attrs.category) ? "" : attrs.category.name;
        attrs.iconCashFlow = checkAspects(attrs.aspects, "CASHFLOWDATATYPE_CODE");
        attrs.iconDocument = checkAspects(attrs.aspects, "DOCUMENTDATATYPE_CODE");
        attrs.iconNote = checkAspects(attrs.aspects, "NOTEDATATYPE_CODE");
        attrs.iconLink = checkAspects(attrs.aspects, "LINKDATATYPE_CODE");
        return attrs;
    }
    function refreshTable() {
        Alloy.Globals.loading.show("Sincronizzazione...", false);
    }
    function gotoToday() {
        $.timelineTable.scrollToTop(0);
    }
    function loadMoreRows(e) {
        var timelineDataObj = Ti.App.Properties.getObject("timelineProp");
        Ti.API.info("OGGETTO PROPERTY: " + JSON.stringify(timelineDataObj));
        var begin = Alloy.Collections.Timeline.length;
        var end = Alloy.Collections.Timeline.length + 10;
        var slice = timelineDataObj.data.slice(begin, end);
        Alloy.Collections.Timeline.add(slice, {
            silent: true
        });
        syncTimeline();
        e.done();
    }
    function mostraDettaglioEvento(e) {
        Alloy.Collections.Timeline.at(e.index);
        Alloy.createController("dettaglio_post", e.index).getView().open();
    }
    function slideRow(e) {
        Ti.API.info("SLIDE****");
        e.source.left -= 50;
        e.source.right += 50;
    }
    function createNewPost() {
        Alloy.createController("newPost", function() {
            refreshTable();
        }).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timeline_win";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        exitOnClose: true,
        id: "win",
        title: "Diario"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId106);
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
    var __alloyId149 = Alloy.Collections["Timeline"] || Timeline;
    __alloyId149.on("fetch destroy change add remove reset", syncTimeline);
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
    $.__views.__alloyId150 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 0,
        id: "__alloyId150"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId150);
    refreshTable ? $.__views.__alloyId150.addEventListener("click", refreshTable) : __defers["$.__views.__alloyId150!click!refreshTable"] = true;
    $.__views.bottom_sync = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-refresh.png",
        left: 0,
        id: "bottom_sync"
    });
    $.__views.__alloyId150.add($.__views.bottom_sync);
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
    $.__views.__alloyId150.add($.__views.txt_sync);
    $.__views.__alloyId151 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId151"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId151);
    createNewPost ? $.__views.__alloyId151.addEventListener("click", createNewPost) : __defers["$.__views.__alloyId151!click!createNewPost"] = true;
    $.__views.bottom_new = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-new-post.png",
        left: 0,
        id: "bottom_new"
    });
    $.__views.__alloyId151.add($.__views.bottom_new);
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
    $.__views.__alloyId151.add($.__views.txt_new);
    $.__views.__alloyId152 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId152"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId152);
    gotoToday ? $.__views.__alloyId152.addEventListener("click", gotoToday) : __defers["$.__views.__alloyId152!click!gotoToday"] = true;
    $.__views.bottom_today = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-today.png",
        left: 0,
        id: "bottom_today"
    });
    $.__views.__alloyId152.add($.__views.bottom_today);
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
    $.__views.__alloyId152.add($.__views.txt_today);
    exports.destroy = function() {
        __alloyId149.off("fetch destroy change add remove reset", syncTimeline);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var net = require("net");
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var theActionBar = null;
    $.is.init($.timelineTable);
    Ti.API.info("OBJ_TMLINE: " + JSON.stringify(Ti.App.Properties.getObject("timelineProp")));
    var Timeline = Alloy.Collections.Timeline;
    if (_.isNull(Alloy.Globals.cachedTimeline)) net.getData(0, 0, function(timelineObj) {
        Ti.API.info("OGGETTO TIMELINE; " + JSON.stringify(timelineObj));
        Alloy.Collections.Timeline.reset(timelineObj.data.slice(0, 10));
        Ti.App.Properties.setObject("cachedTimeline", timelineObj);
    }); else {
        var timeTemp = Ti.App.Properties.getObject("cachedTimeline");
        Ti.API.info("RETRIVING CACHED DATA");
        Ti.API.info("LENGTH OGGETTO TIMELINE; " + JSON.stringify(timeTemp));
        Alloy.Collections.Timeline.reset(timeTemp.data.slice(0, 10));
        Ti.API.info("LENGTH COLLECTION: " + Alloy.Collections.Timeline.length);
    }
    net.getCategories(function(categoriesData) {
        var objCategorie = [];
        _.forEach(categoriesData.data, function(value) {
            objCategorie.push({
                title: value.name,
                id: value.id,
                version: value.version
            });
        });
        Ti.App.Properties.setObject("elencoCategorie", objCategorie);
    });
    net.getPostTemplate(function(p_postTemplate) {
        Ti.API.info("POST TEMPLATE: " + JSON.stringify(p_postTemplate));
        var arrayTemplateIds = [];
        _.forEach(p_postTemplate.data[0].modules, function(value) {
            arrayTemplateIds.push(value.id);
        });
        Ti.App.Properties.setList("postTemplateIds", arrayTemplateIds);
        Ti.API.info("ID TEMPLATE ASPECT: " + Ti.App.Properties.getList("postTemplateIds"));
    });
    net.getTipoMovimento(function(p_tipoMovimento) {
        var objTipoMov = [];
        _.forEach(p_tipoMovimento.data, function(value) {
            objTipoMov.push({
                title: value.descrizioneBreve,
                id: value.id,
                codice: value.codice,
                version: value.version
            });
        });
        Ti.App.Properties.setObject("elencoTipoMov", objTipoMov);
    });
    net.getPagamentoIncasso(function(p_pagamentoIncasso) {
        var objPagamIncasso = [];
        _.forEach(p_pagamentoIncasso.data, function(value) {
            objPagamIncasso.push({
                title: value.descrizioneBreve,
                id: value.id,
                version: value.version
            });
        });
        Ti.App.Properties.setObject("elencoPagamIncasso", objPagamIncasso);
    });
    $.win.open();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_search!click!refreshTable"] && $.__views.mn_search.addEventListener("click", refreshTable);
    __defers["__alloyId109!click!mostraDettaglioEvento"] && __alloyId109.addEventListener("click", mostraDettaglioEvento);
    __defers["__alloyId111!swipe!slideRow"] && __alloyId111.addEventListener("swipe", slideRow);
    __defers["$.__views.is!end!loadMoreRows"] && $.__views.is.on("end", loadMoreRows);
    __defers["$.__views.__alloyId150!click!refreshTable"] && $.__views.__alloyId150.addEventListener("click", refreshTable);
    __defers["$.__views.__alloyId151!click!createNewPost"] && $.__views.__alloyId151.addEventListener("click", createNewPost);
    __defers["$.__views.__alloyId152!click!gotoToday"] && $.__views.__alloyId152.addEventListener("click", gotoToday);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;