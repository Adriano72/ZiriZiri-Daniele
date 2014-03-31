var session = Ti.App.Properties.getInt('sessionId', 0);
Ti.API.info("SESSION ID: " + session);

exports.getData = function(_callback) {

	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info("RESPONSE: "+xhr.responseText);
		_callback(JSON.parse(xhr.responseText));
		Ti.App.fireEvent("loading_done");
	};

	xhr.onerror = function(e) {
		alert("Error: " + JSON.stringify(e));
	};

	//xhr.open("GET", "https://demo.ziriziri.com/cxf/api/v01/actions/actions/680?_type=json");
	xhr.open("GET", Alloy.Globals.baseUrl+"/zz/api/v01/actions/actions/" + session + "?_type=JSON");
	xhr.send();
};

exports.getPost = function(postId, _callback) {

	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info("RESPONSE: "+xhr.responseText);
		_callback(JSON.parse(xhr.responseText));
	};

	xhr.onerror = function(e) {
		alert("Error: " + JSON.stringify(e));
	};

	//xhr.open("GET", "https://demo.ziriziri.com/cxf/api/v01/actions/actions/680?_type=json");
	xhr.open("GET", Alloy.Globals.baseUrl+"/zz/api/v01/actions/actions/" + session + "/" + postId + "?_type=JSON");
	xhr.send();
};

exports.getPostTemplate = function(_callback) {
	
	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info("RESPONSE: "+xhr.responseText);
		_callback(JSON.parse(xhr.responseText));
	};

	xhr.onerror = function(e) {
		alert("Error: " + JSON.stringify(e));
	};

	//xhr.open("GET", "https://demo.ziriziri.com/cxf/api/v01/actions/actions/680?_type=json");
	xhr.open("GET", Alloy.Globals.baseUrl+"/zz/api/v01/actions/actions/templates/" + session + "?_type=JSON");
	xhr.send();
};

exports.getTipoMovimento = function(_callback) {
	
	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info("RESPONSE: "+xhr.responseText);
		_callback(JSON.parse(xhr.responseText));
	};

	xhr.onerror = function(e) {
		alert("Error: " + JSON.stringify(e));
	};

	https://demo.ziriziri.com/zz/api/v0/financial/financial/tipomovimento/103?_type=json
	xhr.open("GET", Alloy.Globals.baseUrl+"/zz/api/v0/financial/financial/tipomovimento/" + session + "?_type=JSON");
	xhr.send();
};

exports.getPagamentoIncasso = function(_callback) {
	
	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info("RESPONSE: "+xhr.responseText);
		_callback(JSON.parse(xhr.responseText));
	};

	xhr.onerror = function(e) {
		alert("Error: " + JSON.stringify(e));
	};

	https://demo.ziriziri.com/zz/api/v0/financial/financial/tipomovimento/103?_type=json
	xhr.open("GET", Alloy.Globals.baseUrl+"/zz/api/v0/financial/financial/pagamentoincasso/" + session + "?_type=JSON");
	xhr.send();
};
exports.getCategories = function(_callback) {
	
	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {
		//Ti.API.info("RESPONSE: "+xhr.responseText);
		_callback(JSON.parse(xhr.responseText));
	};

	xhr.onerror = function(e) {
		alert("Error: " + JSON.stringify(e));
	};

	//xhr.open("GET", "https://demo.ziriziri.com/cxf/api/v01/actions/actions/680?_type=json");
	xhr.open("GET", Alloy.Globals.baseUrl+"/zz/api/v01/categories/categories/getLeafs/" + session + "?_type=JSON");
	xhr.send();
};

exports.savePost = function(objPost, _callback){
	
	var xhr = Ti.Network.createHTTPClient();
	
	Ti.API.info("OGGETTO DA MANDARE IN POST: "+JSON.stringify(objPost));

	xhr.onload = function() {
		Ti.API.info("RISPOSTA SERV SALVA POST: "+this.responseText);
		
		/*
		var json = JSON.parse(this.responseText);
		Ti.API.info("********** FRM XHR: " + JSON.stringify(json));
		
		if (JSON.stringify(json.type.code) == "\"SUCCESS\"") {
			
				Ti.App.Properties.setBool('authenticated', true);
				Ti.App.Properties.setInt('sessionId', json.data.sessionId);
				//alert(Ti.App.Properties.getInt('sessionId', 0));
				Alloy.createController("timeline_win").getView().open();
				//$.index.open();
				
		} else {
			alert("Username o password errati");
		}
		*/
	
	};

	xhr.onerror = function() {
		Ti.API.error(this.status + ' - ' + this.statusText);
	};

	//https://demo.ziriziri.com/zz/api/v01/actions/actions/106?_type=json
	//xhr.open('POST', 'https://demo.ziriziri.com/cxf/session/session/login/' + user_name + '?_type=JSON');
	//https://demo.ziriziri.com/zz/api/v01/actions/actions/103?_type=json
	xhr.open('POST', Alloy.Globals.baseUrl+'/zz/api/v01/actions/actions/' + session + '?_type=JSON');
	
	xhr.setRequestHeader( 'Accept', 'application/json' );
	xhr.setRequestHeader( 'Content-Type', 'application/json' );

	xhr.send(JSON.stringify(objPost));
	
	
	
};
