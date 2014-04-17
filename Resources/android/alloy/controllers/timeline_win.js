function Controller() {
    function __alloyId89() {
        $.__views.win.removeEventListener("open", __alloyId89);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId86 = {
                id: "scrivi",
                title: "Scrivi",
                icon: "/images/216-compose.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.scrivi = e.menu.add(_.pick(__alloyId86, Alloy.Android.menuItemCreateArgs));
            $.__views.scrivi.applyProperties(_.omit(__alloyId86, Alloy.Android.menuItemCreateArgs));
            createNewPost ? $.__views.scrivi.addEventListener("click", createNewPost) : __defers["$.__views.scrivi!click!createNewPost"] = true;
            var __alloyId87 = {
                id: "immagine",
                title: "Immagine",
                icon: "/images/121-landscape.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.immagine = e.menu.add(_.pick(__alloyId87, Alloy.Android.menuItemCreateArgs));
            $.__views.immagine.applyProperties(_.omit(__alloyId87, Alloy.Android.menuItemCreateArgs));
            populateTable ? $.__views.immagine.addEventListener("click", populateTable) : __defers["$.__views.immagine!click!populateTable"] = true;
            var __alloyId88 = {
                id: "Foto",
                title: "Foto",
                icon: "/images/86-camera.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.Foto = e.menu.add(_.pick(__alloyId88, Alloy.Android.menuItemCreateArgs));
            $.__views.Foto.applyProperties(_.omit(__alloyId88, Alloy.Android.menuItemCreateArgs));
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId105(e) {
        if (e && e.fromAdapter) return;
        __alloyId105.opts || {};
        var models = __alloyId104.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId90 = models[i];
            __alloyId90.__transform = {};
            var __alloyId92 = Ti.UI.createTableViewRow({
                className: "itemRow"
            });
            rows.push(__alloyId92);
            mostraDettaglioEvento ? __alloyId92.addEventListener("click", mostraDettaglioEvento) : __defers["__alloyId92!click!mostraDettaglioEvento"] = true;
            var __alloyId93 = Ti.UI.createView({
                top: 10,
                layout: "vertical"
            });
            __alloyId92.add(__alloyId93);
            var __alloyId94 = Ti.UI.createView({
                top: 5,
                left: 5,
                right: 5,
                height: 75,
                layout: "horizontal"
            });
            __alloyId93.add(__alloyId94);
            var __alloyId95 = Ti.UI.createImageView({
                image: "/images/android-robot.jpg",
                width: 70,
                height: 70
            });
            __alloyId94.add(__alloyId95);
            var __alloyId96 = Ti.UI.createView({
                layout: "vertical",
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                left: 5
            });
            __alloyId94.add(__alloyId96);
            var __alloyId97 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL
            });
            __alloyId96.add(__alloyId97);
            var __alloyId98 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId90.__transform["name"] ? __alloyId90.__transform["name"] : __alloyId90.get("name")
            });
            __alloyId97.add(__alloyId98);
            var __alloyId99 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId90.__transform["date"] ? __alloyId90.__transform["date"] : __alloyId90.get("date")
            });
            __alloyId97.add(__alloyId99);
            var __alloyId100 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId90.__transform["category"] ? __alloyId90.__transform["category"] : __alloyId90.get("category")
            });
            __alloyId96.add(__alloyId100);
            var __alloyId101 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId90.__transform["location"] ? __alloyId90.__transform["location"] : __alloyId90.get("location")
            });
            __alloyId96.add(__alloyId101);
            var __alloyId102 = Ti.UI.createView({
                height: Ti.UI.SIZE,
                width: Ti.UI.FILL,
                top: 5,
                bottom: 5,
                right: 5,
                left: 5
            });
            __alloyId93.add(__alloyId102);
            var __alloyId103 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId90.__transform["aspects"] ? __alloyId90.__transform["aspects"] : __alloyId90.get("aspects")
            });
            __alloyId102.add(__alloyId103);
        }
        $.__views.timelineTable.setData(rows);
    }
    function showSpinner() {
        Alloy.Globals.showSpinner.openSpinner();
    }
    function populateTable() {
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
        Alloy.createController("newPost").getView();
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
    $.__views.win.addEventListener("open", __alloyId89);
    $.__views.timelineTable = Ti.UI.createTableView({
        separatorColor: "#BFBFBF",
        id: "timelineTable"
    });
    $.__views.win.add($.__views.timelineTable);
    var __alloyId104 = Alloy.Collections["events"] || events;
    __alloyId104.on("fetch destroy change add remove reset", __alloyId105);
    exports.destroy = function() {
        __alloyId104.off("fetch destroy change add remove reset", __alloyId105);
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
    __defers["$.__views.immagine!click!populateTable"] && $.__views.immagine.addEventListener("click", populateTable);
    __defers["__alloyId92!click!mostraDettaglioEvento"] && __alloyId92.addEventListener("click", mostraDettaglioEvento);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;