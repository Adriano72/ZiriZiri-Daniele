var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));
function homeIconSelected() {
	$.win.close({
		animate : true
	});
}

function saveLink() {

	var modLinkJSON = Alloy.Models.Link_template.toJSON();
	modLinkJSON = _.omit(modLinkJSON, "kind.id");
	// questo mi sa che nn serve e nemmeno funziona

	if ($.titolo.value != "" && $.link.value != "") {

		if (Alloy.Globals.shortcutMode) {
			Alloy.Models.Post_template.set("name", $.titolo.value);
		};

		modLinkJSON.name = Alloy.Models.Post_template.get("name");
		modLinkJSON.description = Alloy.Models.Post_template.get("description");
		modLinkJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
		modLinkJSON.category = Alloy.Models.Post_template.get("category");

		modLinkJSON.data.title = $.titolo.value;

		modLinkJSON.data.content.local = $.link.value;

		Ti.API.info("ASPETTO LINK VALIDATO: " + JSON.stringify(modLinkJSON));

		args(modLinkJSON);
		$.win.close();

	} else {
		alert("I campi titolo e link sono obbligatori");
	}

};

