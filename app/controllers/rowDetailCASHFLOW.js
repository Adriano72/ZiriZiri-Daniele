var args = arguments[0] || {};



//$.row.id_code = args.id_code,
$.description.text = '  '+icons.bar_chart_alt+"  "+args.description;
$.category.text = (_.isNull(args.category))?null:" " + icons.tag + " " +args.category;
$.importo.text = "€ "+args.importo;
$.dataOperazione.text = composeDate(args.dataOperazione);
$.dataValuta.text = composeDate(args.dataValuta);
$.flagOrdinarioStraordinario.text = args.flagOrdinarioStraordinario;
$.statoMovimento.text = args.statoMovimento;
$.tipoMovimento.text = args.tipoMovimento;
$.tipoVariabilita.text = args.tipoVariabilita;
$.modalitaPagamento.text = args.modalitaPagamento;
$.strumentoPagamentoIncasso.text = args.strumentoPagamentoIncasso;
$.fonteLiquidita.text = args.fonteLiquidita;
$.tipoFonteLiquidita.text = args.tipoFonteLiquidita;


function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}