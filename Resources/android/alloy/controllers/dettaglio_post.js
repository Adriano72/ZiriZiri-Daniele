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
    var __alloyId34 = [];
    $.__views.__alloyId35 = Ti.UI.createTableViewRow({
        className: "itemRow",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        height: 170,
        id: "__alloyId35"
    });
    __alloyId34.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        touchEnabled: false,
        layout: "vertical",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.topWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 10,
        touchEnabled: false,
        layout: "horizontal",
        id: "topWrapper"
    });
    $.__views.__alloyId36.add($.__views.topWrapper);
    $.__views.postIcon = Ti.UI.createImageView({
        left: 0,
        top: 0,
        image: "/images/android-robot.jpg",
        touchEnabled: false,
        width: 70,
        height: 70,
        borderRadius: 4,
        id: "postIcon"
    });
    $.__views.topWrapper.add($.__views.postIcon);
    $.__views.innerWrapper = Ti.UI.createView({
        left: 10,
        top: 0,
        width: Ti.UI.SIZE,
        height: 70,
        touchEnabled: false,
        layout: "vertical",
        id: "innerWrapper"
    });
    $.__views.topWrapper.add($.__views.innerWrapper);
    $.__views.date_rating = Ti.UI.createView({
        top: 0,
        left: 0,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "date_rating"
    });
    $.__views.innerWrapper.add($.__views.date_rating);
    $.__views.date = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        color: "#999",
        textAlign: "right",
        wordWrap: false,
        left: 0,
        top: 0,
        id: "date"
    });
    $.__views.date_rating.add($.__views.date);
    $.__views.rating = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontSize: 12
        },
        color: "#999999",
        height: Ti.UI.SIZE,
        textAlign: "right",
        left: 20,
        top: 0,
        id: "rating",
        text: "*****"
    });
    $.__views.date_rating.add($.__views.rating);
    $.__views.name = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        height: 100,
        width: "70%",
        left: 0,
        ellipsize: true,
        wordWrap: true,
        top: 0,
        id: "name"
    });
    $.__views.innerWrapper.add($.__views.name);
    $.__views.middleWrapper = Ti.UI.createView({
        left: 10,
        top: 10,
        width: Ti.UI.FILL,
        height: 40,
        touchEnabled: false,
        layout: "horizontal",
        id: "middleWrapper"
    });
    $.__views.__alloyId36.add($.__views.middleWrapper);
    $.__views.__alloyId37 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 0,
        id: "__alloyId37"
    });
    $.__views.middleWrapper.add($.__views.__alloyId37);
    $.__views.cat_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-category.png",
        left: 0,
        id: "cat_icon"
    });
    $.__views.__alloyId37.add($.__views.cat_icon);
    $.__views.category = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        height: 18,
        color: "#999",
        left: 5,
        id: "category"
    });
    $.__views.__alloyId37.add($.__views.category);
    $.__views.__alloyId38 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId38"
    });
    $.__views.middleWrapper.add($.__views.__alloyId38);
    $.__views.tag_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-tag.png",
        left: 0,
        id: "tag_icon"
    });
    $.__views.__alloyId38.add($.__views.tag_icon);
    $.__views.tags = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        height: 18,
        width: Ti.UI.SIZE,
        color: "#999",
        left: 5,
        id: "tags",
        text: "tags"
    });
    $.__views.__alloyId38.add($.__views.tags);
    $.__views.__alloyId39 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId39"
    });
    $.__views.middleWrapper.add($.__views.__alloyId39);
    $.__views.stories_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-story.png",
        left: 0,
        id: "stories_icon"
    });
    $.__views.__alloyId39.add($.__views.stories_icon);
    $.__views.stories = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        height: 18,
        width: Ti.UI.SIZE,
        color: "#999",
        left: 5,
        id: "stories",
        text: "storie"
    });
    $.__views.__alloyId39.add($.__views.stories);
    $.__views.postTable = Ti.UI.createTableView({
        data: __alloyId34,
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
    var __alloyId40 = function() {
        $.date.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["referenceTime"] : Alloy.Models.Post.get("referenceTime");
        $.date.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["referenceTime"] : Alloy.Models.Post.get("referenceTime");
        $.name.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["name"] : Alloy.Models.Post.get("name");
        $.name.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["name"] : Alloy.Models.Post.get("name");
        $.category.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["categoria"] : Alloy.Models.Post.get("categoria");
        $.category.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["categoria"] : Alloy.Models.Post.get("categoria");
    };
    Alloy.Models.Post.on("fetch change destroy", __alloyId40);
    exports.destroy = function() {
        Alloy.Models.Post.off("fetch change destroy", __alloyId40);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    Ti.API.info("MODEL: " + JSON.stringify(Alloy.Models.Post));
    Ti.API.info("NULL CATEG: " + _.isNull(Alloy.Models.Post.get("category")));
    var modJson = Alloy.Models.Post.toJSON();
    Ti.API.info("MODEL JSON: " + JSON.stringify(modJson));
    Ti.API.info("MODEL CATEGORY: " + modJson.category.name);
    Alloy.Models.Post.set("referenceTime", moment(Alloy.Models.Post.get("referenceTime")).fromNow(), {
        silent: true
    });
    Alloy.Models.Post.set("categoria", _.isNull(modJson.category) ? "" : modJson.category.name, {
        silent: true
    });
    Ti.API.info("TRASF CATEGORY: " + Alloy.Models.Post.get("categoria"));
    Alloy.Models.Post.trigger("change");
    $.win.open();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;