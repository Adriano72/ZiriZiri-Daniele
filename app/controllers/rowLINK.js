var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.importo);


$.description.text = '  '+icons.link+"  "+args.description;
$.title.text = "Titolo: "+args.title;
$.type.text = "Tipo: "+ args.type,
$.content.text = "Contenuto: "+args.content;