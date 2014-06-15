var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.id_code);



//$.row.id_code = args.id_code,
$.importo.text = args.importo+"€";
$.tipoMovimento.text = args.tipoMovimento;
$.modalitaPagamento.text = args.modalitaPagamento;

/*
function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}
*/
