var args = arguments[0] || {};

if (!_.isNull(args.preview)) {
	var blobPreview = Ti.Utils.base64decode(args.preview.substr(args.preview.indexOf(',')));
	$.img_preview.setImage(blobPreview);
};

//$.row.id_code = args.id_code,
$.name.text = '  ' + icons.link + "  " + args.name;
$.category.text = "Categoria: "+args.category;
$.tags.text = args.tags;

if(_.isNull(args.tags)){
	$.tags.height = 0;
}

$.type.text = "Tipo: " + args.type;
$.content.text = "Contenuto: " + args.content;

function composeDate(d_par) {

	var p_toDate = new Date(d_par);

	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();

	return day + " " + month + " " + year;

}