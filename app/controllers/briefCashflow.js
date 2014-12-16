var args = arguments[0] || {};


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
	
	var riga = Alloy.createController('rowDetailCASHFLOW', {
		_callback: function(updated_cashflow){
			net.updateAspect(updated_cashflow, function(){
				Ti.API.info("ASPETO UPDATATO");
			});
			Ti.API.info("***SELECTED MODEL***: "+JSON.stringify(updated_cashflow));
			Alloy.Models.UpdatedCashflow = new Backbone.Model;
			Alloy.Models.UpdatedCashflow.set(updated_cashflow);
			Alloy.Models.UpdatedCashflow.set('data', Alloy.Models.UpdatedCashflow.get('data'));
	
			Alloy.Collections.aspettiCashflow.remove(Alloy.Collections.aspettiCashflow.at(e.index));
			Alloy.Collections.aspettiCashflow.add(Alloy.Models.UpdatedCashflow);
		},
		selectedAspect: selectedAspect
	}).getView();
	
}

syncAspects();


$.briefCashflow.addEventListener("close", function() {
	$.briefCashflow.destroy();
});