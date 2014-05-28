var args = arguments[0] || {};

var net = require('net');

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

// to keep track of content size on iOS
var startIndex = 0;

// to know when the table is loading
var isLoading = false;

// to trigger loading on iOS
var overlap = 50;

var theActionBar = null;

var temp = [];

$.win.addEventListener('open', function() {

	theActionBar = $.win.activity.actionBar;

	$.win.activity.invalidateOptionsMenu();

	theActionBar = $.win.activity.actionBar;
	if (theActionBar != undefined) {
		theActionBar.displayHomeAsUp = false;
		theActionBar.setIcon('images/logo-test.png');
		//theActionBar.setTitle(self.title);

	};

});

/*
 $.win.addEventListener('open', function() {

 Alloy.Globals.loading.show('Sincronizzazione...', false);

 });
 */

Ti.API.info("OBJ_TMLINE: " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));

// get initial table size for iOS
$.timelineTable.addEventListener('postlayout', function() {
	initialTableSize = $.timelineTable.rect.height;
	Alloy.Globals.loading.hide();

});

//$.index.open();

function showSpinner() {
	Alloy.Globals.showSpinner();

};

var Timeline = Alloy.Collections.Timeline;

//eventsCollection.fetch();

//Ti.API.info("COLLECTION LENGTH: " + Alloy.Collections.post_timeline.length);

if (_.isNull(Alloy.Globals.cachedTimeline)) {

	net.getData(function(timelineObj) {

		Ti.API.info("OGGETTO TIMELINE; " + JSON.stringify(timelineObj));

		Alloy.Collections.Timeline.reset(timelineObj.data);

		Ti.App.Properties.setObject("cachedTimeline", timelineObj);

	});

} else {

	var timeTemp = Ti.App.Properties.getObject("cachedTimeline");
	Ti.API.info("RETRIVING CACHED DATA");
	Ti.API.info("LENGTH OGGETTO TIMELINE; " + JSON.stringify(timeTemp));

	Alloy.Collections.Timeline.reset(timeTemp.data);
	Ti.API.info("LENGTH COLLECTION: " + Alloy.Collections.Timeline.length);

};

function checkAspects(node, target) {
	
	if (_.isUndefined(node) || _.isUndefined(_.find(node, function(value) {
		return value.kind.code == target;
	}))) {

		switch(target) {
			case "CASHFLOWDATATYPE_CODE":
				return ('/images/kernel-finance-off.png');
				break;
			case "DOCUMENTDATATYPE_CODE":
				return ('/images/kernel-document-off.png');
				break;
			case "NOTEDATATYPE_CODE":
				return ('/images/kernel-note-off.png');
				break;
			case "LINKDATATYPE_CODE":
				return ('/images/kernel-link-off.png');
			default:
				return;
		}

	} else {
		
		switch(target) {
			case "CASHFLOWDATATYPE_CODE":
				return ('/images/kernel-finance-on.png');
				break;
			case "DOCUMENTDATATYPE_CODE":
				return ('/images/kernel-document-on.png');
				break;
			case "NOTEDATATYPE_CODE":
				return ('/images/kernel-note-on.png');
				break;
			case "LINKDATATYPE_CODE":
				return ('/images/kernel-link-on.png');
			default:
				return;
		}
	}

};

function transformData(model) {
	var attrs = model.toJSON();
	//attrs.imageUrl = '/' + attrs.direction + '.png';
	attrs.postDate = moment(attrs.referenceTime).fromNow(), attrs.categoria = (!_.isNull(attrs.category)) ? attrs.category.name : "";
	attrs.iconCashFlow = checkAspects(attrs.aspects, "CASHFLOWDATATYPE_CODE");
	attrs.iconDocument = checkAspects(attrs.aspects, "DOCUMENTDATATYPE_CODE");
	attrs.iconNote = checkAspects(attrs.aspects, "NOTEDATATYPE_CODE");
	attrs.iconLink = checkAspects(attrs.aspects, "LINKDATATYPE_CODE");
	return attrs;
}

//subsetEvents.reset();

//var subsetEvents = Alloy.Collections.events;

//var table = $.subsetEvents.config.adapter.collection_name;
//Ti.API.info("Collection TABLE name: " + table);

