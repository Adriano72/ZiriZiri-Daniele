var args = arguments[0] || {};

Ti.API.info("ARGS: " + args.data.id);

var creationDate = new Date(args.data.creationTime);

$.dayBox.text = creationDate.getDate();
$.monthBox.text = creationDate.getCMonth();
$.name.text = args.data.name;

var rows = [];

_.forEach(args.data.aspects, function(value) {

	Ti.API.info("ASPECT DATA: " + value.name);

	
	switch (value.kind.code) {

		case "CASHFLOWDATATYPE_CODE":

			
			rows.push(Alloy.createController('rowCASHFLOW', {
				
				description : value.name,
				importo : value.importo,
				dataOperazione : value.dataOperazione,
				dataValuta : value.dataValuta,
				title: "Ciao",
				codTipoMovimento : value.data.tipoMovimento.codice
				
			}).getView()); 

			break;

		case "DOCUMENTDATATYPE_CODE":

			//aspectObj.documents += 1;
			break;

		case "NOTEDATATYPE_CODE":

			//aspectObj.notes += 1;
			break;

		case "LINKDATATYPE_CODE":

			//aspectObj.links += 1;
			break;
	}

	
	
	

});

$.aspectsTable.setData(rows);
Ti.API.info("ROWS NUM: "+$.aspectsTable.data.length);
