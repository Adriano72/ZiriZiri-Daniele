function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showIndicator(e) {
        $.spinner.show();
        Ti.App.addEventListener("loading_done", function() {
            setTimeout(function() {
                $.spinner.hide();
                e.source.close();
            }, 500);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "activityIndicator";
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
    $.__views.activityIndicator = Ti.UI.createWindow({
        opacity: .8,
        backgroundColor: "#000000",
        navBarHidden: "true",
        id: "activityIndicator"
    });
    $.__views.activityIndicator && $.addTopLevelView($.__views.activityIndicator);
    showIndicator ? $.__views.activityIndicator.addEventListener("open", showIndicator) : __defers["$.__views.activityIndicator!open!showIndicator"] = true;
    $.__views.spinner = Ti.UI.createActivityIndicator({
        id: "spinner",
        message: "  Loading..."
    });
    $.__views.activityIndicator.add($.__views.spinner);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.activityIndicator!open!showIndicator"] && $.__views.activityIndicator.addEventListener("open", showIndicator);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;