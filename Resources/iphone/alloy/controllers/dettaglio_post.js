function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function openEvent() {
        theActionBar = $.win.activity.actionBar;
        $.win.activity.invalidateOptionsMenu();
        theActionBar = $.win.activity.actionBar;
        if (void 0 != theActionBar) {
            theActionBar.displayHomeAsUp = true;
            theActionBar.setIcon("images/logo-test.png");
            theActionBar.onHomeIconItemSelected = function() {
                $.win.close({
                    animate: true
                });
            };
        }
    }
    function editPost() {
        Alloy.createController("editPost", {
            existingPost: true,
            _callback: function() {
                modJson = Alloy.Models.Post.toJSON();
                Alloy.Models.Post.set("categoria", _.isNull(modJson.category) ? "" : modJson.category.name, {
                    silent: true
                });
                Alloy.Models.Post.trigger("change");
                Alloy.Globals.loading.show();
                net.editPost(Alloy.Models.Post, function(post_id) {
                    Ti.API.info("ID POST UPDATATO: " + post_id);
                    $.win.close();
                    args(true);
                    alert("Post updatato");
                });
            }
        }).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dettaglio_post";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        title: "Dettaglio Post"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.postTable = Ti.UI.createScrollView({
        layout: "vertical",
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
    $.__views.__alloyId99 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId99"
    });
    $.__views.postTable.add($.__views.__alloyId99);
    editPost ? $.__views.__alloyId99.addEventListener("click", editPost) : __defers["$.__views.__alloyId99!click!editPost"] = true;
    $.__views.topWrapper = Ti.UI.createView({
        height: Ti.UI.SIZE,
        left: 10,
        right: 10,
        top: 10,
        layout: "horizontal",
        id: "topWrapper"
    });
    $.__views.__alloyId99.add($.__views.topWrapper);
    $.__views.postIcon = Ti.UI.createImageView({
        left: 0,
        top: 0,
        touchEnabled: false,
        width: 70,
        height: 70,
        borderRadius: 4,
        id: "postIcon",
        image: "Post.catImage"
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
        id: "date",
        text: "Post.tmp_referenceTime"
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
        id: "rating_1",
        image: "Post.rating_1"
    });
    $.__views.ratingContainer.add($.__views.rating_1);
    $.__views.rating_2 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_2",
        image: "Post.rating_2"
    });
    $.__views.ratingContainer.add($.__views.rating_2);
    $.__views.rating_3 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_3",
        image: "Post.rating_3"
    });
    $.__views.ratingContainer.add($.__views.rating_3);
    $.__views.rating_4 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_4",
        image: "Post.rating_4"
    });
    $.__views.ratingContainer.add($.__views.rating_4);
    $.__views.rating_5 = Ti.UI.createImageView({
        width: 15,
        height: 15,
        left: 5,
        top: 0,
        id: "rating_5",
        image: "Post.rating_5"
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
        id: "name",
        text: "Post.name"
    });
    $.__views.innerWrapper.add($.__views.name);
    $.__views.middleWrapper = Ti.UI.createView({
        left: 10,
        top: 10,
        bottom: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        id: "middleWrapper"
    });
    $.__views.__alloyId99.add($.__views.middleWrapper);
    $.__views.__alloyId100 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 0,
        id: "__alloyId100"
    });
    $.__views.middleWrapper.add($.__views.__alloyId100);
    $.__views.cat_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-category.png",
        left: 0,
        id: "cat_icon"
    });
    $.__views.__alloyId100.add($.__views.cat_icon);
    $.__views.category = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 14
        },
        height: 18,
        color: "#999",
        left: 5,
        id: "category",
        text: "Post.categoria"
    });
    $.__views.__alloyId100.add($.__views.category);
    $.__views.__alloyId101 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId101"
    });
    $.__views.middleWrapper.add($.__views.__alloyId101);
    $.__views.tag_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-tag.png",
        left: 0,
        id: "tag_icon"
    });
    $.__views.__alloyId101.add($.__views.tag_icon);
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
        text: "Post.tag"
    });
    $.__views.__alloyId101.add($.__views.tags);
    $.__views.__alloyId102 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        touchEnabled: false,
        layout: "horizontal",
        left: 50,
        id: "__alloyId102"
    });
    $.__views.middleWrapper.add($.__views.__alloyId102);
    $.__views.stories_icon = Ti.UI.createLabel({
        width: 20,
        height: 20,
        touchEnabled: false,
        backgroundImage: "/images/head-story.png",
        left: 0,
        id: "stories_icon"
    });
    $.__views.__alloyId102.add($.__views.stories_icon);
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
    $.__views.__alloyId102.add($.__views.stories);
    $.__views.aspectsEventsWrapper = Ti.UI.createView({
        top: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        left: 5,
        right: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        id: "aspectsEventsWrapper"
    });
    $.__views.postTable.add($.__views.aspectsEventsWrapper);
    $.__views.aspectsCashflowWrapper = Ti.UI.createView({
        top: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        left: 5,
        right: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        id: "aspectsCashflowWrapper"
    });
    $.__views.postTable.add($.__views.aspectsCashflowWrapper);
    $.__views.aspectsDocumentWrapper = Ti.UI.createView({
        top: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        left: 5,
        right: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        touchEnabled: false,
        id: "aspectsDocumentWrapper"
    });
    $.__views.postTable.add($.__views.aspectsDocumentWrapper);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var net = require("net");
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var modJson = Alloy.Models.Post.toJSON();
    Ti.API.info("MODEL: " + JSON.stringify(Alloy.Models.Post));
    Ti.API.info("NULL CATEG: " + _.isNull(Alloy.Models.Post.get("category")));
    Alloy.Models.Post.set("tmp_referenceTime", moment(Alloy.Models.Post.get("referenceTime")).fromNow(), {
        silent: true
    });
    Alloy.Models.Post.set("categoria", _.isNull(modJson.category) ? "" : modJson.category.name, {
        silent: true
    });
    var rating = Alloy.Models.Post.get("rating");
    Alloy.Models.Post.set("catImage", _.isNull(modJson.category.code) ? "/images/android-robot.jpg" : "/images/" + modJson.category.code.slice(0, 2) + ".png");
    Alloy.Models.Post.set("rating_1", rating > 0 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_2", rating > 1 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_3", rating > 2 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_4", rating > 3 ? "/images/star-small.png" : "");
    Alloy.Models.Post.set("rating_5", rating > 4 ? "/images/star-small.png" : "");
    var aspects = modJson.aspects;
    Ti.API.info("ASPETTI JSON: " + JSON.stringify(aspects));
    Alloy.Models.Post.trigger("change");
    var aspettoEvento = _.filter(aspects, function(item) {
        return "EVENTDATATYPE_CODE" == item.kind.code;
    });
    Alloy.Collections.aspettoEvento.reset(aspettoEvento);
    aspettoEvento.length > 0 && $.aspectsEventsWrapper.add(Alloy.createController("briefEvento").getView());
    var allAspettiCashflow = _.filter(aspects, function(item) {
        return "CASHFLOWDATATYPE_CODE" == item.kind.code;
    });
    Alloy.Collections.aspettiCashflow.reset(allAspettiCashflow);
    allAspettiCashflow.length > 0 && $.aspectsCashflowWrapper.add(Alloy.createController("briefCashflow").getView());
    var allAspettiDocuments = _.filter(aspects, function(item) {
        return "FILEDOCUMENTDATATYPE_CODE" == item.kind.code;
    });
    Alloy.Collections.aspettiDocument.reset(allAspettiDocuments);
    allAspettiDocuments.length > 0 && $.aspectsDocumentWrapper.add(Alloy.createController("briefDocument").getView());
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
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.__alloyId99!click!editPost"] && $.__views.__alloyId99.addEventListener("click", editPost);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;