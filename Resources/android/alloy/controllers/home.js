function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function goTimeline() {
        Alloy.createController("timeline_win").getView();
    }
    function manageClose() {
        var activity = Titanium.Android.currentActivity;
        activity.finish();
    }
    function createNewPost() {
        Alloy.createController("newPost", function() {
            Alloy.Globals.loading.hide();
        }).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
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
    $.__views.shortcutsWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        top: 0,
        id: "shortcutsWin"
    });
    $.__views.shortcutsWin && $.addTopLevelView($.__views.shortcutsWin);
    manageClose ? $.__views.shortcutsWin.addEventListener("android:back", manageClose) : __defers["$.__views.shortcutsWin!android:back!manageClose"] = true;
    $.__views.quickPhoto = Ti.UI.createView({
        top: 0,
        height: Alloy.Globals.deviceHeightHalf,
        width: Alloy.Globals.menuButtonsWidth,
        left: 0,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "50%"
            },
            endPoint: {
                x: "100%",
                y: "50%"
            },
            colors: [ {
                color: "#295F95",
                offset: 0
            }, {
                color: "#23477D",
                offset: 1
            } ]
        },
        id: "quickPhoto"
    });
    $.__views.shortcutsWin.add($.__views.quickPhoto);
    $.__views.cameraIcon = Ti.UI.createImageView({
        image: "/images/addpicture.png",
        height: 40,
        id: "cameraIcon"
    });
    $.__views.quickPhoto.add($.__views.cameraIcon);
    $.__views.quickPost = Ti.UI.createView({
        top: 0,
        height: Alloy.Globals.deviceHeightHalf,
        width: Alloy.Globals.menuButtonsWidth,
        right: 0,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "100%",
                y: "50%"
            },
            endPoint: {
                x: "0%",
                y: "50%"
            },
            colors: [ {
                color: "#295F95",
                offset: 0
            }, {
                color: "#23477D",
                offset: 1
            } ]
        },
        id: "quickPost"
    });
    $.__views.shortcutsWin.add($.__views.quickPost);
    createNewPost ? $.__views.quickPost.addEventListener("click", createNewPost) : __defers["$.__views.quickPost!click!createNewPost"] = true;
    $.__views.postIcon = Ti.UI.createImageView({
        image: "/images/addpost.png",
        height: 40,
        id: "postIcon"
    });
    $.__views.quickPost.add($.__views.postIcon);
    var __alloyId198 = [];
    $.__views.timelineRow = Ti.UI.createTableViewRow({
        color: "#000",
        title: "Timeline",
        height: 40,
        id: "timelineRow"
    });
    __alloyId198.push($.__views.timelineRow);
    goTimeline ? $.__views.timelineRow.addEventListener("click", goTimeline) : __defers["$.__views.timelineRow!click!goTimeline"] = true;
    $.__views.picturesRow = Ti.UI.createTableViewRow({
        color: "#000",
        title: "Pictures",
        height: 40,
        id: "picturesRow"
    });
    __alloyId198.push($.__views.picturesRow);
    $.__views.settingsRow = Ti.UI.createTableViewRow({
        color: "#000",
        title: "Settings",
        height: 40,
        id: "settingsRow"
    });
    __alloyId198.push($.__views.settingsRow);
    $.__views.__alloyId197 = Ti.UI.createTableView({
        top: Alloy.Globals.deviceHeightHalf,
        data: __alloyId198,
        id: "__alloyId197"
    });
    $.__views.shortcutsWin.add($.__views.__alloyId197);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.shortcutsWin!android:back!manageClose"] && $.__views.shortcutsWin.addEventListener("android:back", manageClose);
    __defers["$.__views.quickPost!click!createNewPost"] && $.__views.quickPost.addEventListener("click", createNewPost);
    __defers["$.__views.timelineRow!click!goTimeline"] && $.__views.timelineRow.addEventListener("click", goTimeline);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;