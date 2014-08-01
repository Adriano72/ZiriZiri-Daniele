var args = arguments[0] || {};

var selAspect = args.selectedAspect;

var parsedAspect = _.clone(selAspect);

parsedAspect.data = JSON.stringify(parsedAspect.data);

function homeIconSelected() {
	$.win.close({
		animate : true
	});
}

function openEvent() {

};

function editAspect(){
	
	Alloy.createController("editCashflow", {
		_callback : function(aspettoEditato) {
			
			editedFlag = true;
			
			Ti.API.info("ASP EDITATO: "+JSON.stringify(aspettoEditato));
			var aspettoToJSON = JSON.parse(aspettoEditato.data);
			
			
			if (aspettoToJSON.tipoMovimento.descrizioneBreve == "Entrata") {

				$.importo.text = "+" + aspettoToJSON.importo + "€";
				$.importo.color = "#358A27";

			} else if (aspettoToJSON.tipoMovimento.descrizioneBreve == "Uscita") {
				$.importo.text = "-" + aspettoToJSON.importo + "€";
				$.importo.color = "#E01D1D";
			} else {
				$.importo.text = aspettoToJSON.importo + "€";
				$.importo.color = "#444";
			}

			$.movimento.text = testExistence(aspettoToJSON.tipoMovimento) ? aspettoToJSON.tipoMovimento.descrizioneBreve : "";
			$.pagamento.text = (testExistence(aspettoToJSON.pagamentoIncasso)) ? aspettoToJSON.pagamentoIncasso.descrizioneBreve : "";
			$.variabilita.text = (testExistence(aspettoToJSON.tipoVariabilita)) ? aspettoToJSON.tipoVariabilita.descrizioneBreve : "";
			$.stato.text = (testExistence(aspettoToJSON.statoMovimento)) ? aspettoToJSON.statoMovimento.descrizioneBreve : "";
			$.tipologia.text = (aspettoToJSON.flagOrdinarioStraordinario) ? "Straordinario" : "Ordinario";
			$.redditi.text = (aspettoToJSON.flagDichiarazioneRedditi) ? "Si" : "No";
			$.datavaluta.text = moment(aspettoToJSON.dataValuta).format("L");
			$.datascadenza.text = moment(aspettoToJSON.dataScadenza).format("L");
			$.datapagamento.text = moment(aspettoToJSON.dataPagamentoIncasso).format("L");

			args._callback(aspettoEditato);

			//args._editFunc(aspettoEditato, e.source.arrayKey);

		},
		aspetto : parsedAspect
	}).getView().open();
	Ti.API.info("ID Aspetto: "+selAspect.id);
	
};

//Ti.API.info("PAR CASHFLOW RECEIVED: "+JSON.stringify(args));
if(selAspect.data.tipoMovimento.descrizioneBreve == "Entrata"){
	
	$.importo.text = "+"+selAspect.data.importo+"€";
	$.importo.color = "#358A27";
	
}else if(selAspect.data.tipoMovimento.descrizioneBreve == "Uscita"){
	$.importo.text = "-"+selAspect.data.importo+"€";
	$.importo.color = "#E01D1D";
}else{
	$.importo.text = selAspect.data.importo+"€";
	$.importo.color = "#444";
}

$.movimento.text = testExistence(selAspect.data.tipoMovimento)?selAspect.data.tipoMovimento.descrizioneBreve:"";
$.pagamento.text = (testExistence(selAspect.data.pagamentoIncasso))?selAspect.data.pagamentoIncasso.descrizioneBreve:"";
$.variabilita.text = (testExistence(selAspect.data.tipoVariabilita))?selAspect.data.tipoVariabilita.descrizioneBreve:"";
$.stato.text = (testExistence(selAspect.data.statoMovimento))?selAspect.data.statoMovimento.descrizioneBreve:"";
$.tipologia.text = (selAspect.data.flagOrdinarioStraordinario)?"Straordinario":"Ordinario";
$.redditi.text = (selAspect.data.flagDichiarazioneRedditi)?"Si":"No";
$.datavaluta.text = moment(selAspect.data.dataValuta).format("L");
$.datascadenza.text = moment(selAspect.data.dataScadenza).format("L");
$.datapagamento.text = moment(selAspect.data.dataPagamentoIncasso).format("L");

function testExistence(param){
	
	return !(_.isUndefined(param) || _.isNull(param));
	
};

$.win.open();
