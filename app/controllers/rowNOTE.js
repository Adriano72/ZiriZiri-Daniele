var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.importo);

$.row.id_code = args.id_code,
$.description.text = '  '+icons.edit_sign+"  "+args.description;
$.data.text = composeDate(args.timestamp);

function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}
