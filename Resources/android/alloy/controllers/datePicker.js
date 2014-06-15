function Controller() {
    function showTimePicker(sel_data) {
        Alloy.createController("timePicker", {
            par_data: sel_data,
            _callback: function(p_data) {
                Ti.API.info("FINAL DATE TIME: " + p_data);
                args._callback(p_data);
            }
        });
    }
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
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    var bug_flag = 0;
    $.pkrData.showDatePickerDialog({
        value: new Date(),
        callback: function(e) {
            if (e.cancel) Ti.API.info("User canceled dialog"); else if (0 == bug_flag) {
                bug_flag = 1;
                if (args.onlyDate) {
                    var soloData = moment(e.value).format("YYYY-MM-DD");
                    var dataCompleta = soloData.toString();
                    args._callback(dataCompleta);
                } else showTimePicker(e.value);
            }
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;