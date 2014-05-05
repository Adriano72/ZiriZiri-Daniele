var args = arguments[0] || {};

Ti.API.info("VALORE PASSATO: "+JSON.stringify(args));

$.row.id_code = args.id_code,
$.description.text = '  '+icons.paper_clip;
$.titolo.text = args.titolo;
$.descrizione.text = args.descrizione;
$.fileSize.text = args.size;
$.fileName.text = args.name;

