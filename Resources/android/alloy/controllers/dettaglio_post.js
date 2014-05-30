function Controller() {
    function __alloyId33() {
        $.__views.win.removeEventListener("open", __alloyId33);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId31 = {
                id: "mn_notify",
                title: "Scrivi"
            };
            $.__views.mn_notify = e.menu.add(_.pick(__alloyId31, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_notify.applyProperties(_.omit(__alloyId31, Alloy.Android.menuItemCreateArgs));
            var __alloyId32 = {
                id: "mn_search",
                title: "Immagine"
            };
            $.__views.mn_search = e.menu.add(_.pick(__alloyId32, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_search.applyProperties(_.omit(__alloyId32, Alloy.Android.menuItemCreateArgs));
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dettaglio_post";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "win",
        title: "Post"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.win.addEventListener("open", __alloyId33);
    var __alloyId34 = [];
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        className: "itemRow",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        height: Ti.UI.SIZE,
        id: "__alloyId35"
    });
    __alloyId34.push($.__views.__alloyId35);
    $.__views.topWrapper = Ti.UI.createView({
        id: "topWrapper"
    });
    $.__views.__alloyId35.add($.__views.topWrapper);
    $.__views.postIcon = Ti.UI.createImageView({
        id: "postIcon"
    });
    $.__views.topWrapper.add($.__views.postIcon);
    $.__views.innerWrapper = Ti.UI.createView({
        id: "innerWrapper"
    });
    $.__views.topWrapper.add($.__views.innerWrapper);
    $.__views.date_rating = Ti.UI.createView({
        id: "date_rating"
    });
    $.__views.innerWrapper.add($.__views.date_rating);
    $.__views.date = Ti.UI.createLabel({
        id: "date"
    });
    $.__views.date_rating.add($.__views.date);
    $.__views.rating = Ti.UI.createLabel({
        id: "rating",
        text: "********"
    });
    $.__views.date_rating.add($.__views.rating);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontFamily: "Rosario-Regular",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        color: "#2C3E52",
        left: 5,
        top: 5,
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.innerWrapper.add($.__views.name);
    $.__views.postTable = Ti.UI.createTableView({
        data: __alloyId34,
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
    $.__views.detailHeader = Ti.UI.createView({
        layout: "horizontal",
        top: 5,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "detailHeader"
    });
    $.__views.win.add($.__views.detailHeader);
    $.__views.dateBox = Ti.UI.createView({
        width: 50,
        height: 60,
        left: 5,
        top: 5,
        backgroundColor: "#CC3939",
        layout: "vertical",
        id: "dateBox"
    });
    $.__views.detailHeader.add($.__views.dateBox);
    $.__views.dayBox = Ti.UI.createLabel({
        width: 50,
        height: 40,
        top: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "dayBox"
    });
    $.__views.dateBox.add($.__views.dayBox);
    $.__views.monthBox = Ti.UI.createLabel({
        width: 50,
        height: 20,
        top: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontFamily: "AppIcons",
            fontSize: 14
        },
        backgroundColor: "#E0E0E0",
        id: "monthBox"
    });
    $.__views.dateBox.add($.__views.monthBox);
    $.__views.headerBox = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 100,
        layout: "vertical",
        left: 5,
        top: 0,
        id: "headerBox"
    });
    $.__views.detailHeader.add($.__views.headerBox);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontFamily: "Rosario-Regular",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        color: "#2C3E52",
        left: 5,
        top: 5,
        id: "name"
    });
    $.__views.headerBox.add($.__views.name);
    $.__views.category = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "AppIcons",
            fontSize: 12
        },
        backgroundColor: "#E3E3E3",
        height: 18,
        wordWrap: false,
        width: Ti.UI.SIZE,
        color: "#5E5E5E",
        left: 5,
        top: 5,
        id: "category"
    });
    $.__views.headerBox.add($.__views.category);
    $.__views.location = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "AppIcons",
            fontSize: 12
        },
        backgroundColor: "#E3E3E3",
        height: 18,
        wordWrap: false,
        ellipsize: true,
        width: Ti.UI.SIZE,
        color: "#5E5E5E",
        left: 5,
        top: 5,
        id: "location"
    });
    $.__views.headerBox.add($.__views.location);
    $.__views.bottom_container = Ti.UI.createView({
        backgroundColor: "#F2F2F2",
        top: 100,
        layout: "vertical",
        id: "bottom_container"
    });
    $.__views.win.add($.__views.bottom_container);
    $.__views.mapview = Alloy.Globals.Map.createView({
        height: 130,
        top: 5,
        width: Ti.UI.FILL,
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.bottom_container.add($.__views.mapview);
    $.__views.aspectsTable = Ti.UI.createTableView({
        top: 5,
        bottom: 5,
        separatorColor: "transparent",
        id: "aspectsTable"
    });
    $.__views.bottom_container.add($.__views.aspectsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("ARGS: " + JSON.stringify(args));
    Alloy.Models.singlePost = Alloy.Collections.Timeline.at(args);
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;