var args = arguments[0] || {};


var dataAspetto = args.obj_aspetto.data;

Ti.API.info("VALORE PASSATO: "+JSON.stringify(dataAspetto.title));


$.titolo.text = dataAspetto.title;
//$.formato.text = args.obj_aspetto.format;
$.riga.obj_aspect = args.obj_aspetto;
$.riga.arrayKey = args.keyIndex;


function edit(e) {
	Alloy.createController("editDocument", {
		_callback : function(aspettoEditato) {
			var aspettoToJSON = JSON.parse(aspettoEditato.data);
			$.riga.obj_aspect = aspettoEditato;
			$.titolo.text = aspettoToJSON.title;
			
			args._editFunc(aspettoEditato, e.source.arrayKey);
			
			
		},
		aspetto : $.riga.obj_aspect
	}).getView().open();
};

