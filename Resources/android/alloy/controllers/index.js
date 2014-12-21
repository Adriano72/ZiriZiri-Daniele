function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function hideActionBar() {
        $.index.activity.actionBar.hide();
    }
    function manageRememberMe(e) {
        rememberMe = e.value;
    }
    function do_login() {
        $.username.value || "none";
        $.password.value || "none";
        Alloy.Globals.loading.show("Logging in...", false);
        ZZ.API.Core.Session.logIn({
            username: $.username.value,
            password: $.password.value
        }, _coreSessionLogInCallback, function(error) {
            alert("Username o password errati");
            Ti.API.error("ZZ.API.Core.Session.logIn error [error : " + error + "]");
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#8BC7F2",
        layout: "vertical",
        exitOnClose: true,
        navBarHidden: true,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    hideActionBar ? $.__views.index.addEventListener("open", hideActionBar) : __defers["$.__views.index!open!hideActionBar"] = true;
    $.__views.bigLogo = Ti.UI.createImageView({
        top: 40,
        image: "/images/bigLogo.png",
        height: 160,
        id: "bigLogo"
    });
    $.__views.index.add($.__views.bigLogo);
    $.__views.username = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        textAlign: "",
        top: 20,
        width: 330,
        height: 40,
        backgroundColor: "#fff",
        hintText: "Username or Email",
        borderRadius: 2,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "username",
        value: "rnduser_1418923442021"
    });
    $.__views.index.add($.__views.username);
    $.__views.__alloyId188 = Ti.UI.createView({
        top: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId188"
    });
    $.__views.index.add($.__views.__alloyId188);
    $.__views.password = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        textAlign: "",
        left: 0,
        width: 200,
        height: 40,
        backgroundColor: "#fff",
        hintText: "Password",
        passwordMask: true,
        borderRadius: 2,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "password",
        value: "password"
    });
    $.__views.__alloyId188.add($.__views.password);
    $.__views.btn_login = Ti.UI.createLabel({
        backgroundColor: "#4BAEE7",
        text: "LOGIN",
        textAlign: "center",
        left: 5,
        color: "#fff",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        width: 125,
        borderRadius: 2,
        height: 40,
        id: "btn_login"
    });
    $.__views.__alloyId188.add($.__views.btn_login);
    do_login ? $.__views.btn_login.addEventListener("click", do_login) : __defers["$.__views.btn_login!click!do_login"] = true;
    $.__views.__alloyId189 = Ti.UI.createView({
        top: 10,
        width: 330,
        height: Ti.UI.SIZE,
        id: "__alloyId189"
    });
    $.__views.index.add($.__views.__alloyId189);
    $.__views.remember = Ti.UI.createSwitch({
        color: "#fff",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        left: 0,
        height: 30,
        title: "Remember me",
        width: Ti.UI.SIZE,
        style: Titanium.UI.Android.SWITCH_STYLE_CHECKBOX,
        value: false,
        id: "remember"
    });
    $.__views.__alloyId189.add($.__views.remember);
    manageRememberMe ? $.__views.remember.addEventListener("change", manageRememberMe) : __defers["$.__views.remember!change!manageRememberMe"] = true;
    $.__views.forgotPassword = Ti.UI.createLabel({
        color: "#4BAEE7",
        right: 0,
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        text: "Forgot Password?",
        id: "forgotPassword"
    });
    $.__views.__alloyId189.add($.__views.forgotPassword);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rememberMe = false;
    Ti.API.info("PROP TIMELINE (Index CACHED): " + JSON.stringify(Ti.App.Properties.getObject("timelineProp")));
    if (Ti.App.Properties.getBool("authenticated", false)) {
        Ti.API.info("Already Authenticated!");
        {
            require("net");
        }
        var loadTabData = require("loadTabulatedData");
        loadTabData.loadTabData();
        _.isNull(Ti.App.Properties.getObject("timelineProp")) ? ZZ.API.Core.Posts.list(function(posts) {
            Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");
            Ti.App.Properties.setObject("timelineProp", posts);
            Alloy.createController("timeline_win").getView();
        }, function(error) {
            Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");
        }) : Alloy.createController("home").getView().open();
    } else {
        Ti.App.Properties.setObject("timelineProp", null);
        $.index.open();
    }
    var _coreSessionLogInCallback = function(user) {
        Ti.API.info("ZZ.API.Core.Session.logIn success [user : " + JSON.stringify(user) + "]");
        rememberMe && Ti.App.Properties.setBool("authenticated", true);
        require("net");
        var loadTabData = require("loadTabulatedData");
        loadTabData.loadTabData();
        _.isNull(Ti.App.Properties.getObject("timelineProp")) ? ZZ.API.Core.Posts.list(function(posts) {
            Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");
            Ti.App.Properties.setObject("timelineProp", posts);
            Alloy.Collections.Timeline.reset(posts);
            Alloy.createController("home").getView().open();
        }, function(error) {
            Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");
        }) : Alloy.createController("home").getView().open();
    };
    __defers["$.__views.index!open!hideActionBar"] && $.__views.index.addEventListener("open", hideActionBar);
    __defers["$.__views.btn_login!click!do_login"] && $.__views.btn_login.addEventListener("click", do_login);
    __defers["$.__views.remember!change!manageRememberMe"] && $.__views.remember.addEventListener("change", manageRememberMe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;