function Controller() {
    function do_login() {
        var user_name = $.username.value || "none";
        var user_password = $.password.value || "none";
        Ti.API.info("Username: " + user_name);
        Ti.API.info("Password: " + user_password);
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            Ti.API.info("********** FRM XHR: " + JSON.stringify(json));
            '"SUCCESS"' == JSON.stringify(json.type.code) ? $.login_win.close() : alert("Username o password errati");
        };
        xhr.onerror = function() {
            Ti.API.error(this.status + " - " + this.statusText);
        };
        xhr.open("POST", "https://demo.ziriziri.com/cxf/session/session/login/" + user_name + "?_type=JSON");
        xhr.send(user_password);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login_win = Ti.UI.createWindow({
        id: "login_win",
        backgroundColor: "white",
        layout: "vertical"
    });
    $.__views.login_win && $.addTopLevelView($.__views.login_win);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#000000",
        textAlign: "",
        color: "#336699",
        top: "10",
        width: "250",
        height: Ti.UI.SIZE,
        hintText: "User name"
    });
    $.__views.login_win.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        width: "250",
        height: Ti.UI.SIZE,
        hintText: "Password",
        passwordMask: "true"
    });
    $.__views.login_win.add($.__views.password);
    $.__views.btn_login = Ti.UI.createButton({
        id: "btn_login",
        title: "Login",
        top: "20",
        width: Ti.UI.SIZE,
        height: "80"
    });
    $.__views.login_win.add($.__views.btn_login);
    do_login ? $.__views.btn_login.addEventListener("click", do_login) : __defers["$.__views.btn_login!click!do_login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.btn_login!click!do_login"] && $.__views.btn_login.addEventListener("click", do_login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;