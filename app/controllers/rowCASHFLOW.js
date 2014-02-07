var args = arguments[0] || {};

Ti.API.info("VALORE PASSATO: "+args.importo);

$.description.text = icons.bar_chart_alt+" "+args.description;
$.importo.text = args.importo;
$.dataOperazione.text = args.dataOperazione;
$.dataValuta.text = args.dataValuta;
$.codTipoMovimento.text = args.codTipoMovimento;