var args = arguments[0] || {};

function openEvent() {
	//Ti.API.info("WINDOW OPEN");
	theActionBar = $.win.activity.actionBar;

	$.win.activity.invalidateOptionsMenu();

	theActionBar = $.win.activity.actionBar;
	if (theActionBar != undefined) {
		theActionBar.displayHomeAsUp = true;
		theActionBar.setIcon('images/kernel-event-on.png');
		//theActionBar.setTitle(self.title);
		theActionBar.onHomeIconItemSelected = function() {
			$.win.close({
				animate : true
			});
		};
	};
	
	$.win.title = args.data.title;
	
	updateDisplay();

};

$.dataInizio.text = moment(args.data.startTime.time).format("DD-MM-YYYY HH:MM");
$.dataFine.text = (args.data.startTime.time !== args.data.endTime.time)?moment(args.data.endTime.time).format("DD-MM-YYYY HH:MM"):"";
$.location.text = args.location.name;

function updateDisplay() {

	//args(locationData);
	
	$.mapview.removeAllAnnotations();
	
	var eventMarker = Alloy.Globals.Map.createAnnotation({
		latitude : args.location.latitude,
		longitude : args.location.longitude,
		title : args.location.name,
		pincolor : Alloy.Globals.Map.ANNOTATION_RED
	});

	$.mapview.region = {
		latitude : args.location.latitude,
		longitude : args.location.longitude,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	};

	$.mapview.addAnnotation(eventMarker);
	


};

$.win.open();