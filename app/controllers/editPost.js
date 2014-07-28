var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

var net = require('net');

var location = null;

var dataFrom, dataTo = null;

var timeNow = moment();

var arrayAspetti = [];

var selectedCategory;

if (!_.isUndefined(args.existingPost)) {

	var modJson = Alloy.Models.Post.toJSON();

	$.titolo.value = Alloy.Models.Post.get("name");

	$.categoria.value = (!_.isNull(modJson.category) ? modJson.category.name : "");

} else {

	var modJson = Alloy.Models.Post_template.toJSON();

	$.titolo.value = Alloy.Models.Post_template.get("name");

	$.categoria.value = (!_.isNull(modJson.category) ? modJson.category.name : "");

}

//moment().format("Do MMM YY")

function homeIconSelected() {
	$.win.close({
		animate : true
	});
}

function openEvent() {

	/*
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
	 */
};

function openCategoryList() {
	Alloy.createController("selezionaCategoria", function(cat_obj) {
		$.categoria.value = cat_obj.name;
		selectedCategory = cat_obj;
	}).getView();
}

$.starwidget.init();

function savePost() {

	if ($.titolo.value !== "") {

		//Alloy.Models.Post_template.set("referenceTime", timeNow);

		if (!_.isUndefined(args.existingPost)) {

			Alloy.Models.Post.set("name", $.titolo.value);
			Alloy.Models.Post.set("rating", $.starwidget.getRating());
			Alloy.Models.Post.set("category", selectedCategory);
			Alloy.Models.Post.set("description", $.descrizione.value);
			$.win.close();
			args._callback();
			
		} else {
			
			Alloy.Models.Post_template.set("name", $.titolo.value);
			Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
			Alloy.Models.Post_template.set("category", selectedCategory);
			Alloy.Models.Post_template.set("description", $.descrizione.value);
			$.win.close();
			args();
		};

	} else {
		alert("Il campo Titolo è obbligatorio!");
	}

};

$.win.open();
