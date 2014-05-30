function Controller() {
    function __alloyId33() {
        $.__views.win.removeEventListener("open", __alloyId33);
        if ($.__views.win.activity) $.__views.win.activity.onCreateOptionsMenu = function(e) {
            var __alloyId31 = {
                id: "mn_notify",
                title: "Scrivi"
            };
            $.__views.mn_notify = e.menu.add(_.pick(__alloyId31, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_notify.applyProperties(_.omit(__alloyId31, Alloy.Android.menuItemCreateArgs));
            var __alloyId32 = {
                id: "mn_search",
                title: "Immagine"
            };
            $.__views.mn_search = e.menu.add(_.pick(__alloyId32, Alloy.Android.menuItemCreateArgs));
            $.__views.mn_search.applyProperties(_.omit(__alloyId32, Alloy.Android.menuItemCreateArgs));
            refreshTable ? $.__views.mn_search.addEventListener("click", refreshTable) : __defers["$.__views.mn_search!click!refreshTable"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function syncTimeline(e) {
        if (e && e.fromAdapter) return;
        syncTimeline.opts || {};
        var models = __alloyId35.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId34 = models[i];
            __alloyId34.__transform = transformData(__alloyId34);
        }
        $.__views.postTable.setData(rows);
    }
    function closeActivityIndicator() {
        Ti.App.fireEvent("loading_done");
    }
    function aspectDetail(e) {
        Alloy.createController("aspect_detail", args.data.aspects[e.source.id_code]).getView().open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dettaglio_post";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        backgroundColor: "#F2F2F2",
        id: "win",
        title: "Dettaglio Post"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    closeActivityIndicator ? $.__views.win.addEventListener("open", closeActivityIndicator) : __defers["$.__views.win!open!closeActivityIndicator"] = true;
    $.__views.win.addEventListener("open", __alloyId33);
    $.__views.postTable = Ti.UI.createTableView({
        id: "postTable"
    });
    $.__views.win.add($.__views.postTable);
    var __alloyId35 = Alloy.Collections["Timeline"] || Timeline;
    __alloyId35.on("fetch destroy change add remove reset", syncTimeline);
    $.__views.__alloyId36 = Ti.UI.createTableViewRow({
        id: "__alloyId36"
    });
    $.__views.win.add($.__views.__alloyId36);
    mostraDettaglioEvento ? $.__views.__alloyId36.addEventListener("click", mostraDettaglioEvento) : __defers["$.__views.__alloyId36!click!mostraDettaglioEvento"] = true;
    $.__views.detailHeader = Ti.UI.createView({
        layout: "horizontal",
        top: 5,
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        id: "detailHeader"
    });
    $.__views.win.add($.__views.detailHeader);
    $.__views.dateBox = Ti.UI.createView({
        width: 50,
        height: 60,
        left: 5,
        top: 5,
        backgroundColor: "#CC3939",
        layout: "vertical",
        id: "dateBox"
    });
    $.__views.detailHeader.add($.__views.dateBox);
    $.__views.dayBox = Ti.UI.createLabel({
        width: 50,
        height: 40,
        top: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontFamily: "AppIcons",
            fontSize: 18,
            fontWeight: "bold"
        },
        id: "dayBox"
    });
    $.__views.dateBox.add($.__views.dayBox);
    $.__views.monthBox = Ti.UI.createLabel({
        width: 50,
        height: 20,
        top: 0,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontFamily: "AppIcons",
            fontSize: 14
        },
        backgroundColor: "#E0E0E0",
        id: "monthBox"
    });
    $.__views.dateBox.add($.__views.monthBox);
    $.__views.headerBox = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 100,
        layout: "vertical",
        left: 5,
        top: 0,
        id: "headerBox"
    });
    $.__views.detailHeader.add($.__views.headerBox);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontFamily: "Rosario-Regular",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        color: "#2C3E52",
        left: 5,
        top: 5,
        id: "name"
    });
    $.__views.headerBox.add($.__views.name);
    $.__views.category = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "AppIcons",
            fontSize: 12
        },
        backgroundColor: "#E3E3E3",
        height: 18,
        wordWrap: false,
        width: Ti.UI.SIZE,
        color: "#5E5E5E",
        left: 5,
        top: 5,
        id: "category"
    });
    $.__views.headerBox.add($.__views.category);
    $.__views.location = Ti.UI.createLabel({
        touchEnabled: false,
        font: {
            fontFamily: "AppIcons",
            fontSize: 12
        },
        backgroundColor: "#E3E3E3",
        height: 18,
        wordWrap: false,
        ellipsize: true,
        width: Ti.UI.SIZE,
        color: "#5E5E5E",
        left: 5,
        top: 5,
        id: "location"
    });
    $.__views.headerBox.add($.__views.location);
    $.__views.bottom_container = Ti.UI.createView({
        backgroundColor: "#F2F2F2",
        top: 100,
        layout: "vertical",
        id: "bottom_container"
    });
    $.__views.win.add($.__views.bottom_container);
    $.__views.mapview = Alloy.Globals.Map.createView({
        height: 130,
        top: 5,
        width: Ti.UI.FILL,
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.bottom_container.add($.__views.mapview);
    $.__views.aspectsTable = Ti.UI.createTableView({
        top: 5,
        bottom: 5,
        separatorColor: "transparent",
        id: "aspectsTable"
    });
    $.__views.bottom_container.add($.__views.aspectsTable);
    aspectDetail ? $.__views.aspectsTable.addEventListener("click", aspectDetail) : __defers["$.__views.aspectsTable!click!aspectDetail"] = true;
    exports.destroy = function() {
        __alloyId35.off("fetch destroy change add remove reset", syncTimeline);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("ARGS: " + JSON.stringify(args));
    var creationDate = new Date(args.data.referenceTime);
    var category = _.isNull(args.data.category) || _.isUndefined(args.data.category) ? "" : " " + icons.tag + " " + args.data.category.name;
    if (_.isNull(args.data.location)) $.mapview.height = 0; else {
        var location = args.data.location.name;
        $.location.text = " " + icons.map_marker + " " + location + " ";
        $.mapview.region = {
            latitude: args.data.location.latitude,
            longitude: args.data.location.longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
        var eventMarker = Alloy.Globals.Map.createAnnotation({
            latitude: args.data.location.latitude,
            longitude: args.data.location.longitude,
            title: args.data.location.name,
            pincolor: Alloy.Globals.Map.ANNOTATION_RED
        });
        $.mapview.addAnnotation(eventMarker);
    }
    $.dayBox.text = creationDate.getDate();
    $.monthBox.text = creationDate.getCMonth();
    $.name.text = args.data.name;
    $.category.text = category;
    var rows = [];
    _.forEach(args.data.aspects, function(value, key) {
        switch (value.kind.code) {
          case "CASHFLOWDATATYPE_CODE":
            var riga = Alloy.createController("rowCASHFLOW", {
                id_code: key,
                description: value.name,
                importo: value.data.importo,
                dataOperazione: value.data.dataOperazione,
                dataValuta: value.data.dataValuta,
                codTipoMovimento: value.data.tipoMovimento.codice
            }).getView();
            rows.push(riga);
            break;

          case "DOCUMENTDATATYPE_CODE":
            Ti.API.info("ASPECT DESCRIPTION: " + JSON.stringify(value));
            var riga = Alloy.createController("rowDOCUMENT", {
                id_code: key,
                titolo: value.name,
                descrizione: value.description,
                size: value.data.size,
                name: value.data.name
            }).getView();
            rows.push(riga);
            break;

          case "LINKDATATYPE_CODE":
            var riga = Alloy.createController("rowLINK", {
                id_code: key,
                description: value.description,
                type: value.data.format.type,
                title: value.data.title,
                content: value.data.content
            }).getView();
            rows.push(riga);
            break;

          case "NOTEDATATYPE_CODE":
            Ti.API.info("VALUE: " + JSON.stringify(value));
            var riga = Alloy.createController("rowNOTE", {
                id_code: key,
                titolo: value.name,
                timestamp: value.data.timestamp
            }).getView();
            rows.push(riga);
        }
    });
    $.aspectsTable.setData(rows);
    __defers["$.__views.win!open!closeActivityIndicator"] && $.__views.win.addEventListener("open", closeActivityIndicator);
    __defers["$.__views.mn_search!click!refreshTable"] && $.__views.mn_search.addEventListener("click", refreshTable);
    __defers["$.__views.__alloyId36!click!mostraDettaglioEvento"] && $.__views.__alloyId36.addEventListener("click", mostraDettaglioEvento);
    __defers["$.__views.aspectsTable!click!aspectDetail"] && $.__views.aspectsTable.addEventListener("click", aspectDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;