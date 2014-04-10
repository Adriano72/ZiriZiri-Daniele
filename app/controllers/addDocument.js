var args = arguments[0] || {};
var args = arguments[0] || {};

//Ti.API.info("PARAMETRI: "+JSON.stringify(args));

function createProtoObj() {

	if ($.pkrPagamentoIncasso.getSelectedRow(0).id != 9999 && $.pkrTipoMovimento.getSelectedRow(0).id != 9999) {

		//Ti.API.info("TIPO MOVIM OBJ: "+JSON.stringify($.pkrTipoMovimento.getSelectedRow(0)));
		//Ti.API.info("PAGAM INCASSO OBJ: "+JSON.stringify($.pkrPagamentoIncasso.getSelectedRow(0)));

		var titolo = $.titolo.value;
		var descrizione = $.descrizione.value;
		var tipoMovVersion = $.pkrTipoMovimento.getSelectedRow(0).version;

		//var pagamIncDescBreve = $.pkrPagamentoIncasso.getSelectedRow(0).title;
		var pagamIncID = $.pkrPagamentoIncasso.getSelectedRow(0).id;
		var pagamIncVersion = $.pkrPagamentoIncasso.getSelectedRow(0).version;

		var objDocument = {

			kind : {
				code : "DOCUMENTDATATYPE_CODE",
				name : "DOCUMENTDATATYPE_NAME",
				description : "DOCUMENTDATATYPE_DESCRIPTION"
			}
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
		alert("I campi Tipo Movimento e Pagamento Incasso sono obbligatori!");
	}

};

function openCamera() {

	Titanium.Media.showCamera({
		success : function(event) {
			// called when media returned from the camera
			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.preview.image = event.media;

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
			// called when media returned from the camera
			Ti.API.debug('Our type was: ' + event.mediaType);
			if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				$.preview.image = event.media;
				var hashedImage = Ti.Utils.base64encode(event.media).toString();
				Ti.API.info("HASHED IMAGE: "+hashedImage);

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
