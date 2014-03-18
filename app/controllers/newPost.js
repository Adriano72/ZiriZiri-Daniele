var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

var u_location = require('getUserLocation');

u_location.result(function(locationData) {

	$.location.value = locationData.address;

	Ti.API.info("RESULT LOCATION: " + JSON.stringify(locationData.address));
});

//Ti.API.info("GET LOCATION OUTPUT: "+JSON.stringify(u_location.getUsrLocation()));

//moment().format("Do MMM YY")


$.postDate.value = moment().format('LL');

function showDatePicker(e) {

	var riga = Alloy.createController('datePicker').getView();
	
};

rowsCat = [Ti.UI.createPickerRow({
	title : "Selezionare una categoria",
	id : 9999
})];

_.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value, key) {
	//Ti.API.info("CAT: "+JSON.stringify(value));

	var pkrRow = Ti.UI.createPickerRow(value);

	rowsCat.push(pkrRow);

});

$.pkrCategoria.add(rowsCat);
