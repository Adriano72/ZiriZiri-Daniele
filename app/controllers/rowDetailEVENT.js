var args = arguments[0] || {};

var selAspect = args.selectedAspect;

var parsedAspect = _.clone(selAspect);

parsedAspect.data = JSON.stringify(parsedAspect.data);

var editedFlag = false;

function homeIconSelected() {
	$.win.close({
		animate : true
	});
}

function openEvent() {
	
	if(!editedFlag){
		updateDisplay();
	};
	
	editedFlag = false;

};

function editAspect(){
	
	Alloy.createController("editEvent", {
		
		_callback : function(aspettoEditato) {
			
			editedFlag = true;
			
			Ti.API.info("ASP EDITATO: "+JSON.stringify(aspettoEditato));
			var aspettoToJSON = aspettoEditato.data;

			$.dataInizio.text = moment(aspettoToJSON.startTime.time).format("DD-MM-YYYY HH:MM");
			$.dataFine.text = moment(aspettoToJSON.endTime.time).format("DD-MM-YYYY HH:MM");
			$.location.text = aspettoEditato.location.name;
			updateDisplay(aspettoEditato);
			args._callback(aspettoEditato);

			//args._editFunc(aspettoEditato, e.source.arrayKey);

		},
		aspetto : parsedAspect
		
	}).getView().open();
	Ti.API.info("ID Aspetto: "+selAspect.id);
	
};

$.dataInizio.text = moment(selAspect.data.startTime.time).format("DD-MM-YYYY HH:MM");
$.dataFine.text = (selAspect.data.startTime.time !== selAspect.data.endTime.time)?moment(selAspect.data.endTime.time).format("DD-MM-YYYY HH:MM"):"";
$.location.text = selAspect.location.name;

function updateDisplay(par_edited_aspect) {

	//args(locationData);
	
	var asp_obj;
	
	if(!_.isUndefined(par_edited_aspect)){
		asp_obj = par_edited_aspect;
	}else{
		asp_obj = selAspect;
	};
	
	$.mapview.removeAllAnnotations();
	
	var eventMarker = Alloy.Globals.Map.createAnnotation({
		latitude : asp_obj.location.latitude,
		longitude : asp_obj.location.longitude,
		title : asp_obj.location.name,
		pincolor : Alloy.Globals.Map.ANNOTATION_RED
	});

	$.mapview.region = {
		latitude : asp_obj.location.latitude,
		longitude : asp_obj.location.longitude,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	};

	$.mapview.addAnnotation(eventMarker);
	


};

$.win.open();