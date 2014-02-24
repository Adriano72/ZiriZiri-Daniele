var args = arguments[0] || {};

if (!_.isNull(args.preview)) {
	var blobPreview = Ti.Utils.base64decode(args.preview.substr(args.preview.indexOf(',')));
	$.img_preview.setImage(blobPreview);
};

//$.row.id_code = args.id_code,
$.description.text = '  ' + icons.link + "  " + args.name;
$.category.text = (_.isNull(args.category))?null:" " + icons.tag + " " +args.category;
$.tags.text = (_.isNull(args.tags))?'Nessun tag definito':args.tags;
$.type.text = args.type;
$.content.text = args.content;

function openLink(e){
	Ti.API.info("SPURCE TEXT: "+e.source.text);
	Ti.Platform.openURL(e.source.text);
};

function composeDate(d_par) {

	var p_toDate = new Date(d_par);

	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();

	return day + " " + month + " " + year;

}