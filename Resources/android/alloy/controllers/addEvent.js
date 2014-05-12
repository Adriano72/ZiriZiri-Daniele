function Controller() {
    function __alloyId15() {
        $.__views.window.removeEventListener("open", __alloyId15);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId14 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/785-floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId14, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId14, Alloy.Android.menuItemCreateArgs));
            saveEvent ? $.__views.salva.addEventListener("click", saveEvent) : __defers["$.__views.salva!click!saveEvent"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function getLocation() {
        var u_location = require("getUserLocation");
        u_location.result(function(locationData) {
            location_result = locationData;
            $.location.value = locationData.address;
        });
    }
    function showDatePicker(e) {
        Alloy.createController("datePicker", function(p_data) {
            e.source.value = moment(p_data).format("LLL");
            e.source.dataRaw = moment(p_data);
        });
    }
    function saveEvent() {
        var retLocation = null;
        null != location_result && (retLocation = {
            name: $.location.value,
            description: $.location.value,
            latitude: location_result.latitude,
            longitude: location_result.longitude
        });
        args(retLocation, $.dataFrom.dataRaw, $.dataTo.dataRaw);
        $.window.close();
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
    $.__views.window.addEventListener("open", __alloyId15);
    var __alloyId16 = [];
    $.__views.__alloyId17 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/83-calendar.png",
        id: "__alloyId17"
    });
    __alloyId16.push($.__views.__alloyId17);
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
    $.__views.__alloyId17.add($.__views.dataFrom);
    showDatePicker ? $.__views.dataFrom.addEventListener("focus", showDatePicker) : __defers["$.__views.dataFrom!focus!showDatePicker"] = true;
    showDatePicker ? $.__views.dataFrom.addEventListener("click", showDatePicker) : __defers["$.__views.dataFrom!click!showDatePicker"] = true;
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/83-calendar.png",
        id: "__alloyId18"
    });
    __alloyId16.push($.__views.__alloyId18);
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
    $.__views.__alloyId18.add($.__views.dataTo);
    showDatePicker ? $.__views.dataTo.addEventListener("focus", showDatePicker) : __defers["$.__views.dataTo!focus!showDatePicker"] = true;
    showDatePicker ? $.__views.dataTo.addEventListener("click", showDatePicker) : __defers["$.__views.dataTo!click!showDatePicker"] = true;
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/74-location.png",
        id: "__alloyId19"
    });
    __alloyId16.push($.__views.__alloyId19);
    getLocation ? $.__views.__alloyId19.addEventListener("click", getLocation) : __defers["$.__views.__alloyId19!click!getLocation"] = true;
    $.__views.location = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        ellipsize: true,
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        autocorrect: false,
        height: Ti.UI.SIZE,
        hintText: "Posizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "location"
    });
    $.__views.__alloyId19.add($.__views.location);
    $.__views.newEventTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId16,
        id: "newEventTable"
    });
    $.__views.window.add($.__views.newEventTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    $.dataFrom.value = moment().format("LLL");
    $.dataFrom.dataRaw = moment();
    var location_result = null;
    __defers["$.__views.salva!click!saveEvent"] && $.__views.salva.addEventListener("click", saveEvent);
    __defers["$.__views.dataFrom!focus!showDatePicker"] && $.__views.dataFrom.addEventListener("focus", showDatePicker);
    __defers["$.__views.dataFrom!click!showDatePicker"] && $.__views.dataFrom.addEventListener("click", showDatePicker);
    __defers["$.__views.dataTo!focus!showDatePicker"] && $.__views.dataTo.addEventListener("focus", showDatePicker);
    __defers["$.__views.dataTo!click!showDatePicker"] && $.__views.dataTo.addEventListener("click", showDatePicker);
    __defers["$.__views.__alloyId19!click!getLocation"] && $.__views.__alloyId19.addEventListener("click", getLocation);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;