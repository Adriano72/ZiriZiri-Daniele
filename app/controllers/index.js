//var timelineWin = Alloy.createController("timeline_win").getView();

var rememberMe = false;

function hideActionBar() {

	$.index.activity.actionBar.hide();

}

Ti.API.info("PROP TIMELINE (Index CACHED): " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));

if (Ti.App.Properties.getBool('authenticated', false)) {

	Alloy.Globals.loading.show('Logging in...', false);

	ZZ.API.Core.Session.logIn({

		username : Ti.App.Properties.getString("user_username"),

		password : Ti.App.Properties.getString("user_password")

	}, _loadTimelineAlreadyLoggedIn, function(error) {

		alert("Username o password errati");

		Ti.API.error("ZZ.API.Core.Session.logIn error [error : " + error + "]");

	});

	function _loadTimelineAlreadyLoggedIn(utente) {

		Ti.API.info("**** WELCOME BACK: " + utente.username);

		var loadTabData = require("loadTabulatedData");

		loadTabData.loadTabData();

		ZZ.API.Core.Posts.list(function(posts) {

			Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");

			Ti.App.Properties.setObject('timelineProp', posts);

			Alloy.Collections.Timeline.reset(posts);

			//Ti.API.info("PROP TIMELINE: " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));

			//Alloy.createController("timeline_win").getView();
			Alloy.createController("home").getView().open();

		}, function(error) {

			Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");

		});

	}

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

var _coreSessionLogInCallback = function(user) {

	Ti.API.info("ZZ.API.Core.Session.logIn success [user : " + JSON.stringify(user) + "]");

	if (rememberMe) {

		Ti.App.Properties.setBool('authenticated', true);
		Ti.App.Properties.setString("user_username", $.username.value);
		Ti.App.Properties.setString("user_password", $.password.value);

	};

	var net = require('net');

	var loadTabData = require("loadTabulatedData");

	loadTabData.loadTabData();

	if (_.isNull(Ti.App.Properties.getObject('timelineProp'))) {

		//$.index.close();

		ZZ.API.Core.Posts.list(function(posts) {

			Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");

			Ti.App.Properties.setObject('timelineProp', posts);

			Alloy.Collections.Timeline.reset(posts);

			//Ti.API.info("PROP TIMELINE: " + JSON.stringify(Ti.App.Properties.getObject('timelineProp')));

			//Alloy.createController("timeline_win").getView();
			Alloy.createController("home").getView().open();

		}, function(error) {

			Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");

		});

	} else {

		//$.index.close();

		//Alloy.createController("timeline_win").getView();
		Alloy.createController("home").getView().open();

	};

};

function do_login(e) {

	/*

	 var user_name = $.username.value || 'none';

	 var user_password = $.password.value || 'none';

	 ZZ.API.Core.Session.logIn({username : user_name, password : user_password}, _loginSuccess, _loginFailure);

	 */

	var user_name = $.username.value || 'none';

	var user_password = $.password.value || 'none';

	Alloy.Globals.loading.show('Logging in...', false);

	ZZ.API.Core.Session.logIn({

		username : $.username.value, //"rnduser_1418138154947", //"dummyuser",

		password : $.password.value //"password",

	}, _coreSessionLogInCallback, function(error) {

		alert("Username o password errati");

		Ti.API.error("ZZ.API.Core.Session.logIn error [error : " + error + "]");

	});

};

