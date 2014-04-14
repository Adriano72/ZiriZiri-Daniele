var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));

var imageContent;
var fileName;
var fileSize;



function createProtoObj() {

	if ($.titolo.value != "" && $.descrizione.value != "" && imageContent != "") {

		//Ti.API.info("TIPO MOVIM OBJ: "+JSON.stringify($.pkrTipoMovimento.getSelectedRow(0)));
		//Ti.API.info("PAGAM INCASSO OBJ: "+JSON.stringify($.pkrPagamentoIncasso.getSelectedRow(0)));

		var titolo = $.titolo.value;
		var descrizione = $.descrizione.value;

		var objDocument = {

			name : $.titolo.value,
			description : $.descrizione.value,
			fileName: fileName,
			fileSize: fileSize,
			content: imageContent

		};

		args(objDocument);
		$.window.close();

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

function openCamera() {

	Ti.Media.showCamera({
		success : function(event) {

			var cropRect = event.cropRect;
			var image = event.media;

			// called when media returned from the camera
			Ti.API.info('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.preview.image = image;
				var hashedImage = "data:image/jpeg;base64," + Ti.Utils.base64encode(image).toString();
				var tempFile = Ti.Filesystem.createTempFile();
				tempFile.write(image);
				
				//Ti.API.info("HASHED IMAGE : " + hashedImage);
				Ti.API.info("HASHED IMAGE MIME TYPE: " + image.getMimeType());
				Ti.API.info("IMAGE FILE SIZE: " + tempFile.size);
				Ti.API.info("IMAGE FILE NAME: " + tempFile.name);

				imageContent = hashedImage;
				fileSize = tempFile.size;
				fileName = tempFile.name;
				
				

			} else {
				alert("got the wrong type back =" + event.mediaType);
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

};

function openGallery() {

	Titanium.Media.openPhotoGallery({

		success : function(event) {
			var cropRect = event.cropRect;
			var image = event.media;

			// set image view
			Ti.API.info('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.preview.setWidth(cropRect.width);
				$.preview.setHeight(cropRect.height);
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
				imageContent = hashedImage;
				fileSize = tempFile.size;
				fileName = tempFile.name;
				

			} else {
				// is this necessary?
			}

			Titanium.API.info('PHOTO GALLERY SUCCESS cropRect.x ' + cropRect.x + ' cropRect.y ' + cropRect.y + ' cropRect.height ' + cropRect.height + ' cropRect.width ' + cropRect.width);

		},
		cancel : function() {

		},
		error : function(error) {
		},
		allowEditing : true,

		mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
	});
};

