var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

var net = require('net');

var location = null;

var dataFrom, dataTo = null;

var timeNow = moment();

var arrayAspetti = [];

function openEvent() {
	//Ti.API.info("WINDOW OPEN");
	theActionBar = $.win.activity.actionBar;

	$.win.activity.invalidateOptionsMenu();

	theActionBar = $.win.activity.actionBar;
	if (theActionBar != undefined) {
		theActionBar.displayHomeAsUp = true;
		theActionBar.setIcon('images/logo-test.png');
		//theActionBar.setTitle(self.title);
		theActionBar.onHomeIconItemSelected = function() {
			$.win.close({
				animate : true
			});
		};
	};

};

var modJson = Alloy.Models.Post_template.toJSON();

Ti.API.info("MODEL JSON: " + JSON.stringify(modJson));
Ti.API.info("MODEL CATEGORY: " + modJson.category.name);



$.date.text = moment(Alloy.Models.Post_template.get("referenceTime")).fromNow();

$.category.text = (!_.isNull(modJson.category) ? modJson.category.name : "");

Ti.API.info("CATEGORIA: " + modJson.category.name);

var rating = Alloy.Models.Post_template.get("rating");



$.rating_1.image = (rating > 0) ? "/images/star-small.png" : "";
$.rating_2.image = (rating > 1) ? "/images/star-small.png" : "";
$.rating_3.image = (rating > 2) ? "/images/star-small.png" : "";
$.rating_4.image = (rating > 3) ? "/images/star-small.png" : "";
$.rating_5.image = (rating > 4) ? "/images/star-small.png" : "";

//Alloy.Models.Post_template.set("tag", (_.isNull(modJson.tags)) ? "" : modJson.tags[0].name);

var aspects = modJson.aspects;

Ti.API.info("ASPETTI JSON: " + JSON.stringify(aspects));

Alloy.Models.Post_template.trigger('change');

function submitPost() {

	Alloy.Globals.loading.show('Salvataggio in corso...', false);

	Ti.API.info("JSON POST: " + JSON.stringify(Alloy.Models.Post_template));

	net.savePost(Alloy.Models.Post_template, function(post_id, postToAddToTimeline) {

		

		Ti.API.info("ID POST SALVATO: " + post_id);

		if (arrayAspetti.length > 0) {// Se ci sono aspetti nel post li salvo e poi li collego al post

			callSaveAspects(function(p_arrayIdAspetti) {

				//p_arrayIdAspetti.push(Ti.App.Properties.getList("postTemplateIds"));

				p_arrayIdAspetti = _.flatten(p_arrayIdAspetti);

				Ti.API.info("ARRAY ID ASPETTI DA MANDARE IN ASSOCIAZIONE: " + p_arrayIdAspetti);

				net.linkAspectsToPost(post_id, p_arrayIdAspetti, function(postToAddToTimeline) {
					Ti.API.info("OGG CON ASPETTI DA AGGIUNGERE TIMELINE: "+JSON.stringify(postToAddToTimeline));
					Alloy.Collections.Timeline.add(postToAddToTimeline);
					$.win.close();
					args.close();
					Alloy.Globals.postSaved = true;
					
					
				});
			});
		} else {
			
			Alloy.Collections.Timeline.add(postToAddToTimeline);
			$.win.close();
			args.close();
			Alloy.Globals.postSaved = true;
			//alert("Post salvato");
			/*
			setTimeout(function() {

				Ti.App.fireEvent("loading_done");
				
			}, 500);
			*/

		};

	});

}

function callSaveAspects(_callback) {

	net.saveAspect(arrayAspetti, function(id_saved_aspects_array) {

		//arrayIdAspetti.push(id_aspect);

		Ti.API.info("ARRAY DEGLI ID ASPETTI SALVATI: " + id_saved_aspects_array);

		_callback(id_saved_aspects_array);

	});

};

