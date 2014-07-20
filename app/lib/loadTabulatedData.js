exports.loadTabData = function() {

	var net = require('net');
	
	net.getCategories(function(categoriesData) {

		var objCategorie = [];

		Ti.API.info("CATEGORIE " + JSON.stringify(categoriesData));

		_.forEach(categoriesData.data, function(value, key) {

			//Ti.API.info("Categoria: "+key+" : "+value.name);

			objCategorie.push({
				"name" : value.name,
				"id" : value.id,
				"code" : value.code
			});

		});
		
		Alloy.Collections.categorie.reset(objCategorie);

		//Ti.App.Properties.setObject("elencoCategorie", objCategorie);

		Ti.API.info("COLLECTION CATEGORIE: " + JSON.stringify(Alloy.Collections.categorie));

	});

	net.getPostTemplate(0, 1, function(p_postTemplate) {

		// ***** EXTRACT POST ONLY TEMPLATE *****************
		Alloy.Models.Template.set(p_postTemplate.data[0]);
		Alloy.Models.Template.unset("id");

		var templateJson = Alloy.Models.Template.toJSON();
		var post_only_template = _.omit(templateJson, 'modules');

		Alloy.Models.Post_template.set(post_only_template);

		// ***** EXTRACT EVENTS TEMPLATE *****************
		var templateEvents = _.filter(templateJson.modules, function(value) {
			return value.kind.code == "EVENTDATATYPE_CODE";
		});

		Alloy.Models.Event_template.set(templateEvents[0]);
		Alloy.Models.Event_template.unset("id");

		// ***** EXTRACT CASHFLOW TEMPLATE *****************
		var templateCashflow = _.filter(templateJson.modules, function(value) {
			return value.kind.code == "CASHFLOWDATATYPE_CODE";
		});

		Alloy.Models.Cashflow_template.set(templateCashflow[0]);
		Alloy.Models.Cashflow_template.unset("id");

		// ***** EXTRACT DOCUMENT TEMPLATE *****************
		var templateDocument = _.filter(templateJson.modules, function(value) {
			return value.kind.code == "FILEDOCUMENTDATATYPE_CODE";
		});

		Alloy.Models.Document_template.set(templateDocument[0]);
		Alloy.Models.Document_template.unset("id");

		Ti.API.info("DOCUMENT  TEMPLATE: " + JSON.stringify(Alloy.Models.Document_template));
		/*
		 //Ti.API.info("POST TEMPLATE MODEL: " + JSON.stringify(Alloy.Models.Post_template));

		 var arrayTemplateIds = [];

		 _.forEach(p_postTemplate.data[0].modules, function(value, key) {
		 //Ti.API.info("ID TEMPLATE ASPECT: "+value.id);
		 arrayTemplateIds.push(value.id);
		 });

		 Ti.App.Properties.setList("postTemplateIds", arrayTemplateIds);

		 Ti.API.info("ID TEMPLATE ASPECT: " + Ti.App.Properties.getList("postTemplateIds"));
		 */

	});
	
	

	net.getTipoMovimento(function(p_tipoMovimento) {

		var objTipoMov = [];

		_.forEach(p_tipoMovimento.data, function(value, key) {

			//Ti.API.info("Categoria: "+key+" : "+value.name);

			objTipoMov.push({
				"title" : value.descrizioneBreve,
				"id" : value.id,
				"codice" : value.codice,
				"descrizioneBreve" : value.descrizioneBreve
			});

		});

		Ti.App.Properties.setObject("elencoTipoMov", objTipoMov);

		Ti.API.info("OBJ TIPO MOVIMENTO: "+JSON.stringify(Ti.App.Properties.getObject("elencoTipoMov")));

	});

	net.getVariabilita(function(p_tipoVariabilita) {

		var objTipoVariabilita = [];

		_.forEach(p_tipoVariabilita.data, function(value, key) {

			//Ti.API.info("Categoria: "+key+" : "+value.name);

			objTipoVariabilita.push({
				"title" : value.descrizioneBreve,
				"codice" : value.codice,
				"descrizioneBreve" : value.descrizioneBreve,
				"descrizioneLunga" : value.descrizioneLunga,
				"id" : value.id
			});

		});

		Ti.App.Properties.setObject("tipoVariabilita", objTipoVariabilita);

		Ti.API.info("OBJ VARIABILITA': " + JSON.stringify(Ti.App.Properties.getObject("tipoVariabilita")));

	});

	net.getStatoMovimento(function(p_statoMovimento) {

		var objStatoMovimento = [];

		_.forEach(p_statoMovimento.data, function(value, key) {

			//Ti.API.info("Categoria: "+key+" : "+value.name);

			objStatoMovimento.push({
				"title" : value.descrizioneBreve,
				"codice" : value.codice,
				"descrizioneBreve" : value.descrizioneBreve,
				"descrizioneLunga" : value.descrizioneLunga,
				"id" : value.id
			});

		});

		Ti.App.Properties.setObject("statoMovimento", objStatoMovimento);

		Ti.API.info("OBJ STATO MOVIMENTO': " + JSON.stringify(Ti.App.Properties.getObject("statoMovimento")));

	});

	net.getPagamentoIncasso(function(p_pagamentoIncasso) {

		//Ti.API.info("OBJ PAGAMENTO INCASSO: "+JSON.stringify(p_pagamentoIncasso));
		var objPagamIncasso = [];

		_.forEach(p_pagamentoIncasso.data, function(value, key) {

			//Ti.API.info("Categoria: "+key+" : "+value.name);

			objPagamIncasso.push({
				"title" : value.descrizioneBreve,
				"id" : value.id,
				"codice" : value.codice
			});

		});

		Ti.App.Properties.setObject("elencoPagamIncasso", objPagamIncasso);

		Ti.API.info("OBJ PAGAM INCASSO: "+JSON.stringify(Ti.App.Properties.getObject("elencoPagamIncasso")));
	});

};
