function Controller() {
    function __alloyId1() {
        $.__views.window.removeEventListener("open", __alloyId1);
        if ($.__views.window.activity) $.__views.window.activity.onCreateOptionsMenu = function(e) {
            var __alloyId0 = {
                icon: "/images/top-save.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "mn_salva"
            };
            $.__views.mn_salva = e.menu.add(_.pick(__alloyId0, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_salva.applyProperties(_.omit(__alloyId0, Alloy.Android.menuItemCreateArgs));
            savePost ? $.__views.mn_salva.addEventListener("click", savePost) : __defers["$.__views.mn_salva!click!savePost"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addCashflow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#F9F9F9",
        id: "window",
        title: "Nuovo CashFlow"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.window.addEventListener("open", __alloyId1);
    var __alloyId2 = [];
    $.__views.__alloyId3 = Ti.UI.createTableViewRow({
        id: "__alloyId3"
    });
    __alloyId2.push($.__views.__alloyId3);
    $.__views.importoWrapper = Ti.UI.createView({
        id: "importoWrapper"
    });
    $.__views.__alloyId3.add($.__views.importoWrapper);
    $.__views.importoText = Ti.UI.createLabel({
        id: "importoText"
    });
    $.__views.importoWrapper.add($.__views.importoText);
    $.__views.importoValue = Ti.UI.createLabel({
        id: "importoValue"
    });
    $.__views.importoWrapper.add($.__views.importoValue);
    $.__views.verticalBar = Ti.UI.createLabel({
        height: Ti.UI.FILL,
        width: 1,
        right: 45,
        backgroundColor: "#CCCCCC",
        id: "verticalBar"
    });
    $.__views.importoWrapper.add($.__views.verticalBar);
    $.__views.valutaImg = Ti.UI.createImageView({
        id: "valutaImg"
    });
    $.__views.importoWrapper.add($.__views.valutaImg);
    $.__views.__alloyId4 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId4"
    });
    __alloyId2.push($.__views.__alloyId4);
    $.__views.pkrTipoMovimento = Ti.UI.createPicker({
        id: "pkrTipoMovimento",
        selectionIndicator: "true"
    });
    $.__views.__alloyId4.add($.__views.pkrTipoMovimento);
    $.__views.__alloyId5 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId5"
    });
    __alloyId2.push($.__views.__alloyId5);
    $.__views.importo = Ti.UI.createTextField({
        id: "importo"
    });
    $.__views.__alloyId5.add($.__views.importo);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F9F9F9",
        className: "itemRow",
        layout: "horizontal",
        id: "__alloyId6"
    });
    __alloyId2.push($.__views.__alloyId6);
    $.__views.pkrPagamentoIncasso = Ti.UI.createPicker({
        id: "pkrPagamentoIncasso",
        selectionIndicator: "true"
    });
    $.__views.__alloyId6.add($.__views.pkrPagamentoIncasso);
    $.__views.newCashflowTable = Ti.UI.createTableView({
        top: 5,
        bottom: 50,
        left: 0,
        right: 0,
        separatorColor: "transparent",
        data: __alloyId2,
        id: "newCashflowTable"
    });
    $.__views.window.add($.__views.newCashflowTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var rowsTipoMov = [ Ti.UI.createPickerRow({
        title: "Tipo Movimento",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoTipoMov"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsTipoMov.push(pkrRow);
    });
    $.pkrTipoMovimento.add(rowsTipoMov);
    var rowsPagamIncasso = [ Ti.UI.createPickerRow({
        title: "Pagamento Incasso",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoPagamIncasso"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsPagamIncasso.push(pkrRow);
    });
    $.pkrPagamentoIncasso.add(rowsPagamIncasso);
    __defers["$.__views.mn_salva!click!savePost"] && $.__views.mn_salva.addEventListener("click", savePost);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;