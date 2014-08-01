var args = arguments[0] || {};

Ti.API.info("PARAMETRI: " + JSON.stringify(args));

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

var net = require('net');

var timeNow = moment();

var arrayAspetti = [];

var tempContainer = [];

function homeIconSelected() {
	$.win.close({
		animate : true
	});
}

function openEvent() {

	if (Alloy.Globals.shortcutMode == "camera" || Alloy.Globals.shortcutMode == "gallery") {

		addDocument();
	}

};

function resetShortcut() {
	Alloy.Globals.shortcutMode = false;
}

var modJson = Alloy.Models.Post_template.toJSON();

Ti.API.info("MODEL JSON: " + JSON.stringify(modJson));
Ti.API.info("MODEL CATEGORY: " + modJson.category.name);

$.postIcon.image = (!_.isNull(modJson.category.code)) ? '/images/' + modJson.category.code.slice(0, 2) + ".png" : '/images/android-robot.jpg';

$.date.text = moment(Alloy.Models.Post_template.get("referenceTime")).fromNow();

$.category.text = (!_.isNull(modJson.category) ? modJson.category.name : "");

Ti.API.info("CATEGORIA: " + modJson.category.name);

var rating = Alloy.Models.Post_template.get("rating");

$.rating_1.image = (rating > 0) ? "/images/star-small.png" : "";
$.rating_2.image = (rating > 1) ? "/images/star-small.png" : "";
$.rating_3.image = (rating > 2) ? "/images/star-small.png" : "";
$.rating_4.image = (rating > 3) ? "/images/star-small.png" : "";
$.rating_5.image = (rating > 4) ? "/images/star-small.png" : "";

//Alloy.Models.Post_template.set("tag", (_.isNull(modJson.tags)) ? "" : modJson.tags[0].name);

//Ti.API.info("ASPETTI JSON: " + JSON.stringify(aspects));

Alloy.Models.Post_template.trigger('change');

function submitPost() {

	var aspettiArray = _.pluck(tempContainer, 'aspetto');

	Alloy.Globals.loading.show('Salvataggio in corso...', false);

	Ti.API.info("JSON POST: " + JSON.stringify(Alloy.Models.Post_template));

	Ti.API.info("JSON POST CON ASPETTI: " + JSON.stringify(Alloy.Models.Post_template));

	if (aspettiArray.length > 0) {
		Alloy.Models.Post_template.set("aspects", aspettiArray);
	}

	_.each(aspettiArray, function(value) {
		Ti.API.info("CONTENT: " + JSON.stringify(value.data));
	});

	net.savePost(Alloy.Models.Post_template, function(post_id, postToAddToTimeline) {

		Ti.API.info("ID POST SALVATO: " + post_id);

		Alloy.Collections.Timeline.add(postToAddToTimeline);
		$.win.close();
		args();

		//alert("Post salvato");

	});

}

function editPost(){
	Alloy.createController("editPost", function(){
		Alloy.Models.Post_template.trigger('change');
		modJson = Alloy.Models.Post_template.toJSON();
		$.category.text = (!_.isNull(modJson.category) ? modJson.category.name : "");

	}).getView();
};

function callSaveAspects(_callback) {

	net.saveAspect(arrayAspetti, function(id_saved_aspects_array) {

		//arrayIdAspetti.push(id_aspect);

		Ti.API.info("ARRAY DEGLI ID ASPETTI SALVATI: " + id_saved_aspects_array);

		_callback(id_saved_aspects_array);

	});

};

