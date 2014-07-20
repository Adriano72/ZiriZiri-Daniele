function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function getLocation() {
        Alloy.createController("getLocation", function(locationData) {
            location_result = locationData;
            $.location.text = locationData.address;
            Ti.API.info("LOCATION DATA: " + JSON.stringify(location_result));
        }).getView().open();
    }
    function showDatePicker(e) {
        Ti.API.info("SOURCE CLICK: " + JSON.stringify(e));
        Alloy.createController("datePicker", {
            onlyDate: false,
            _callback: function(p_data) {
                e.source.text = moment(p_data).format("LLL");
                e.source.dataRaw = moment(p_data);
                Ti.API.info("DATARAW: " + e.source.dataRaw);
            }
        });
    }
    function toggleScadStrutt() {
        scadenzaStrutturale = !scadenzaStrutturale;
        $.ovalSwitchScadStrutt.image = scadenzaStrutturale ? "/images/oval-switch-on.png" : "/images/oval-switch-off.png";
        Ti.API.info("SCAD STRUTT FLAG: " + scadenzaStrutturale);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addEvent";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        title: "Nuovo Evento"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId41 = [];
    $.__views.__alloyId42 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId42"
    });
    __alloyId41.push($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId43.add($.__views.leftSubWrapper);
    $.__views.labelInizioEvento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Inizio Evento",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "labelInizioEvento"
    });
    $.__views.leftSubWrapper.add($.__views.labelInizioEvento);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId43.add($.__views.rightSubWrapper);
    $.__views.pkrDataInizioEvento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "pkrDataInizioEvento",
        dataRaw: ""
    });
    $.__views.rightSubWrapper.add($.__views.pkrDataInizioEvento);
    showDatePicker ? $.__views.pkrDataInizioEvento.addEventListener("click", showDatePicker) : __defers["$.__views.pkrDataInizioEvento!click!showDatePicker"] = true;
    $.__views.__alloyId45 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId45"
    });
    __alloyId41.push($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId46"
    });
    $.__views.__alloyId45.add($.__views.__alloyId46);
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId46.add($.__views.leftSubWrapper);
    $.__views.labelFineEvento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Fine Evento",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "labelFineEvento"
    });
    $.__views.leftSubWrapper.add($.__views.labelFineEvento);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        left: 0,
        backgroundColor: "#CCCCCC",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.rightSubWrapper = Ti.UI.createView({
        width: Ti.UI.FILL,
        layout: "horizontal",
        left: 0,
        id: "rightSubWrapper"
    });
    $.__views.__alloyId46.add($.__views.rightSubWrapper);
    $.__views.pkrDataFineEvento = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        color: "#444",
        id: "pkrDataFineEvento",
        dataRaw: ""
    });
    $.__views.rightSubWrapper.add($.__views.pkrDataFineEvento);
    showDatePicker ? $.__views.pkrDataFineEvento.addEventListener("click", showDatePicker) : __defers["$.__views.pkrDataFineEvento!click!showDatePicker"] = true;
    $.__views.__alloyId48 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId48"
    });
    __alloyId41.push($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.addPeopleImage = Ti.UI.createImageView({
        width: 40,
        image: "/images/people.png",
        top: 10,
        bottom: 5,
        left: 2,
        id: "addPeopleImage"
    });
    $.__views.__alloyId49.add($.__views.addPeopleImage);
    $.__views.addPeople = Ti.UI.createTextField({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#FFF",
        hintText: "Add People",
        id: "addPeople"
    });
    $.__views.__alloyId49.add($.__views.addPeople);
    $.__views.__alloyId50 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId50"
    });
    __alloyId41.push($.__views.__alloyId50);
    getLocation ? $.__views.__alloyId50.addEventListener("click", getLocation) : __defers["$.__views.__alloyId50!click!getLocation"] = true;
    $.__views.__alloyId51 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.locationImage = Ti.UI.createImageView({
        width: 35,
        image: "/images/location-pin.png",
        top: 7,
        bottom: 5,
        left: 2,
        id: "locationImage"
    });
    $.__views.__alloyId51.add($.__views.locationImage);
    $.__views.location = Ti.UI.createLabel({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#FFF",
        wordWrap: false,
        ellipsize: true,
        text: "Location",
        hintText: "Location",
        id: "location"
    });
    $.__views.__alloyId51.add($.__views.location);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId52"
    });
    __alloyId41.push($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        height: 40,
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        layout: "horizontal",
        id: "__alloyId53"
    });
    $.__views.__alloyId52.add($.__views.__alloyId53);
    toggleScadStrutt ? $.__views.__alloyId53.addEventListener("click", toggleScadStrutt) : __defers["$.__views.__alloyId53!click!toggleScadStrutt"] = true;
    $.__views.leftSubWrapper = Ti.UI.createView({
        width: "50%",
        layout: "horizontal",
        left: 0,
        id: "leftSubWrapper"
    });
    $.__views.__alloyId53.add($.__views.leftSubWrapper);
    $.__views.scadenzaStrutturaleLabel = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        text: "Scadenza Strutturale",
        height: Ti.UI.FILL,
        color: "#444",
        id: "scadenzaStrutturaleLabel"
    });
    $.__views.leftSubWrapper.add($.__views.scadenzaStrutturaleLabel);
    $.__views.ovalSwitchContainer = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 0,
        id: "ovalSwitchContainer"
    });
    $.__views.__alloyId53.add($.__views.ovalSwitchContainer);
    $.__views.ovalSwitchScadStrutt = Ti.UI.createImageView({
        width: 30,
        height: Ti.UI.SIZE,
        image: "/images/oval-switch-off.png",
        right: 5,
        id: "ovalSwitchScadStrutt"
    });
    $.__views.ovalSwitchContainer.add($.__views.ovalSwitchScadStrutt);
    $.__views.newEventTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId41,
        id: "newEventTable"
    });
    $.__views.win.add($.__views.newEventTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    $.pkrDataInizioEvento.text = moment().format("LLL");
    $.pkrDataInizioEvento.dataRaw = moment();
    $.pkrDataFineEvento.text = moment().format("LLL");
    $.pkrDataFineEvento.dataRaw = moment();
    var location_result = null;
    var scadenzaStrutturale = false;
    __defers["$.__views.pkrDataInizioEvento!click!showDatePicker"] && $.__views.pkrDataInizioEvento.addEventListener("click", showDatePicker);
    __defers["$.__views.pkrDataFineEvento!click!showDatePicker"] && $.__views.pkrDataFineEvento.addEventListener("click", showDatePicker);
    __defers["$.__views.__alloyId50!click!getLocation"] && $.__views.__alloyId50.addEventListener("click", getLocation);
    __defers["$.__views.__alloyId53!click!toggleScadStrutt"] && $.__views.__alloyId53.addEventListener("click", toggleScadStrutt);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;