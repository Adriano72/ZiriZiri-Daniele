function Controller() {
    function showDatePicker() {
        Alloy.createController("datePicker").getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newPost";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newPost = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        title: "Nuovo Post",
        id: "newPost"
    });
    $.__views.newPost && $.addTopLevelView($.__views.newPost);
    var __alloyId0 = [];
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "row"
    });
    __alloyId0.push($.__views.row);
    $.__views.titolo = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Titolo",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "titolo"
    });
    $.__views.row.add($.__views.titolo);
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "row",
        leftImage: "/images/259-list.png"
    });
    __alloyId0.push($.__views.row);
    $.__views.pkrCategoria = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrCategoria",
        selectionIndicator: "true"
    });
    $.__views.row.add($.__views.pkrCategoria);
    $.__views.data = Ti.UI.createTableViewRow({
        id: "data",
        leftImage: "/images/83-calendar.png"
    });
    __alloyId0.push($.__views.data);
    $.__views.postDate = Ti.UI.createTextField({
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
        id: "postDate"
    });
    $.__views.data.add($.__views.postDate);
    showDatePicker ? $.__views.postDate.addEventListener("click", showDatePicker) : __defers["$.__views.postDate!click!showDatePicker"] = true;
    showDatePicker ? $.__views.postDate.addEventListener("focus", showDatePicker) : __defers["$.__views.postDate!focus!showDatePicker"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "row",
        leftImage: "/images/74-location.png"
    });
    __alloyId0.push($.__views.row);
    $.__views.location = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        ellipsize: true,
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Posizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "location"
    });
    $.__views.row.add($.__views.location);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        bottom: 5,
        separatorColor: "transparent",
        data: __alloyId0,
        id: "newPostTable"
    });
    $.__views.newPost.add($.__views.newPostTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var u_location = require("getUserLocation");
    u_location.result(function(locationData) {
        $.location.value = locationData.address;
        Ti.API.info("RESULT LOCATION: " + JSON.stringify(locationData.address));
    });
    $.postDate.value = moment().format("LL");
    rowsCat = [ Ti.UI.createPickerRow({
        title: "Selezionare una categoria",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsCat.push(pkrRow);
    });
    $.pkrCategoria.add(rowsCat);
    __defers["$.__views.postDate!click!showDatePicker"] && $.__views.postDate.addEventListener("click", showDatePicker);
    __defers["$.__views.postDate!focus!showDatePicker"] && $.__views.postDate.addEventListener("focus", showDatePicker);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;