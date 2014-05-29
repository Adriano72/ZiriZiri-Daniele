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
            if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
                Ti.App.Properties.setBool("authenticated", true);
                Ti.App.Properties.setInt("sessionId", json.data.sessionId);
                Ti.API.info("SESSIONE: " + Ti.App.Properties.getInt("sessionId", 0));
                Alloy.Globals.loading.show("Sincronizzazione...", false);
                _.isNull(Ti.App.Properties.getObject("timelineProp")) && net.getData(0, 0, function(timeline_obj) {
                    Ti.API.info("RETURN CODE: " + timeline_obj.type.code);
                    Ti.App.Properties.setObject("timelineProp", timeline_obj);
                    Ti.API.info("OBJ_TMLINE: " + Ti.App.Properties.getObject("timelineProp"));
                    Alloy.createController("timeline_win").getView().open();
                });
                $.index.close();
            } else alert("Username o password errati");
        };
        xhr.onerror = function() {
            Ti.API.error(this.status + " - " + this.statusText);
        };
        xhr.open("POST", Alloy.Globals.baseUrl + "/zz/api/v01/session/login/" + user_name + "?_type=JSON");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(user_password);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.username = Ti.UI.createTextField({
        borderColor: "#000000",
        textAlign: "",
        color: "#336699",
        top: 20,
        width: 250,
        height: Ti.UI.SIZE,
        backgroundColor: "#C8DDE8",
        hintText: "User name",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "username"
    });
    $.__views.index.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        borderColor: "#000000",
        textAlign: "",
        color: "#336699",
        top: 10,
        width: 250,
        height: Ti.UI.SIZE,
        backgroundColor: "#C8DDE8",
        hintText: "Password",
        passwordMask: true,
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "password"
    });
    $.__views.index.add($.__views.password);
    $.__views.btn_login = Ti.UI.createButton({
        title: "Login",
        top: 20,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18
        },
        width: Ti.UI.SIZE,
        borderRadius: 5,
        height: Ti.UI.SIZE,
        id: "btn_login"
    });
    $.__views.index.add($.__views.btn_login);
    do_login ? $.__views.btn_login.addEventListener("click", do_login) : __defers["$.__views.btn_login!click!do_login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var net = require("net");
    if (Ti.App.Properties.getBool("authenticated", false)) {
        Ti.API.info("Already Authenticated!");
        _.isNull(Ti.App.Properties.getObject("timelineProp")) && net.getData(0, 0, function(timeline_obj) {
            Ti.API.info("RETURN CODE: " + timeline_obj.type.code);
            Ti.App.Properties.setObject("timelineProp", timeline_obj);
            Ti.API.info("OBJ_TMLINE: " + Ti.App.Properties.getObject("timelineProp"));
        });
        Alloy.createController("timeline_win").getView();
    } else $.index.open();
    __defers["$.__views.btn_login!click!do_login"] && $.__views.btn_login.addEventListener("click", do_login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;