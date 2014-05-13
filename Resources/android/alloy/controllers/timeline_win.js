function Controller() {
    function __alloyId106() {
        $.__views.win.removeEventListener("open", __alloyId106);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId104 = {
                id: "scrivi",
                title: "Scrivi",
                icon: "/images/704-compose.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.scrivi = e.menu.add(_.pick(__alloyId104, Alloy.Android.menuItemCreateArgs));
            $.__views.scrivi.applyProperties(_.omit(__alloyId104, Alloy.Android.menuItemCreateArgs));
            createNewPost ? $.__views.scrivi.addEventListener("click", createNewPost) : __defers["$.__views.scrivi!click!createNewPost"] = true;
            var __alloyId105 = {
                id: "immagine",
                title: "Immagine",
                icon: "/images/713-refresh-1.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.immagine = e.menu.add(_.pick(__alloyId105, Alloy.Android.menuItemCreateArgs));
            $.__views.immagine.applyProperties(_.omit(__alloyId105, Alloy.Android.menuItemCreateArgs));
            refreshTable ? $.__views.immagine.addEventListener("click", refreshTable) : __defers["$.__views.immagine!click!refreshTable"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId122(e) {
        if (e && e.fromAdapter) return;
        __alloyId122.opts || {};
        var models = __alloyId121.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId107 = models[i];
            __alloyId107.__transform = {};
            var __alloyId109 = Ti.UI.createTableViewRow({
                className: "itemRow"
            });
            rows.push(__alloyId109);
            mostraDettaglioEvento ? __alloyId109.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId109!click!mostraDettaglioEvento"] = true;
            var __alloyId110 = Ti.UI.createView({
                top: 10,
                touchEnabled: false,
                layout: "vertical"
            });
            __alloyId109.add(__alloyId110);
            var __alloyId111 = Ti.UI.createView({
                top: 5,
                left: 5,
                right: 5,
                height: 75,
                touchEnabled: false,
                layout: "horizontal"
            });
            __alloyId110.add(__alloyId111);
            var __alloyId112 = Ti.UI.createImageView({
                image: "/images/android-robot.jpg",
                touchEnabled: false,
                width: 70,
                height: 70
            });
            __alloyId111.add(__alloyId112);
            var __alloyId113 = Ti.UI.createView({
                layout: "vertical",
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                touchEnabled: false,
                left: 5
            });
            __alloyId111.add(__alloyId113);
            var __alloyId114 = Ti.UI.createView({
                touchEnabled: false,
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL
            });
            __alloyId113.add(__alloyId114);
            var __alloyId115 = Ti.UI.createLabel({
                top: 0,
                width: "70%",
                height: Ti.UI.SIZE,
                color: "#2C3E52",
                touchEnabled: false,
                font: {
                    fontSize: 14,
                    fontWeight: "bold"
                },
                ellipsize: true,
                wordWrap: false,
                left: 5,
                text: "undefined" != typeof __alloyId107.__transform["name"] ? __alloyId107.__transform["name"] : __alloyId107.get("name")
            });
            __alloyId114.add(__alloyId115);
            var __alloyId116 = Ti.UI.createLabel({
                top: 0,
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#2C3E52",
                touchEnabled: false,
                font: {
                    fontSize: 12
                },
                textAlign: "right",
                wordWrap: false,
                right: 5,
                text: "undefined" != typeof __alloyId107.__transform["date"] ? __alloyId107.__transform["date"] : __alloyId107.get("date")
            });
            __alloyId114.add(__alloyId116);
            var __alloyId117 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.SIZE,
                height: 18,
                color: "#5E5E5E",
                touchEnabled: false,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: 12
                },
                backgroundColor: "#E3E3E3",
                left: 5,
                text: "undefined" != typeof __alloyId107.__transform["category"] ? __alloyId107.__transform["category"] : __alloyId107.get("category")
            });
            __alloyId113.add(__alloyId117);
            var __alloyId118 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.FILL,
                height: 18,
                color: "#5E5E5E",
                touchEnabled: false,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: 12
                },
                backgroundColor: "#E3E3E3",
                wordWrap: false,
                ellipsize: true,
                left: 5,
                text: "undefined" != typeof __alloyId107.__transform["location"] ? __alloyId107.__transform["location"] : __alloyId107.get("location")
            });
            __alloyId113.add(__alloyId118);
            var __alloyId119 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                touchEnabled: false,
                top: 5,
                bottom: 5,
                right: 5,
                left: 5
            });
            __alloyId110.add(__alloyId119);
            var __alloyId120 = Ti.UI.createLabel({
                top: 5,
                width: Ti.UI.FILL,
                height: Ti.UI.SIZE,
                color: "#5E5E5E",
                touchEnabled: false,
                font: {
                    fontFamily: "AppIcons",
                    fontSize: "18dp"
                },
                left: 5,
                text: "undefined" != typeof __alloyId107.__transform["aspects"] ? __alloyId107.__transform["aspects"] : __alloyId107.get("aspects")
            });
            __alloyId119.add(__alloyId120);
        }
        $.__views.timelineTable.setData(rows);
    }
    function showSpinner() {
        Alloy.Globals.showSpinner();
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
                var creationDate = new Date(value.referenceTime);
                if (!_.isNull(value.location)) var locationRow = " " + icons.map_marker + " " + value.location.name + " ";
                if (!_.isNull(value.category)) var categoriaRow = " " + icons.tag + " " + value.category.name + " ";
                var aspectObj = {
                    finance: 0,
                    documents: 0,
                    links: 0,
                    notes: 0
                };
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
    $.__views.win.addEventListener("open", __alloyId106);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#BFBFBF",
        id: "timelineTable"
    });
    $.__views.win.add($.__views.timelineTable);
    var __alloyId121 = Alloy.Collections["events"] || events;
    __alloyId121.on("fetch destroy change add remove reset", __alloyId122);
    exports.destroy = function() {
        __alloyId121.off("fetch destroy change add remove reset", __alloyId122);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var startIndex = 0;
    var isLoading = false;
    var temp = [];
    $.timelineTable.addEventListener("postlayout", function() {
        initialTableSize = $.timelineTable.rect.height;
    });
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var timelineList = Alloy.Collections.events;
    var net = require("net");
    populateTable();
    $.win.open();
    __defers["$.__views.win!open!showSpinner"] && $.__views.win.addEventListener("open", showSpinner);
    __defers["$.__views.win!scroll!lazyload"] && $.__views.win.addEventListener("scroll", lazyload);
    __defers["$.__views.scrivi!click!createNewPost"] && $.__views.scrivi.addEventListener("click", createNewPost);
    __defers["$.__views.immagine!click!refreshTable"] && $.__views.immagine.addEventListener("click", refreshTable);
    __defers["__alloyId109!click!mostraDettaglioEvento"] && __alloyId109.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;