function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function syncAspects(e) {
        if (e && e.fromAdapter) return;
        syncAspects.opts || {};
        var models = __alloyId107.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId99 = models[i];
            __alloyId99.__transform = transformData(__alloyId99);
            var __alloyId101 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId101);
            showDetail ? __alloyId101.addEventListener("click", showDetail) : __defers["__alloyId101!click!showDetail"] = true;
            var __alloyId103 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId101.add(__alloyId103);
            var __alloyId104 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#444",
                backgroundColor: "white",
                textAlign: "center",
                width: 95,
                height: 35,
                wordWrap: false,
                ellipsize: true,
                left: 0,
                text: "undefined" != typeof __alloyId99.__transform["temp_nome"] ? __alloyId99.__transform["temp_nome"] : __alloyId99.get("temp_nome")
            });
            __alloyId103.add(__alloyId104);
            var __alloyId105 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#999",
                backgroundColor: "white",
                textAlign: "center",
                width: 95,
                height: 35,
                wordWrap: false,
                ellipsize: true,
                text: "undefined" != typeof __alloyId99.__transform["temp_link"] ? __alloyId99.__transform["temp_link"] : __alloyId99.get("temp_link")
            });
            __alloyId103.add(__alloyId105);
            var __alloyId106 = Ti.UI.createLabel({
                font: {
                    fontFamily: "SourceSansPro-Regular",
                    fontSize: 18
                },
                color: "#999",
                backgroundColor: "white",
                textAlign: "center",
                width: 95,
                height: 35,
                wordWrap: false,
                ellipsize: true,
                text: "Visualizza"
            });
            __alloyId103.add(__alloyId106);
        }
        $.__views.aspectTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.temp_nome = attrs.data.title;
        attrs.temp_link = _.isUndefined(attrs.data.content.local) ? "" : attrs.data.content.local;
        return attrs;
    }
    function showDetail(e) {
        var selectedAspect = Alloy.Collections.aspettiLink.at(e.index).attributes;
        Alloy.createController("rowDetailLINK", {
            _callback: function(updated_link) {
                net.updateAspect(updated_link, function() {
                    Ti.API.info("ASPETO UPDATATO");
                });
                Ti.API.info("***SELECTED MODEL***: " + JSON.stringify(updated_link));
                Alloy.Models.UpdatedLink = new Backbone.Model();
                Alloy.Models.UpdatedLink.set(updated_cashflow);
                Alloy.Models.UpdatedLink.set("data", Alloy.Models.UpdatedLink.get("data"));
                Alloy.Collections.aspettiLink.remove(Alloy.Collections.aspettiLink.at(e.index));
                Alloy.Collections.aspettiLink.add(Alloy.Models.UpdatedLink);
            },
            selectedAspect: selectedAspect
        }).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefLink";
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
    $.__views.briefLink = Ti.UI.createView({
        top: 5,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#CCCCCC",
        backgroundColor: "#FFF",
        left: 5,
        right: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        touchEnabled: false,
        id: "briefLink"
    });
    $.__views.briefLink && $.addTopLevelView($.__views.briefLink);
    $.__views.linkIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-link-on.png",
        id: "linkIcon"
    });
    $.__views.briefLink.add($.__views.linkIcon);
    $.__views.aspectTable = Ti.UI.createTableView({
        top: 5,
        left: 5,
        width: "90%",
        height: Ti.UI.SIZE,
        separatorColor: "#transparent",
        id: "aspectTable"
    });
    $.__views.briefLink.add($.__views.aspectTable);
    var __alloyId107 = Alloy.Collections["aspettiLink"] || aspettiLink;
    __alloyId107.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId107.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION CASHFLOW: " + JSON.stringify(Alloy.Collections.aspettiLink));
    syncAspects();
    $.briefLink.addEventListener("close", function() {
        $.briefCashflow.destroy();
    });
    __defers["__alloyId101!click!showDetail"] && __alloyId101.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;