var session = Ti.App.Properties.getString("sessionId", 0);

var moment = require("alloy/moment");

moment.lang("it", Alloy.Globals.Moment_IT);

moment.lang("it");

Ti.API.info("SESSION ID: " + session);

exports.getData = function(page, max, _callback) {
    Ti.API.info("PARAMETRI: " + page + " " + max);
    var xhr = Ti.Network.createHTTPClient();
    var pagination = max > 0 ? "&page=" + page + "&max=" + max : "";
    xhr.onload = function() {
        Ti.API.info("RESPONSE FROM GET DATA: " + xhr.responseText);
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function() {
        Alloy.Globals.loading.hide();
        alert("Errore nella comunicazione con il server. Accertarsi che il dispositivo sia collegato alla rete e riprovare");
    };
    session = Ti.App.Properties.getString("sessionId", 0);
    var today = moment().format("YYYY-MM-DD");
    today += "23:59";
    Ti.API.info("################CALL:GET", Alloy.Globals.baseUrl + "/actions/actions/" + session + "?_type=JSON&from=2014-01-01&to=" + today + pagination + "&cached=false");
    xhr.open("GET", Alloy.Globals.baseUrl + "/actions/actions/" + session + "?_type=JSON&from=2014-01-01&to=" + today + pagination + "&cached=true");
    xhr.send();
};

exports.getPost = function(postId, _callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error gettin Timeline: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/actions/actions/" + session + "/" + postId + "?_type=JSON");
    xhr.send();
};

exports.getPostTemplate = function(page, max, _callback) {
    var pagination = max > 0 ? "&page=" + page + "&max=" + max : "";
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("RESPONSE TEMPLATE: " + xhr.responseText);
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error getting Template " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/actions/actions/templates/" + session + "?_type=JSON" + pagination);
    xhr.send();
};

exports.getTipoMovimento = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error getting Tipo Movimento " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/financial/financial/tipomovimento/" + session + "?_type=JSON");
    xhr.send();
};

exports.getPagamentoIncasso = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error getting Pagamento Incasso: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/financial/financial/aliasstrumentopagamentoincasso/" + session + "?_type=JSON");
    xhr.send();
};

exports.getVariabilita = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error getting Variabilità: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/financial/financial/tipovariabilita/" + session + "?_type=JSON");
    xhr.send();
};

exports.getStatoMovimento = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error getting Stato Movimento: " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/financial/financial/statomovimento/" + session + "?_type=JSON");
    xhr.send();
};

exports.getCategories = function(_callback) {
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("RESPONSE CATEGORY: " + xhr.responseText);
        _callback(JSON.parse(xhr.responseText));
    };
    xhr.onerror = function(e) {
        alert("Error getting Categories " + JSON.stringify(e));
    };
    xhr.open("GET", Alloy.Globals.baseUrl + "/categories/categories/getLeafs/" + session + "?_type=JSON");
    xhr.send();
};

exports.savePost = function(objPost, _callback) {
    var dataJson = {};
    dataJson.data = objPost;
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        var json = JSON.parse(this.responseText);
        Ti.API.info("******RESPONSE TEXT SALVATAGGIO POST: " + JSON.stringify(json.data));
        if ('"SUCCESS"' == JSON.stringify(json.type.code)) _callback(json.data.id, json.data); else {
            Ti.App.Properties.getList("unsavedPosts", []).push(objPost);
            alert("Errore nella comunicazione col server. L'evento è stato salvato nel dispositivo e sarà possibilie salvarlo in seguito");
        }
    };
    xhr.onerror = function() {
        Alloy.Globals.loading.hide();
        Ti.API.error(this.status + " - " + this.statusText);
    };
    xhr.open("POST", Alloy.Globals.baseUrl + "/actions/actions/" + session + "?_type=JSON");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(dataJson));
};

exports.saveAspect = function(allAspects, _callback) {
    var arrayIDAspetti = [];
    var deferredCall = _.after(allAspects.length, function() {
        _callback(arrayIDAspetti);
    });
    _.forEach(allAspects, function(value) {
        var dataJson = {};
        Ti.API.info("***SAVING ASPECT***");
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function() {
            var json = JSON.parse(this.responseText);
            if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
                Ti.API.info("ID ASPETTO SALVATO: " + json.data.id);
                arrayIDAspetti.push(json.data.id);
                deferredCall();
            } else {
                Alloy.Globals.loading.hide();
                alert("Errore salvataggio aspetto");
                Ti.API.info("ERRORE RICEVUTO: " + JSON.stringify(json));
            }
        };
        xhr.onerror = function() {
            Ti.API.error("ERRORE SALVATAGGIO ASPETTO: " + this.status + " - " + this.statusText);
        };
        xhr.open("POST", Alloy.Globals.baseUrl + "/aspects/aspects/" + session + "?_type=JSON");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        Ti.API.info("JSON ASPETTO DA SALVARE: " + JSON.stringify(value));
        dataJson.data = value;
        xhr.send(JSON.stringify(dataJson));
    });
};

exports.linkAspectsToPost = function(p_postId, p_array, _callback) {
    Ti.API.info("ARRAY ****:" + JSON.stringify(p_array));
    var dataJson = {};
    var tmpArr = [];
    tmpArr.push(p_array);
    tmpArr = _.flatten(tmpArr);
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function() {
        Ti.API.info("RISPOSTA SERV CREA RELAZIONE: " + this.responseText);
        var json = JSON.parse(this.responseText);
        if ('"SUCCESS"' == JSON.stringify(json.type.code)) {
            Ti.App.fireEvent("loading_done");
            _callback(json.data);
        } else alert("Errore nella comunicazione col server.");
    };
    xhr.onerror = function() {
        Ti.API.error("ERRORE RISPOSTA SERVER: " + this.status + " - " + this.statusText);
    };
    xhr.open("PUT", Alloy.Globals.baseUrl + "/actions/actions/" + session + "/" + p_postId + "/relations?_type=JSON");
    Ti.API.info("URL PUT CALL: " + Alloy.Globals.baseUrl + "/actions/actions/" + session + "/" + p_postId + "/relations?_type=JSON");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-HTTP-Method-Override", "PUT");
    "[" + p_array.toString() + "]";
    Ti.API.info("ARRAY INVIATO: " + tmpArr);
    dataJson.data = tmpArr;
    xhr.send(JSON.stringify(dataJson));
};