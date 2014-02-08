var args = arguments[0] || {};



//$.row.id_code = args.id_code,
$.description.text = '  '+icons.bar_chart_alt+"  "+args.description;
$.category.text = "Categoria: "+args.category;
$.importo.text = "Importo: € "+args.importo;
$.dataOperazione.text = "Data operazione: "+composeDate(args.dataOperazione);
$.dataValuta.text = "Data Valuta: "+composeDate(args.dataValuta);
$.flagOrdinarioStraordinario.text = "Ord/Straord: "+args.flagOrdinarioStraordinario;
$.statoMovimento.text = "Stato movimento: "+args.statoMovimento;
$.tipoMovimento.text = "Tipo movimento: "+args.tipoMovimento;
$.tipoVariabilita.text = "Tipo variabilità: "+args.tipoVariabilita;
$.modalitaPagamento.text = "Modalità pagamento: "+args.modalitaPagamento;
$.strumentoPagamentoIncasso.text = "Stumento pagamento/incasso: "+args.strumentoPagamentoIncasso;
$.fonteLiquidita.text = "Fonte liquidità: "+args.fonteLiquidita;
$.tipoFonteLiquidita.text = "Tipo fonte Liquidità: "+args.tipoFonteLiquidita;


function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}