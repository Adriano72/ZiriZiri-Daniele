var args = arguments[0] || {};

Ti.API.info("ARGS: " + args.data.id);

var creationDate = new Date(args.data.creationTime);


$.dayBox.text = creationDate.getDate();
$.monthBox.text = creationDate.getCMonth();
$.name.text = args.data.name;


var rows = [];

_.forEach(args.data.aspects, function(value, key) {

	//Ti.API.info("ASPECT DATA: " + value.data.description);
	
	
	switch (value.kind.code) {

		case "CASHFLOWDATATYPE_CODE":
			
			var riga = Alloy.createController('rowCASHFLOW', {
				
				id_code: key,
				description : value.description,
				importo : value.data.importo,
				dataOperazione : value.data.dataOperazione,
				dataValuta : value.data.dataValuta,
				codTipoMovimento : value.data.tipoMovimento.codice
				
			}).getView();
			rows.push(riga); 

			break;

		case "DOCUMENTDATATYPE_CODE":
			
			var riga = Alloy.createController('rowDOCUMENT', {
				
				id_code: key,
				description : value.description,
				format: value.data.format.name,
				type : value.data.format.type,
				title : value.data.title
				
			}).getView();
			rows.push(riga);
			
			
			
			break;

		case "LINKDATATYPE_CODE":

			var riga = Alloy.createController('rowLINK', {
				
				id_code: key,
				description : value.description,
				type : value.data.format.type,
				title: value.data.title,
				content : value.data.content
				
			}).getView();
			rows.push(riga);
			
			break;

		case "NOTEDATATYPE_CODE":

			var riga = Alloy.createController('rowNOTE', {
				
				id_code: key,
				description : value.data.title,
				timestamp: value.data.timestamp
				
			}).getView();
			rows.push(riga);
			break;
	}

});

$.aspectsTable.setData(rows);

function aspectDetail(e){
	
	Ti.API.info("CLICKED: "+e.source.id_code);
	Ti.API.info("ASPETTO SELEZIONATO; "+args.data.aspects[e.source.id_code].kind.code);
	
}
