function Controller() {
    function __alloyId103() {
        $.__views.win.removeEventListener("open", __alloyId103);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId101 = {
                icon: "/images/top-notifiche.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_notify",
                title: "Scrivi"
            };
            $.__views.mn_notify = e.menu.add(_.pick(__alloyId101, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_notify.applyProperties(_.omit(__alloyId101, Alloy.Android.menuItemCreateArgs));
            var __alloyId102 = {
                icon: "/images/top-search.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_search",
                title: "Immagine"
            };
            $.__views.mn_search = e.menu.add(_.pick(__alloyId102, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_search.applyProperties(_.omit(__alloyId102, Alloy.Android.menuItemCreateArgs));
            refreshTable ? $.__views.mn_search.addEventListener("click", refreshTable) : __defers["$.__views.mn_search!click!refreshTable"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId145(e) {
        if (e && e.fromAdapter) return;
        __alloyId145.opts || {};
        var models = __alloyId144.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId104 = models[i];
            __alloyId104.__transform = {};
            var __alloyId106 = Ti.UI.createTableViewRow({
                className: "itemRow"
            });
            rows.push(__alloyId106);
            mostraDettaglioEvento ? __alloyId106.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId106!click!mostraDettaglioEvento"] = true;
            var __alloyId108 = Ti.UI.createView({
                left: 5,
                right: 5,
                top: 5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                touchEnabled: true,
                layout: "vertical"
            });
            __alloyId106.add(__alloyId108);
            slideRow ? __alloyId108.addEventListener("swipe", slideRow) : __defers["__alloyId108!swipe!slideRow"] = true;
            var __alloyId109 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 10,
                right: 10,
                top: 10,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId108.add(__alloyId109);
            var __alloyId110 = Ti.UI.createImageView({
                left: 0,
                top: 0,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                width: 70,
                height: 70,
                borderRadius: 4
            });
            __alloyId109.add(__alloyId110);
            var __alloyId111 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.SIZE,
                height: 70,
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId109.add(__alloyId111);
            var __alloyId112 = Ti.UI.createView({
                top: 0,
                left: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId111.add(__alloyId112);
            var __alloyId113 = Ti.UI.createLabel({
                top: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#999999",
                touchEnabled: false,
                font: {
                    fontSize: 12
                },
                textAlign: "right",
                wordWrap: false,
                left: 0,
                text: "undefined" != typeof __alloyId104.__transform["date"] ? __alloyId104.__transform["date"] : __alloyId104.get("date")
            });
            __alloyId112.add(__alloyId113);
            var __alloyId114 = Ti.UI.createLabel({
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
            __alloyId112.add(__alloyId114);
            var __alloyId115 = Ti.UI.createLabel({
                top: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#434343",
                touchEnabled: false,
                font: {
                    fontSize: 14,
                    fontWeight: "bold"
                },
                left: 0,
                ellipsize: true,
                wordWrap: true,
                text: "undefined" != typeof __alloyId104.__transform["name"] ? __alloyId104.__transform["name"] : __alloyId104.get("name")
            });
            __alloyId111.add(__alloyId115);
            var __alloyId116 = Ti.UI.createView({
                left: 10,
                top: 0,
                width: Ti.UI.FILL,
                height: 40,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId108.add(__alloyId116);
            var __alloyId118 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                layout: "horizontal",
                left: 0
            });
            __alloyId116.add(__alloyId118);
            var __alloyId119 = Ti.UI.createLabel({
                top: 0,
                width: 20,
                height: 20,
                color: "#000",
                backgroundImage: "/images/head-category.png",
                left: 0
            });
            __alloyId118.add(__alloyId119);
            var __alloyId120 = Ti.UI.createLabel({
                top: 1,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#5E5E5E",
                font: {
                    fontSize: 14
                },
                touchEnabled: false,
                left: 5,
                text: "undefined" != typeof __alloyId104.__transform["category"] ? __alloyId104.__transform["category"] : __alloyId104.get("category")
            });
            __alloyId118.add(__alloyId120);
            var __alloyId122 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                layout: "horizontal",
                left: 40
            });
            __alloyId116.add(__alloyId122);
            var __alloyId123 = Ti.UI.createLabel({
                top: 0,
                width: 44,
                height: 44,
                color: "#000"
            });
            __alloyId122.add(__alloyId123);
            var __alloyId124 = Ti.UI.createLabel({
                top: 1,
                width: Ti.UI.SIE,
                height: Ti.UI.SIZE,
                color: "#fff",
                font: {
                    fontSize: 8
                }
            });
            __alloyId122.add(__alloyId124);
            var __alloyId126 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.SIZE,
                layout: "horizontal",
                left: 40
            });
            __alloyId116.add(__alloyId126);
            var __alloyId127 = Ti.UI.createLabel({
                top: 0,
                width: 44,
                height: 44,
                color: "#000"
            });
            __alloyId126.add(__alloyId127);
            var __alloyId128 = Ti.UI.createLabel({
                top: 1,
                width: Ti.UI.SIE,
                height: Ti.UI.SIZE,
                color: "#fff",
                font: {
                    fontSize: 8
                }
            });
            __alloyId126.add(__alloyId128);
            var __alloyId130 = Ti.UI.createView({
                height: 1,
                top: 0,
                touchEnabled: false,
                backgroundColor: "#D6D6D6",
                width: "100%"
            });
            __alloyId108.add(__alloyId130);
            var __alloyId131 = Ti.UI.createView({
                height: 45,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId108.add(__alloyId131);
            var __alloyId132 = Ti.UI.createLabel({
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
            __alloyId131.add(__alloyId132);
            var __alloyId133 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "/images/kernel-finance-off.png"
            });
            __alloyId131.add(__alloyId133);
            var __alloyId134 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "/images/kernel-document-off.png"
            });
            __alloyId131.add(__alloyId134);
            var __alloyId135 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                left: 15,
                bottom: 10,
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                center: 45,
                backgroundImage: "/images/kernel-note-off.png"
            });
            __alloyId131.add(__alloyId135);
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
                backgroundImage: "/images/kernel-link-off.png"
            });
            __alloyId131.add(__alloyId136);
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
                backgroundImage: "/images/kernel-comunicazioni-off.png"
            });
            __alloyId131.add(__alloyId137);
            var __alloyId139 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                touchEnabled: false,
                layout: "horizontal",
                left: 5
            });
            __alloyId131.add(__alloyId139);
            var __alloyId141 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                left: 0,
                width: Ti.UI.FILL
            });
            __alloyId139.add(__alloyId141);
            var __alloyId142 = Ti.UI.createLabel({
                top: 10,
                width: Ti.UI.SIZE,
                height: 25,
                color: "#5EAEE3",
                right: 30,
                bottom: 10,
                text: "Show All"
            });
            __alloyId141.add(__alloyId142);
            var __alloyId143 = Ti.UI.createLabel({
                top: 10,
                width: 25,
                height: 25,
                color: "#000",
                right: 0,
                bottom: 10,
                backgroundImage: "/images/kernel-show-all.png",
                touchEnabled: false
            });
            __alloyId141.add(__alloyId143);
        }
        $.__views.timelineTable.setData(rows);
    }
    function showSpinner() {
        Alloy.Globals.showSpinner();
        theActionBar = $.win.activity.actionBar;
        if (void 0 != theActionBar) {
            theActionBar.displayHomeAsUp = false;
            theActionBar.setIcon("images/logo-test.png");
        }
    }
    function refreshTable() {
        showSpinner();
        populateTable();
    }
    function populateTable() {
        temp = [];
        timelineList.reset();
        net.getData(function(timelineData) {
            _.forEach(timelineData.data, function(value) {
                var aspectObj = {
                    evento: 0,
                    finance: 0,
                    documents: 0,
                    links: 0,
                    notes: 0
                };
                var creationDate = new Date(value.referenceTime);
                if (!_.isNull(value.location)) {
                    aspectObj.evento = 1;
                    var locationRow = " " + icons.map_marker + " " + value.location.name + " ";
                }
                if (!_.isNull(value.category)) var categoriaRow = value.category.name;
                _.isNull(value.aspects) || _.isUndefined(value.aspects) || _.forEach(value.aspects, function(obj) {
                    switch (obj.kind.code) {
                      case "CASHFLOWDATATYPE_CODE":
                        aspectObj.finance += 1;
                        break;

                      case "DOCUMENTDATATYPE_CODE":
                        aspectObj.documents += 1;
                        break;

                      case "NOTEDATATYPE_CODE":
                        aspectObj.notes += 1;
                        break;

                      case "LINKDATATYPE_CODE":
                        aspectObj.links += 1;
                    }
                });
                _.isNull(value.aspects) || _.isUndefined(value.aspects) ? "no aspects" : value.aspects;
                var timeline = Alloy.createModel("events", {
                    id: value.id,
                    name: value.name,
                    date: moment(value.referenceTime).fromNow(),
                    day: creationDate.getDate(),
                    month: creationDate.getCMonth().toUpperCase(),
                    category: categoriaRow,
                    location: locationRow,
                    aspects: icons.bar_chart_alt + " " + aspectObj.finance + "   " + icons.file_text_alt + " " + aspectObj.documents + "   " + icons.link + " " + aspectObj.links + "   " + icons.edit_sign + " " + aspectObj.notes
                });
                temp.push(timeline);
            });
            timelineList.add(temp.slice(0, 20));
        });
    }
    function lazyload(_evt) {
        if (_evt.firstVisibleItem + _evt.visibleItemCount == _evt.totalItemCount) {
            if (isLoading) return;
            isLoading = true;
            timelineList.reset(temp.slice(startIndex, startIndex + 50));
        }
    }
    function mostraDettaglioEvento(e) {
        try {
            showSpinner();
            var selEvent = timelineList.at(e.index).attributes;
            net.getPost(selEvent.id, function(postData) {
                Ti.API.info("DETTAGLIO POST: " + JSON.stringify(postData));
                Alloy.createController("dettaglio_post", postData).getView().open();
            });
        } catch (error) {
            Ti.App.fireEvent("loading_done");
            Ti.API.info("ERRORE: " + error);
        }
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("events");
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        exitOnClose: true,
        id: "win",
        title: "Diario"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    showSpinner ? $.__views.win.addEventListener("open", showSpinner) : __defers["$.__views.win!open!showSpinner"] = true;
    lazyload ? $.__views.win.addEventListener("scroll", lazyload) : __defers["$.__views.win!scroll!lazyload"] = true;
    $.__views.win.addEventListener("open", __alloyId103);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#transparent",
        bottom: 60,
        id: "timelineTable"
    });
    $.__views.win.add($.__views.timelineTable);
    var __alloyId144 = Alloy.Collections["events"] || events;
    __alloyId144.on("fetch destroy change add remove reset", __alloyId145);
    $.__views.bottomBar = Ti.UI.createView({
        backgroundColor: "#5EAEE3",
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
    $.__views.__alloyId146 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 0,
        id: "__alloyId146"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId146);
    refreshTable ? $.__views.__alloyId146.addEventListener("click", refreshTable) : __defers["$.__views.__alloyId146!click!refreshTable"] = true;
    $.__views.bottom_sync = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-refresh.png",
        left: 0,
        id: "bottom_sync"
    });
    $.__views.__alloyId146.add($.__views.bottom_sync);
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
    $.__views.__alloyId146.add($.__views.txt_sync);
    $.__views.__alloyId147 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId147"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId147);
    createNewPost ? $.__views.__alloyId147.addEventListener("click", createNewPost) : __defers["$.__views.__alloyId147!click!createNewPost"] = true;
    $.__views.bottom_new = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-new-post.png",
        left: 0,
        id: "bottom_new"
    });
    $.__views.__alloyId147.add($.__views.bottom_new);
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
    $.__views.__alloyId147.add($.__views.txt_new);
    $.__views.__alloyId148 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        id: "__alloyId148"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId148);
    $.__views.bottom_today = Ti.UI.createLabel({
        top: 0,
        width: 35,
        height: 35,
        color: "#000",
        backgroundImage: "/images/bottom-today.png",
        left: 0,
        id: "bottom_today"
    });
    $.__views.__alloyId148.add($.__views.bottom_today);
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
    $.__views.__alloyId148.add($.__views.txt_today);
    exports.destroy = function() {
        __alloyId144.off("fetch destroy change add remove reset", __alloyId145);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var startIndex = 0;
    var isLoading = false;
    var temp = [];
    var theActionBar = null;
    $.timelineTable.addEventListener("postlayout", function() {
        initialTableSize = $.timelineTable.rect.height;
    });
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var timelineList = Alloy.Collections.events;
    var net = require("net");
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
    populateTable();
    $.win.open();
    __defers["$.__views.win!open!showSpinner"] && $.__views.win.addEventListener("open", showSpinner);
    __defers["$.__views.win!scroll!lazyload"] && $.__views.win.addEventListener("scroll", lazyload);
    __defers["$.__views.mn_search!click!refreshTable"] && $.__views.mn_search.addEventListener("click", refreshTable);
    __defers["__alloyId106!click!mostraDettaglioEvento"] && __alloyId106.addEventListener("click", mostraDettaglioEvento);
    __defers["__alloyId108!swipe!slideRow"] && __alloyId108.addEventListener("swipe", slideRow);
    __defers["$.__views.__alloyId146!click!refreshTable"] && $.__views.__alloyId146.addEventListener("click", refreshTable);
    __defers["$.__views.__alloyId147!click!createNewPost"] && $.__views.__alloyId147.addEventListener("click", createNewPost);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;