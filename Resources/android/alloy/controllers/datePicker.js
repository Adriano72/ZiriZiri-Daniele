function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "datePicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.pkrData = Ti.UI.createPicker({
        type: Ti.UI.PICKER_TYPE_DATE,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrData",
        selectionIndicator: "true"
    });
    $.__views.pkrData && $.addTopLevelView($.__views.pkrData);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.pkrData.minDate = new Date(2009, 0, 1);
    $.pkrData.maxDate = new Date(2014, 11, 31);
    $.pkrData.value = new Date();
    $.pkrData.showDatePickerDialog({
        value: new Date(2010, 8, 1),
        callback: function(e) {
            e.cancel ? Ti.API.info("User canceled dialog") : Ti.API.info("User selected date: " + e.value);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;