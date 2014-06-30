//var timelineWin = Alloy.createController("timeline_win").getView();

var net = require('net');

var loadTabData = require("loadTabulatedData");

var rememberMe = false;

Ti.API.info("PROP TIMELINE (Index CACHED): " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));

if (Ti.App.Properties.getBool('authenticated', false)) {
	//$.index.open();
	Ti.API.info("Already Authenticated!");

	loadTabData.loadTabData();

	if (_.isNull(Ti.App.Properties.getObject('timelineProp'))) {

		net.getData(0, 25, function(timeline_obj) {
			Ti.API.info("RETURN CODE: " + timeline_obj.type.code);
			Ti.App.Properties.setObject('timelineProp', timeline_obj.data);
			Ti.API.info("PROP TIMELINE (Index): " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));
			Alloy.createController("timeline_win").getView();
		});

	} else {

		Alloy.createController("timeline_win").getView();
	};

} else {
	Ti.App.Properties.setObject('timelineProp', null);
	$.index.open();
	//Alloy.createController("timeline_win").getView().open(); //solo per debug

};

/*
 function manageClose() {

 var activity = Titanium.Android.currentActivity;
 activity.finish();

 };
 */

function manageRememberMe(e) {

	rememberMe = e.value;

};

function do_login(e) {

	var user_name = $.username.value || 'none';
	var user_password = $.password.value || 'none';

	var dataJson = {};

	Ti.API.info("Username: " + user_name);

	Ti.API.info("Password: " + user_password);

	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info(this.responseText);
		var json = JSON.parse(this.responseText);
		Ti.API.info("********** FRM XHR: " + JSON.stringify(json));

		if (JSON.stringify(json.type.code) == "\"SUCCESS\"") {

			if (rememberMe) {
				Ti.App.Properties.setBool('authenticated', true);
			};
			Ti.App.Properties.setString('sessionId', json.data.sessionId);
			loadTabData.loadTabData();
			Ti.API.info("SESSIONE: " + Ti.App.Properties.getString('sessionId', 0));
			Alloy.Globals.loading.show('Sincronizzazione...', false);

			if (_.isNull(Ti.App.Properties.getObject('timelineProp'))) {

				//$.index.close();

				net.getData(0, 25, function(timeline_obj) {

					Ti.App.Properties.setObject('timelineProp', timeline_obj.data);
					Ti.API.info("PROP TIMELINE: " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));
					Alloy.createController("timeline_win").getView();

					//Alloy.createController("timeline_win").getView();
				});
			} else {
				//$.index.close();
				Alloy.createController("timeline_win").getView();
			};

			//$.index.close();
			//$.index.open();

		} else {
			alert("Username o password errati");
		}

	};

	xhr.onerror = function() {
		Ti.API.error("ERRORE DO LOGIN: " + this.status + ' - ' + this.statusText);
	};

	//xhr.open('POST', 'https://demo.ziriziri.com/cxf/session/session/login/' + user_name + '?_type=JSON');
	xhr.open('POST', Alloy.Globals.baseUrl + '/session/login/' + user_name + '?_type=JSON');

	xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Content-Type', 'application/json');

	dataJson.data = user_password;

	Ti.API.info("DATA JSON: " + JSON.stringify(dataJson));

	xhr.send(JSON.stringify(dataJson));

}