//subsetEvents.fetch({ query: 'select * from ' + table + ' where alloy_id = ' + 1});

net.getCategories(function(categoriesData) {

	var objCategorie = [];

	//Ti.API.info("INIZIO, DATI RIC "+JSON.stringify(categoriesData));

	_.forEach(categoriesData.data, function(value, key) {

		//Ti.API.info("Categoria: "+key+" : "+value.name);

		objCategorie.push({
			"title" : value.name,
			"id" : value.id,
			"version" : value.version
		});

	});

	Ti.App.Properties.setObject("elencoCategorie", objCategorie);

	//Ti.API.info("OBJ CATEGORIE: "+ JSON.stringify(Ti.App.Properties.getObject("elencoCategorie")));

});

net.getPostTemplate(function(p_postTemplate) {

	Ti.API.info("POST TEMPLATE: " + JSON.stringify(p_postTemplate));

	var arrayTemplateIds = [];

	_.forEach(p_postTemplate.data[0].modules, function(value, key) {
		//Ti.API.info("ID TEMPLATE ASPECT: "+value.id);
		arrayTemplateIds.push(value.id);
	});

	Ti.App.Properties.setList("postTemplateIds", arrayTemplateIds);

	Ti.API.info("ID TEMPLATE ASPECT: " + Ti.App.Properties.getList("postTemplateIds"));

});

net.getTipoMovimento(function(p_tipoMovimento) {

	var objTipoMov = [];

	_.forEach(p_tipoMovimento.data, function(value, key) {

		//Ti.API.info("Categoria: "+key+" : "+value.name);

		objTipoMov.push({
			"title" : value.descrizioneBreve,
			"id" : value.id,
			"codice" : value.codice,
			"version" : value.version
		});

	});

	Ti.App.Properties.setObject("elencoTipoMov", objTipoMov);

	//Ti.API.info("OBJ TIPO MOVIMENTO: "+JSON.stringify(Ti.App.Properties.getObject("elencoTipoMov")));

});

net.getPagamentoIncasso(function(p_pagamentoIncasso) {

	//Ti.API.info("OBJ PAGAMENTO INCASSO: "+JSON.stringify(p_pagamentoIncasso));
	var objPagamIncasso = [];

	_.forEach(p_pagamentoIncasso.data, function(value, key) {

		//Ti.API.info("Categoria: "+key+" : "+value.name);

		objPagamIncasso.push({
			"title" : value.descrizioneBreve,
			"id" : value.id,
			"version" : value.version
		});

	});

	Ti.App.Properties.setObject("elencoPagamIncasso", objPagamIncasso);

	//Ti.API.info("OBJ PAGAM INCASSO: "+JSON.stringify(Ti.App.Properties.getObject("elencoPagamIncasso")));
});

//var extentedDate = require('extendedDate');
//var encoder = require('encoder');

// Carico le categorie

/*
 var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'timeline.txt');
 var timelineData = f.read();
 */

function refreshTable() {

	Alloy.Globals.loading.show('Sincronizzazione...', false);

}

