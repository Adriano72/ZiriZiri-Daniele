var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

var net = require('net');

var location = null;

var dataFrom, dataTo = null;

var timeNow = moment();

var arrayAspetti = [];

Ti.API.info("**** timeNow: " + timeNow);

//moment().format("Do MMM YY")

function openEvent() {
	//Ti.API.info("win OPEN");
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

function checkForSync() {
	
	args();
}

$.starwidget.init();

function initializeThings() {

	openEvent();

	var rowsCat = [Ti.UI.createPickerRow({
		fontFamily : 'SourceSansPro-Regular',
		fontSize : 8,
		title : "Categorie",
		id : 9999
	})];

	_.forEach(Ti.App.Properties.getObject("elencoCategorie"), function(value, key) {

		//Ti.API.info("CAT: " + JSON.stringify(value));

		var pkrRow = Ti.UI.createPickerRow(value);
		//pkrRow.fontFamily = "SourceSansPro-Regular";

		rowsCat.push(pkrRow);

	});

	$.pkrCategoria.add(rowsCat);

}

function takePicture() {
	
	Alloy.Globals.shortcutMode = "camera";

	savePost();

};

function openGallery(){
	
	Alloy.Globals.shortcutMode = "gallery";

	savePost();
	
}

function savePost() {

	//Ti.API.info("POST DATE VALUE AT BEGINNING; " + $.postDate.value);
	//Ti.API.info("POST DATE PARSED AT BEGINNING; " + Date.parse($.postDate.value));

	//var strutturaPost = _.omit(Alloy.Models.Template, 'modules');

	//Ti.API.info("SELECTED CATEGORY ROW: "+JSON.stringify($.pkrCategoria.getSelectedRow(0)));

	if (Alloy.Globals.shortcutMode == "camera" || Alloy.Globals.shortcutMode == "gallery") {
		
		Alloy.Models.Post_template.set("name", "");
		Alloy.Models.Post_template.set("rating", 0);

		Alloy.Models.Post_template.set("category", {
			id : "5529",
			code : "09.04.01",
			name : "Foto",
		});

		Alloy.Models.Post_template.set("referenceTime", timeNow);

		Alloy.createController("crea-modifica-post", function() {
			$.win.close();
			args();
		}).getView();

	} else {

		if ($.titolo.value !== "" && $.pkrCategoria.getSelectedRow(0).id != 9999) {

			Alloy.Models.Post_template.set("name", $.titolo.value);
			Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
			Alloy.Models.Post_template.set("category", {
				id : $.pkrCategoria.getSelectedRow(0).id,
				code : $.pkrCategoria.getSelectedRow(0).code,
				name : $.pkrCategoria.getSelectedRow(0).title,
			});
			Alloy.Models.Post_template.set("description", $.descrizione.value);
			Alloy.Models.Post_template.set("referenceTime", timeNow);

			Alloy.createController("crea-modifica-post", function() {
				$.win.close();
				args();
			}).getView();

		} else {
			alert("Il campo Titolo e il campo Categoria sono obbligatori!");
		}
	}

};

$.win.open();
