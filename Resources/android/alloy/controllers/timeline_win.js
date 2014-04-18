function Controller() {
    function __alloyId88() {
        $.__views.win.removeEventListener("open", __alloyId88);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId86 = {
                id: "scrivi",
                title: "Scrivi",
                icon: "/images/704-compose.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.scrivi = e.menu.add(_.pick(__alloyId86, Alloy.Android.menuItemCreateArgs));
            $.__views.scrivi.applyProperties(_.omit(__alloyId86, Alloy.Android.menuItemCreateArgs));
            createNewPost ? $.__views.scrivi.addEventListener("click", createNewPost) : __defers["$.__views.scrivi!click!createNewPost"] = true;
            var __alloyId87 = {
                id: "immagine",
                title: "Immagine",
                icon: "/images/713-refresh-1.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.immagine = e.menu.add(_.pick(__alloyId87, Alloy.Android.menuItemCreateArgs));
            $.__views.immagine.applyProperties(_.omit(__alloyId87, Alloy.Android.menuItemCreateArgs));
            refreshTable ? $.__views.immagine.addEventListener("click", refreshTable) : __defers["$.__views.immagine!click!refreshTable"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId104(e) {
        if (e && e.fromAdapter) return;
        __alloyId104.opts || {};
        var models = __alloyId103.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId89 = models[i];
            __alloyId89.__transform = {};
            var __alloyId91 = Ti.UI.createTableViewRow({
                className: "itemRow"
            });
            rows.push(__alloyId91);
            mostraDettaglioEvento ? __alloyId91.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId91!click!mostraDettaglioEvento"] = true;
            var __alloyId92 = Ti.UI.createView({
                top: 10,
                layout: "vertical"
            });
            __alloyId91.add(__alloyId92);
            var __alloyId93 = Ti.UI.createView({
                top: 5,
                left: 5,
                right: 5,
                height: 75,
                layout: "horizontal"
            });
            __alloyId92.add(__alloyId93);
            var __alloyId94 = Ti.UI.createImageView({
                image: "/images/android-robot.jpg",
                width: 70,
                height: 70
            });
            __alloyId93.add(__alloyId94);
            var __alloyId95 = Ti.UI.createView({
                layout: "vertical",
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                left: 5
            });
            __alloyId93.add(__alloyId95);
            var __alloyId96 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL
            });
            __alloyId95.add(__alloyId96);
            var __alloyId97 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId89.__transform["name"] ? __alloyId89.__transform["name"] : __alloyId89.get("name")
            });
            __alloyId96.add(__alloyId97);
            var __alloyId98 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId89.__transform["date"] ? __alloyId89.__transform["date"] : __alloyId89.get("date")
            });
            __alloyId96.add(__alloyId98);
            var __alloyId99 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId89.__transform["category"] ? __alloyId89.__transform["category"] : __alloyId89.get("category")
            });
            __alloyId95.add(__alloyId99);
            var __alloyId100 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId89.__transform["location"] ? __alloyId89.__transform["location"] : __alloyId89.get("location")
            });
            __alloyId95.add(__alloyId100);
            var __alloyId101 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                top: 5,
                bottom: 5,
                right: 5,
                left: 5
            });
            __alloyId92.add(__alloyId101);
            var __alloyId102 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId89.__transform["aspects"] ? __alloyId89.__transform["aspects"] : __alloyId89.get("aspects")
            });
            __alloyId101.add(__alloyId102);
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
        showSpinner();
        var selEvent = timelineList.at(e.index).attributes;
        net.getPost(selEvent.id, function(postData) {
            Alloy.createController("dettaglio_post", postData).getView().open();
        });
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
    $.__views.win.addEventListener("open", __alloyId88);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#BFBFBF",
        id: "timelineTable"
    });
    $.__views.win.add($.__views.timelineTable);
    var __alloyId103 = Alloy.Collections["events"] || events;
    __alloyId103.on("fetch destroy change add remove reset", __alloyId104);
    exports.destroy = function() {
        __alloyId103.off("fetch destroy change add remove reset", __alloyId104);
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
    __defers["__alloyId91!click!mostraDettaglioEvento"] && __alloyId91.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;