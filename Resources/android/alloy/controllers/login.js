function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;