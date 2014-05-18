function Controller() {
    function getLocation() {
        Alloy.createController("getLocation", function(locationData) {
            location_result = locationData;
            $.location.text = locationData.address;
        }).getView().open();
    }
    function showDatePicker(e) {
        Alloy.createController("datePicker", function(p_data) {
            e.source.value = moment(p_data).format("LLL");
            e.source.dataRaw = moment(p_data);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addEvent";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuovo Evento"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    var __alloyId10 = [];
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/calendar.png",
        id: "__alloyId11"
    });
    __alloyId10.push($.__views.__alloyId11);
    $.__views.dataFrom = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        editable: false,
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "dataFrom",
        dataRaw: ""
    });
    $.__views.__alloyId11.add($.__views.dataFrom);
    showDatePicker ? $.__views.dataFrom.addEventListener("focus", showDatePicker) : __defers["$.__views.dataFrom!focus!showDatePicker"] = true;
    showDatePicker ? $.__views.dataFrom.addEventListener("click", showDatePicker) : __defers["$.__views.dataFrom!click!showDatePicker"] = true;
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/calendar.png",
        id: "__alloyId12"
    });
    __alloyId10.push($.__views.__alloyId12);
    $.__views.dataTo = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        editable: false,
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "dataTo",
        dataRaw: ""
    });
    $.__views.__alloyId12.add($.__views.dataTo);
    showDatePicker ? $.__views.dataTo.addEventListener("focus", showDatePicker) : __defers["$.__views.dataTo!focus!showDatePicker"] = true;
    showDatePicker ? $.__views.dataTo.addEventListener("click", showDatePicker) : __defers["$.__views.dataTo!click!showDatePicker"] = true;
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/location.png",
        id: "__alloyId13"
    });
    __alloyId10.push($.__views.__alloyId13);
    getLocation ? $.__views.__alloyId13.addEventListener("click", getLocation) : __defers["$.__views.__alloyId13!click!getLocation"] = true;
    $.__views.location = Ti.UI.createLabel({
        borderColor: "#000000",
        color: "#336699",
        ellipsize: true,
        wordWrap: false,
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        autocorrect: false,
        height: 70,
        text: "    Posizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "location"
    });
    $.__views.__alloyId13.add($.__views.location);
    $.__views.newEventTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId10,
        id: "newEventTable"
    });
    $.__views.window.add($.__views.newEventTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    $.dataFrom.value = moment().format("LLL");
    $.dataFrom.dataRaw = moment();
    var location_result = null;
    __defers["$.__views.dataFrom!focus!showDatePicker"] && $.__views.dataFrom.addEventListener("focus", showDatePicker);
    __defers["$.__views.dataFrom!click!showDatePicker"] && $.__views.dataFrom.addEventListener("click", showDatePicker);
    __defers["$.__views.dataTo!focus!showDatePicker"] && $.__views.dataTo.addEventListener("focus", showDatePicker);
    __defers["$.__views.dataTo!click!showDatePicker"] && $.__views.dataTo.addEventListener("click", showDatePicker);
    __defers["$.__views.__alloyId13!click!getLocation"] && $.__views.__alloyId13.addEventListener("click", getLocation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;