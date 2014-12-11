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
        $.view.update(_message, _cancelable);
        message = _message;
        cancelable = _cancelable;
    }
    function show() {
        $.view.show(message, cancelable);
        $.win.open();
    }
    function hide() {
        var close = function() {
            $.view.hide();
            $.win.close();
            cancelable = null;
        };
        if (false || isOpen) close(); else var interval = setInterval(function() {
            if (isOpen) {
                close();
                clearInterval(interval);
            }
        }, 100);
    }
    function onFocus() {
        hasFocus = true;
    }
    function onBlur() {
        hasFocus = false;
    }
    new (require("alloy/widget"))("nl.fokkezb.loading");
    this.__widgetId = "nl.fokkezb.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: null,
        opacity: 1,
        navBarHidden: true,
        modal: false,
        theme: "Theme.AppCompat.Translucent.NoTitleBar",
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    onFocus ? $.__views.win.addEventListener("focus", onFocus) : __defers["$.__views.win!focus!onFocus"] = true;
    onBlur ? $.__views.win.addEventListener("blur", onBlur) : __defers["$.__views.win!blur!onBlur"] = true;
    $.__views.view = Alloy.createWidget("nl.fokkezb.loading", "view", {
        id: "view",
        __parentSymbol: $.__views.win
    });
    $.__views.view.setParent($.__views.win);
    hide ? $.__views.view.on("cancel", hide) : __defers["$.__views.view!cancel!hide"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.update = update;
    $.show = show;
    $.hide = hide;
    Object.defineProperty($, "visible", {
        get: function() {
            return isOpen && hasFocus;
        },
        set: function(visible) {
            return visible ? show() : hide();
        }
    });
    var message;
    var cancelable;
    var isOpen = false;
    var hasFocus = false;
    !function(args) {
        $.loadingMask.addEventListener("androidback", function() {
            if (!_.isFunction(cancelable)) {
                if (true && "androidback" === e.type) {
                    var intent = Ti.Android.createIntent({
                        action: Ti.Android.ACTION_MAIN
                    });
                    intent.addCategory(Ti.Android.CATEGORY_HOME);
                    Ti.Android.currentActivity.startActivity(intent);
                }
                return;
            }
            $.view.cancel();
        });
        update(args.message, args.cancelable);
        $.win.addEventListener("open", function() {
            isOpen = true;
        });
        args = null;
    }(arguments[0] || {});
    __defers["$.__views.win!focus!onFocus"] && $.__views.win.addEventListener("focus", onFocus);
    __defers["$.__views.win!blur!onBlur"] && $.__views.win.addEventListener("blur", onBlur);
    __defers["$.__views.view!cancel!hide"] && $.__views.view.on("cancel", hide);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;