function addEvent() {

	var randomKey = _.random(0, 99999);

	Alloy.createController("addEvent", function(objRet) {

		tempContainer.push({
			key : randomKey,
			aspetto : objRet
		});

		Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));

		var riga = Alloy.createController('rowEvent', {

		
			//startDate : moment(aspettoDataJson.startTime.time).format("DD-MM-YYYY HH:MM"),
			//endDate : moment(aspettoDataJson.endTime.time).format("DD-MM-YYYY HH:MM"),
			//location : objRet.location.name
			
			obj_aspetto : objRet,
			keyIndex : randomKey,
			_editFunc : function(updatedAspect, arrayKey) {

				//rowToUpdate[0].aspetto = updatedAspect;

				var recordToUpdate = _.find(tempContainer, function(value) {
					return value.key === arrayKey;
				});

				Ti.API.info("ASPETTO PRIMA: " + JSON.stringify(recordToUpdate.aspetto));

				if (recordToUpdate) {
					recordToUpdate.aspetto = updatedAspect;
				}

				Ti.API.info("ASPETTO DOPO: " + JSON.stringify(recordToUpdate.aspetto));

				//.API.info("PLUCKED OBJ: "+JSON.stringify(_.pluck(tempContainer, 'aspetto')));

			}

		}).getView();
		$.postTable.appendRow(riga);

	}).getView().open();

};

function addCashflow() {
	//Ti.API.info("**** INSERT CASHFLOW!");

	var randomKey = _.random(0, 99999);

	Alloy.createController("addCashflow", function(objRet) {

		//arrayAspetti.push(objRet);

		tempContainer.push({
			key : randomKey,
			aspetto : objRet
		});

		Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));

		var riga = Alloy.createController('rowCASHFLOW', {

			obj_aspetto : objRet,
			keyIndex : randomKey,
			_editFunc : function(updatedAspect, arrayKey) {

				//rowToUpdate[0].aspetto = updatedAspect;

				var recordToUpdate = _.find(tempContainer, function(value) {
					return value.key === arrayKey;
				});

				Ti.API.info("ASPETTO PRIMA: " + JSON.stringify(recordToUpdate.aspetto));

				if (recordToUpdate) {
					recordToUpdate.aspetto = updatedAspect;
				}

				Ti.API.info("ASPETTO DOPO: " + JSON.stringify(recordToUpdate.aspetto));

				//.API.info("PLUCKED OBJ: "+JSON.stringify(_.pluck(tempContainer, 'aspetto')));

			}
		}).getView();
		$.postTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

function addDocument(p_shortcutMode) {
	//Ti.API.info("**** INSERT CASHFLOW!");

	var randomKey = _.random(0, 99999);

	Alloy.createController("addDocument", function(objRet) {

		tempContainer.push({
			key : randomKey,
			aspetto : objRet
		});

		Ti.API.info("TEMP ARRAY ASPETTI: " + JSON.stringify(tempContainer));

		//arrayAspetti.push(objRet);

		var riga = Alloy.createController('rowDOCUMENT', {

			obj_aspetto : objRet,
			keyIndex : randomKey,
			_editFunc : function(updatedAspect, arrayKey) {

				//rowToUpdate[0].aspetto = updatedAspect;

				var recordToUpdate = _.find(tempContainer, function(value) {
					return value.key === arrayKey;
				});

				Ti.API.info("ASPETTO PRIMA: " + JSON.stringify(recordToUpdate.aspetto));

				if (recordToUpdate) {
					recordToUpdate.aspetto = updatedAspect;
				}

				Ti.API.info("ASPETTO DOPO: " + JSON.stringify(recordToUpdate.aspetto));

				//.API.info("PLUCKED OBJ: "+JSON.stringify(_.pluck(tempContainer, 'aspetto')));

			}
		}).getView();

		$.postTable.appendRow(riga);

	}).getView().open();
};

function editDocument(id_array) {
	//Ti.API.info("**** INSERT CASHFLOW!");

	Alloy.createController("addDocument", function(objRet) {

		arrayAspetti.push(objRet);

		var aspettoDataJson = JSON.parse(objRet.data);

		var riga = Alloy.createController('rowDOCUMENT', {

			obj_aspetto : aspettoDataJson,

		}).getView();

		riga.addEventListener("click", function(e) {
			e.source.hide();
		});

		return (riga);

	}).getView().open();
};

function addLink() {
	//Ti.API.info("**** INSERT CASHFLOW!");

	if ($.titolo.value == "" && $.pkrCategoria.getSelectedRow(0).id == 9999) {

		alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
		return;

	};

	Alloy.createController("addLink", function(objRet) {

		var objAspect = {

			kind : {
				code : "LINKDATATYPE_CODE",
				name : "LINKDATATYPE_NAME",
				description : "LINKDATATYPE_DESCRIPTION"

			},
			data : {}

		};

		objAspect.name = objRet.name;
		objAspect.description = objRet.description;
		objAspect.referenceTime = timeNow;
		objAspect.category = {
			id : $.pkrCategoria.getSelectedRow(0).id,
			version : $.pkrCategoria.getSelectedRow(0).version
		};

		/*
		 objAspect.tags = [{
		 name : "ARTICOLO",
		 description : "ARTICOLO",
		 }];
		 */

		objAspect.data.format = {
			name : "LINK",
			description : "HTML LINK",
			type : "LINK"
		};

		objAspect.data.title = objRet.name;
		objAspect.data.name = objRet.name;
		objAspect.data.description = objRet.description;
		objAspect.data.content = (objRet.content.indexOf("http://") == -1) ? "http://" + objRet.content : objRet.content;
		objAspect.data.preview = null;

		/*
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		 */

		Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));

		var tempObj = _.clone(objAspect);
		objAspect.data = JSON.stringify(objAspect.data);

		arrayAspetti.push(objAspect);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));

		var riga = Alloy.createController('rowLINK', {

			id_code : arrayAspetti.length - 1,
			titolo : tempObj.name,
			descrizione : tempObj.description,
			content : tempObj.data.content

		}).getView();
		$.newPostTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

