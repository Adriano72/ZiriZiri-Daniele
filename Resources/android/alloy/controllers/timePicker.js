function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timePicker";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.picker = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_TIME,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "picker",
        selectionIndicator: true
    });
    $.__views.picker && $.addTopLevelView($.__views.picker);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    var bug_flag = 0;
    $.picker.showTimePickerDialog({
        value: new Date(),
        callback: function(e) {
            if (e.cancel) Ti.API.info("User canceled dialog"); else if (0 == bug_flag) {
                bug_flag = 1;
                var soloData = moment(args.par_data).format("YYYY-MM-DD");
                var soloOra = moment(e.value).format("HH:mm:ss");
                var dataCompleta = soloData.toString() + "T" + soloOra.toString();
                var finalData = moment(dataCompleta);
                args._callback(finalData);
            }
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;