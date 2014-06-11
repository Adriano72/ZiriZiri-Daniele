function Controller() {
    function syncTimeline(e) {
        if (e && e.fromAdapter) return;
        syncTimeline.opts || {};
        var models = __alloyId163.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId116 = models[i];
            __alloyId116.__transform = transformData(__alloyId116);
            var __alloyId118 = Ti.UI.createTableViewRow({
                backgroundColor: "#F9F9F9",
                className: "itemRow",
                height: 170
            });
            rows.push(__alloyId118);
            mostraDettaglioEvento ? __alloyId118.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId118!click!mostraDettaglioEvento"] = true;
            var __alloyId120 = Ti.UI.createView({
                left: 5,
                right: 5,
                top: 5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                backgroundColor: "#FFF",
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId118.add(__alloyId120);
            slideRow ? __alloyId120.addEventListener("swipe", slideRow) : __defers["__alloyId120!swipe!slideRow"] = true;
            var __alloyId121 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 10,
                right: 10,
                top: 10,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId120.add(__alloyId121);
            var __alloyId122 = Ti.UI.createImageView({
                left: 0,
                top: 0,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                width: 70,
                height: 70,
                borderRadius: 4
            });
            __alloyId121.add(__alloyId122);
            var __alloyId123 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.SIZE,
                height: 70,
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId121.add(__alloyId123);
            var __alloyId124 = Ti.UI.createView({
                top: 0,
                left: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId123.add(__alloyId124);
            var __alloyId125 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId116.__transform["postDate"] ? __alloyId116.__transform["postDate"] : __alloyId116.get("postDate")
            });
            __alloyId124.add(__alloyId125);
            var __alloyId126 = Ti.UI.createView({
                touchEnabled: false,
                height: Ti.UI.SIZE,
                layout: "horizontal",
                width: 100,
                left: 20,
                top: 0
            });
            __alloyId124.add(__alloyId126);
            var __alloyId127 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId116.__transform["rating_1"] ? __alloyId116.__transform["rating_1"] : __alloyId116.get("rating_1")
            });
            __alloyId126.add(__alloyId127);
            var __alloyId128 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId116.__transform["rating_2"] ? __alloyId116.__transform["rating_2"] : __alloyId116.get("rating_2")
            });
            __alloyId126.add(__alloyId128);
            var __alloyId129 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId116.__transform["rating_3"] ? __alloyId116.__transform["rating_3"] : __alloyId116.get("rating_3")
            });
            __alloyId126.add(__alloyId129);
            var __alloyId130 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId116.__transform["rating_4"] ? __alloyId116.__transform["rating_4"] : __alloyId116.get("rating_4")
            });
            __alloyId126.add(__alloyId130);
            var __alloyId131 = Ti.UI.createImageView({
                width: 15,
                height: 15,
                left: 5,
                top: 0,
                image: "undefined" != typeof __alloyId116.__transform["rating_5"] ? __alloyId116.__transform["rating_5"] : __alloyId116.get("rating_5")
            });
            __alloyId126.add(__alloyId131);
            var __alloyId132 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId116.__transform["name"] ? __alloyId116.__transform["name"] : __alloyId116.get("name")
            });
            __alloyId123.add(__alloyId132);
            var __alloyId133 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.FILL,
                height: 40,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId120.add(__alloyId133);
            var __alloyId135 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 0
            });
            __alloyId133.add(__alloyId135);
            var __alloyId136 = Ti.UI.createLabel({
                top: 10,
                width: 20,
                height: 20,
                color: "#000",
                touchEnabled: false,
                backgroundImage: "/images/head-category.png",
                left: 0
            });
            __alloyId135.add(__alloyId136);
            var __alloyId137 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId116.__transform["categoria"] ? __alloyId116.__transform["categoria"] : __alloyId116.get("categoria")
            });
            __alloyId135.add(__alloyId137);
            var __alloyId139 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 40
            });
            __alloyId133.add(__alloyId139);
            var __alloyId140 = Ti.UI.createLabel({
                top: 10,
                width: 20,
                height: 20,
                color: "#000",
                touchEnabled: false,
                backgroundImage: "/images/head-tag.png",
                left: 0
            });
            __alloyId139.add(__alloyId140);
            var __alloyId141 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId116.__transform["tag"] ? __alloyId116.__transform["tag"] : __alloyId116.get("tag")
            });
            __alloyId139.add(__alloyId141);
            var __alloyId143 = Ti.UI.createView({
                width: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal",
                left: 40
            });
            __alloyId133.add(__alloyId143);
            var __alloyId144 = Ti.UI.createLabel({
                top: 10,
                width: 20,
                height: 20,
                color: "#000",
                touchEnabled: false,
                backgroundImage: "/images/head-story.png",
                left: 0
            });
            __alloyId143.add(__alloyId144);
            var __alloyId145 = Ti.UI.createLabel({
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
            __alloyId143.add(__alloyId145);
            var __alloyId147 = Ti.UI.createView({
                height: 1,
                top: 0,
                touchEnabled: false,
                backgroundColor: "#D6D6D6",
                width: "100%"
            });
            __alloyId120.add(__alloyId147);
            var __alloyId148 = Ti.UI.createView({
                height: 45,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId120.add(__alloyId148);
            var __alloyId149 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 5,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId116.__transform["iconEvent"] ? __alloyId116.__transform["iconEvent"] : __alloyId116.get("iconEvent")
            });
            __alloyId148.add(__alloyId149);
            var __alloyId150 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId116.__transform["iconCashFlow"] ? __alloyId116.__transform["iconCashFlow"] : __alloyId116.get("iconCashFlow")
            });
            __alloyId148.add(__alloyId150);
            var __alloyId151 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId116.__transform["iconDocument"] ? __alloyId116.__transform["iconDocument"] : __alloyId116.get("iconDocument")
            });
            __alloyId148.add(__alloyId151);
            var __alloyId152 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId116.__transform["iconNote"] ? __alloyId116.__transform["iconNote"] : __alloyId116.get("iconNote")
            });
            __alloyId148.add(__alloyId152);
            var __alloyId153 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId116.__transform["iconLink"] ? __alloyId116.__transform["iconLink"] : __alloyId116.get("iconLink")
            });
            __alloyId148.add(__alloyId153);
            var __alloyId154 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "undefined" != typeof __alloyId116.__transform["iconCommunication"] ? __alloyId116.__transform["iconCommunication"] : __alloyId116.get("iconCommunication")
            });
            __alloyId148.add(__alloyId154);
            var __alloyId156 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId148.add(__alloyId156);
            var __alloyId158 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 0,
                width: Ti.UI.FILL
            });
            __alloyId156.add(__alloyId158);
            var __alloyId159 = Ti.UI.createLabel({
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
            __alloyId158.add(__alloyId159);
            var __alloyId160 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                right: 0,
                bottom: 10,
                backgroundImage: "/images/kernel-show-all.png",
                touchEnabled: false
            });
            __alloyId158.add(__alloyId160);
        }
        $.__views.timelineTable.setData(rows);
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
        attrs.postDate = moment(attrs.referenceTime).fromNow();
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
        net.getData(0, 100, function(timeline_obj) {
            Ti.App.Properties.setObject("timelineProp", timeline_obj.data);
            Alloy.Collections.Timeline.reset(Ti.App.Properties.getObject("timelineProp").slice(0, 10), {
                silent: true
            });
            Ti.API.info("COLLECTION LENGTH AFTER SYNC: " + Alloy.Collections.Timeline.length);
            syncTimeline();
            Alloy.Globals.loading.hide();
        });
    }
    function gotoToday() {
        $.timelineTable.scrollToTop(0);
    }
    function loadMoreRows(e) {
        var timelineDataObj = Ti.App.Properties.getObject("timelineProp");
        Ti.API.info("OGGETTO PROPERTY: " + JSON.stringify(timelineDataObj));
        var begin = Alloy.Collections.Timeline.length;
        var end = Alloy.Collections.Timeline.length + 10;
        var slice = timelineDataObj.slice(begin, end);
        Alloy.Collections.Timeline.add(slice, {
            silent: true
        });
        syncTimeline();
        e.done();
    }
    function mostraDettaglioEvento(e) {
        Alloy.Models.Post.set(Alloy.Collections.Timeline.at(e.index));
        Alloy.createController("dettaglio_post").getView();
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
        backgroundColor: "#F9F9F9",
        exitOnClose: "true",
        id: "win",
        title: "Diario"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
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
    var __alloyId163 = Alloy.Collections["Timeline"] || Timeline;
    __alloyId163.on("fetch destroy change add remove reset", syncTimeline);
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
    $.__views.__alloyId164 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 0,
        id: "__alloyId164"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId164);
    refreshTable ? $.__views.__alloyId164.addEventListener("click", refreshTable) : __defers["$.__views.__alloyId164!click!refreshTable"] = true;
    $.__views.bottom_sync = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-refresh.png",
        left: 0,
        id: "bottom_sync"
    });
    $.__views.__alloyId164.add($.__views.bottom_sync);
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
    $.__views.__alloyId164.add($.__views.txt_sync);
    $.__views.__alloyId165 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId165"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId165);
    createNewPost ? $.__views.__alloyId165.addEventListener("click", createNewPost) : __defers["$.__views.__alloyId165!click!createNewPost"] = true;
    $.__views.bottom_new = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-new-post.png",
        left: 0,
        id: "bottom_new"
    });
    $.__views.__alloyId165.add($.__views.bottom_new);
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
    $.__views.__alloyId165.add($.__views.txt_new);
    $.__views.__alloyId166 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId166"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId166);
    gotoToday ? $.__views.__alloyId166.addEventListener("click", gotoToday) : __defers["$.__views.__alloyId166!click!gotoToday"] = true;
    $.__views.bottom_today = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-today.png",
        left: 0,
        id: "bottom_today"
    });
    $.__views.__alloyId166.add($.__views.bottom_today);
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
    $.__views.__alloyId166.add($.__views.txt_today);
    exports.destroy = function() {
        __alloyId163.off("fetch destroy change add remove reset", syncTimeline);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    $.win.open();
    var net = require("net");
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var theActionBar = null;
    $.is.init($.timelineTable);
    var timeTemp = Ti.App.Properties.getObject("timelineProp");
    Ti.API.info("RETRIVING CACHED DATA, LENGTH STORED PROPERTY: " + timeTemp.length);
    Ti.API.info("OGGETTO PROPERTY TIMELINE; " + JSON.stringify(timeTemp));
    Alloy.Collections.Timeline.reset(timeTemp.slice(0, 10), {
        silent: true
    });
    syncTimeline();
    Ti.API.info("LENGTH COLLECTION: " + Alloy.Collections.Timeline.length);
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
    net.getPostTemplate(0, 1, function(p_postTemplate) {
        Alloy.Models.Template = new Backbone.Model();
        Alloy.Models.Template.set(p_postTemplate);
        Ti.API.info("POST TEMPLATE MODEL: " + JSON.stringify(Alloy.Models.Template));
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
    $.win.addEventListener("close", function() {
        $.win.destroy();
    });
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["__alloyId118!click!mostraDettaglioEvento"] && __alloyId118.addEventListener("click", mostraDettaglioEvento);
    __defers["__alloyId120!swipe!slideRow"] && __alloyId120.addEventListener("swipe", slideRow);
    __defers["$.__views.is!end!loadMoreRows"] && $.__views.is.on("end", loadMoreRows);
    __defers["$.__views.timelineTable!postlayout!closeSpinner"] && $.__views.timelineTable.addEventListener("postlayout", closeSpinner);
    __defers["$.__views.__alloyId164!click!refreshTable"] && $.__views.__alloyId164.addEventListener("click", refreshTable);
    __defers["$.__views.__alloyId165!click!createNewPost"] && $.__views.__alloyId165.addEventListener("click", createNewPost);
    __defers["$.__views.__alloyId166!click!gotoToday"] && $.__views.__alloyId166.addEventListener("click", gotoToday);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;