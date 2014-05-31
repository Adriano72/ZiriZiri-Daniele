var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);
moment.lang('it');

//Ti.API.info("ARGS: " + JSON.stringify(args));

//Alloy.Models.Post = Alloy.createModel("post", Alloy.Collections.Timeline.at(args));

//var post = Alloy.createModel("post", Alloy.Collections.Timeline.at(args));

//Alloy.Models.Post = args;
Ti.API.info("MODEL: "+JSON.stringify(Alloy.Models.Post));

Ti.API.info("NULL CATEG: "+ _.isNull(Alloy.Models.Post.get("category")));

//Alloy.Models.Post.trigger('change', Alloy.Models.Post);

//Alloy.Models.Post.set("name", "TestTransformName", {silent: true});

var modJson  = Alloy.Models.Post.toJSON();

Ti.API.info("MODEL JSON: "+JSON.stringify(modJson));
Ti.API.info("MODEL CATEGORY: "+modJson.category.name);


Alloy.Models.Post.set("referenceTime", moment(Alloy.Models.Post.get("referenceTime")).fromNow(), {silent: true});

Alloy.Models.Post.set("categoria", (!_.isNull(modJson.category) ? modJson.category.name : ""), {silent: true});

Ti.API.info("TRASF CATEGORY: "+Alloy.Models.Post.get("categoria"));

Alloy.Models.Post.trigger('change');

//Alloy.Models.Post.trigger('change');
/*
 var creationDate = new Date(args.data.referenceTime);
 var category = (_.isNull(args.data.category) || _.isUndefined(args.data.category)) ? "" : " " + icons.tag + " " + args.data.category.name;

 if (!(_.isNull(args.data.location))) {

 var location = args.data.location.name;
 $.location.text = " " + icons.map_marker + " " + location + " ";

 $.mapview.region = {
 latitude : args.data.location.latitude,
 longitude : args.data.location.longitude,
 latitudeDelta : 0.01,
 longitudeDelta : 0.01
 };

 var eventMarker = Alloy.Globals.Map.createAnnotation({
 latitude : args.data.location.latitude,
 longitude : args.data.location.longitude,
 title : args.data.location.name,
 pincolor : Alloy.Globals.Map.ANNOTATION_RED
 });

 $.mapview.addAnnotation(eventMarker);

 } else {
 $.mapview.height = 0;
 }

 $.dayBox.text = creationDate.getDate();
 $.monthBox.text = creationDate.getCMonth();
 $.name.text = args.data.name;
 $.category.text = category;

 var rows = [];

 _.forEach(args.data.aspects, function(value, key) {

 switch (value.kind.code) {

 case "CASHFLOWDATATYPE_CODE":

 var riga = Alloy.createController('rowCASHFLOW', {

 id_code : key,
 description : value.name,
 importo : value.data.importo,
 dataOperazione : value.data.dataOperazione,
 dataValuta : value.data.dataValuta,
 codTipoMovimento : value.data.tipoMovimento.codice

 }).getView();
 rows.push(riga);

 break;

 case "DOCUMENTDATATYPE_CODE":

 Ti.API.info("ASPECT DESCRIPTION: " + JSON.stringify(value));

 var riga = Alloy.createController('rowDOCUMENT', {

 id_code : key,
 titolo : value.name,
 descrizione : value.description,
 size : value.data.size,
 name : value.data.name

 }).getView();
 rows.push(riga);

 break;

 case "LINKDATATYPE_CODE":

 var riga = Alloy.createController('rowLINK', {

 id_code : key,
 description : value.description,
 type : value.data.format.type,
 title : value.data.title,
 content : value.data.content

 }).getView();
 rows.push(riga);

 break;

 case "NOTEDATATYPE_CODE":

 Ti.API.info("VALUE: "+JSON.stringify(value));

 var riga = Alloy.createController('rowNOTE', {

 id_code : key,
 titolo : value.name,
 timestamp : value.data.timestamp

 }).getView();
 rows.push(riga);
 break;
 };
 });

 $.aspectsTable.setData(rows);

 function closeActivityIndicator() {

 Ti.App.fireEvent("loading_done");
 };

 function aspectDetail(e) {

 Alloy.createController('aspect_detail', args.data.aspects[e.source.id_code]).getView().open();

 //Ti.API.info("CLICKED: "+e.source.id_code);
 //Ti.API.info("ASPETTO SELEZIONATO; "+args.data.aspects[e.source.id_code].kind.code);

 };
 */
$.win.open();

$.win.addEventListener("close", function() {
	$.destroy();
}); 