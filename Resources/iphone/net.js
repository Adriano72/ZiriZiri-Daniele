exports.getData = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    var session = Ti.App.Properties.getInt("sessionId", 0);
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error: " + JSON.stringify(e));
    };
    xhr.open("GET", "https://demo.ziriziri.com/cxf/api/v01/actions/actions/" + session + "?_type=JSON");
    xhr.send();
};