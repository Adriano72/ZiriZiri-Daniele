var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));


function createProtoObj() {

	if ($.titolo.value != "" && $.descrizione.value != "" && $.content.value != "") {

		//Ti.API.info("TIPO MOVIM OBJ: "+JSON.stringify($.pkrTipoMovimento.getSelectedRow(0)));
		//Ti.API.info("PAGAM INCASSO OBJ: "+JSON.stringify($.pkrPagamentoIncasso.getSelectedRow(0)));

		var titolo = $.titolo.value;
		var descrizione = $.descrizione.value;

		var objLink = {

			name : $.titolo.value,
			description : $.descrizione.value,
			content : $.content.value

		};

		args(objLink);
		$.window.close();

		//Ti.API.info("MOSTRO : "+objCashFlow);
		/*

		 var objCashFlow = {
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data" :  "{\"tipoMovimento\":{\"codice\":\"USC\",\"id\":1,\"version\":0},\"pagamentoIncasso\":null,\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":55}"
		 */

	} else {
		alert("I campi titolo, descrizione e link sono obbligatori");
	}

};



