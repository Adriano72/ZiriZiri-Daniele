var args = arguments[0] || {};

var net = require('net');

Ti.API.info("COLLECTION EVENT: "+JSON.stringify(Alloy.Collections.aspettoEvento));



function transformData(model) {
	//Ti.API.info("***MODEL***: "+JSON.stringify(model));
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
	//Ti.API.info("***SELECTED MODEL***: "+JSON.stringify(selectedAspect));
	var riga = Alloy.createController('rowDetailEVENT', {
		_callback: function(updated_event){
			net.updateAspect(updated_event, function(){
				Ti.API.info("ASPETO UPDATATO");
			});
			Ti.API.info("***SELECTED MODEL***: "+JSON.stringify(updated_event));
			Alloy.Models.UpdatedEvent = new Backbone.Model;
			Alloy.Models.UpdatedEvent.set(updated_event);
			Alloy.Models.UpdatedEvent.set('data', JSON.parse(Alloy.Models.UpdatedEvent.get('data')));
	
			Alloy.Collections.aspettoEvento.remove(Alloy.Collections.aspettoEvento.at(e.index));
			Alloy.Collections.aspettoEvento.add(Alloy.Models.UpdatedEvent);
		},
		selectedAspect: selectedAspect
	}).getView();
	
}

syncAspects();


$.briefEvento.addEventListener("close", function() {
	$.briefEvento.destroy();
});