var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.importo);

$.row.id_code = args.id_code,
$.description.text = '  '+icons.file_text_alt+"  "+args.description;
$.format.text = args.format;
$.type.text = args.type;
$.titolo.text = args.title;
