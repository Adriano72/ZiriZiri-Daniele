function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId58() {
        $.__views.win.removeEventListener("open", __alloyId58);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId57 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-save2.png",
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId57, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId57, Alloy.Android.menuItemCreateArgs));
            saveLink ? $.__views.mn_salva.addEventListener("click", saveLink) : __defers["$.__views.mn_salva!click!saveLink"] = true;
            if ($.__views.win.activity.actionBar) {
                $.__views.win.activity.actionBar.displayHomeAsUp = true;
                $.__views.win.activity.actionBar.icon = "images/logo-test.png";
                $.__views.win.activity.actionBar.onHomeIconItemSelected = homeIconSelected;
            }
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function homeIconSelected() {
        $.win.close({
            animate: true
        });
    }
    function saveLink() {
        var modLinkJSON = Alloy.Models.Link_template.toJSON();
        modLinkJSON = _.omit(modLinkJSON, "kind.id");
        if ("" != $.titolo.value && "" != $.link.value) {
            Alloy.Globals.shortcutMode && Alloy.Models.Post_template.set("name", $.titolo.value);
            modLinkJSON.name = Alloy.Models.Post_template.get("name");
            modLinkJSON.description = Alloy.Models.Post_template.get("description");
            modLinkJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
            modLinkJSON.category = Alloy.Models.Post_template.get("category");
            modLinkJSON.data.title = $.titolo.value;
            modLinkJSON.data.content.local = $.link.value;
            Ti.API.info("ASPETTO LINK VALIDATO: " + JSON.stringify(modLinkJSON));
            args(modLinkJSON);
            $.win.close();
        } else alert("I campi titolo e link sono obbligatori");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addLink";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "win",
        windowSoftInputMode: Ti.UI.Android.SOFT_INPUT_ADJUST_PAN,
        title: "Nuovo Link"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.win.addEventListener("open", __alloyId58);
    var __alloyId59 = [];
    $.__views.__alloyId60 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId60"
    });
    __alloyId59.push($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "__alloyId61"
    });
    $.__views.__alloyId60.add($.__views.__alloyId61);
    $.__views.titolo = Ti.UI.createTextField({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        height: 40,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        wordWrap: false,
        hintText: "Titolo",
        id: "titolo"
    });
    $.__views.__alloyId61.add($.__views.titolo);
    $.__views.__alloyId62 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        top: 5,
        id: "__alloyId62"
    });
    __alloyId59.push($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createView({
        width: Ti.UI.FILL,
        left: 5,
        top: 5,
        right: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.link = Ti.UI.createTextField({
        color: "#666",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 16
        },
        left: 5,
        backgroundColor: "#fff",
        width: Ti.UI.FILL,
        height: 100,
        wordWrap: false,
        hintText: "Link",
        id: "link"
    });
    $.__views.__alloyId63.add($.__views.link);
    $.__views.newLinkTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId59,
        id: "newLinkTable"
    });
    $.__views.win.add($.__views.newLinkTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    __defers["$.__views.mn_salva!click!saveLink"] && $.__views.mn_salva.addEventListener("click", saveLink);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;