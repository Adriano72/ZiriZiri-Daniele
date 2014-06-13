var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));

function openEvent() {
	//Ti.API.info("win OPEN");
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
// ******* PICKER TIPO MOVIMENTO *******
var rowsTipoMov = [Ti.UI.createPickerRow({
	title : "",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("elencoTipoMov"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsTipoMov.push(pkrRow);

});

$.pkrTipoMovimento.add(rowsTipoMov);


// ******* PICKER PAGAMENTO INCASSO *******
var rowsPagamIncasso = [Ti.UI.createPickerRow({
	title : "",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("elencoPagamIncasso"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsPagamIncasso.push(pkrRow);

});

$.pkrPagamentoIncasso.add(rowsPagamIncasso);

// ******* PICKER STATO MOVIMENTO *******
var rowsStatoMovimento = [Ti.UI.createPickerRow({
	title : "",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("statoMovimento"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsStatoMovimento.push(pkrRow);

});

$.pkrStatoMovimento.add(rowsStatoMovimento);

// ******* PICKER VARIABILITA' *******
var rowsVariabilita = [Ti.UI.createPickerRow({
	title : "",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("tipoVariabilita"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsVariabilita.push(pkrRow);

});

$.pkrVariabilita.add(rowsVariabilita);



function saveCashflow() { 
	
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
		
		//kind:{code:"CASHFLOWDATATYPE_CODE"},
		tipoMovimento: {codice: tipoMovCodice, id: tipoMovId, version: tipoMovVersion},
		pagamentoIncasso: {id: pagamIncID, version: pagamIncVersion},
		importo: $.importo.value
		/*
		"kind":{"code":"CASHFLOWDATATYPE_CODE"},
		"data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		*/
		
	};
	
	args(objCashFlow);
	$.win.close();
	
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
