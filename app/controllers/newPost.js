var args = arguments[0] || {};

rowsCat = [Ti.UI.createPickerRow({title: "Categoria", id:9999})];

_.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value, key){
	//Ti.API.info("CAT: "+JSON.stringify(value));
	
	var pkrRow = Ti.UI.createPickerRow(value);
	
	rowsCat.push(pkrRow);
	
});

$.pkrCategoria.add(rowsCat);