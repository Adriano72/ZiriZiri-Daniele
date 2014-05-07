var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

var location_result;

var u_location = require('getUserLocation');

var net = require('net');

var arrayAspetti = [];

u_location.result(function(locationData) {

	location_result = locationData;

	$.location.value = locationData.address;

	//Ti.API.info("RESULT LOCATION: " + JSON.stringify(locationData));
});

//Ti.API.info("GET LOCATION OUTPUT: "+JSON.stringify(u_location.getUsrLocation()));

//moment().format("Do MMM YY")

$.postDate.value = moment().format('LLL');
$.postDate.dataRaw = moment();
Ti.API.info("Date PRE CONVERSION: " + $.postDate.value);
Ti.API.info("RAW DATE: " + $.postDate.dataRaw);

function showDatePicker() {

	Ti.API.info("111111111 DATE GOT FROM PICKER: " + $.postDate.value);

	var riga = Alloy.createController('datePicker', function(p_data) {

		$.postDate.value = moment(p_data).format('LLL');
		$.postDate.dataRaw = moment(p_data);

		Ti.API.info("22222222 DATE GOT FROM PICKER: " + $.postDate.dataRaw);

	});

};

var rowsCat = [Ti.UI.createPickerRow({
	title : "Selezionare una categoria",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsCat.push(pkrRow);

});

$.pkrCategoria.add(rowsCat);

function savePost() {

	//Ti.API.info("POST DATE VALUE AT BEGINNING; " + $.postDate.value);
	//Ti.API.info("POST DATE PARSED AT BEGINNING; " + Date.parse($.postDate.value));

	if ($.titolo.value !== "" && $.pkrCategoria.getSelectedRow(0).id != 9999) {

		var postObj = {

			name : $.titolo.value,
			description : "DATAPOST-TEMPLATE-DEFAULT-DESC",
			referenceTime : $.postDate.dataRaw,
			category : {
				id : $.pkrCategoria.getSelectedRow(0).id,
				version : $.pkrCategoria.getSelectedRow(0).version
			},
			location : {
				name : $.location.value,
				description : $.location.value,
				latitude : location_result.latitude,
				longitude : location_result.longitude

			}
		};
		/*
		 var name = $.titolo.value;
		 var referenceTime = $.postDate.dataRaw
		 Ti.API.info("SELECTED ROW: " + JSON.stringify($.pkrCategoria.getSelectedRow(0).id));
		 var category = {
		 id : $.pkrCategoria.getSelectedRow(0).id,
		 version : $.pkrCategoria.getSelectedRow(0).version
		 };
		 var sel_location = {
		 name : $.location.value,
		 description : $.location.value,
		 latitude : location_result.latitude,
		 longitude : location_result.longitude

		 };
		 */

		Ti.API.info("JSON POST: " + JSON.stringify(postObj));
		net.savePost(postObj, function(post_id) {

			Alloy.Globals.showSpinner();

			Ti.API.info("ID POST SALVATO: " + post_id);

			if (arrayAspetti.length > 0) {// Se ci sono aspetti nel post li salvo e poi li collego al post

				callSaveAspects(function(p_arrayIdAspetti) {

					p_arrayIdAspetti.push(Ti.App.Properties.getList("postTemplateIds"));

					p_arrayIdAspetti = _.flatten(p_arrayIdAspetti);

					Ti.API.info("ARRAY ID ASPETTI DA MANDARE IN ASSOCIAZIONE: " + p_arrayIdAspetti);

					net.linkAspectsToPost(post_id, p_arrayIdAspetti, function() {
						$.window.close();
						args();
					});
				});
			} else {

				$.window.close();
				alert("Post salvato");

				setTimeout(function() {

					Ti.App.fireEvent("loading_done");
					args();
				}, 500);

			};

		});

	} else {
		alert("Il campo Titolo e il campo Categoria sono obbligatori!");
	}
};

function addCashflow(id_post) {
	//Ti.API.info("**** INSERT CASHFLOW!");

	if ($.titolo.value == "" && $.pkrCategoria.getSelectedRow(0).id == 9999) {

		alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
		return;

	};

	Alloy.createController("addCashflow", function(objRet) {

		Ti.API.info("POST DATE VALUE: " + $.postDate.dataRaw);

		var objAspect = {

			kind : {
				code : "CASHFLOWDATATYPE_CODE",
				name : "CASHFLOWDATATYPE_NAME",
				description : "CASHFLOWDATATYPE_DESCRIPTION"
			},
			data : {}

		};

		objAspect.name = $.titolo.value;

		objAspect.referenceTime = $.postDate.dataRaw;
		objAspect.category = {
			id : $.pkrCategoria.getSelectedRow(0).id,
			version : $.pkrCategoria.getSelectedRow(0).version
		};

		objAspect.location = {
			name : $.location.value,
			description : $.location.value,
			latitude : location_result.latitude,
			longitude : location_result.longitude

		};
		objAspect.data.tipoMovimento = objRet.tipoMovimento;
		objAspect.data.dataOperazione = $.postDate.dataRaw;
		objAspect.data.dataValuta = $.postDate.dataRaw;
		objAspect.data.pagamentoIncasso = objRet.pagamentoIncasso;
		objAspect.data.importo = objRet.importo;

		/*
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		 */

		var tempObj = _.clone(objAspect);
		objAspect.data = JSON.stringify(objAspect.data);

		arrayAspetti.push(objAspect);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));

		var riga = Alloy.createController('rowCASHFLOW', {

			id_code : arrayAspetti.length - 1,
			name : objAspect.name,
			importo : tempObj.data.importo,
			dataOperazione : tempObj.data.dataOperazione,
			dataValuta : tempObj.data.dataValuta,
			codTipoMovimento : tempObj.data.tipoMovimento.codice

		}).getView();
		$.newPostTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

function addDocument(id_post) {
	//Ti.API.info("**** INSERT CASHFLOW!");

	if ($.titolo.value == "" && $.pkrCategoria.getSelectedRow(0).id == 9999) {

		alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
		return;

	};

	Alloy.createController("addDocument", function(objRet) {

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
		objAspect.referenceTime = $.postDate.dataRaw;
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

		/*
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		 */

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
		objAspect.referenceTime = $.postDate.dataRaw;
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
		objAspect.referenceTime = $.postDate.dataRaw;
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

function callSaveAspects(_callback) {

	net.saveAspect(arrayAspetti, function(id_saved_aspects_array) {

		//arrayIdAspetti.push(id_aspect);

		Ti.API.info("ARRAY DEGLI ID ASPETTI SALVATI: " + id_saved_aspects_array);

		_callback(id_saved_aspects_array);

	});

};

$.window.open();
