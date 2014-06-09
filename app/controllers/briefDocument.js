var args = arguments[0] || {};


/*
var aspectJson = Alloy.Models.Aspetto.toJSON();

Alloy.Models.Aspetto.set("importo", aspectJson.data.importo+"€", {silent: true});
Alloy.Models.Aspetto.set("tipoMovimento", aspectJson.data.tipoMovimento.codice, {silent: true});
Alloy.Models.Aspetto.set("modalitaPagamento", aspectJson.data.modalitaPagamento.descrizioneBreve, {silent: true});

Alloy.Models.Aspetto.trigger('change');
*/

Ti.API.info("COLLECTION DOCUMENT: "+JSON.stringify(Alloy.Collections.aspettiDocument));



function transformData(model) {
	var attrs = model.toJSON();
	//attrs.imageUrl = '/' + attrs.direction + '.png';
	//attrs.titolo = attrs.data.importo+"€";
	attrs.tipoFile = attrs.data.format.name;
	

	return attrs;
}

syncAspects();


$.briefDocument.addEventListener("close", function() {
	$.briefDocument.destroy();
});