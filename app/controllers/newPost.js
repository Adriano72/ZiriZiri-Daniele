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
		net.savePost(postObj, function(post_id){
			
			Ti.API.info("ID POST SALVATO: "+post_id);
			
			if(arrayAspetti.length > 0){
				Ti.API.info("SALVA ASPETTI...");
				addCashflow(post_id);
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
		objAspect.data.pagamentoIncasso = objRet.pagamentoIncasso;
		objAspect.data.importo = objRet.importo;

		/*
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		 */
		objAspect.data = JSON.stringify(objAspect.data);

		arrayAspetti.push(objAspect);
		
		saveAspects()
		

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

function saveAspects(p_aspects){
	
	var idAspectsToAssociate = [];
	
	$.newPostTable.appendRow();
	
	net.saveAspect(objAspect, function(aspect_id){
			
			Ti.API.info("ID ASPETTO SALVATO: "+aspect_id);
						
	});
	
}
