function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "timePicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.pkrTime = Ti.UI.createPicker({
        id: "pkrTime",
        selectionIndicator: "true"
    });
    $.__views.pkrTime && $.addTopLevelView($.__views.pkrTime);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.pkrTime.showTimePickerDialog({
        value: new Date(),
        callback: function(e) {
            if (e.cancel) Ti.API.info("User canceled dialog"); else {
                args(e.value);
                Ti.API.info("User selected date: " + e.value);
            }
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;