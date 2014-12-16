var args = arguments[0] || {};



var dataAspetto = args.obj_aspetto.data;

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