function addEvent() {
	
	Alloy.createController("addEvent", function(objRet) {

		arrayAspetti.push(objRet);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
		
		var aspettoDataJson = JSON.parse(objRet.data);
		
		Ti.API.info("DATA PARSATO: "+JSON.stringify(aspettoDataJson));
		
		var riga = Alloy.createController('rowCASHFLOW', {

			//id_code : arrayAspetti.length - 1,			
			importo : aspettoDataJson.importo,	
			modalitaPagamento : aspettoDataJson.pagamentoIncasso.descrizioneBreve,
			tipoMovimento : aspettoDataJson.tipoMovimento.descrizioneBreve

		}).getView();
		$.postTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
	
	/*
	Alloy.createController("addEvent", function(p_retLocation, p_dataFrom, p_dataTo) {

		location = p_retLocation;

		dataFrom = moment(p_dataFrom).format('LLL');
		;

		dataTo = moment(p_dataTo).format('LLL');
		;

		Ti.API.info("LOCATION: " + JSON.stringify(location));
		Ti.API.info("DATA DA: " + dataFrom);
		Ti.API.info("DATA A: " + dataTo);
		/*
		 var objAspect = {

		 kind : {
		 code : "LINKDATATYPE_CODE",
		 name : "LINKDATATYPE_NAME",
		 description : "LINKDATATYPE_DESCRIPTION"

		 },
		 data : {}

		 };

		 objAspect.name = objRet.name;
		 objAspect.description = objRet.description;
		 objAspect.referenceTime = $.postDate.dataRaw;
		 objAspect.category = {
		 id : $.pkrCategoria.getSelectedRow(0).id,
		 version : $.pkrCategoria.getSelectedRow(0).version
		 };

		 objAspect.data.format = {
		 name : "LINK",
		 description : "HTML LINK",
		 type : "LINK"
		 };

		 objAspect.data.title = objRet.name;
		 objAspect.data.name = objRet.name;
		 objAspect.data.description = objRet.description;
		 objAspect.data.content = (objRet.content.indexOf("http://") == -1) ? "http://" + objRet.content : objRet.content;
		 objAspect.data.preview = null;

		 Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));

		 var tempObj = _.clone(objAspect);
		 objAspect.data = JSON.stringify(objAspect.data);

		 arrayAspetti.push(objAspect);

		 Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
		 */
		/*
		var riga = Alloy.createController('rowEvent', {

			//id_code : arrayAspetti.length - 1,
			dataDa : dataFrom,
			dataA : dataTo,
			posizione : location.name

		}).getView();
		$.newPostTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
	*/
};

function addCashflow(id_post) {
	//Ti.API.info("**** INSERT CASHFLOW!");



	Alloy.createController("addCashflow", function(objRet) {

		arrayAspetti.push(objRet);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));
		
		var aspettoDataJson = JSON.parse(objRet.data);
		
		Ti.API.info("DATA PARSATO: "+JSON.stringify(aspettoDataJson));
		
		var riga = Alloy.createController('rowCASHFLOW', {

			//id_code : arrayAspetti.length - 1,			
			importo : aspettoDataJson.importo,	
			modalitaPagamento : aspettoDataJson.pagamentoIncasso.descrizioneBreve,
			tipoMovimento : aspettoDataJson.tipoMovimento.descrizioneBreve

		}).getView();
		$.postTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

function addDocument(id_post) {
	//Ti.API.info("**** INSERT CASHFLOW!");


	Alloy.createController("addDocument", function(objRet) {
		
		arrayAspetti.push(objRet);
		
		var aspettoDataJson = JSON.parse(objRet.data);
		
		Ti.API.info("DATA PARSATO: "+JSON.stringify(aspettoDataJson));
		
		var riga = Alloy.createController('rowDOCUMENT', {

			//id_code : arrayAspetti.length - 1,			
			titolo : aspettoDataJson.title,	
			formato : aspettoDataJson.format,
			hashedImage : aspettoDataJson.content

		}).getView();
		$.postTable.appendRow(riga);
	
		/*
		var objAspect = {

			kind : {
				code : "DOCUMENTDATATYPE_CODE",
				name : "DOCUMENTDATATYPE_NAME",
				description : "DOCUMENTDATATYPE_DESCRIPTION"
			},
			data : {}

		};

		objAspect.name = objRet.name;
		objAspect.description = objRet.description;
		objAspect.referenceTime = timeNow;
		objAspect.category = {
			id : $.pkrCategoria.getSelectedRow(0).id,
			version : $.pkrCategoria.getSelectedRow(0).version
		};

		objAspect.data.title = objRet.name;
		objAspect.data.description = objRet.description;
		objAspect.data.name = objRet.fileName;
		objAspect.data.size = objRet.fileSize;
		objAspect.data.timestamp = moment();
		objAspect.data.content = objRet.content;



		Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));

		var tempObj = _.clone(objAspect);
		objAspect.data = JSON.stringify(objAspect.data);

		arrayAspetti.push(objAspect);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));

		var riga = Alloy.createController('rowDOCUMENT', {

			id_code : arrayAspetti.length - 1,
			titolo : tempObj.name,
			descrizione : tempObj.description,
			size : tempObj.data.size,
			name : tempObj.data.name

		}).getView();
		$.newPostTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
		*/
	}).getView().open();
};

function addLink(id_post) {
	//Ti.API.info("**** INSERT CASHFLOW!");

	if ($.titolo.value == "" && $.pkrCategoria.getSelectedRow(0).id == 9999) {

		alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
		return;

	};

	Alloy.createController("addLink", function(objRet) {

		var objAspect = {

			kind : {
				code : "LINKDATATYPE_CODE",
				name : "LINKDATATYPE_NAME",
				description : "LINKDATATYPE_DESCRIPTION"

			},
			data : {}

		};

		objAspect.name = objRet.name;
		objAspect.description = objRet.description;
		objAspect.referenceTime = timeNow;
		objAspect.category = {
			id : $.pkrCategoria.getSelectedRow(0).id,
			version : $.pkrCategoria.getSelectedRow(0).version
		};

		/*
		 objAspect.tags = [{
		 name : "ARTICOLO",
		 description : "ARTICOLO",
		 }];
		 */

		objAspect.data.format = {
			name : "LINK",
			description : "HTML LINK",
			type : "LINK"
		};

		objAspect.data.title = objRet.name;
		objAspect.data.name = objRet.name;
		objAspect.data.description = objRet.description;
		objAspect.data.content = (objRet.content.indexOf("http://") == -1) ? "http://" + objRet.content : objRet.content;
		objAspect.data.preview = null;

		/*
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		 */

		Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));

		var tempObj = _.clone(objAspect);
		objAspect.data = JSON.stringify(objAspect.data);

		arrayAspetti.push(objAspect);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));

		var riga = Alloy.createController('rowLINK', {

			id_code : arrayAspetti.length - 1,
			titolo : tempObj.name,
			descrizione : tempObj.description,
			content : tempObj.data.content

		}).getView();
		$.newPostTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

function addNote(id_post) {
	Ti.API.info("**** INSERT NOTE!");

	if ($.titolo.value == "" && $.pkrCategoria.getSelectedRow(0).id == 9999) {

		alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
		return;

	};

	Alloy.createController("addNote", function(objRet) {

		var objAspect = {

			kind : {
				code : "NOTEDATATYPE_CODE",
				name : "NOTEDATATYPE_NAME",
				description : "NOTEDATATYPE_DESCRIPTION"

			},
			data : {}

		};

		objAspect.name = objRet.name;
		objAspect.description = objRet.description;
		objAspect.referenceTime = timeNow;
		objAspect.category = {
			id : $.pkrCategoria.getSelectedRow(0).id,
			version : $.pkrCategoria.getSelectedRow(0).version
		};

		/*
		 objAspect.tags = [{
		 name : "ARTICOLO",
		 description : "ARTICOLO",
		 }];
		 */

		objAspect.data.title = objRet.name;
		objAspect.data.description = objRet.description;
		objAspect.data.content = objRet.content;

		/*
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		 */

		Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));

		var tempObj = _.clone(objAspect);
		objAspect.data = JSON.stringify(objAspect.data);

		arrayAspetti.push(objAspect);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));

		var riga = Alloy.createController('rowNOTE', {

			id_code : arrayAspetti.length - 1,
			titolo : tempObj.data.title,
			content : tempObj.data.content

		}).getView();
		$.newPostTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};



$.win.open();

$.win.addEventListener("close", function() {
	$.destroy();
});
