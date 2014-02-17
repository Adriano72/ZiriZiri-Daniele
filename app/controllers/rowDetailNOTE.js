var args = arguments[0] || {};

//$.row.id_code = args.id_code,
$.name.text = '  ' + icons.edit_sign + "  " + args.name;
$.category.text = "Categoria: " + args.category;
$.timestamp.text = "Timestamp: " + composeDate(args.timestamp);
$.content.html = args.content;

function composeDate(d_par) {

	var p_toDate = new Date(d_par);

	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();

	return day + " " + month + " " + year;

}