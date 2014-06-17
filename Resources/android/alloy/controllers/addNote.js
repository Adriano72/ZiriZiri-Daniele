function Controller() {
    function __alloyId58() {
        $.__views.window.removeEventListener("open", __alloyId58);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId57 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/785-floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId57, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId57, Alloy.Android.menuItemCreateArgs));
            createProtoObj ? $.__views.salva.addEventListener("click", createProtoObj) : __defers["$.__views.salva!click!createProtoObj"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function createProtoObj() {
        if ("" != $.titolo.value && "" != $.content.value) {
            var objNote = {
                name: $.title.value,
                description: $.titolo.value,
                content: $.content.value
            };
            Ti.API.info("********** Titolo : " + $.title.value);
            args(objNote);
            $.window.close();
        } else alert("I campi titolo e testo sono obbligatori");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addNote";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "window",
        title: "Nuova Nota"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.window.addEventListener("open", __alloyId58);
    var __alloyId59 = [];
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId60"
    });
    __alloyId59.push($.__views.__alloyId60);
    $.__views.title = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Titolo nota",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "title"
    });
    $.__views.__alloyId60.add($.__views.title);
    $.__views.__alloyId61 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId61"
    });
    __alloyId59.push($.__views.__alloyId61);
    $.__views.content = Ti.UI.createTextArea({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Testo nota",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "content"
    });
    $.__views.__alloyId61.add($.__views.content);
    $.__views.titolo = Ti.UI.createTableView({
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
        data: __alloyId59,
        id: "titolo"
    });
    $.__views.window.add($.__views.titolo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    __defers["$.__views.salva!click!createProtoObj"] && $.__views.salva.addEventListener("click", createProtoObj);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;