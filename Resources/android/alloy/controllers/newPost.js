function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId202() {
        $.__views.win.removeEventListener("open", __alloyId202);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId201 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-save2.png",
                id: "mn_salva",
                title: "Salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId201, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId201, Alloy.Android.menuItemCreateArgs));
            savePost ? $.__views.mn_salva.addEventListener("click", savePost) : __defers["$.__views.mn_salva!click!savePost"] = true;
            if ($.__views.win.activity.actionBar) {
                $.__views.win.activity.actionBar.title = "Nuovo Post";
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
    function openEvent() {
        $.win.activity.invalidateOptionsMenu();
    }
    function openCategoryList() {
        Alloy.createController("selezionaCategoria", function(cat_obj) {
            $.categoria.value = cat_obj.name;
            selectedCategory = cat_obj;
        }).getView();
    }
    function checkForSync() {
        args._callback();
    }
    function savePost() {
        if (true == args.photoShortcut) {
            Alloy.Models.Post_template.set("name", "Foto scattata il " + moment().format("DD-MM-YYYY HH:MM"));
            Alloy.Models.Post_template.set("rating", 0);
            Alloy.Models.Post_template.set("category", {
                id: "624187",
                code: "09.04.01",
                name: "Foto",
                description: "Foto",
                children: null,
                group: false,
                root: false
            });
            Ti.API.info("*** APPLIED PATCH 17122014 ***");
            Alloy.Models.Post_template.set("referenceTime", timeNow.toDate().getTime());
            Ti.API.info("*** APPLIED PATCH 17122014 ***");
            ZZ.API.Core.Posts.add(Alloy.Models.Post_template.toJSON(), _corePostsAddCallback, function(error) {
                Ti.API.error("ZZ.API.Core.Posts.add error [error : " + error + "]");
            });
        } else if ("" === $.titolo.value || _.isUndefined(selectedCategory)) alert("Il campo Titolo e il campo Categoria sono obbligatori!"); else {
            Alloy.Models.Post_template.set("name", $.titolo.value);
            Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
            Alloy.Models.Post_template.set("category", selectedCategory);
            Alloy.Models.Post_template.set("description", $.descrizione.value);
            Ti.API.info("*** APPLIED PATCH 17122014 ***");
            Alloy.Models.Post_template.set("referenceTime", timeNow.toDate().getTime());
            Ti.API.info("*** APPLIED PATCH 17122014 ***");
            ZZ.API.Core.Posts.add(Alloy.Models.Post_template.toJSON(), _corePostsAddCallback, function(error) {
                Ti.API.error("ZZ.API.Core.Posts.add error [error : " + error + "]");
            });
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newPost";
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
        title: "Nuovo Post"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    checkForSync ? $.__views.win.addEventListener("close", checkForSync) : __defers["$.__views.win!close!checkForSync"] = true;
    $.__views.win.addEventListener("open", __alloyId202);
    var __alloyId203 = [];
    $.__views.__alloyId204 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId204"
    });
    __alloyId203.push($.__views.__alloyId204);
    $.__views.titolo = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Titolo",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "titolo"
    });
    $.__views.__alloyId204.add($.__views.titolo);
    $.__views.__alloyId205 = Ti.UI.createTableViewRow({
        id: "__alloyId205"
    });
    __alloyId203.push($.__views.__alloyId205);
    $.__views.starwidget = Alloy.createWidget("starrating", "widget", {
        top: 10,
        bottom: 10,
        id: "starwidget",
        max: "5",
        initialRating: "0",
        __parentSymbol: $.__views.__alloyId205
    });
    $.__views.starwidget.setParent($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId206"
    });
    __alloyId203.push($.__views.__alloyId206);
    $.__views.descrizione = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Descrizione",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "descrizione"
    });
    $.__views.__alloyId206.add($.__views.descrizione);
    $.__views.__alloyId207 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        hasDetail: "true",
        id: "__alloyId207"
    });
    __alloyId203.push($.__views.__alloyId207);
    $.__views.categoria = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        editable: false,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        autocorrect: false,
        hintText: "Categoria",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "categoria"
    });
    $.__views.__alloyId207.add($.__views.categoria);
    openCategoryList ? $.__views.categoria.addEventListener("singletap", openCategoryList) : __defers["$.__views.categoria!singletap!openCategoryList"] = true;
    $.__views.__alloyId208 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId208"
    });
    __alloyId203.push($.__views.__alloyId208);
    $.__views.tag = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Tag",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "tag"
    });
    $.__views.__alloyId208.add($.__views.tag);
    $.__views.__alloyId209 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId209"
    });
    __alloyId203.push($.__views.__alloyId209);
    $.__views.storie = Ti.UI.createTextField({
        color: "#999",
        font: {
            fontFamily: "SourceSansPro-Regular",
            fontSize: 18
        },
        top: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        hintText: "Storie",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        id: "storie"
    });
    $.__views.__alloyId209.add($.__views.storie);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId203,
        id: "newPostTable"
    });
    $.__views.win.add($.__views.newPostTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("SHORTCUT: " + JSON.stringify(args));
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    require("net");
    var timeNow = moment();
    var selectedCategory;
    Ti.API.info("**** timeNow: " + timeNow);
    $.starwidget.init();
    var _corePostsAddCallback = function(post) {
        Ti.API.info("ZZ.API.Core.Posts.add success [response : " + JSON.stringify(post) + "]");
        Ti.API.info("*** APPLIED PATCH 17122014 ***");
        Alloy.Models.Post_template.set(post, {
            silent: true
        });
        Alloy.createController("crea-modifica-post", {
            p_callback: function() {
                Ti.API.info("********************************************** heRE *************");
                $.win.close();
                args._callback();
            },
            shortcut: args.photoShortcut
        }).getView();
    };
    $.win.open();
    true == args.photoShortcut && savePost();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.win!close!checkForSync"] && $.__views.win.addEventListener("close", checkForSync);
    __defers["$.__views.mn_salva!click!savePost"] && $.__views.mn_salva.addEventListener("click", savePost);
    __defers["$.__views.categoria!singletap!openCategoryList"] && $.__views.categoria.addEventListener("singletap", openCategoryList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;