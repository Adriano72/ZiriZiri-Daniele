function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function edit(e) {
        Alloy.createController("editEvent", {
            _callback: function(aspettoEditato) {
                var aspettoToJSON = JSON.parse(aspettoEditato.data);
                $.startDate.text = moment(aspettoToJSON.startTime.time).format("DD-MM-YYYY HH:MM");
                $.endDate.text = moment(aspettoToJSON.endTime.time).format("DD-MM-YYYY HH:MM");
                $.location.text = aspettoEditato.location.name;
                args._editFunc(aspettoEditato, e.source.arrayKey);
            },
            aspetto: $.riga.obj_aspect
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowEvent";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.riga = Ti.UI.createTableViewRow({
        className: "itemRow",
        width: Ti.UI.FILL,
        id: "riga"
    });
    $.__views.riga && $.addTopLevelView($.__views.riga);
    edit ? $.__views.riga.addEventListener("click", edit) : __defers["$.__views.riga!click!edit"] = true;
    $.__views.__alloyId225 = Ti.UI.createView({
        left: 5,
        right: 5,
        top: 5,
        bottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E9FA32",
        backgroundColor: "#FFF",
        height: 50,
        touchEnabled: false,
        layout: "horizontal",
        id: "__alloyId225"
    });
    $.__views.riga.add($.__views.__alloyId225);
    $.__views.eventIcon = Ti.UI.createLabel({
        touchEnabled: false,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-event-on.png",
        id: "eventIcon"
    });
    $.__views.__alloyId225.add($.__views.eventIcon);
    $.__views.__alloyId226 = Ti.UI.createView({
        touchEnabled: false,
        width: Ti.UI.SIZE,
        left: 10,
        layout: "vertical",
        id: "__alloyId226"
    });
    $.__views.__alloyId225.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createView({
        left: 2,
        touchEnabled: false,
        width: "85%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId227"
    });
    $.__views.__alloyId226.add($.__views.__alloyId227);
    $.__views.startDate = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        touchEnabled: false,
        backgroundColor: "white",
        width: 140,
        left: 0,
        id: "startDate"
    });
    $.__views.__alloyId227.add($.__views.startDate);
    $.__views.endDate = Ti.UI.createLabel({
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        color: "#444",
        touchEnabled: false,
        backgroundColor: "white",
        width: 140,
        id: "endDate"
    });
    $.__views.__alloyId227.add($.__views.endDate);
    $.__views.__alloyId228 = Ti.UI.createView({
        left: 2,
        touchEnabled: false,
        width: "85%",
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId228"
    });
    $.__views.__alloyId226.add($.__views.__alloyId228);
    $.__views.location = Ti.UI.createLabel({
        color: "#999",
        width: Ti.UI.FILL,
        touchEnabled: false,
        wordWrap: false,
        ellipsize: true,
        id: "location"
    });
    $.__views.__alloyId228.add($.__views.location);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    moment.lang("it");
    var dataAspetto = JSON.parse(args.obj_aspetto.data);
    $.startDate.text = moment(dataAspetto.startTime.time).format("DD-MM-YYYY HH:MM");
    $.endDate.text = moment(dataAspetto.endTime.time).format("DD-MM-YYYY HH:MM");
    $.location.text = args.obj_aspetto.location.name;
    $.riga.obj_aspect = args.obj_aspetto;
    $.riga.arrayKey = args.keyIndex;
    __defers["$.__views.riga!click!edit"] && $.__views.riga.addEventListener("click", edit);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;