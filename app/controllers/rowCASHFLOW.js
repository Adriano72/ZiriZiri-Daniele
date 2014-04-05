var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.id_code);

$.row.id_code = args.id_code,
$.description.text = '  '+icons.money;
$.importo.text = "€ "+args.importo;
$.dataOperazione.text = composeDate(args.dataOperazione);
//$.dataValuta.text = composeDate(args.dataValuta);
$.codTipoMovimento.text = args.codTipoMovimento;

function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}
