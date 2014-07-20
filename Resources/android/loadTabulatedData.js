exports.loadTabData = function() {
    var net = require("net");
    net.getCategories(function(categoriesData) {
        var objCategorie = [];
        Ti.API.info("CATEGORIE " + JSON.stringify(categoriesData));
        _.forEach(categoriesData.data, function(value) {
            objCategorie.push({
                name: value.name,
                id: value.id,
                code: value.code
            });
        });
        Alloy.Collections.categorie.reset(objCategorie);
        Ti.API.info("COLLECTION CATEGORIE: " + JSON.stringify(Alloy.Collections.categorie));
    });
    net.getPostTemplate(0, 1, function(p_postTemplate) {
        Alloy.Models.Template.set(p_postTemplate.data[0]);
        Alloy.Models.Template.unset("id");
        var templateJson = Alloy.Models.Template.toJSON();
        var post_only_template = _.omit(templateJson, "modules");
        Alloy.Models.Post_template.set(post_only_template);
        var templateEvents = _.filter(templateJson.modules, function(value) {
            return "EVENTDATATYPE_CODE" == value.kind.code;
        });
        Alloy.Models.Event_template.set(templateEvents[0]);
        Alloy.Models.Event_template.unset("id");
        var templateCashflow = _.filter(templateJson.modules, function(value) {
            return "CASHFLOWDATATYPE_CODE" == value.kind.code;
        });
        Alloy.Models.Cashflow_template.set(templateCashflow[0]);
        Alloy.Models.Cashflow_template.unset("id");
        var templateDocument = _.filter(templateJson.modules, function(value) {
            return "FILEDOCUMENTDATATYPE_CODE" == value.kind.code;
        });
        Alloy.Models.Document_template.set(templateDocument[0]);
        Alloy.Models.Document_template.unset("id");
        Ti.API.info("DOCUMENT  TEMPLATE: " + JSON.stringify(Alloy.Models.Document_template));
    });
    net.getTipoMovimento(function(p_tipoMovimento) {
        var objTipoMov = [];
        _.forEach(p_tipoMovimento.data, function(value) {
            objTipoMov.push({
                title: value.descrizioneBreve,
                id: value.id,
                codice: value.codice,
                descrizioneBreve: value.descrizioneBreve
            });
        });
        Ti.App.Properties.setObject("elencoTipoMov", objTipoMov);
        Ti.API.info("OBJ TIPO MOVIMENTO: " + JSON.stringify(Ti.App.Properties.getObject("elencoTipoMov")));
    });
    net.getVariabilita(function(p_tipoVariabilita) {
        var objTipoVariabilita = [];
        _.forEach(p_tipoVariabilita.data, function(value) {
            objTipoVariabilita.push({
                title: value.descrizioneBreve,
                codice: value.codice,
                descrizioneBreve: value.descrizioneBreve,
                descrizioneLunga: value.descrizioneLunga,
                id: value.id
            });
        });
        Ti.App.Properties.setObject("tipoVariabilita", objTipoVariabilita);
        Ti.API.info("OBJ VARIABILITA': " + JSON.stringify(Ti.App.Properties.getObject("tipoVariabilita")));
    });
    net.getStatoMovimento(function(p_statoMovimento) {
        var objStatoMovimento = [];
        _.forEach(p_statoMovimento.data, function(value) {
            objStatoMovimento.push({
                title: value.descrizioneBreve,
                codice: value.codice,
                descrizioneBreve: value.descrizioneBreve,
                descrizioneLunga: value.descrizioneLunga,
                id: value.id
            });
        });
        Ti.App.Properties.setObject("statoMovimento", objStatoMovimento);
        Ti.API.info("OBJ STATO MOVIMENTO': " + JSON.stringify(Ti.App.Properties.getObject("statoMovimento")));
    });
    net.getPagamentoIncasso(function(p_pagamentoIncasso) {
        var objPagamIncasso = [];
        _.forEach(p_pagamentoIncasso.data, function(value) {
            objPagamIncasso.push({
                title: value.descrizioneBreve,
                id: value.id,
                codice: value.codice
            });
        });
        Ti.App.Properties.setObject("elencoPagamIncasso", objPagamIncasso);
        Ti.API.info("OBJ PAGAM INCASSO: " + JSON.stringify(Ti.App.Properties.getObject("elencoPagamIncasso")));
    });
};