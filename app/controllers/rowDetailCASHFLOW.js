var args = arguments[0] || {};

function openEvent() {
	//Ti.API.info("WINDOW OPEN");
	theActionBar = $.win.activity.actionBar;

	$.win.activity.invalidateOptionsMenu();

	theActionBar = $.win.activity.actionBar;
	if (theActionBar != undefined) {
		theActionBar.displayHomeAsUp = true;
		theActionBar.setIcon('images/logo-test.png');
		//theActionBar.setTitle(self.title);
		theActionBar.onHomeIconItemSelected = function() {
			$.win.close({
				animate : true
			});
		};
	};

};

//Ti.API.info("PAR CASHFLOW RECEIVED: "+JSON.stringify(args));
if(args.data.tipoMovimento.descrizioneBreve == "Entrata"){
	
	$.importo.text = "+"+args.data.importo+"€";
	$.importo.color = "#358A27";
	
}else if(args.data.tipoMovimento.descrizioneBreve == "Uscita"){
	$.importo.text = "-"+args.data.importo+"€";
	$.importo.color = "#E01D1D";
}else{
	$.importo.text = args.data.importo+"€";
	$.importo.color = "#444";
}

$.movimento.text = args.data.tipoMovimento.descrizioneBreve;
$.pagamento.text = (testExistence(args.data.pagamentoIncasso))?args.data.pagamentoIncasso.descrizioneBreve:"";
$.variabilita.text = (testExistence(args.data.tipoVariabilita))?args.data.tipoVariabilita.descrizioneBreve:"";
$.stato.text = (testExistence(args.data.statoMovimento))?args.data.statoMovimento.descrizioneBreve:"";
$.tipologia.text = (args.data.flagOrdinarioStraordinario)?"Straordinario":"Ordinario";
$.redditi.text = (args.data.flagDichiarazioneRedditi)?"Si":"No";
$.datavaluta.text = moment(args.data.dataValuta).format("L");
$.datascadenza.text = moment(args.data.dataScadenza).format("L");
$.datapagamento.text = moment(args.data.dataPagamentoIncasso).format("L");

function testExistence(param){
	
	return !(_.isUndefined(param) || _.isNull(param));
	
}

$.win.open();
