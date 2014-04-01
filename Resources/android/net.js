var session = Ti.App.Properties.getInt("sessionId", 0);

Ti.API.info("SESSION ID: " + session);

exports.getData = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
        Ti.App.fireEvent("loading_done");
    };
    xhr.onerror = function(e) {
        alert("Error: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/" + session + "?_type=JSON");
    xhr.send();
};

exports.getPost = function(postId, _callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/" + session + "/" + postId + "?_type=JSON");
    xhr.send();
};

exports.getPostTemplate = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/templates/" + session + "?_type=JSON");
    xhr.send();
};

exports.getTipoMovimento = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v0/financial/financial/tipomovimento/" + session + "?_type=JSON");
    xhr.send();
};

exports.getPagamentoIncasso = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v0/financial/financial/pagamentoincasso/" + session + "?_type=JSON");
    xhr.send();
};

exports.getCategories = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/zz/api/v01/categories/categories/getLeafs/" + session + "?_type=JSON");
    xhr.send();
};

exports.savePost = function(objPost, _callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        var json = JSON.parse(this.responseText);
        Ti.API.info("********** FRM XHR: " + JSON.stringify(json));
        if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
            alert("Evento salvato");
            _callback(json.data.id);
        } else {
            Ti.App.Properties.getList("unsavedPosts", []).push(objPost);
            alert("Errore nella comunicazione col server. L'evento è stato salvato nel dispositivo e sarà possibilie in seguito sincronizzarlo con il server.");
        }
    };
    xhr.onerror = function() {
        Ti.API.error(this.status + " - " + this.statusText);
    };
    xhr.open("POST", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/" + session + "?_type=JSON");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(objPost));
};

exports.saveAspect = function(objAspect, _callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("RISPOSTA SERV SALVA ASPECT: " + this.responseText);
        var json = JSON.parse(this.responseText);
        if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
            alert("Aspetto salvato");
            _callback(json.data.id);
        } else {
            Ti.App.Properties.getList("unsavedAspects", []).push(objAspect);
            alert("Errore nella comunicazione col server. L'evento è stato salvato nel dispositivo e sarà possibilie in seguito sincronizzarlo con il server.");
        }
    };
    xhr.onerror = function() {
        Ti.API.error(this.status + " - " + this.statusText);
    };
    xhr.open("POST", Alloy.Globals.baseUrl + "/zz/api/v01/aspects/aspects/" + session + "?_type=JSON");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(objAspect));
};