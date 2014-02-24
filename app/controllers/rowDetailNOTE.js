var args = arguments[0] || {};

//$.row.id_code = args.id_code,
$.description.text = '  ' + icons.edit_sign + "  " + args.name;
$.category.text = (_.isNull(args.category))?null:" " + icons.tag + " " +args.category;
$.timestamp.text = composeDate(args.timestamp);
$.content.html = args.content;

function composeDate(d_par) {

	var p_toDate = new Date(d_par);

	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();

	return day + " " + month + " " + year;

}