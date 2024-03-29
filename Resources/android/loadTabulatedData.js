exports.loadTabData = function() {
    function f1() {
        ZZ.API.Core.Post.Templates.list(function(templates) {
            Ti.API.info("ZZ.API.Core.Post.Templates.list success [response : " + JSON.stringify(templates) + "]");
            var template = templates[0];
            Ti.App.Properties.setObject("post_template", _.omit(template, "modules"));
            Ti.API.info("############### TEMPLATE POST ONLY ***: " + JSON.stringify(Ti.App.Properties.getObject("post_template")));
            Alloy.Models.Template.set(templates[0]);
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
            Ti.API.info("_____||||||| TEMPLATE CASHFLOW: " + JSON.stringify(templateCashflow[0]));
            Alloy.Models.Cashflow_template.unset("id");
            var templateDocument = _.filter(templateJson.modules, function(value) {
                return "FILEDOCUMENTDATATYPE_CODE" == value.kind.code;
            });
            Alloy.Models.Document_template.set(templateDocument[0]);
            Alloy.Models.Document_template.unset("id");
            Ti.API.info("DOCUMENT  TEMPLATE: " + JSON.stringify(Alloy.Models.Document_template));
            var templateLink = _.filter(templateJson.modules, function(value) {
                return "FILELINKDATATYPE_CODE" == value.kind.code;
            });
            Alloy.Models.Link_template.set(templateLink[0]);
            Alloy.Models.Link_template.unset("id");
            Ti.API.info("_____||||||| TEMPLATE LINK: " + JSON.stringify(Alloy.Models.Link_template));
            _.defer(f2);
        }, function(error) {
            Ti.API.error("ZZ.API.Core.Post.Templates.list error [error : " + error + "]");
        });
    }
    function f2() {
        ZZ.API.Core.Categories.list(function(categories) {
            Ti.API.info("ZZ.API.Core.Categories.list success [response : " + JSON.stringify(categories) + "]");
            var objCategorie = [];
            _.forEach(categories, function(value) {
                objCategorie.push({
                    name: value.name,
                    id: value.id,
                    code: value.code
                });
            });
            Alloy.Collections.categorie.reset(categories);
            Ti.API.info("************  COLLECTION CATEGORIE: " + JSON.stringify(Alloy.Collections.categorie));
            _.defer(f3);
        }, function(error) {
            Ti.API.error("ZZ.API.Core.Categories.list error [error : " + error + "]");
        });
    }
    function f3() {
        ZZ.API.Finance.CashSources.list(function(cashsources) {
            Ti.API.info("ZZ.API.Finance.CashSources.list success [response : " + JSON.stringify(cashsources) + "]");
            _.defer(f4);
        }, function(error) {
            Ti.API.error("ZZ.API.Finance.CashSources.list error [error : " + error + "]");
        });
    }
    function f4() {
        ZZ.API.Finance.PaymentModes.list(function(paymentmodes) {
            Ti.API.info("ZZ.API.Finance.PaymentModes.list success [response : " + JSON.stringify(paymentmodes) + "]");
            _.defer(f5);
        }, function(error) {
            Ti.API.error("ZZ.API.Finance.PaymentModes.list error [error : " + error + "]");
        });
    }
    function f5() {
        ZZ.API.Finance.CashflowStatuses.list(function(cashflowstatuses) {
            Ti.API.info("ZZ.API.Finance.CashflowStatuses.list success [response : " + JSON.stringify(cashflowstatuses) + "]");
            var objStatoMovimento = [];
            _.forEach(cashflowstatuses, function(value) {
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
            _.defer(f6);
        }, function(error) {
            Ti.API.error("ZZ.API.Finance.CashflowStatuses.list error [error : " + error + "]");
        });
    }
    function f6() {
        ZZ.API.Finance.PaymentTakingTools.list(function(paymenttakingtools) {
            Ti.API.info("ZZ.API.Finance.PaymentTakingTools.list success [response : " + JSON.stringify(paymenttakingtools) + "]");
            var objPagamIncasso = [];
            _.forEach(paymenttakingtools, function(value) {
                objPagamIncasso.push({
                    title: value.descrizioneBreve,
                    id: value.id,
                    codice: value.codice
                });
            });
            Ti.App.Properties.setObject("elencoPagamIncasso", objPagamIncasso);
            Ti.API.info("OBJ PAGAM INCASSO: " + JSON.stringify(Ti.App.Properties.getObject("elencoPagamIncasso")));
            _.defer(f7);
        }, function(error) {
            Ti.API.error("ZZ.API.Finance.PaymentTakingTools.list error [error : " + error + "]");
        });
    }
    function f7() {
        ZZ.API.Finance.CashflowTypes.list(function(cashflowtypes) {
            Ti.API.info("ZZ.API.Finance.CashflowTypes.list success [response : " + JSON.stringify(cashflowtypes) + "]");
            var objTipoMov = [];
            _.forEach(cashflowtypes, function(value) {
                objTipoMov.push({
                    title: value.descrizioneBreve,
                    id: value.id,
                    codice: value.codice,
                    descrizioneBreve: value.descrizioneBreve
                });
            });
            Ti.App.Properties.setObject("elencoTipoMov", objTipoMov);
            Ti.API.info("OBJ TIPO MOVIMENTO: " + JSON.stringify(Ti.App.Properties.getObject("elencoTipoMov")));
            _.defer(f8);
        }, function(error) {
            Ti.API.error("ZZ.API.Finance.CashflowTypes.list error [error : " + error + "]");
        });
    }
    function f8() {
        ZZ.API.Finance.CashflowVariabilities.list(function(cashflowvariabilities) {
            Ti.API.info("ZZ.API.Finance.CashflowVariabilities.list success [response : " + JSON.stringify(cashflowvariabilities) + "]");
            var objTipoVariabilita = [];
            _.forEach(cashflowvariabilities, function(value) {
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
        }, function(error) {
            Ti.API.error("ZZ.API.Finance.CashflowVariabilities.list error [error : " + error + "]");
        });
    }
    require("net");
    f1();
};