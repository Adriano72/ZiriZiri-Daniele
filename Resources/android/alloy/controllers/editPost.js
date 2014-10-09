function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId176() {
        $.__views.win.removeEventListener("open", __alloyId176);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId175 = {
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                icon: "/images/top-save2.png",
                id: "mn_salva",
                title: "Salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId175, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId175, Alloy.Android.menuItemCreateArgs));
            savePost ? $.__views.mn_salva.addEventListener("click", savePost) : __defers["$.__views.mn_salva!click!savePost"] = true;
            if ($.__views.win.activity.actionBar) {
                $.__views.win.activity.actionBar.title = "Edit Post";
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
    function openEvent() {}
    function openCategoryList() {
        Alloy.createController("selezionaCategoria", function(cat_obj) {
            $.categoria.value = cat_obj.name;
            selectedCategory = cat_obj;
        }).getView();
    }
    function savePost() {
        if ("" !== $.titolo.value) if (_.isUndefined(args.existingPost)) {
            Alloy.Models.Post_template.set("name", $.titolo.value);
            Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
            Alloy.Models.Post_template.set("category", selectedCategory);
            Alloy.Models.Post_template.set("description", $.descrizione.value);
            $.win.close();
            args();
        } else {
            Alloy.Models.Post.set("name", $.titolo.value);
            Alloy.Models.Post.set("rating", $.starwidget.getRating());
            Alloy.Models.Post.set("category", selectedCategory);
            Alloy.Models.Post.set("description", $.descrizione.value);
            $.win.close();
            args._callback();
        } else alert("Il campo Titolo è obbligatorio!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "editPost";
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
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    openEvent ? $.__views.win.addEventListener("open", openEvent) : __defers["$.__views.win!open!openEvent"] = true;
    $.__views.win.addEventListener("open", __alloyId176);
    var __alloyId177 = [];
    $.__views.__alloyId178 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId178"
    });
    __alloyId177.push($.__views.__alloyId178);
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
    $.__views.__alloyId178.add($.__views.titolo);
    $.__views.__alloyId179 = Ti.UI.createTableViewRow({
        id: "__alloyId179"
    });
    __alloyId177.push($.__views.__alloyId179);
    $.__views.starwidget = Alloy.createWidget("starrating", "widget", {
        top: 10,
        bottom: 10,
        id: "starwidget",
        max: "5",
        initialRating: "0",
        __parentSymbol: $.__views.__alloyId179
    });
    $.__views.starwidget.setParent($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId180"
    });
    __alloyId177.push($.__views.__alloyId180);
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
    $.__views.__alloyId180.add($.__views.descrizione);
    $.__views.__alloyId181 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        hasDetail: "true",
        id: "__alloyId181"
    });
    __alloyId177.push($.__views.__alloyId181);
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
    $.__views.__alloyId181.add($.__views.categoria);
    openCategoryList ? $.__views.categoria.addEventListener("singletap", openCategoryList) : __defers["$.__views.categoria!singletap!openCategoryList"] = true;
    $.__views.__alloyId182 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId182"
    });
    __alloyId177.push($.__views.__alloyId182);
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
    $.__views.__alloyId182.add($.__views.tag);
    $.__views.__alloyId183 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        touchEnabled: false,
        id: "__alloyId183"
    });
    __alloyId177.push($.__views.__alloyId183);
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
    $.__views.__alloyId183.add($.__views.storie);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        separatorColor: "transparent",
        data: __alloyId177,
        id: "newPostTable"
    });
    $.__views.win.add($.__views.newPostTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    require("net");
    moment();
    var selectedCategory;
    if (_.isUndefined(args.existingPost)) {
        var modJson = Alloy.Models.Post_template.toJSON();
        $.titolo.value = Alloy.Models.Post_template.get("name");
        $.categoria.value = _.isNull(modJson.category) ? "" : modJson.category.name;
    } else {
        var modJson = Alloy.Models.Post.toJSON();
        $.titolo.value = Alloy.Models.Post.get("name");
        selectedCategory = Alloy.Models.Post.get("category");
        $.categoria.value = _.isNull(modJson.category) ? "" : modJson.category.name;
    }
    $.starwidget.init();
    $.win.open();
    __defers["$.__views.win!open!openEvent"] && $.__views.win.addEventListener("open", openEvent);
    __defers["$.__views.mn_salva!click!savePost"] && $.__views.mn_salva.addEventListener("click", savePost);
    __defers["$.__views.categoria!singletap!openCategoryList"] && $.__views.categoria.addEventListener("singletap", openCategoryList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;