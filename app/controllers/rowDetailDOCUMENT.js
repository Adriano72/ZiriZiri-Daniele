var args = arguments[0] || {};

function openEvent() {
	//Ti.API.info("WINDOW OPEN");
	theActionBar = $.win.activity.actionBar;

	$.win.activity.invalidateOptionsMenu();

	theActionBar = $.win.activity.actionBar;
	if (theActionBar != undefined) {
		theActionBar.displayHomeAsUp = true;
		theActionBar.setIcon('images/kernel-document-on.png');
		//theActionBar.setTitle(self.title);
		theActionBar.onHomeIconItemSelected = function() {
			$.win.close({
				animate : true
			});
		};
	};
	
	$.win.title = args.data.title;

};


var blobPreview = Ti.Utils.base64decode(args.data.preview.base64.substr(args.data.preview.base64.indexOf(',')));
$.img_preview.setImage(blobPreview);
$.titolo.text = args.data.title;
$.nomeFile.text = args.data.name;
$.tipologia.text = args.data.format.type;
$.formato.text = args.data.format.name;
var megaBytes = (args.data.size)/1048576;
var megaBytesRounded = parseFloat(Math.round(megaBytes * 100) / 100).toFixed(2);
$.filesize.text = megaBytesRounded+"MB";
$.dataDoc.text = moment(args.data.creationTime).format("L");

$.win.open();
