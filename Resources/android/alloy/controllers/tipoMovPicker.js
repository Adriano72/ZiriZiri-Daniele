function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tipoMovPicker";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.pkrData.showTipoMovPickerDialog({
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