var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));

var dichRedditi = false;

var staordinario = false;

function setOrdinario() {
	staordinario = false;
	$.dotSwitchImageLeft.image = "/images/dot-switch-on.png";
	$.dotSwitchImageRight.image = "/images/dot-switch-off.png";
	Ti.API.info("STRAORDINARIO FLAG: " + staordinario);

}

function setStraordinario() {
	staordinario = true;
	$.dotSwitchImageLeft.image = "/images/dot-switch-off.png";
	$.dotSwitchImageRight.image = "/images/dot-switch-on.png";
	Ti.API.info("STRAORDINARIO FLAG: " + staordinario);

}

$.dataValuta.text = moment().format('L');
$.dataValuta.dataRaw = moment();

$.dataScadenza.text = moment().format('L');
$.dataScadenza.dataRaw = moment();

$.dataPagamento.text = moment().format('L');
$.dataPagamento.dataRaw = moment();

function toggleRedditi() {(dichRedditi) = !(dichRedditi);

	$.ovalSwitchRedditi.image = (dichRedditi) ? "/images/oval-switch-on.png" : "/images/oval-switch-off.png";
	Ti.API.info("REDDITI FLAG: " + dichRedditi);

}

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

// ******** PICKER DATA ***********
function showDatePicker(e) {

	Ti.API.info("SOURCE CLICK: " + JSON.stringify(e));

	var riga = Alloy.createController('datePicker', {
		onlyDate : true,
		_callback : function(p_data) {

			e.source.text = moment(p_data).format('L');
			e.source.dataRaw = moment(p_data);
			Ti.API.info("DATARAW: " + e.source.dataRaw);

		}
	});

};

function saveCashflow() {

	var modCashflowJSON = Alloy.Models.Cashflow_template.toJSON();
	modCashflowJSON = _.omit(modCashflowJSON, "kind.id");

	//if($.pkrPagamentoIncasso.getSelectedRow(0).id != 9999 && $.pkrTipoMovimento.getSelectedRow(0).id != 9999){
	if ($.importoValue.value > 0) {
		
		modCashflowJSON.name = Alloy.Models.Post_template.get("name");
		modCashflowJSON.description = Alloy.Models.Post_template.get("description");
		modCashflowJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
		modCashflowJSON.category = Alloy.Models.Post_template.get("category");

		modCashflowJSON.data.importo = $.importoValue.value;

		modCashflowJSON.data.tipoMovimento = {
			id : $.pkrTipoMovimento.getSelectedRow(0).id,
			codice : $.pkrTipoMovimento.getSelectedRow(0).codice,
			descrizioneBreve:  $.pkrTipoMovimento.getSelectedRow(0).descrizioneBreve

		};

		modCashflowJSON.data.pagamentoIncasso = {
			id : $.pkrPagamentoIncasso.getSelectedRow(0).id,
			codice : $.pkrPagamentoIncasso.getSelectedRow(0).codice,
			descrizioneBreve: $.pkrPagamentoIncasso.getSelectedRow(0).title

		};

		modCashflowJSON.data.statoMovimento = {
			id : $.pkrStatoMovimento.getSelectedRow(0).id,
			codice : $.pkrStatoMovimento.getSelectedRow(0).codice,
			descrizioneBreve: $.pkrStatoMovimento.getSelectedRow(0).title

		};

		modCashflowJSON.data.tipoVariabilita = {
			id : $.pkrVariabilita.getSelectedRow(0).id,
			codice : $.pkrVariabilita.getSelectedRow(0).codice,
			descrizioneBreve: $.pkrVariabilita.getSelectedRow(0).title

		};

		modCashflowJSON.data.flagOrdinarioStraordinario = staordinario;
		modCashflowJSON.data.flagDichiarazioneRedditi = dichRedditi;
		modCashflowJSON.data.dataValuta = $.dataValuta.dataRaw;
		modCashflowJSON.data.dataScadenza = $.dataScadenza.dataRaw;
		modCashflowJSON.data.dataPagamentoIncasso = $.dataPagamento.dataRaw;
		
		Ti.API.info("ASPETTO NON ANCORA STRINGIFIZZATO: "+JSON.stringify(modCashflowJSON));
		
		modCashflowJSON.data = JSON.stringify(modCashflowJSON.data);
		
		Ti.API.info("ASPETTO VALIDATO: "+JSON.stringify(modCashflowJSON));
		
		args(modCashflowJSON);
		$.win.close();

		//Ti.API.info("TIPO MOVIM OBJ: "+JSON.stringify($.pkrTipoMovimento.getSelectedRow(0)));
		//Ti.API.info("PAGAM INCASSO OBJ: "+JSON.stringify($.pkrPagamentoIncasso.getSelectedRow(0)));

		/*
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

		};

		args(objCashFlow);
		$.win.close();
		*/

		//Ti.API.info("MOSTRO : "+objCashFlow);
		/*

		 var objCashFlow = {
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data" :  "{\"tipoMovimento\":{\"codice\":\"USC\",\"id\":1,\"version\":0},\"pagamentoIncasso\":null,\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":55}"
		 */

	} else {
		alert("Il campo Importo è obbligatorio, inserire un valore");
	}

};
