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
        var models = __alloyId77.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId69 = models[i];
            __alloyId69.__transform = transformData(__alloyId69);
            var __alloyId71 = Ti.UI.createTableViewRow({
                className: "itemRow",
                width: Ti.UI.FILL
            });
            rows.push(__alloyId71);
            showDetail ? __alloyId71.addEventListener("click", showDetail) : __defers["__alloyId71!click!showDetail"] = true;
            var __alloyId73 = Ti.UI.createView({
                left: 2,
                layout: "horizontal",
                width: Ti.UI.FILL
            });
            __alloyId71.add(__alloyId73);
            var __alloyId74 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId69.__transform["temp_importo"] ? __alloyId69.__transform["temp_importo"] : __alloyId69.get("temp_importo")
            });
            __alloyId73.add(__alloyId74);
            var __alloyId75 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId69.__transform["temp_tipoMovimento"] ? __alloyId69.__transform["temp_tipoMovimento"] : __alloyId69.get("temp_tipoMovimento")
            });
            __alloyId73.add(__alloyId75);
            var __alloyId76 = Ti.UI.createLabel({
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
                text: "undefined" != typeof __alloyId69.__transform["temp_pagamentoIncasso"] ? __alloyId69.__transform["temp_pagamentoIncasso"] : __alloyId69.get("temp_pagamentoIncasso")
            });
            __alloyId73.add(__alloyId76);
        }
        $.__views.aspectTable.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.temp_importo = attrs.data.importo + "€";
        attrs.temp_tipoMovimento = _.isUndefined(attrs.data.tipoMovimento) || _.isNull(attrs.data.tipoMovimento) ? "" : attrs.data.tipoMovimento.codice;
        attrs.temp_pagamentoIncasso = _.isUndefined(attrs.data.pagamentoIncasso) || _.isNull(attrs.data.pagamentoIncasso) ? "" : attrs.data.pagamentoIncasso.descrizioneBreve;
        return attrs;
    }
    function showDetail(e) {
        var selectedAspect = Alloy.Collections.aspettiCashflow.at(e.index).attributes;
        Alloy.createController("rowDetailCASHFLOW", {
            _callback: function(updated_cashflow) {
                net.updateAspect(updated_cashflow, function() {
                    Ti.API.info("ASPETO UPDATATO");
                });
                Ti.API.info("***SELECTED MODEL***: " + JSON.stringify(updated_cashflow));
                Alloy.Models.UpdatedCashflow = new Backbone.Model();
                Alloy.Models.UpdatedCashflow.set(updated_cashflow);
                Alloy.Models.UpdatedCashflow.set("data", Alloy.Models.UpdatedCashflow.get("data"));
                Alloy.Collections.aspettiCashflow.remove(Alloy.Collections.aspettiCashflow.at(e.index));
                Alloy.Collections.aspettiCashflow.add(Alloy.Models.UpdatedCashflow);
            },
            selectedAspect: selectedAspect
        }).getView();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "briefCashflow";
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
    $.__views.briefCashflow = Ti.UI.createView({
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
        id: "briefCashflow"
    });
    $.__views.briefCashflow && $.addTopLevelView($.__views.briefCashflow);
    $.__views.cashFlowIcon = Ti.UI.createLabel({
        top: 5,
        left: 5,
        width: 25,
        height: 25,
        backgroundImage: "/images/kernel-finance-on.png",
        id: "cashFlowIcon"
    });
    $.__views.briefCashflow.add($.__views.cashFlowIcon);
    $.__views.aspectTable = Ti.UI.createTableView({
        top: 5,
        left: 5,
        width: "90%",
        height: Ti.UI.SIZE,
        separatorColor: "#transparent",
        id: "aspectTable"
    });
    $.__views.briefCashflow.add($.__views.aspectTable);
    var __alloyId77 = Alloy.Collections["aspettiCashflow"] || aspettiCashflow;
    __alloyId77.on("fetch destroy change add remove reset", syncAspects);
    exports.destroy = function() {
        __alloyId77.off("fetch destroy change add remove reset", syncAspects);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Ti.API.info("COLLECTION CASHFLOW: " + JSON.stringify(Alloy.Collections.aspettiCashflow));
    syncAspects();
    $.briefCashflow.addEventListener("close", function() {
        $.briefCashflow.destroy();
    });
    __defers["__alloyId71!click!showDetail"] && __alloyId71.addEventListener("click", showDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;