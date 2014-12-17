var args = arguments[0] || {};

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
	
	if(Alloy.Globals.shortcutMode == "camera"){
		
		//Alloy.Globals.shortcutMode = null;
		openCamera(true);
	};
	
	if(Alloy.Globals.shortcutMode == "gallery"){
		
		//Alloy.Globals.shortcutMode = null;
		openGallery(true);
	}

};
/*
$.dataDocumento.text = moment().format('L');
$.dataDocumento.dataRaw = moment();
*/
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
		//modDocumentJSON.data.content = imageContent;

		//modDocumentJSON.data = JSON.stringify(modDocumentJSON.data);

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
				
				
				
				var newBlob = ImageFactory.compress(image, 0.20);
				Alloy.Globals.blobImage = newBlob;
				$.preview.image = newBlob;
				/*
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

				
				imageContent.base64 = hashedImage;
				fileSize = tempFile.size;
				fileName = tempFile.name;
				*/
				
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
			Alloy.Globals.blobImage = image;

			// set image view
			Ti.API.info('Our type was: ' + event.mediaType);
			//$.preview.setWidth(cropRect.width);
			//$.preview.setHeight(cropRect.height);
			
			$.preview.image = image;
		
			//var hashedImage = Ti.Utils.base64encode(image).toString();
			//Ti.API.info("HASHED IMAGE: " + image.getFile());
			Ti.API.info("IMAGE MIME TYPE: " + image.getMimeType());
			
			var tempFile = Ti.Filesystem.createTempFile();
			tempFile.write(image);

			var content = tempFile.read();
			Ti.API.info("IMAGE FILE SIZE: " + tempFile.size);
			Ti.API.info("IMAGE FILE NAME: " + tempFile.name);
			//Ti.API.info("HASHED IMAGE : " + hashedImage);

			var hashedImage = "data:image/jpeg;base64," + Ti.Utils.base64encode(content).toString();
			imageContent.base64 = hashedImage;

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

