//var timelineWin = Alloy.createController("timeline_win").getView();

var net = require('net');

if (Ti.App.Properties.getBool('authenticated', false)) {
	//$.index.open();
	Ti.API.info("Already Authenticated!");

	if (_.isNull(Ti.App.Properties.getObject('timelineProp'))) {

		net.getData(function(timeline_obj) {
			Ti.API.info("RETURN CODE: " + timeline_obj.type.code);
			Ti.App.Properties.setObject('timelineProp', timeline_obj);
			Ti.API.info("OBJ_TMLINE: " + Ti.App.Properties.getObject('timelineProp'));

		});
	};
	Alloy.createController("timeline_win").getView().open();
} else {

	$.index.open();
	//Alloy.createController("timeline_win").getView().open(); //solo per debug

};

function do_login(e) {

	var user_name = $.username.value || 'none';
	var user_password = $.password.value || 'none';

	Ti.API.info("Username: " + user_name);

	Ti.API.info("Password: " + user_password);

	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info(this.responseText);
		var json = JSON.parse(this.responseText);
		Ti.API.info("********** FRM XHR: " + JSON.stringify(json));

		if (JSON.stringify(json.type.code) == "\"SUCCESS\"") {

			Ti.App.Properties.setBool('authenticated', true);
			Ti.App.Properties.setInt('sessionId', json.data.sessionId);
			Ti.API.info("SESSIONE: " + Ti.App.Properties.getInt('sessionId', 0));
			Alloy.Globals.loading.show('Sincronizzazione...', false);
			if (_.isNull(Ti.App.Properties.getObject('timelineProp'))) {

				net.getData(function(timeline_obj) {
					Ti.API.info("RETURN CODE: " + timeline_obj.type.code);
					Ti.App.Properties.setObject('timelineProp', timeline_obj);
					Ti.API.info("OBJ_TMLINE: " + Ti.App.Properties.getObject('timelineProp'));
					Alloy.createController("timeline_win").getView().open();
					//Alloy.createController("timeline_win").getView();
				});
			};
			
			$.index.close();
			//$.index.open();

		} else {
			alert("Username o password errati");
		}

	};

	xhr.onerror = function() {
		Ti.API.error(this.status + ' - ' + this.statusText);
	};

	//xhr.open('POST', 'https://demo.ziriziri.com/cxf/session/session/login/' + user_name + '?_type=JSON');
	xhr.open('POST', Alloy.Globals.baseUrl + '/zz/api/v01/session/login/' + user_name + '?_type=JSON');

	xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.send(user_password);

}

