function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function update(_message, _cancelable) {
        cancelable = _cancelable;
        $.progressIndicator.applyProperties({
            message: _message || L("loadingMessage", "Loading..."),
            cancelable: _.isFunction(cancelable)
        });
    }
    function onCancel() {
        cancelable();
        cancelable = null;
    }
    function show(_message, _cancelable) {
        update(_message, _cancelable);
        $.progressIndicator.show();
        hasFocus = true;
    }
    function hide() {
        $.progressIndicator.hide();
        hasFocus = false;
        cancelable = null;
    }
    new (require("alloy/widget"))("nl.fokkezb.loading");
    this.__widgetId = "nl.fokkezb.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "progress";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.progressIndicator = Ti.UI.Android.createProgressIndicator({
        message: L("loadingMessage", "Loading.."),
        cancelable: false,
        id: "progressIndicator"
    });
    $.__views.progressIndicator && $.addTopLevelView($.__views.progressIndicator);
    onCancel ? $.__views.progressIndicator.addEventListener("cancel", onCancel) : __defers["$.__views.progressIndicator!cancel!onCancel"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.show = show;
    $.update = update;
    $.hide = hide;
    Object.defineProperty($, "visible", {
        get: function() {
            return hasFocus;
        },
        set: function(visible) {
            return visible ? show() : hide();
        }
    });
    var cancelable = null;
    var hasFocus = false;
    !function(args) {
        update(args.message, args.cancelable);
    }(arguments[0] || {});
    __defers["$.__views.progressIndicator!cancel!onCancel"] && $.__views.progressIndicator.addEventListener("cancel", onCancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;