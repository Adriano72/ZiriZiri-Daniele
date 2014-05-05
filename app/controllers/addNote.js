var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));


function createProtoObj() {

	if ($.titolo.value != "" && $.content.value != "") {

		//Ti.API.info("TIPO MOVIM OBJ: "+JSON.stringify($.pkrTipoMovimento.getSelectedRow(0)));
		//Ti.API.info("PAGAM INCASSO OBJ: "+JSON.stringify($.pkrPagamentoIncasso.getSelectedRow(0)));

		
		var objNote = {

			titolo : $.titolo.value,
			description : $.titolo.value,
			content : $.content.value

		};
		
		Ti.API.info("********** Titolo : "+$.titolo.value);

		args(objNote);
		$.window.close();

		//Ti.API.info("MOSTRO : "+objCashFlow);
		/*

		 var objCashFlow = {
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data" :  "{\"tipoMovimento\":{\"codice\":\"USC\",\"id\":1,\"version\":0},\"pagamentoIncasso\":null,\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":55}"
		 */

	} else {
		alert("I campi titolo e testo sono obbligatori");
	}

};



