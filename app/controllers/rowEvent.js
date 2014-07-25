var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.importo);

//$.row.id_code = args.id_code,


var dataAspetto = JSON.parse(args.obj_aspetto.data);

Ti.API.info("VALORE PASSATO: "+JSON.stringify(dataAspetto.title));

$.startDate.text = args.startDate;
$.endDate.text = args.endDate;
$.location.text = args.location;