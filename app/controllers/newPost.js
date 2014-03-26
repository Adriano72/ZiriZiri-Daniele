var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

var location_result;

var u_location = require('getUserLocation');

u_location.result(function(locationData) {
	
	location_result = locationData;

	$.location.value = locationData.address;

	Ti.API.info("RESULT LOCATION: " + JSON.stringify(locationData));
});

//Ti.API.info("GET LOCATION OUTPUT: "+JSON.stringify(u_location.getUsrLocation()));

//moment().format("Do MMM YY")


$.postDate.value = moment().format('LL');

function showDatePicker(e) {

	var riga = Alloy.createController('datePicker', function(p_data){
		$.postDate.value = moment(p_data).format('LL');
		Ti.API.info("PARAMETRO: "+p_data);
	}).getView();
	
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

function savePost(){
	
	if($.titolo.value !== "" && $.pkrCategoria.getSelectedRow(0).id != 9999){
		
		var name = $.titolo.value;
		var referenceTime = Date.parse($.postDate.value);
		Ti.API.info("SELECTED ROW: "+JSON.stringify($.pkrCategoria.getSelectedRow(0).id));
		var categoryId = $.pkrCategoria.getSelectedRow(0).id;
		var sel_location = {
			name: $.location.value,
			description: $.location.value,
			latitude: location_result.latitude,
			longitude: location_result.longitude
			
		};
		
		Ti.API.info("OBJ LOCATION: "+JSON.stringify(sel_location));
		
		
		//"location":{"name":null,"description":null,"latitude":41.901514,"longitude":12.460773999999999}

		
		
	}else{
		alert("Il campo Titolo e il campo Categoria sono obbligatori!");
	}
};

function addCashflow(){
	//Ti.API.info("**** INSERT CASHFLOW!");
	
	
	Alloy.createController("addCashflow", {}).getView().open();
};


