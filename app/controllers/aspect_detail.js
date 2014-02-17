var args = arguments[0] || {};

//Ti.API.info("ARGS CODE: "+args.kind.code);

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
			
			description : args.name,
			category: (_.isNull(args.category))?"Non disponibile":args.category.name,
			format: (_.isNull(args.data.format))?"Non disponibile":args.data.format.name,
			type: (_.isNull(args.data.format))?"Non disponibile":args.data.format.type,
			name : args.data.name,
			preview: args.data.preview,
			size: args.data.size,
			timestamp: args.data.timestamp

		}).getView();
		rows.push(riga);

		break;

	case "LINKDATATYPE_CODE":

		var riga = Alloy.createController('rowDetailLINK', {

			name: args.name,
			category: (_.isNull(args.category))?"Non disponibile":args.category,
			tags: (_.isNull(args.tags))?null:args.tags,
			type: (_.isNull(args.data.format))?"Non disponibile":args.data.format.type,
			content: args.data.content,
			preview: args.data.preview


		}).getView();
		rows.push(riga);

		break;

	case "NOTEDATATYPE_CODE":
	
		Ti.API.info("TESTO NOTA "+args.data.content);

		var riga = Alloy.createController('rowDetailNOTE', {

			name: args.name,
			category: (_.isNull(args.category))?"Non disponibile":args.category.name,
			timestamp: args.data.timestamp,
			content: args.data.content

		}).getView();
		rows.push(riga);
		break;
};

$.aspectsDetailTable.setData(rows);
