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
    function __alloyId45(e) {
        if (e && e.fromAdapter) return;
        __alloyId45.opts || {};
        var models = __alloyId44.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId34 = models[i];
            __alloyId34.__transform = {};
            var __alloyId36 = Ti.UI.createTableViewRow({
                className: "itemRow",
                borderRadius: 5,
                borderWidth: 1,
                borderColor: "#CCCCCC",
                height: Ti.UI.SIZE
            });
            rows.push(__alloyId36);
            var __alloyId37 = Ti.UI.createView({});
            __alloyId36.add(__alloyId37);
            var __alloyId38 = Ti.UI.createImageView({});
            __alloyId37.add(__alloyId38);
            var __alloyId39 = Ti.UI.createView({});
            __alloyId37.add(__alloyId39);
            var __alloyId40 = Ti.UI.createView({});
            __alloyId39.add(__alloyId40);
            var __alloyId41 = Ti.UI.createLabel({});
            __alloyId40.add(__alloyId41);
            var __alloyId42 = Ti.UI.createLabel({
                text: "********"
            });
            __alloyId40.add(__alloyId42);
            var __alloyId43 = Ti.UI.createLabel({
                font: {
                    fontFamily: "Rosario-Regular",
                    fontSize: "18dp",
                    fontWeight: "bold"
                },
                height: Ti.UI.SIZE,
                color: "#2C3E52",
                left: 5,
                top: 5
            });
            __alloyId39.add(__alloyId43);
        }
        $.__views.postTable.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dettaglio_post";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
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
    $.__views.postTable = Ti.UI.createTableView({
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
    var __alloyId44 = Alloy.Collections["Post"] || Post;
    __alloyId44.on("fetch destroy change add remove reset", __alloyId45);
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
    var __alloyId46 = function() {
        $.name.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["name"] : Alloy.Models.Post.get("name");
        $.name.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["name"] : Alloy.Models.Post.get("name");
    };
    Alloy.Models.Post.on("fetch change destroy", __alloyId46);
    exports.destroy = function() {
        __alloyId44.off("fetch destroy change add remove reset", __alloyId45);
        Alloy.Models.Post.off("fetch change destroy", __alloyId46);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("ARGS: " + JSON.stringify(args));
    Alloy.Models.Post = Alloy.Collections.Timeline.at(args);
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;