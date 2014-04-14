var session = 132;

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
        if ('"SUCCESS"' == JSON.stringify(json.type.code)) _callback(json.data.id); else {
            Ti.App.Properties.getList("unsavedPosts", []).push(objPost);
            alert("Errore nella comunicazione col server. L'evento è stato salvato nel dispositivo e sarà possibilie salvarlo in seguito");
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

exports.saveAspect = function(allAspects, _callback) {
    var arrayIDAspetti = [];
    var deferredCall = _.after(allAspects.length, function() {
        _callback(arrayIDAspetti);
    });
    _.forEach(allAspects, function(value) {
        Ti.API.info("***SAVING ASPECT***");
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
                Ti.API.info("ID ASPETTO SALVATO: " + json.data.id);
                arrayIDAspetti.push(json.data.id);
                deferredCall();
            } else alert("Errore nella comunicazione col server.");
        };
        xhr.onerror = function() {
            Ti.API.error(this.status + " - " + this.statusText);
        };
        xhr.open("POST", Alloy.Globals.baseUrl + "/zz/api/v01/aspects/aspects/" + session + "?_type=JSON");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(value));
    });
};

exports.linkAspectsToPost = function(p_postId, p_array, _callback) {
    Ti.API.info("ARRAY ****:" + JSON.stringify(p_array));
    var tmpArr = [];
    tmpArr.push(p_array);
    tmpArr = _.flatten(tmpArr);
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("RISPOSTA SERV CREA RELAZIONE: " + this.responseText);
        var json = JSON.parse(this.responseText);
        if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
            Ti.App.fireEvent("loading_done");
            alert("Post salvato");
            _callback();
        } else alert("Errore nella comunicazione col server.");
    };
    xhr.onerror = function() {
        Ti.API.error("ERRORE RISPOSTA SERVER: " + this.status + " - " + this.statusText);
    };
    xhr.open("PUT", Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/" + session + "/" + p_postId + "/relations?_type=JSON");
    Ti.API.info("URL PUT CALL: " + Alloy.Globals.baseUrl + "/zz/api/v01/actions/actions/" + session + "/" + p_postId + "/relations?_type=JSON");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-HTTP-Method-Override", "PUT");
    "[" + p_array.toString() + "]";
    tmpArr = JSON.stringify(tmpArr);
    Ti.API.info("ARRAY INVIATO: " + tmpArr);
    xhr.send(tmpArr);
};