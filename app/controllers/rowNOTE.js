var args = arguments[0] || {};

Ti.API.info("VALORE PASSATO: "+JSON.stringify(args));

$.row.id_code = args.id_code,
$.description.text = '  '+icons.edit_sign;
$.titolo.text = args.titolo;