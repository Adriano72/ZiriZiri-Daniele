var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.importo);


$.description.text = '  '+icons.bar_chart_alt+"  "+args.description;
$.importo.text = "Importo: € "+args.importo;
$.dataOperazione.text = "Data operazione: "+composeDate(args.dataOperazione);
$.dataValuta.text = "Data Valuta: "+composeDate(args.dataValuta);
$.codTipoMovimento.text = "Tipo movimento: "+args.codTipoMovimento;

function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}
