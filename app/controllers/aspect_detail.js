var args = arguments[0] || {};

Ti.API.info("ARGS CODE: "+args.kind.code);

var rows = [];

switch (args.kind.code) {

	case "CASHFLOWDATATYPE_CODE":
	

		var riga = Alloy.createController('rowDetailCASHFLOW', {
			
			
			description : args.description,
			category: (_.isNull(args.category))?"Non disponibile":args.category.name,
			importo: args.data.importo,
			dataOperazione : args.data.dataOperazione,
			dataValuta : args.data.dataValuta,
			flagOrdinarioStraordinario: args.data.flagOrdinarioStraordinario,statoMovimento: args.data.statoMovimento.descrizioneBreve,
			tipoMovimento : args.data.tipoMovimento.descrizioneBreve,
			tipoVariabilita: args.data.tipoVariabilita.descrizioneBreve,
			modalitaPagamento: args.data.modalitaPagamento.descrizioneBreve,
			strumentoPagamentoIncasso: (_.isNull(args.data.strumentoPagamentoIncasso))?"Non disponibile":args.data.strumentoPagamentoIncasso.descrizioneBreve,
			fonteLiquidita: (_.isNull(args.data.fonteLiquidita))?"Non disponibile":args.data.fonteLiquidita.descrizioneBreve,
			tipoFonteLiquidita: (_.isNull(args.data.fonteLiquidita))?"Non disponibile":args.data.fonteLiquidita.tipoFonteLiquidita.descrizioneBreve
			

		}).getView();
		rows.push(riga);

		break;

	case "DOCUMENTDATATYPE_CODE":

		var riga = Alloy.createController('rowDetailDOCUMENT', {

			id_code : key,
			description : value.description,
			format : value.data.format.name,
			type : value.data.format.type,
			title : value.data.title

		}).getView();
		rows.push(riga);

		break;

	case "LINKDATATYPE_CODE":

		var riga = Alloy.createController('rowDetailLINK', {

			id_code : key,
			description : value.description,
			type : value.data.format.type,
			title : value.data.title,
			content : value.data.content

		}).getView();
		rows.push(riga);

		break;

	case "NOTEDATATYPE_CODE":

		var riga = Alloy.createController('rowDetailNOTE', {

			id_code : key,
			description : value.data.title,
			timestamp : value.data.timestamp

		}).getView();
		rows.push(riga);
		break;
};

$.aspectsDetailTable.setData(rows);
