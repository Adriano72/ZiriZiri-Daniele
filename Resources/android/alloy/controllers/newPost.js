function Controller() {
    function __alloyId7() {
        $.__views.newPost.removeEventListener("open", __alloyId7);
        if ($.__views.newPost.activity) $.__views.newPost.activity.onCreateOptionsMenu = function(e) {
            var __alloyId6 = {
                id: "salva",
                title: "Scrivi",
                icon: "/images/785-floppy-disk.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_IF_ROOM
            };
            $.__views.salva = e.menu.add(_.pick(__alloyId6, Alloy.Android.menuItemCreateArgs));
            $.__views.salva.applyProperties(_.omit(__alloyId6, Alloy.Android.menuItemCreateArgs));
            savePost ? $.__views.salva.addEventListener("click", savePost) : __defers["$.__views.salva!click!savePost"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function showDatePicker() {
        Alloy.createController("datePicker", function(p_data) {
            Ti.API.info("******** FIRE ********");
            $.postDate.value = moment(p_data).format("LLL");
        });
    }
    function savePost() {
        if ("" !== $.titolo.value && 9999 != $.pkrCategoria.getSelectedRow(0).id) {
            var postObj = {
                name: $.titolo.value,
                description: "DATAPOST-TEMPLATE-DEFAULT-DESC",
                referenceTime: Date.parse($.postDate.value),
                category: {
                    id: $.pkrCategoria.getSelectedRow(0).id,
                    version: $.pkrCategoria.getSelectedRow(0).version
                },
                location: {
                    name: $.location.value,
                    description: $.location.value,
                    latitude: location_result.latitude,
                    longitude: location_result.longitude
                }
            };
            net.savePost(postObj, function(post_id) {
                Ti.API.info("ID POST SALVATO: " + post_id);
                if (arrayAspetti.length > 0) {
                    Ti.API.info("SALVA ASPETTI...");
                    addCashflow(post_id);
                }
            });
        } else alert("Il campo Titolo e il campo Categoria sono obbligatori!");
    }
    function addCashflow() {
        if ("" == $.titolo.value && 9999 == $.pkrCategoria.getSelectedRow(0).id) {
            alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
            return;
        }
        Alloy.createController("addCashflow", function(objRet) {
            var objAspect = {
                kind: {
                    code: "CASHFLOWDATATYPE_CODE"
                },
                data: {}
            };
            objAspect.name = $.titolo.value;
            objAspect.referenceTime = Date.parse($.postDate.value);
            objAspect.category = {
                id: $.pkrCategoria.getSelectedRow(0).id,
                version: $.pkrCategoria.getSelectedRow(0).version
            };
            objAspect.location = {
                name: $.location.value,
                description: $.location.value,
                latitude: location_result.latitude,
                longitude: location_result.longitude
            };
            objAspect.data.tipoMovimento = objRet.tipoMovimento;
            objAspect.data.pagamentoIncasso = objRet.pagamentoIncasso;
            objAspect.data.importo = objRet.importo;
            objAspect.data = JSON.stringify(objAspect.data);
            arrayAspetti.push(objAspect);
            net.saveAspect(objAspect, function() {
                Ti.API.info("ID ASPETTO SALVATO: " + post_id);
                arrayAspetti.length > 0 && Ti.API.info("CONSOLIDO RELAZIONI...");
            });
        }).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newPost";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.newPost = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        title: "Nuovo Post",
        id: "newPost"
    });
    $.__views.newPost && $.addTopLevelView($.__views.newPost);
    $.__views.newPost.addEventListener("open", __alloyId7);
    var __alloyId8 = [];
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        id: "__alloyId9"
    });
    __alloyId8.push($.__views.__alloyId9);
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
    $.__views.__alloyId9.add($.__views.titolo);
    $.__views.__alloyId10 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/259-list.png",
        id: "__alloyId10"
    });
    __alloyId8.push($.__views.__alloyId10);
    $.__views.pkrCategoria = Ti.UI.createPicker({
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "pkrCategoria",
        selectionIndicator: "true"
    });
    $.__views.__alloyId10.add($.__views.pkrCategoria);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/83-calendar.png",
        id: "__alloyId11"
    });
    __alloyId8.push($.__views.__alloyId11);
    $.__views.postDate = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        editable: false,
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "postDate"
    });
    $.__views.__alloyId11.add($.__views.postDate);
    showDatePicker ? $.__views.postDate.addEventListener("focus", showDatePicker) : __defers["$.__views.postDate!focus!showDatePicker"] = true;
    showDatePicker ? $.__views.postDate.addEventListener("click", showDatePicker) : __defers["$.__views.postDate!click!showDatePicker"] = true;
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        backgroundColor: "#F2F2F2",
        className: "itemRow",
        layout: "horizontal",
        left: 5,
        right: 5,
        leftImage: "/images/74-location.png",
        id: "__alloyId12"
    });
    __alloyId8.push($.__views.__alloyId12);
    $.__views.location = Ti.UI.createTextField({
        borderColor: "#000000",
        color: "#336699",
        ellipsize: true,
        top: 5,
        right: 5,
        left: 5,
        width: Ti.UI.FILL,
        autocorrect: false,
        height: Ti.UI.SIZE,
        hintText: "Posizione",
        borderRadius: 5,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "location"
    });
    $.__views.__alloyId12.add($.__views.location);
    $.__views.newPostTable = Ti.UI.createTableView({
        top: 5,
        bottom: 50,
        left: 20,
        right: 20,
        separatorColor: "transparent",
        data: __alloyId8,
        id: "newPostTable"
    });
    $.__views.newPost.add($.__views.newPostTable);
    $.__views.bottomBar = Ti.UI.createView({
        backgroundColor: "#EBEBEB",
        width: Ti.UI.FILL,
        height: 50,
        bottom: 0,
        id: "bottomBar"
    });
    $.__views.newPost.add($.__views.bottomBar);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        height: 1,
        top: 0,
        backgroundColor: "#D6D6D6",
        width: "100%",
        id: "__alloyId13"
    });
    $.__views.bottomBar.add($.__views.__alloyId13);
    $.__views.buttonsContainer = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.SIZE,
        top: 15,
        height: 25,
        id: "buttonsContainer"
    });
    $.__views.bottomBar.add($.__views.buttonsContainer);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        left: 0,
        width: 20,
        height: 20,
        backgroundImage: "/images/826-money-1.png",
        id: "__alloyId14"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId14);
    addCashflow ? $.__views.__alloyId14.addEventListener("click", addCashflow) : __defers["$.__views.__alloyId14!click!addCashflow"] = true;
    $.__views.__alloyId15 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/770-paper-clip.png",
        id: "__alloyId15"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/809-clipboard.png",
        id: "__alloyId16"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        left: 50,
        width: 20,
        height: 20,
        backgroundImage: "/images/843-link.png",
        id: "__alloyId17"
    });
    $.__views.buttonsContainer.add($.__views.__alloyId17);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var moment = require("alloy/moment");
    moment.lang("it", Alloy.Globals.Moment_IT);
    var location_result;
    var u_location = require("getUserLocation");
    var net = require("net");
    var arrayAspetti = [];
    u_location.result(function(locationData) {
        location_result = locationData;
        $.location.value = locationData.address;
    });
    $.postDate.value = moment().format("LLL");
    var rowsCat = [ Ti.UI.createPickerRow({
        title: "Selezionare una categoria",
        id: 9999
    }) ];
    _.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value) {
        var pkrRow = Ti.UI.createPickerRow(value);
        rowsCat.push(pkrRow);
    });
    $.pkrCategoria.add(rowsCat);
    __defers["$.__views.salva!click!savePost"] && $.__views.salva.addEventListener("click", savePost);
    __defers["$.__views.postDate!focus!showDatePicker"] && $.__views.postDate.addEventListener("focus", showDatePicker);
    __defers["$.__views.postDate!click!showDatePicker"] && $.__views.postDate.addEventListener("click", showDatePicker);
    __defers["$.__views.__alloyId14!click!addCashflow"] && $.__views.__alloyId14.addEventListener("click", addCashflow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;