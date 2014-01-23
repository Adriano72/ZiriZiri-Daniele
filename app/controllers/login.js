var args = arguments[0] || {};

function do_login(e) {
	
	
	
	var user_name = $.username.value || 'none';
	var user_password = $.password.value || 'none';
	
	Ti.API.info("Username: "+ user_name);
	
	Ti.API.info("Password: "+ user_password);

	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info(this.responseText);
		var json = JSON.parse(this.responseText);
		Ti.API.info("********** FRM XHR: " + JSON.stringify(json));
		
		if (JSON.stringify(json.type.code) == "\"SUCCESS\"") {
				$.login_win.close();
				//$.index.open();
				
		} else {
			alert("Username o password errati");
		}
		
	
	};

	xhr.onerror = function() {
		Ti.API.error(this.status + ' - ' + this.statusText);
	};

	//var cod_servizio = Ti.App.Properties.getString('acipoi_code');

	xhr.open('POST', 'https://demo.ziriziri.com/cxf/session/session/login/' + user_name + '?_type=JSON');

	xhr.send(user_password);

}

