var args = arguments[0] || {};

Ti.API.info("PREVIEW: "+args.preview.substr(23));



var blobPreview = Ti.Utils.base64decode(args.preview.substr(args.preview.indexOf(',')));

//$.row.id_code = args.id_code,
$.description.text = '  '+icons.file_text_alt+"  "+args.description;
$.category.text = (_.isNull(args.category))?null:" " + icons.tag + " " +args.category;
$.format.text = args.format;
$.type.text = args.type;
$.name.text = args.name;
$.size.text = args.size;
$.timestamp.text = composeDate(args.timestamp);
$.img_preview.setImage(blobPreview);


function composeDate(d_par){
	
	var p_toDate = new Date(d_par);
	
	var day = p_toDate.getDate();
	var month = p_toDate.getCMonth();
	var year = p_toDate.getFullYear();
	
	return day+" "+month+" "+year; 
	
}