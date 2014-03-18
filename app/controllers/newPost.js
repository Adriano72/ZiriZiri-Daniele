var args = arguments[0] || {};

var u_location = require('getUserLocation');

u_location.result(function(locationData){
	
	Ti.API.info("RESULT LOCATION: "+locationData);
});

//Ti.API.info("GET LOCATION OUTPUT: "+JSON.stringify(u_location.getUsrLocation()));

//$.location.hintText = getLocation.getUsrLocation().usr_address;

rowsCat = [Ti.UI.createPickerRow({title: "Categoria", id:9999})];

_.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value, key){
	//Ti.API.info("CAT: "+JSON.stringify(value));
	
	var pkrRow = Ti.UI.createPickerRow(value);
	
	rowsCat.push(pkrRow);
	
});

$.pkrCategoria.add(rowsCat);