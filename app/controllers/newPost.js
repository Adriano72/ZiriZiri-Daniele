var args = arguments[0] || {};

Ti.API.info("SHORTCUT: " + JSON.stringify(args));

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

	$.win.activity.invalidateOptionsMenu();

};

function openCategoryList() {
	Alloy.createController("selezionaCategoria", function(cat_obj) {
		$.categoria.value = cat_obj.name;
		selectedCategory = cat_obj;
	}).getView();
}

function checkForSync() {

	args._callback();
}

$.starwidget.init();

var _corePostsAddCallback = function(post) {

	Ti.API.info("ZZ.API.Core.Posts.add success [response : " + JSON.stringify(post) + "]");

	/* BEGIN PATCH 17122014 */
	Ti.API.info("*** APPLIED PATCH 17122014 ***");
	Alloy.Models.Post_template.set(post, {
		silent : true
	});
	/* END PATCH 17122014 */

	Alloy.createController("crea-modifica-post", {
		p_callback : function(o) {
			Ti.API.info("********************************************** heRE *************");
			$.win.close();
			args._callback();
		},
		shortcut : args.photoShortcut
	}).getView();
};

function savePost() {

	//Ti.API.info("POST DATE VALUE AT BEGINNING; " + $.postDate.value);
	//Ti.API.info("POST DATE PARSED AT BEGINNING; " + Date.parse($.postDate.value));

	//var strutturaPost = _.omit(Alloy.Models.Template, 'modules');

	//Ti.API.info("SELECTED CATEGORY ROW: "+JSON.stringify($.pkrCategoria.getSelectedRow(0)));

	if (args.photoShortcut == true) {

		Alloy.Models.Post_template.set("name", "Foto scattata il " + moment().format("DD-MM-YYYY HH:MM"));
		Alloy.Models.Post_template.set("rating", 0);

		Alloy.Models.Post_template.set("category", {
			"id" : "624187",
			"code" : "09.04.01",
			"name" : "Foto",
			"description" : "Foto",
			"children" : null,
			"group" : false,
			"root" : false
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


if (args.photoShortcut == true) {

	savePost();

};
