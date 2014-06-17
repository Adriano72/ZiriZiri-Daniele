var args = arguments[0] || {};


/*
var aspectJson = Alloy.Models.Aspetto.toJSON();

Alloy.Models.Aspetto.set("importo", aspectJson.data.importo+"€", {silent: true});
Alloy.Models.Aspetto.set("tipoMovimento", aspectJson.data.tipoMovimento.codice, {silent: true});
Alloy.Models.Aspetto.set("modalitaPagamento", aspectJson.data.modalitaPagamento.descrizioneBreve, {silent: true});

Alloy.Models.Aspetto.trigger('change');
*/

Ti.API.info("COLLECTION CASHFLOW: "+JSON.stringify(Alloy.Collections.aspettiCashflow));



function transformData(model) {
	var attrs = model.toJSON();
	//attrs.imageUrl = '/' + attrs.direction + '.png';
	attrs.temp_importo = attrs.data.importo+"€";
	attrs.temp_tipoMovimento = attrs.data.tipoMovimento.codice;
	attrs.temp_pagamentoIncasso = attrs.data.pagamentoIncasso.descrizioneBreve;

	return attrs;
}

syncAspects();


$.briefCashflow.addEventListener("close", function() {
	$.briefCashflow.destroy();
});