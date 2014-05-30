var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.winTop = 0;

var icons = require("/icons");

Alloy.Globals.cachedTimeline = Ti.App.Properties.getObject("cachedTimeline", null);

Ti.API.info("TIMELINE CACHEATA: " + JSON.stringify(Alloy.Globals.cachedTimeline));

var Post = Backbone.Model.extend();

Alloy.Models.Post = new Post();

var Timeline = Backbone.Collection.extend();

Alloy.Collections.Timeline = new Timeline();

Alloy.Globals.baseUrl = "https://demo.ziriziri.com";

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

var rc = Alloy.Globals.Map.isGooglePlayServicesAvailable();

switch (rc) {
  case Alloy.Globals.Map.SUCCESS:
    Ti.API.info("Google Play services is installed.");
    break;

  case Alloy.Globals.Map.SERVICE_MISSING:
    alert("Google Play services is missing. Please install Google Play services from the Google Play store.");
    break;

  case Alloy.Globals.Map.SERVICE_VERSION_UPDATE_REQUIRED:
    alert("Google Play services is out of date. Please update Google Play services.");
    break;

  case Alloy.Globals.Map.SERVICE_DISABLED:
    alert("Google Play services is disabled. Please enable Google Play services.");
    break;

  case Alloy.Globals.Map.SERVICE_INVALID:
    alert("Google Play services cannot be authenticated. Reinstall Google Play services.");
    break;

  default:
    alert("Unknown error.");
}

Alloy.createController("index");