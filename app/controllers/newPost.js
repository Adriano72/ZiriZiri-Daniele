var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

var net = require('net');

var location = null;

var dataFrom,
    dataTo = null;

var timeNow = moment();

var arrayAspetti = [];

var selectedCategory;

Ti.API.info("**** timeNow: " + timeNow);

//moment().format("Do MMM YY")

function homeIconSelected() {
	$.win.close({
		animate : true
	});
}

function openEvent() {

	if (Alloy.Globals.shortcutMode == "camera") {
		savePost();
	};

};

function openCategoryList() {
	Alloy.createController("selezionaCategoria", function(cat_obj) {
		$.categoria.value = cat_obj.name;
		selectedCategory = cat_obj;
	}).getView();
}

function checkForSync() {

	args();
}

$.starwidget.init();

function takePicture() {

	Alloy.Globals.shortcutMode = "camera";

	savePost();

};

function openGallery() {

	Alloy.Globals.shortcutMode = "gallery";

	savePost();

}

var _corePostsAddCallback = function(post) {
	
	Ti.API.info("ZZ.API.Core.Posts.add success [response : " + JSON.stringify(post) + "]");

/* BEGIN PATCH 17122014 */
	Ti.API.info("*** APPLIED PATCH 17122014 ***");
	Alloy.Models.Post_template.set(post, {silent: true});
/* END PATCH 17122014 */
	
	Alloy.createController("crea-modifica-post", function() {
		$.win.close();
		args();
	}).getView();
};

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

/* BEGIN PATCH 17122014 */					
		//Alloy.Models.Post_template.set("referenceTime", timeNow);
		Ti.API.info("*** APPLIED PATCH 17122014 ***");
		Alloy.Models.Post_template.set("referenceTime", timeNow.toDate().getTime());
/* END PATCH 17122014 */

/* BEGIN PATCH 17122014 */
		//ZZ.API.Core.Posts.add(Alloy.Models.Post_template, _corePostsAddCallback, function(error) {
		Ti.API.info("*** APPLIED PATCH 17122014 ***");
		ZZ.API.Core.Posts.add(Alloy.Models.Post_template.toJSON(), _corePostsAddCallback, function(error) {
/* END PATCH 17122014 */			
			Ti.API.error("ZZ.API.Core.Posts.add error [error : " + error + "]");
		});

	} else {

		if ($.titolo.value !== "" && !_.isUndefined(selectedCategory)) {

			Alloy.Models.Post_template.set("name", $.titolo.value);
			Alloy.Models.Post_template.set("rating", $.starwidget.getRating());
			Alloy.Models.Post_template.set("category", selectedCategory);
			Alloy.Models.Post_template.set("description", $.descrizione.value);
			
/* BEGIN PATCH 17122014 */	
			//Alloy.Models.Post_template.set("referenceTime", timeNow);	
			Ti.API.info("*** APPLIED PATCH 17122014 ***");		
			Alloy.Models.Post_template.set("referenceTime", timeNow.toDate().getTime());
/* END PATCH 17122014 */

/* BEGIN PATCH 17122014 */
			//ZZ.API.Core.Posts.add(Alloy.Models.Post_template, _corePostsAddCallback, function(error) {
			Ti.API.info("*** APPLIED PATCH 17122014 ***");
			ZZ.API.Core.Posts.add(Alloy.Models.Post_template.toJSON(), _corePostsAddCallback, function(error) {		
/* END PATCH 17122014 */					
				Ti.API.error("ZZ.API.Core.Posts.add error [error : " + error + "]");
			});

		} else {
			alert("Il campo Titolo e il campo Categoria sono obbligatori!");
		}
	}

};

$.win.open();
