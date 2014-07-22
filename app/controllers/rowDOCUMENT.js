var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+JSON.stringify(args));

$.titolo.text = args.obj_aspetto.title;
//$.formato.text = args.obj_aspetto.format;
$.riga.obj_aspect = args.obj_aspetto;
$.riga.arrayKey = args.keyIndex;

