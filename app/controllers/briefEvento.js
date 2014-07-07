var args = arguments[0] || {};


/*
var aspectJson = Alloy.Models.Aspetto.toJSON();

Alloy.Models.Aspetto.set("importo", aspectJson.data.importo+"€", {silent: true});
Alloy.Models.Aspetto.set("tipoMovimento", aspectJson.data.tipoMovimento.codice, {silent: true});
Alloy.Models.Aspetto.set("modalitaPagamento", aspectJson.data.modalitaPagamento.descrizioneBreve, {silent: true});

Alloy.Models.Aspetto.trigger('change');
*/

Ti.API.info("COLLECTION EVENT: "+JSON.stringify(Alloy.Collections.aspettoEvento));



function transformData(model) {
	var attrs = model.toJSON();
	//attrs.imageUrl = '/' + attrs.direction + '.png';
	//attrs.titolo = attrs.data.importo+"€";
	attrs.dataDa = moment(attrs.data.startTime.time).format("DD-MM-YYYY HH:MM");
	attrs.dataA = (attrs.data.startTime.time !== attrs.data.endTime.time)?moment(attrs.data.endTime.time).format("DD-MM-YYYY HH:MM"):"";
	attrs.posizione = attrs.location.name;
	

	return attrs;
}

function showDetail(e){
	
	var selectedAspect = Alloy.Collections.aspettoEvento.at(e.index).attributes;
	
	//Ti.API.info("ATTRIBUTES DOCUMENT: "+JSON.stringify(selectedAspect));
	
	var riga = Alloy.createController('rowDetailEVENT', selectedAspect).getView();
	
}

syncAspects();


$.briefEvento.addEventListener("close", function() {
	$.briefEvento.destroy();
});