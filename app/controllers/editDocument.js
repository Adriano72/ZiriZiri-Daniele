var args = arguments[0] || {};

var objDocument = args();
Ti.API.info("ARGS ****: "+JSON.stringify(objDocument));

$.titolo.value = objDocument.title;
$.descrizione.value = objDocument.description;

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

var ImageFactory = require('ti.imagefactory');
//Ti.API.info("PARAMETRI: "+JSON.stringify(args));

function homeIconSelected() {
	$.win.close({
		animate : true
	});
}


function openEvent() {
	//Ti.API.info("win OPEN");
	
	

};

$.dataDocumento.text = moment().format('L');
$.dataDocumento.dataRaw = moment();

var imageContent = {};
//imageContent.link = null;
//imageContent.id = null;

var fileName;
var fileSize;

function resetGlobals(){
	Alloy.Globals.shortcutMode = null;
}

// ******** PICKER DATA ***********
function showDatePicker(e) {

	Ti.API.info("SOURCE CLICK: " + JSON.stringify(e));

	var riga = Alloy.createController('datePicker', {
		onlyDate : true,
		_callback : function(p_data) {

			e.source.text = moment(p_data).format('L');
			e.source.dataRaw = moment(p_data);
			Ti.API.info("DATARAW: " + e.source.dataRaw);

		}
	});

};

function saveDocument() {

	var modDocumentJSON = Alloy.Models.Document_template.toJSON();
	modDocumentJSON = _.omit(modDocumentJSON, "kind.id"); // questo mi sa che nn serve e nemmeno funziona

	if ($.titolo.value != "" && $.descrizione.value != "" && imageContent != "") {
		
		if(Alloy.Globals.shortcutMode){
			Alloy.Models.Post_template.set("name", $.titolo.value);
		};

		modDocumentJSON.name = Alloy.Models.Post_template.get("name");
		modDocumentJSON.description = Alloy.Models.Post_template.get("description");
		modDocumentJSON.referenceTime = Alloy.Models.Post_template.get("referenceTime");
		modDocumentJSON.category = Alloy.Models.Post_template.get("category");

		modDocumentJSON.data.title = $.titolo.value;
		modDocumentJSON.data.name = fileName;

		//modDocumentJSON.data.format = "JPG"; //_.last(fileName, 3).toUpperCase();
		modDocumentJSON.data.description = $.descrizione.value;
		modDocumentJSON.data.size = fileSize;
		modDocumentJSON.data.content = imageContent;

		modDocumentJSON.data = JSON.stringify(modDocumentJSON.data);

		Ti.API.info("ASPETTO DOCUMENT VALIDATO: " + JSON.stringify(modDocumentJSON));

		args(modDocumentJSON);
		$.win.close();

		//Ti.API.info("TIPO MOVIM OBJ: "+JSON.stringify($.pkrTipoMovimento.getSelectedRow(0)));
		//Ti.API.info("PAGAM INCASSO OBJ: "+JSON.stringify($.pkrPagamentoIncasso.getSelectedRow(0)));

		/*
		var objDocument = {

		name : $.titolo.value,
		description : $.descrizione.value,
		fileName : fileName,
		fileSize : fileSize,
		content : imageContent

		};

		args(objDocument);
		$.window.close();
		*/

		//Ti.API.info("MOSTRO : "+objCashFlow);
		/*

		 var objCashFlow = {
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data" :  "{\"tipoMovimento\":{\"codice\":\"USC\",\"id\":1,\"version\":0},\"pagamentoIncasso\":null,\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":55}"
		 */

	} else {
		alert("E' necessario scattare una foto o selezionarla dalla galleria, i campi titolo e descrizione sono obbligatori");
	}

};

function openCamera(shortcutMode) {
	
	Ti.API.info("SHORTCUT MODE: "+ Alloy.Globals.shortcutMode);

	try {

		Ti.Media.showCamera({
			success : function(event) {

				var cropRect = event.cropRect;
				var image = event.media;
				newBlob = ImageFactory.compress(image, 0.20);

				// called when media returned from the camera
				Ti.API.info('Our type was: ' + event.mediaType);

				$.preview.image = newBlob;
				var hashedImage = "data:image/jpeg;base64," + Ti.Utils.base64encode(newBlob).toString();
				var tempFile = Ti.Filesystem.createTempFile();
				tempFile.write(newBlob);

				//Ti.API.info("HASHED IMAGE : " + hashedImage);
				Ti.API.info("HASHED IMAGE MIME TYPE: " + image.getMimeType());
				Ti.API.info("IMAGE FILE SIZE: " + tempFile.size);
				Ti.API.info("IMAGE FILE NAME: " + tempFile.name);

				//imageContent.base64 = "data:image/png;base64,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"//hashedImage;
				imageContent.base64 = hashedImage;
				fileSize = tempFile.size;
				fileName = tempFile.name;
				
				if(Alloy.Globals.shortcutMode){
								
					$.titolo.value = "Foto scattata il "+moment().format("DD-MM-YYYY HH:MM");
					$.descrizione.value = "Foto scattata il "+moment().format("DD-MM-YYYY HH:MM");
				}

			},
			cancel : function() {
				// called when user cancels taking a picture
			},
			error : function(error) {
				// called when there's an error
				var a = Titanium.UI.createAlertDialog({
					title : 'Camera'
				});
				if (error.code == Titanium.Media.NO_CAMERA) {
					a.setMessage('Impossibile attivare la funzione foto su questo dispositivo');
				} else {
					a.setMessage('Unexpected error: ' + error.code);
				}
				a.show();
			},
			saveToPhotoGallery : true,
			// allowEditing and mediaTypes are iOS-only settings
			allowEditing : false,
			mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
		});
	} catch(error) {
		Ti.API.info("CATCHED ERROR: " + error);
	}

};

function openGallery() {

	Titanium.Media.openPhotoGallery({

		success : function(event) {
			var cropRect = event.cropRect;
			var image = event.media;

			// set image view
			Ti.API.info('Our type was: ' + event.mediaType);

			//$.preview.setWidth(cropRect.width);
			//$.preview.setHeight(cropRect.height);
			Ti.API.info("*** UNO ***");
			$.preview.image = image;
			Ti.API.info("*** DUE ***");
			//var hashedImage = Ti.Utils.base64encode(image).toString();
			//Ti.API.info("HASHED IMAGE: " + image.getFile());
			Ti.API.info("IMAGE MIME TYPE: " + image.getMimeType());
			Ti.API.info("*** TRE ***");

			var tempFile = Ti.Filesystem.createTempFile();
			tempFile.write(image);
			Ti.API.info("*** QUATTRO ***");

			var content = tempFile.read();
			Ti.API.info("IMAGE FILE SIZE: " + tempFile.size);
			Ti.API.info("IMAGE FILE NAME: " + tempFile.name);
			//Ti.API.info("HASHED IMAGE : " + hashedImage);

			var hashedImage = "data:image/jpeg;base64," + Ti.Utils.base64encode(content).toString();
			imageContent = imageContent.base64 = hashedImage;
			;
			fileSize = tempFile.size;
			fileName = tempFile.name;

			Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);

		},
		cancel : function() {

		},
		error : function(error) {
			Ti.API.info("ERROR: " + error);
		},
		allowEditing : false,

		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});
};

