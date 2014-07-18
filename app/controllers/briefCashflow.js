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
	attrs.temp_tipoMovimento = (_.isUndefined(attrs.data.tipoMovimento) || _.isNull(attrs.data.tipoMovimento))?"":attrs.data.tipoMovimento.codice;
	attrs.temp_pagamentoIncasso = (_.isUndefined(attrs.data.pagamentoIncasso) || _.isNull(attrs.data.pagamentoIncasso))?"":attrs.data.pagamentoIncasso.descrizioneBreve;

	return attrs;
}

function showDetail(e){
	
	var selectedAspect = Alloy.Collections.aspettiCashflow.at(e.index).attributes;
	
	//Ti.API.info("ATTRIBUTES DOCUMENT: "+JSON.stringify(selectedAspect));
	
	var riga = Alloy.createController('rowDetailCASHFLOW', selectedAspect).getView();
	
}

syncAspects();


$.briefCashflow.addEventListener("close", function() {
	$.briefCashflow.destroy();
});