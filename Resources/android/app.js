var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var icons = require("/icons");

var net = require("net");

Alloy.Globals.baseUrl = "https://demo.ziriziri.com";

var dFactor = Ti.Platform.displayCaps.logicalDensityFactor ? Ti.Platform.displayCaps.logicalDensityFactor : 1;

Alloy.Globals.borderRad = 4 * dFactor;

Alloy.Globals.extentedDate = require("extendedDate");

Alloy.Globals.Map = require("ti.map");

Alloy.Globals.showSpinner = {
    openSpinner: function() {
        Ti.API.info("Ciao");
        var spinner = Alloy.createController("activityIndicator").getView();
        spinner.open();
    },
    openSpinner: function() {
        Alloy.createController("activityIndicator").getView().close();
    }
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

net.getCategories(function(categoriesData) {
    var objCategorie = [];
    _.forEach(categoriesData.data, function(value) {
        objCategorie.push({
            title: value.name,
            id: value.id,
            version: value.version
        });
    });
    Ti.App.Properties.setObject("elencoCategorie", objCategorie);
});

net.getPostTemplate(function(p_postTemplate) {
    var arrayTemplateIds = [];
    _.forEach(p_postTemplate.data[0].modules, function(value) {
        arrayTemplateIds.push(value.id);
    });
    Ti.App.Properties.setList("postTemplateIds", arrayTemplateIds);
    Ti.API.info("ID TEMPLATE ASPECT: " + Ti.App.Properties.getList("postTemplateIds"));
});

net.getTipoMovimento(function(p_tipoMovimento) {
    var objTipoMov = [];
    _.forEach(p_tipoMovimento.data, function(value) {
        objTipoMov.push({
            title: value.descrizioneBreve,
            id: value.id,
            codice: value.codice,
            version: value.version
        });
    });
    Ti.App.Properties.setObject("elencoTipoMov", objTipoMov);
});

net.getPagamentoIncasso(function(p_pagamentoIncasso) {
    var objPagamIncasso = [];
    _.forEach(p_pagamentoIncasso.data, function(value) {
        objPagamIncasso.push({
            title: value.descrizioneBreve,
            id: value.id,
            version: value.version
        });
    });
    Ti.App.Properties.setObject("elencoPagamIncasso", objPagamIncasso);
});

Alloy.createController("index");