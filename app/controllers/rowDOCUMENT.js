var args = arguments[0] || {};

//Ti.API.info("VALORE PASSATO: "+JSON.stringify(args));

$.titolo.text = args.obj_aspetto.data.title;
//$.formato.text = args.obj_aspetto.format;
$.riga.obj_aspect = args.obj_aspetto;
$.riga.arrayKey = args.keyIndex;

function edit(e) {
	Alloy.createController("editDocument", {
		_callback : function(aspettoEditato) {

			args._editFunc(aspettoEditato);
			
			
		},
		aspetto : e.source.obj_aspect,
		tempKey : e.source.arrayKey
	}).getView().open();
};