function populateTable() {

	Ti.API.info("POLULATE TABLE CALLED***");

	temp = [];
	//events.reset();

	//$.subsetEvents.reset();

	//Ti.API.info("OBJ_TMLINE STRINGHIFIZZATO: " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));

	var timelineDataObj = Ti.App.Properties.getObject('timelineProp');

	//Ti.API.info("DATA FETCHED: "+JSON.stringify(timelineData));
	//var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'timeline.txt');
	//f.write(JSON.stringify(timelineData)); // write to the file

	_.forEach(timelineDataObj.data, function(value, key) {

		//Ti.API.info("VALUE: "+JSON.stringify(value));
		//Ti.API.info("CATEGORY NAME: "+value.category.name);
		//var timeline = Alloy.createModel("events", value);

		var aspectObj = {
			evento : 0,
			finance : 0,
			documents : 0,
			links : 0,
			notes : 0
		};

		var creationDate = new Date(value.referenceTime);

		if (!(_.isNull(value.location))) {
			aspectObj.evento = 1;
			var locationRow = " " + icons.map_marker + " " + value.location.name + " ";
		};

		if (!(_.isNull(value.category))) {
			//var categoriaRow = " " + icons.tag + " " + value.category.name + " ";
			var categoriaRow = value.category.name;
		}

		/*
		 if (!(_.isNull(value.aspects) || _.isUndefined(value.aspects))) {

		 _.forEach(value.aspects, function(obj, key) {

		 switch (obj.kind.code) {

		 case "CASHFLOWDATATYPE_CODE":

		 aspectObj.finance += 1;
		 break;

		 case "DOCUMENTDATATYPE_CODE":

		 aspectObj.documents += 1;
		 break;

		 case "NOTEDATATYPE_CODE":

		 aspectObj.notes += 1;
		 break;

		 case "LINKDATATYPE_CODE":

		 aspectObj.links += 1;
		 break;
		 }

		 });

		 }

		 //Ti.API.info("FINANZA: "+aspectObj.finance+" DOCUMENTI: "+aspectObj.documents+ " LINKS: "+aspectObj.links+" NOTE: "+aspectObj.notes);
		 */
		var aspetti = (_.isNull(value.aspects) || _.isUndefined(value.aspects)) ? "no aspects" : value.aspects;

		//Ti.API.info("MOMENT OUTPUT: " + moment(value.referenceTime).fromNow());

		//(value.referenceTime, "YYYYMMDD").fromNow());

		var post = Alloy.createModel('events', {
			id : value.id,
			name : value.name,
			date : moment(value.referenceTime).fromNow(),
			day : creationDate.getDate(),
			month : creationDate.getCMonth().toUpperCase(),
			category : categoriaRow,
			location : locationRow,
			aspects : icons.bar_chart_alt + " " + aspectObj.finance + "   " + icons.file_text_alt + " " + aspectObj.documents + "   " + icons.link + " " + aspectObj.links + "   " + icons.edit_sign + " " + aspectObj.notes
		});

		//temp.push(post);

		subsetEvents.add(post);

		post.save();

	});

};

// cross-platform event listener for lazy tableview loading
function lazyload(_evt) {
	if (OS_IOS) {
		if (startIndex - overlap < _evt.contentOffset.y + initialTableSize) {
			//Ti.API.info("CIAOOO");
			if (isLoading)
				return;
			isLoading = true;
			subsetEvents.reset(temp.slice(startIndex, startIndex + 50));
		}
	} else {
		if (_evt.firstVisibleItem + _evt.visibleItemCount == _evt.totalItemCount) {
			if (isLoading)
				return;
			isLoading = true;
			subsetEvents.reset(temp.slice(startIndex, startIndex + 50));
		}
	}
}

function mostraDettaglioEvento(e) {

	//Ti.API.info("INDEX RIGA CLICCATA: "+JSON.stringify(e));

	try {
		showSpinner();

		var selEvent = subsetEvents.at(e.index).attributes;

		net.getPost(selEvent.id, function(postData) {
			Ti.API.info("DETTAGLIO POST: " + JSON.stringify(postData));
			Alloy.createController("dettaglio_post", postData).getView().open();
		});
	} catch(error) {
		Ti.App.fireEvent("loading_done");
		Ti.API.info("ERRORE: " + error);
	}

	//Ti.API.info("SELECTED DATA ID: "+selEvent.id);

	/*
	 var feedClicked = feedlist.at(e.index).attributes;
	 //Ti.API.info("EVENT "+feedClicked.body);

	 var dettaglioTestoFeedController = Alloy.createController("dettaglioFeed", {titolo: feedClicked.title, body: feedClicked.body});
	 //dueDateController.setParent($);
	 //dueDateController.setPickerDefaultDate($.dateBtn.title);
	 var dettaglioTestoFeedWindow = dettaglioTestoFeedController.getView();
	 dettaglioTestoFeedWindow.open();
	 */
};

function slideRow(e) {
	Ti.API.info("SLIDE****");
	e.source.left -= 50;
	e.source.right += 50;
}

function createNewPost() {
	Alloy.createController("newPost", function() {
		refreshTable();
	}).getView();
}

$.win.open();

$.win.addEventListener("close", function() {
	$.destroy();
});
