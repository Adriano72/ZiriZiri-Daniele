var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.winTop = true && parseInt(Ti.Platform.version, 10) >= 7 ? 20 : 0;

Alloy.Globals.screenWidth = Ti.Platform.displayCaps.platformWidth;

Alloy.Globals.postSaved = false;

Alloy.Globals.shortcutMode = false;

var icons = require("/icons");

Alloy.Models.Post = new Backbone.Model();

var Timeline = Backbone.Collection.extend({
    comparator: function(model) {
        return -model.get("referenceTime");
    }
});

Alloy.Collections.Timeline = new Timeline();

Alloy.Collections.categorie = new Backbone.Collection();

Alloy.Collections.aspettoEvento = new Backbone.Collection();

Alloy.Collections.aspettiCashflow = new Backbone.Collection();

Alloy.Collections.aspettiDocument = new Backbone.Collection();

Alloy.Models.Template = new Backbone.Model();

Alloy.Models.Post_template = new Backbone.Model();

Alloy.Models.Event_template = new Backbone.Model();

Alloy.Models.Cashflow_template = new Backbone.Model();

Alloy.Models.Document_template = new Backbone.Model();

Alloy.Models.Note_template = new Backbone.Model();

Alloy.Models.Link_template = new Backbone.Model();

Alloy.Models.Communication_template = new Backbone.Model();

Alloy.Globals.baseUrl = "https://beta.ziriziri.com/zz/api/v02";

Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");

var dFactor = Ti.Platform.displayCaps.logicalDensityFactor ? Ti.Platform.displayCaps.logicalDensityFactor : 1;

Alloy.Globals.borderRad = 4 * dFactor;

Alloy.Globals.extentedDate = require("extendedDate");

Alloy.Globals.Map = require("ti.map");

Alloy.Globals.showSpinner = function() {
    var loadingWin = Alloy.createController("activityIndicator").getView();
    loadingWin.open();
};

Alloy.Globals.Moment_IT = {
    months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
    monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
    weekdays: "Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"),
    weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
    weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
    longDateFormat: {
        LT: "HH:mm",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY LT",
        LLLL: "dddd, D MMMM YYYY LT"
    },
    calendar: {
        sameDay: "[Oggi alle] LT",
        nextDay: "[Domani alle] LT",
        nextWeek: "dddd [alle] LT",
        lastDay: "[Ieri alle] LT",
        lastWeek: "[lo scorso] dddd [alle] LT",
        sameElse: "L"
    },
    relativeTime: {
        future: function(s) {
            return (/^[0-9].+$/.test(s) ? "tra" : "in") + " " + s;
        },
        past: "%s fa",
        s: "alcuni secondi",
        m: "un minuto",
        mm: "%d minuti",
        h: "un'ora",
        hh: "%d ore",
        d: "un giorno",
        dd: "%d giorni",
        M: "un mese",
        MM: "%d mesi",
        y: "un anno",
        yy: "%d anni"
    },
    ordinal: "%dÂº",
    week: {
        dow: 1,
        doy: 4
    }
};

var rc;

Alloy.createController("index");