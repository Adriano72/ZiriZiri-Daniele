var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));

function showTipoMovPicker(e) {

	var riga = Alloy.createController('tipoMovPicker', function(p_data) {
		//$.postDate.value = moment(p_data).format('LL');
		//Ti.API.info("PARAMETRO: "+p_data);
	}).getView();

};

var rowsTipoMov = [Ti.UI.createPickerRow({
	title : "Tipo Movimento",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("elencoTipoMov"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsTipoMov.push(pkrRow);

});

$.pkrTipoMovimento.add(rowsTipoMov);

var rowsPagamIncasso = [Ti.UI.createPickerRow({
	title : "Pagamento Incasso",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("elencoPagamIncasso"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsPagamIncasso.push(pkrRow);

});

$.pkrPagamentoIncasso.add(rowsPagamIncasso);

function saveAspect() { 
	
	if($.pkrPagamentoIncasso.getSelectedRow(0).id != 9999 && $.pkrTipoMovimento.getSelectedRow(0).id != 9999){
		
	//Ti.API.info("TIPO MOVIM OBJ: "+JSON.stringify($.pkrTipoMovimento.getSelectedRow(0)));
	//Ti.API.info("PAGAM INCASSO OBJ: "+JSON.stringify($.pkrPagamentoIncasso.getSelectedRow(0)));
	
	var tipoMovCodice = $.pkrTipoMovimento.getSelectedRow(0).codice;
	var tipoMovId = $.pkrTipoMovimento.getSelectedRow(0).id;
	var tipoMovVersion = $.pkrTipoMovimento.getSelectedRow(0).version;
	
	//var pagamIncDescBreve = $.pkrPagamentoIncasso.getSelectedRow(0).title;
	var pagamIncID = $.pkrPagamentoIncasso.getSelectedRow(0).id;
	var pagamIncVersion = $.pkrPagamentoIncasso.getSelectedRow(0).version;
	
	var objCashFlow = {
		
		kind:{code:"CASHFLOWDATATYPE_CODE"},
		tipoMovimento: {codice: tipoMovCodice, id: tipoMovId, version: tipoMovVersion},
		pagamentoIncasso: {id: pagamIncID, version: pagamIncVersion},
		importo: $.importo.value
		/*
		"kind":{"code":"CASHFLOWDATATYPE_CODE"},
		"data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		*/
		
	};
	
	args(objCashFlow);
	$.window.close();
	
	//Ti.API.info("MOSTRO : "+objCashFlow);
	/*
	
	var objCashFlow = {
		"kind":{"code":"CASHFLOWDATATYPE_CODE"},
		"data" :  "{\"tipoMovimento\":{\"codice\":\"USC\",\"id\":1,\"version\":0},\"pagamentoIncasso\":null,\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":55}"
	*/
	
	}else{
		alert("I campi Tipo Movimento e Pagamento Incasso sono obbligatori!");
	}
	

};
