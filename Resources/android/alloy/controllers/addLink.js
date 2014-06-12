function Controller() {
    function __alloyId28() {
        $.__views.window.removeEventListener("open", __alloyId28);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId27 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/785-floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId27, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId27, Alloy.Android.menuItemCreateArgs));
            createProtoObj ? $.__views.salva.addEventListener("click", createProtoObj) : __defers["$.__views.salva!click!createProtoObj"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function createProtoObj() {
        if ("" != $.titolo.value && "" != $.descrizione.value && "" != $.content.value) {
            $.titolo.value;
            $.descrizione.value;
            var objLink = {
                name: $.titolo.value,
                description: $.descrizione.value,
                content: $.content.value
            };
            args(objLink);
            $.window.close();
        } else alert("I campi titolo, descrizione e link sono obbligatori");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addLink";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuovo Link"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.window.addEventListener("open", __alloyId28);
    var __alloyId29 = [];
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId30"
    });
    __alloyId29.push($.__views.__alloyId30);
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
    $.__views.__alloyId30.add($.__views.titolo);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId31"
    });
    __alloyId29.push($.__views.__alloyId31);
    $.__views.descrizione = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Descrizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "descrizione"
    });
    $.__views.__alloyId31.add($.__views.descrizione);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId32"
    });
    __alloyId29.push($.__views.__alloyId32);
    $.__views.content = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Link",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "content"
    });
    $.__views.__alloyId32.add($.__views.content);
    $.__views.newLinkTable = Ti.UI.createTableView({
        top: 5,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId29,
        id: "newLinkTable"
    });
    $.__views.window.add($.__views.newLinkTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    __defers["$.__views.salva!click!createProtoObj"] && $.__views.salva.addEventListener("click", createProtoObj);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;