//var session = Ti.App.Properties.getInt('sessionId', 0);
var session = 132;
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
	xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/" + session + "?_type=JSON");
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
	xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/" + session + "/" + postId + "?_type=JSON");
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
	xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/templates/" + session + "?_type=JSON");
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
	}; https://demo.ziriziri.com/zz/api/v0/financial/financial/tipomovimento/103?_type=json
	xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v0/financial/financial/tipomovimento/" + session + "?_type=JSON");
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
	}; https://demo.ziriziri.com/zz/api/v0/financial/financial/tipomovimento/103?_type=json
	xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v0/financial/financial/pagamentoincasso/" + session + "?_type=JSON");
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
	xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/categories/categories/getLeafs/" + session + "?_type=JSON");
	xhr.send();
};

exports.savePost = function(objPost, _callback) {

	var xhr = Ti.Network.createHTTPClient();

	//Ti.API.info("OGGETTO DA MANDARE IN POST: "+JSON.stringify(objPost));

	xhr.onload = function() {
		//Ti.API.info("RISPOSTA SERV SALVA POST: "+this.responseText);

		var json = JSON.parse(this.responseText);
		Ti.API.info("********** FRM XHR: " + JSON.stringify(json));

		if (JSON.stringify(json.type.code) == "\"SUCCESS\"") {

			alert("Evento salvato");
			_callback(json.data.id);

		} else {
			Ti.App.Properties.getList('unsavedPosts', []).push(objPost);
			alert("Errore nella comunicazione col server. L'evento è stato salvato nel dispositivo e sarà possibilie salvarlo in seguito");
		};

	};

	xhr.onerror = function() {
		Ti.API.error(this.status + ' - ' + this.statusText);
	};

	//https://demo.ziriziri.com/zz/api/v01/actions/actions/106?_type=json
	//xhr.open('POST', 'https://demo.ziriziri.com/cxf/session/session/login/' + user_name + '?_type=JSON');
	//https://demo.ziriziri.com/zz/api/v01/actions/actions/103?_type=json
	xhr.open('POST', Alloy.Globals.baseUrl + '/zz/api/v01/actions/actions/' + session + '?_type=JSON');

	xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.send(JSON.stringify(objPost));

};

exports.saveAspect = function(allAspects, _callback) {

	var arrayIDAspetti = [];

	var deferredCall = _.after(allAspects.length, function() {
		_callback(arrayIDAspetti);
	});

	_.forEach(allAspects, function(value, key) {

		var xhr = Ti.Network.createHTTPClient();

		//Ti.API.info("OGGETTO DA MANDARE IN POST: "+JSON.stringify(objPost));

		xhr.onload = function() {
			//Ti.API.info("RISPOSTA SERV SALVA ASPECT: " + this.responseText);

			var json = JSON.parse(this.responseText);

			if (JSON.stringify(json.type.code) == "\"SUCCESS\"") {

				Ti.API.info("ID ASPETTO SALVATO: " + json.data.id);

				//alert("Aspetto salvato");
				//_callback(json.data.id);
				arrayIDAspetti.push(json.data.id);
				deferredCall();

			} else {
				//Ti.App.Properties.getList('unsavedAspects', []).push(objAspect);
				alert("Errore nella comunicazione col server.");
			};

		};

		xhr.onerror = function() {
			Ti.API.error(this.status + ' - ' + this.statusText);
		};

		//https://demo.ziriziri.com/zz/api/v01/actions/actions/106?_type=json
		//xhr.open('POST', 'https://demo.ziriziri.com/cxf/session/session/login/' + user_name + '?_type=JSON');
		//https://demo.ziriziri.com/zz/api/v01/actions/actions/103?_type=json
		xhr.open('POST', Alloy.Globals.baseUrl + '/zz/api/v01/aspects/aspects/' + session + '?_type=JSON');

		xhr.setRequestHeader('Accept', 'application/json');
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.send(JSON.stringify(value));
	});

};

exports.linkAspectsToPost = function(p_postId, p_array) {
	
	Ti.API.info("ARRAY ****:" + JSON.stringify(p_array));
	
	var tmpArr = [];
	
	tmpArr.push(p_array);
	
	tmpArr = _.flatten(tmpArr);
	

	var xhr = Ti.Network.createHTTPClient();

	xhr.onload = function() {

		Ti.API.info("RISPOSTA SERV CREA RELAZIONE: " + this.responseText);

		var json = JSON.parse(this.responseText);

		if (JSON.stringify(json.type.code) == "\"SUCCESS\"") {

			alert("RELAZIONI CREATE!!!!!");
			//_callback(json.data.id);

		} else {
			alert("Errore nella comunicazione col server.");
		};

	};

	xhr.onerror = function() {
		Ti.API.error("ERRORE RISPOSTA SERVER: "+this.status + ' - ' + this.statusText);
	};

	xhr.open('PUT', Alloy.Globals.baseUrl + '/zz/api/v01/actions/actions/' + session + '/' + p_postId + '/relations?_type=JSON');
	
	Ti.API.info("URL PUT CALL: "+Alloy.Globals.baseUrl + '/zz/api/v01/actions/actions/' + session + '/' + p_postId + '/relations?_type=JSON');
	
	xhr.setRequestHeader('Accept', 'application/json');
	xhr.setRequestHeader('Content-Type', 'application/json');
	//xhr.setRequestHeader('data', p_array);
	xhr.setRequestHeader('X-HTTP-Method-Override', 'PUT');
	
	var arrIdAspects = "["+p_array.toString()+"]";
	
	
	tmpArr = JSON.stringify(tmpArr);
	
	Ti.API.info("ARRAY INVIATO: "+tmpArr);

	xhr.send(tmpArr);

};
