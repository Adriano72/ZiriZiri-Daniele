var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.importo);

$.row.id_code = args.id_code,
$.description.text = '  '+icons.link+"  "+args.description;
$.title.text = args.title;
$.type.text = args.type,
$.content.text = args.content;