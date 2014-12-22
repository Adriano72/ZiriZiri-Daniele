var args = arguments[0] || {};


Ti.API.info("COLLECTION CASHFLOW: "+JSON.stringify(Alloy.Collections.aspettiLink));



function transformData(model) {
	var attrs = model.toJSON();
	//attrs.imageUrl = '/' + attrs.direction + '.png';
	attrs.temp_nome = attrs.data.title;
	attrs.temp_link = (_.isUndefined(attrs.data.content.local))?"":attrs.data.content.local;

	return attrs;
}

function showDetail(e){
	
	var selectedAspect = Alloy.Collections.aspettiLink.at(e.index).attributes;
	
	var riga = Alloy.createController('rowDetailLINK', {
		_callback: function(updated_link){
			net.updateAspect(updated_link, function(){
				Ti.API.info("ASPETO UPDATATO");
			});
			Ti.API.info("***SELECTED MODEL***: "+JSON.stringify(updated_link));
			Alloy.Models.UpdatedLink = new Backbone.Model;
			Alloy.Models.UpdatedLink.set(updated_cashflow);
			Alloy.Models.UpdatedLink.set('data', Alloy.Models.UpdatedLink.get('data'));
	
			Alloy.Collections.aspettiLink.remove(Alloy.Collections.aspettiLink.at(e.index));
			Alloy.Collections.aspettiLink.add(Alloy.Models.UpdatedLink);
		},
		selectedAspect: selectedAspect
	}).getView();
	
}

syncAspects();


$.briefLink.addEventListener("close", function() {
	$.briefCashflow.destroy();
});