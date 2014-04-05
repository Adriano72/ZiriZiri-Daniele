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

function showDatePicker() {

	var riga = Alloy.createController('datePicker', function(p_data) {

		Ti.API.info("******** FIRE ********");
		$.postDate.value = moment(p_data).format('LLL');

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

	if ($.titolo.value !== "" && $.pkrCategoria.getSelectedRow(0).id != 9999) {

		var postObj = {

			name : $.titolo.value,
			description : "DATAPOST-TEMPLATE-DEFAULT-DESC",
			referenceTime : Date.parse($.postDate.value),
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
		 var referenceTime = Date.parse($.postDate.value);
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
		net.savePost(postObj, function(post_id) {

			Ti.API.info("ID POST SALVATO: " + post_id);

			if (arrayAspetti.length > 0) {// Se ci sono aspetti nel post li salvo e poi li collego al post

				callSaveAspects(function(p_arrayIdAspetti) {

					p_arrayIdAspetti.push(Ti.App.Properties.getList("postTemplateIds"));

					p_arrayIdAspetti = _.flatten(p_arrayIdAspetti);

					Ti.API.info("ARRAY ID ASPETTI DA MANDARE IN ASSOCIAZIONE: " + p_arrayIdAspetti);

					net.linkAspectsToPost(post_id, p_arrayIdAspetti);
				});
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

		var objAspect = {

			kind : {
				code : "CASHFLOWDATATYPE_CODE"
			},
			data : {}

		};

		objAspect.name = $.titolo.value;

		objAspect.referenceTime = Date.parse($.postDate.value);
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
		objAspect.data.dataOperazione = Date.parse($.postDate.value);
		objAspect.data.dataValuta = Date.parse($.postDate.value);
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

		switch (objAspect.kind.code) {

			case "CASHFLOWDATATYPE_CODE":

				var riga = Alloy.createController('rowCASHFLOW', {

					id_code : arrayAspetti.length - 1,
					name : objAspect.name,
					importo : tempObj.data.importo,
					dataOperazione : tempObj.data.dataOperazione,
					dataValuta : tempObj.data.dataValuta,
					codTipoMovimento : tempObj.data.tipoMovimento.codice

				}).getView();
				$.newPostTable.appendRow(riga);

				break;

			case "DOCUMENTDATATYPE_CODE":
				Ti.API.info("ASPECT DESCRIPTION: " + value.name);

				var riga = Alloy.createController('rowDOCUMENT', {

					id_code : key,
					description : value.name,
					format : (_.isNull(value.data.format)) ? "Non disponibile" : value.data.format.name,
					type : (_.isNull(value.data.format)) ? "Non disponibile" : value.data.format.type,
					title : value.data.title

				}).getView();
				rows.push(riga);

				break;

			case "LINKDATATYPE_CODE":

				var riga = Alloy.createController('rowLINK', {

					id_code : key,
					description : value.description,
					type : value.data.format.type,
					title : value.data.title,
					content : value.data.content

				}).getView();
				rows.push(riga);

				break;

			case "NOTEDATATYPE_CODE":

				var riga = Alloy.createController('rowNOTE', {

					id_code : key,
					description : value.data.title,
					timestamp : value.data.timestamp

				}).getView();
				rows.push(riga);
				break;
		}

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

function callSaveAspects(_callback) {

	net.saveAspect(arrayAspetti, function(id_saved_aspects_array) {


		//arrayIdAspetti.push(id_aspect);

		Ti.API.info("ARRAY DEGLI ID ASPETTI SALVATI: " + id_saved_aspects_array);

		_callback(id_saved_aspects_array);

	});

}
