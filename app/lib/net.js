
exports.getData = function(_callback){
	
	var xhr = Ti.Network.createHTTPClient();
	
	var session = Ti.App.Properties.getInt('sessionId', 0);
	Ti.API.info("SESSION ID: "+ session);
	
	xhr.onload = function() {
		//Ti.API.info("RESPONSE: "+xhr.responseText);
		_callback(JSON.parse(xhr.responseText));
	};
	
	xhr.onerror = function(e) {
		alert("Error: " + JSON.stringify(e));
	};
	
	
	
	//xhr.open("GET", "https://demo.ziriziri.com/cxf/api/v01/actions/actions/680?_type=json");
	xhr.open("GET", "https://demo.ziriziri.com/cxf/api/v01/actions/actions/"+session+"?_type=JSON");
	xhr.send();
};
