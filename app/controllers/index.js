$.index.open();

var timelineList = Alloy.Collections.timeline;
//todolist.fetch();

var net = require('net');
net.getData(function(timelineData) {
	
	//Ti.API.info(JSON.stringify(timelineData));
	
	_.each(timelineData.data, function(value, key){
		
		//Ti.API.info("VALUE: "+JSON.stringify(value));
		//Ti.API.info("CATEGORY NAME: "+value.category.name);
		var timeline = Alloy.createModel("timeline", value);
		
		var descrizioneCategoria = (_.isNull(value.category) || _.isUndefined(value.category.name))?"non definita":value.category.name;
		var aspetti = (_.isNull(value.aspects) || _.isUndefined(value.aspects))?"no aspects":value.aspects;
		Ti.API.info("aspects: "+descrizioneCategoria);
		var timeline = Alloy.createModel('timeline', {name: value.name, category: "Categoria: "+descrizioneCategoria, aspects: aspetti});
		
		timelineList.add(timeline);
		
	});
	/*
	for (var i=0; i<feedsWCCM.nodes.length; i++) {
		var feed = Alloy.createModel("feed", feedsWCCM[i]);
		feedlist.add(feed.node);
	}
	*/
	//Ti.API.info(timelineList.toJSON());
});

function mostraDettaglioEvento(e){
	
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
