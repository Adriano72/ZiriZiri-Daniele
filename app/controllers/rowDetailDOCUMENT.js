var args = arguments[0] || {};

function openEvent() {
	//Ti.API.info("WINDOW OPEN");
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
var noB64Aspect = _.omit(args, "data.preview");

Ti.API.info("PAR DOC RECEIVED: "+JSON.stringify(noB64Aspect));

var blobPreview = Ti.Utils.base64decode(args.data.preview.base64.substr(args.data.preview.base64.indexOf(',')));
$.img_preview.setImage(blobPreview);
$.titolo.text = args.data.title;
$.nomeFile.text = args.data.name;
$.tipologia.text = args.data.format.type;
$.formato.text = args.data.format.name;
var megaBytes = (args.data.size)/1048576+" MB";
$.filesize.text = megaBytes;
$.dataDoc.text = moment(args.data.creationTime).format("L");

$.win.open();
/*

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

*/