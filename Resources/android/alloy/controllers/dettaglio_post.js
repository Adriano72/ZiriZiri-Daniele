function Controller() {
    function aspectDetail(e) {
        Ti.API.info("CLICKED: " + e.source.id_code);
        Ti.API.info("ASPETTO SELEZIONATO; " + args.data.aspects[e.source.id_code].kind.code);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dettaglio_post";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.dettaglio_post = Ti.UI.createWindow({
        backgroundColor: "#d8d8d8",
        title: "Dettaglio Post",
        id: "dettaglio_post"
    });
    $.__views.dettaglio_post && $.addTopLevelView($.__views.dettaglio_post);
    $.__views.detailHeader = Ti.UI.createView({
        layout: "horizontal",
        top: 5,
        width: Ti.UI.FILL,
        id: "detailHeader"
    });
    $.__views.dettaglio_post.add($.__views.detailHeader);
    $.__views.dateBox = Ti.UI.createView({
        width: 50,
        height: 60,
        left: 5,
        top: 5,
        backgroundColor: "red",
        borderRadius: Alloy.Globals.borderRad,
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
        backgroundColor: "white",
        id: "monthBox"
    });
    $.__views.dateBox.add($.__views.monthBox);
    $.__views.headerBox = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        id: "headerBox"
    });
    $.__views.detailHeader.add($.__views.headerBox);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontFamily: "AppIcons",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        left: 5,
        top: 5,
        id: "name"
    });
    $.__views.headerBox.add($.__views.name);
    $.__views.aspectsTable = Ti.UI.createTableView({
        top: 100,
        bottom: 5,
        separatorColor: "transparent",
        id: "aspectsTable"
    });
    $.__views.dettaglio_post.add($.__views.aspectsTable);
    aspectDetail ? $.__views.aspectsTable.addEventListener("click", aspectDetail) : __defers["$.__views.aspectsTable!click!aspectDetail"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("ARGS: " + args.data.id);
    var creationDate = new Date(args.data.creationTime);
    $.dayBox.text = creationDate.getDate();
    $.monthBox.text = creationDate.getCMonth();
    $.name.text = args.data.name;
    var rows = [];
    _.forEach(args.data.aspects, function(value, key) {
        switch (value.kind.code) {
          case "CASHFLOWDATATYPE_CODE":
            var riga = Alloy.createController("rowCASHFLOW", {
                id_code: key,
                description: value.description,
                importo: value.data.importo,
                dataOperazione: value.data.dataOperazione,
                dataValuta: value.data.dataValuta,
                codTipoMovimento: value.data.tipoMovimento.codice
            }).getView();
            rows.push(riga);
            break;

          case "DOCUMENTDATATYPE_CODE":
            var riga = Alloy.createController("rowDOCUMENT", {
                id_code: key,
                description: value.description,
                format: value.data.format.name,
                type: value.data.format.type,
                title: value.data.title
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
            var riga = Alloy.createController("rowNOTE", {
                id_code: key,
                description: value.data.title,
                timestamp: value.data.timestamp
            }).getView();
            rows.push(riga);
        }
    });
    $.aspectsTable.setData(rows);
    __defers["$.__views.aspectsTable!click!aspectDetail"] && $.__views.aspectsTable.addEventListener("click", aspectDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;