function Controller() {
    function __alloyId43() {
        $.__views.win.removeEventListener("open", __alloyId43);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId41 = {
                id: "mn_notify",
                title: "Scrivi"
            };
            $.__views.mn_notify = e.menu.add(_.pick(__alloyId41, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_notify.applyProperties(_.omit(__alloyId41, Alloy.Android.menuItemCreateArgs));
            var __alloyId42 = {
                id: "mn_search",
                title: "Immagine"
            };
            $.__views.mn_search = e.menu.add(_.pick(__alloyId42, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_search.applyProperties(_.omit(__alloyId42, Alloy.Android.menuItemCreateArgs));
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
        backgroundColor: "#F9F9F9",
        id: "win",
        title: "Post"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.win.addEventListener("open", __alloyId43);
    var __alloyId44 = [];
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        className: "itemRow",
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#F9F9F9",
        borderColor: "#CCCCCC",
        height: Ti.UI.SIZE,
        id: "__alloyId45"
    });
    __alloyId44.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        touchEnabled: false,
        layout: "vertical",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.topWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 10,
        touchEnabled: false,
        layout: "horizontal",
        id: "topWrapper"
    });
    $.__views.__alloyId46.add($.__views.topWrapper);
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
    $.__views.ratingContainer = Ti.UI.createView({
        touchEnabled: false,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        width: 100,
        left: 20,
        top: 0,
        id: "ratingContainer"
    });
    $.__views.date_rating.add($.__views.ratingContainer);
    $.__views.rating_1 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_1"
    });
    $.__views.ratingContainer.add($.__views.rating_1);
    $.__views.rating_2 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_2"
    });
    $.__views.ratingContainer.add($.__views.rating_2);
    $.__views.rating_3 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_3"
    });
    $.__views.ratingContainer.add($.__views.rating_3);
    $.__views.rating_4 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_4"
    });
    $.__views.ratingContainer.add($.__views.rating_4);
    $.__views.rating_5 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_5"
    });
    $.__views.ratingContainer.add($.__views.rating_5);
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
    $.__views.__alloyId46.add($.__views.middleWrapper);
    $.__views.__alloyId47 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 0,
        id: "__alloyId47"
    });
    $.__views.middleWrapper.add($.__views.__alloyId47);
    $.__views.cat_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-category.png",
        left: 0,
        id: "cat_icon"
    });
    $.__views.__alloyId47.add($.__views.cat_icon);
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
    $.__views.__alloyId47.add($.__views.category);
    $.__views.__alloyId48 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId48"
    });
    $.__views.middleWrapper.add($.__views.__alloyId48);
    $.__views.tag_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-tag.png",
        left: 0,
        id: "tag_icon"
    });
    $.__views.__alloyId48.add($.__views.tag_icon);
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
        id: "tags"
    });
    $.__views.__alloyId48.add($.__views.tags);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId49"
    });
    $.__views.middleWrapper.add($.__views.__alloyId49);
    $.__views.stories_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-story.png",
        left: 0,
        id: "stories_icon"
    });
    $.__views.__alloyId49.add($.__views.stories_icon);
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
    $.__views.__alloyId49.add($.__views.stories);
    $.__views.aspectsWrapper = Ti.UI.createView({
        top: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "vertical",
        id: "aspectsWrapper"
    });
    $.__views.__alloyId46.add($.__views.aspectsWrapper);
    $.__views.postTable = Ti.UI.createTableView({
        separatorColor: "#transparent",
        data: __alloyId44,
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
    var __alloyId50 = function() {
        $.date.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["referenceTime"] : Alloy.Models.Post.get("referenceTime");
        $.date.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["referenceTime"] : Alloy.Models.Post.get("referenceTime");
        $.rating_1.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_1"] : Alloy.Models.Post.get("rating_1");
        $.rating_1.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_1"] : Alloy.Models.Post.get("rating_1");
        $.rating_2.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_2"] : Alloy.Models.Post.get("rating_2");
        $.rating_2.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_2"] : Alloy.Models.Post.get("rating_2");
        $.rating_3.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_3"] : Alloy.Models.Post.get("rating_3");
        $.rating_3.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_3"] : Alloy.Models.Post.get("rating_3");
        $.rating_4.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_4"] : Alloy.Models.Post.get("rating_4");
        $.rating_4.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_4"] : Alloy.Models.Post.get("rating_4");
        $.rating_5.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_5"] : Alloy.Models.Post.get("rating_5");
        $.rating_5.image = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["rating_5"] : Alloy.Models.Post.get("rating_5");
        $.name.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["name"] : Alloy.Models.Post.get("name");
        $.name.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["name"] : Alloy.Models.Post.get("name");
        $.category.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["categoria"] : Alloy.Models.Post.get("categoria");
        $.category.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["categoria"] : Alloy.Models.Post.get("categoria");
        $.tags.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["tag"] : Alloy.Models.Post.get("tag");
        $.tags.text = _.isFunction(Alloy.Models.Post.transform) ? Alloy.Models.Post.transform()["tag"] : Alloy.Models.Post.get("tag");
    };
    Alloy.Models.Post.on("fetch change destroy", __alloyId50);
    exports.destroy = function() {
        Alloy.Models.Post.off("fetch change destroy", __alloyId50);
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
    var rating = Alloy.Models.Post.get("rating");
    Alloy.Models.Post.set("rating_1", rating > 0 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_2", rating > 1 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_3", rating > 2 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_4", rating > 3 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_5", rating > 4 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("tag", _.isNull(modJson.tags) ? "" : modJson.tags[0].name);
    var aspects = modJson.aspects;
    Ti.API.info("ASPETTI JSON: " + JSON.stringify(aspects));
    Alloy.Models.Post.trigger("change");
    _.filter(aspects, function(item) {
        return "EVENTDATATYPE_CODE" == item.kind.code;
    });
    var allAspettiCashflow = _.filter(aspects, function(item) {
        return "CASHFLOWDATATYPE_CODE" == item.kind.code;
    });
    Alloy.Collections.aspettiCashflow = new Backbone.Collection();
    Alloy.Collections.aspettiCashflow.reset(allAspettiCashflow);
    allAspettiCashflow.length > 0 && $.aspectsWrapper.add(Alloy.createController("briefCashflow").getView());
    _.filter(aspects, function(item) {
        return "FILEDOCUMENTDATATYPE_CODE" == item.kind.code;
    });
    _.filter(aspects, function(item) {
        return "NOTEDATATYPE_CODE" == item.kind.code;
    });
    _.filter(aspects, function(item) {
        return "FILELINKDATATYPE_CODE" == item.kind.code;
    });
    _.filter(aspects, function(item) {
        return "COMMUNICATIONDATATYPE_CODE" == item.kind.code;
    });
    $.win.open();
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;