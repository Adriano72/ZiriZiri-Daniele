var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.importo);

//$.row.id_code = args.id_code,

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');


var dataAspetto = JSON.parse(args.obj_aspetto.data);

//Ti.API.info("VALORE PASSATO: "+JSON.stringify(dataAspetto.title));

$.startDate.text = moment(dataAspetto.startTime.time).format("DD-MM-YYYY HH:MM");
$.endDate.text = moment(dataAspetto.endTime.time).format("DD-MM-YYYY HH:MM");
$.location.text = args.obj_aspetto.location.name;

function edit(e) {
	Alloy.createController("editEvent", {
		_callback : function(aspettoEditato) {
			var aspettoToJSON = JSON.parse(aspettoEditato.data);
			$.riga.obj_aspect = aspettoEditato;
			$.titolo.text = aspettoToJSON.title;
			
			args._editFunc(aspettoEditato, e.source.arrayKey);
			
			
		},
		aspetto : $.riga.obj_aspect
	}).getView().open();
};
