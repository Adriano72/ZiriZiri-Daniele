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
        var user_name = $.username.value || "none";
        var user_password = $.password.value || "none";
        var dataJson = {};
        Ti.API.info("Username: " + user_name);
        Ti.API.info("Password: " + user_password);
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            Ti.API.info("********** FRM XHR: " + JSON.stringify(json));
            if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
                rememberMe && Ti.App.Properties.setBool("authenticated", true);
                Ti.App.Properties.setString("sessionId", json.data.sessionId);
                Ti.API.info("SESSIONE: " + Ti.App.Properties.getString("sessionId", 0));
                var net = require("net");
                var loadTabData = require("loadTabulatedData");
                loadTabData.loadTabData();
                Alloy.Globals.loading.show("Sincronizzazione...", false);
                _.isNull(Ti.App.Properties.getObject("timelineProp")) ? net.getData(0, 25, function(timeline_obj) {
                    Ti.App.Properties.setObject("timelineProp", timeline_obj.data);
                    Alloy.createController("timeline_win").getView();
                }) : Alloy.createController("timeline_win").getView();
            } else alert("Username o password errati");
        };
        xhr.onerror = function() {
            Ti.API.error("ERRORE DO LOGIN: " + this.status + " - " + this.statusText);
        };
        xhr.open("POST", Alloy.Globals.baseUrl + "/session/login/" + user_name + "?_type=JSON");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        dataJson.data = user_password;
        Ti.API.info("DATA JSON: " + JSON.stringify(dataJson));
        xhr.send(JSON.stringify(dataJson));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
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
        id: "username"
    });
    $.__views.index.add($.__views.username);
    $.__views.__alloyId126 = Ti.UI.createView({
        top: 10,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId126"
    });
    $.__views.index.add($.__views.__alloyId126);
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
        id: "password"
    });
    $.__views.__alloyId126.add($.__views.password);
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
    $.__views.__alloyId126.add($.__views.btn_login);
    do_login ? $.__views.btn_login.addEventListener("click", do_login) : __defers["$.__views.btn_login!click!do_login"] = true;
    $.__views.__alloyId127 = Ti.UI.createView({
        top: 10,
        width: 330,
        height: Ti.UI.SIZE,
        id: "__alloyId127"
    });
    $.__views.index.add($.__views.__alloyId127);
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
    $.__views.__alloyId127.add($.__views.remember);
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
    $.__views.__alloyId127.add($.__views.forgotPassword);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var rememberMe = false;
    Ti.API.info("PROP TIMELINE (Index CACHED): " + JSON.stringify(Ti.App.Properties.getObject("timelineProp")));
    if (Ti.App.Properties.getBool("authenticated", false)) {
        Ti.API.info("Already Authenticated!");
        var net = require("net");
        var loadTabData = require("loadTabulatedData");
        loadTabData.loadTabData();
        _.isNull(Ti.App.Properties.getObject("timelineProp")) ? net.getData(0, 25, function(timeline_obj) {
            Ti.API.info("RETURN CODE: " + timeline_obj.type.code);
            Ti.App.Properties.setObject("timelineProp", timeline_obj.data);
            Ti.API.info("PROP TIMELINE (Index): " + JSON.stringify(Ti.App.Properties.getObject("timelineProp")));
            Alloy.createController("timeline_win").getView();
        }) : Alloy.createController("timeline_win").getView();
    } else {
        Ti.App.Properties.setObject("timelineProp", null);
        $.index.open();
    }
    __defers["$.__views.index!open!hideActionBar"] && $.__views.index.addEventListener("open", hideActionBar);
    __defers["$.__views.btn_login!click!do_login"] && $.__views.btn_login.addEventListener("click", do_login);
    __defers["$.__views.remember!change!manageRememberMe"] && $.__views.remember.addEventListener("change", manageRememberMe);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;