function addNote() {
	Ti.API.info("**** INSERT NOTE!");

	if ($.titolo.value == "" && $.pkrCategoria.getSelectedRow(0).id == 9999) {

		alert("Prima di inserire il dettaglio dell'evento è necessario specificare titolo e categoria");
		return;

	};

	Alloy.createController("addNote", function(objRet) {

		var objAspect = {

			kind : {
				code : "NOTEDATATYPE_CODE",
				name : "NOTEDATATYPE_NAME",
				description : "NOTEDATATYPE_DESCRIPTION"

			},
			data : {}

		};

		objAspect.name = objRet.name;
		objAspect.description = objRet.description;
		objAspect.referenceTime = timeNow;
		objAspect.category = {
			id : $.pkrCategoria.getSelectedRow(0).id,
			version : $.pkrCategoria.getSelectedRow(0).version
		};

		/*
		 objAspect.tags = [{
		 name : "ARTICOLO",
		 description : "ARTICOLO",
		 }];
		 */

		objAspect.data.title = objRet.name;
		objAspect.data.description = objRet.description;
		objAspect.data.content = objRet.content;

		/*
		 "kind":{"code":"CASHFLOWDATATYPE_CODE"},
		 "data": "{\"tipoMovimento\":{\"codice\":\""+tipoMovCodice+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"pagamentoIncasso\":{\"descrizioneBreve\":\""+pagamIncDescBreve+"\",\"id\":"+tipoMovId+",\"version\":"+tipoMovVersion+"},\"dataOperazione\":1393066568000,\"descrizioneBreve\":\"\",\"importo\":"+$.importo.value+"}"
		 */

		Ti.API.info("OBJ ASPECT: " + JSON.stringify(objAspect));

		var tempObj = _.clone(objAspect);
		objAspect.data = JSON.stringify(objAspect.data);

		arrayAspetti.push(objAspect);

		Ti.API.info("OGGETTO ALL'INDICE: " + JSON.stringify(arrayAspetti[arrayAspetti.length - 1]));

		var riga = Alloy.createController('rowNOTE', {

			id_code : arrayAspetti.length - 1,
			titolo : tempObj.data.title,
			content : tempObj.data.content

		}).getView();
		$.newPostTable.appendRow(riga);

		//Ti.API.info("FINISHED ASPECT OBJ: "+JSON.stringify(objAspect));
	}).getView().open();
};

$.win.open();

$.win.addEventListener("close", function() {
	$.destroy();
});
