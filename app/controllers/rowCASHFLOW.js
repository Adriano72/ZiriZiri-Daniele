var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+args.id_code);



//$.row.id_code = args.id_code,

/*
$.importo.text = args.importo+"€";
$.tipoMovimento.text = args.tipoMovimento;
$.modalitaPagamento.text = args.modalitaPagamento;
*/

/*
function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}
*/


var dataAspetto = JSON.parse(args.obj_aspetto.data);

Ti.API.info("VALORE PASSATO: "+JSON.stringify(dataAspetto.title));


$.importo.text = dataAspetto.importo+"€";
$.tipoMovimento.text = dataAspetto.tipoMovimento.descrizioneBreve;
$.modalitaPagamento.text = dataAspetto.pagamentoIncasso.descrizioneBreve;
//$.formato.text = args.obj_aspetto.format;
$.riga.obj_aspect = args.obj_aspetto;
$.riga.arrayKey = args.keyIndex;


function edit(e) {
	Alloy.createController("editCashflow", {
		_callback : function(aspettoEditato) {
			var aspettoToJSON = JSON.parse(aspettoEditato.data);
			$.riga.obj_aspect = aspettoEditato;
			$.importo.text = aspettoToJSON.importo;
			$.tipoMovimento.text = aspettoToJSON.tipoMovimento.descrizioneBreve;
			$.modalitaPagamento.text = aspettoToJSON.pagamentoIncasso.descrizioneBreve;
			
			args._editFunc(aspettoEditato, e.source.arrayKey);
			
			
		},
		aspetto : $.riga.obj_aspect
	}).getView().open();
};
