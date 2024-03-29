var zzConfig = require("zz.config");

var zz = {
    Internal: {
        Cloud: {
            Core: {
                Session: {},
                Posts: {
                    Post: {
                        Templates: {}
                    }
                },
                Aspects: {
                    Aspect: {}
                },
                Categories: {},
                Tags: {},
                Stories: {}
            },
            Finance: {
                CashSources: {},
                PaymentModes: {},
                CashflowStatuses: {},
                PaymentTakingTools: {},
                CashflowTypes: {},
                CashflowVariabilities: {},
                CashflowCurrencies: {}
            },
            Files: {
                Attachment: {}
            }
        }
    }
};

zz.Internal.Cloud.Core.Session.logIn = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Session.logIn");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Session.logIn [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/session/login/" + user.username;
    var data = {
        data: user.password
    };
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Session.logIn._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Session.logIn._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Session.logIn._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Session.logIn._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("POST", url, data, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Posts.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.read");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/actions/actions/" + user.token + "?from=2014-01-01&to=2014-012-01&page=0&max=100&cached=" + zzConfig.ZZ.Config.Cloud.cached;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Posts.Post.create = function(user, post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.create");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.create [user : " + JSON.stringify(user) + "]");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.create [post : " + JSON.stringify(post) + "]");
    post.id = null;
    post.modules = null;
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/actions/actions/" + user.token;
    var data = {
        data: post
    };
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.create._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.create._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.create._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.create._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("POST", url, data, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Posts.Post.update = function(user, post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.update");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.update [user : " + JSON.stringify(user) + "]");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.update [post : " + JSON.stringify(post) + "]");
    post.modules = null;
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/actions/actions/" + user.token;
    var data = {
        data: post
    };
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.update._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.update._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.update._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.update._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("PUT", url, data, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Posts.Post.read = function(user, post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.read");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.read [user : " + JSON.stringify(user) + "]");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.read [post : " + JSON.stringify(post) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/actions/actions/" + user.token + "/" + post.id + "?cached=" + zzConfig.ZZ.Config.Cloud.cached;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Posts.Post.Templates.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.Templates.read");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.Templates.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/actions/actions/templates/" + user.token + "?page=0&max=100&cached=" + zzConfig.ZZ.Config.Cloud.cached;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.Templates.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.Templates.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.Templates.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Posts.Post.Templates.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Categories.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Categories.read");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Categories.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/categories/categories/getLeafs/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Categories.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Categories.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Categories.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Categories.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Stories.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Stories.read");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Stories.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/stories/stories/" + user.token + "?from=2010-01-01&to=2020-01-01&page=0&max=1";
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Stories.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Stories.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Stories.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Stories.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Core.Tags.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Core.Tags.read");
    Ti.API.debug("ZZ.Internal.Cloud.Core.Tags.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/tags/tags/" + user.token + "?from=2010-01-01&to=2020-01-01";
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Tags.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Tags.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Core.Tags.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Core.Tags.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Finance.CashSources.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashSources.read");
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashSources.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/financial/financial/fonteliquidita/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashSources.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashSources.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashSources.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashSources.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Finance.PaymentModes.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentModes.read");
    Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentModes.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/financial/financial/modalitapagamento/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentModes.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentModes.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentModes.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentModes.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Finance.CashflowStatuses.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowStatuses.read");
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowStatuses.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/financial/financial/statomovimento/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowStatuses.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowStatuses.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowStatuses.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowStatuses.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Finance.PaymentTakingTools.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentTakingTools.read");
    Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentTakingTools.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/financial/financial/strumentopagamentoincasso/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentTakingTools.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentTakingTools.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentTakingTools.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.PaymentTakingTools.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Finance.CashflowTypes.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowTypes.read");
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowTypes.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/financial/financial/tipomovimento/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowTypes.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowTypes.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowTypes.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowTypes.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Finance.CashflowVariabilities.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowVariabilities.read");
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowVariabilities.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/financial/financial/tipovariabilita/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowVariabilities.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowVariabilities.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowVariabilities.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowVariabilities.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Finance.CashflowCurrencies.read = function(user, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowCurrencies.read");
    Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowCurrencies.read [user : " + JSON.stringify(user) + "]");
    var url = zzConfig.ZZ.Config.Cloud.baseURL + "/financial/financial/valuta/" + user.token;
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowCurrencies.read._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowCurrencies.read._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowCurrencies.read._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Finance.CashflowCurrencies.read._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("GET", url, null, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Files.Attachment.upload = function(user, blob, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.upload");
    Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.upload [user : " + JSON.stringify(user) + "]");
    Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.upload [blob.mimeType : " + blob.mimeType + "]");
    var url = zzConfig.ZZ.Config.Cloud.cdnURL + "/files/attachment/upload/" + user.token;
    var attachment = {
        id: user.token + "-" + new Date().getTime(),
        dataUri: Ti.Utils.base64encode(blob).toString()
    };
    var data = {
        data: attachment
    };
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.upload._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.upload._sendSuccessCallback [data : " + JSON.stringify(data) + "]");
        null != successCallback && successCallback({
            id: attachment.id
        });
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.upload._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.upload._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _send("POST", url, data, _sendSuccessCallback, _sendErrorCallback);
};

zz.Internal.Cloud.Files.Attachment.download = function(user, aspect, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.download");
    Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.download [user : " + JSON.stringify(user) + "]");
    Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.download [aspect : " + JSON.stringify(aspect) + "]");
    var url = zzConfig.ZZ.Config.Cloud.cdnURL + "/files/content/download/" + user.token + "/" + aspect.id + "?format=BINARY&type=FILE";
    var _sendSuccessCallback = function(data) {
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.download._sendSuccessCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.download._sendSuccessCallback [data : " + data + "]");
        null != successCallback && successCallback(data);
    };
    var _sendErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.download._sendErrorCallback");
        Ti.API.debug("ZZ.Internal.Cloud.Files.Attachment.download._sendErrorCallback [error : " + error + "]");
        null != errorCallback && errorCallback(error);
    };
    _download(url, _sendSuccessCallback, _sendErrorCallback);
};

exports.ZZ = zz;

exports.version = .2;

var _send = function(method, url, json, successCallback, errorCallback) {
    Ti.API.trace("ZZ.Internal.Cloud._send");
    Ti.API.trace("ZZ.Internal.Cloud._send [method : " + method + ", url : " + url + "]");
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.trace("ZZ.Internal.Cloud._send.onload");
            var json = JSON.parse(this.responseText);
            null == json ? successCallback() : "SUCCESS" == json.type.code && null != successCallback ? successCallback(json.data) : null != errorCallback && errorCallback(json.type.description);
        },
        onerror: function(e) {
            Ti.API.trace("ZZ.Internal.Cloud._send.onerror");
            Ti.API.trace("ZZ.Internal.Cloud._send.onerror [e : " + JSON.stringify(e) + "]");
            null != errorCallback && errorCallback(e.error);
        },
        timeout: 15e3
    });
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    if ("POST" == method || "PUT" == method) {
        var data = JSON.stringify(json);
        Ti.API.trace("ZZ.Internal.Cloud._send [data : " + data + "]");
        xhr.send(data);
    } else xhr.send();
};

var _download = function(url, successCallback, errorCallback) {
    Ti.API.trace("ZZ.Internal.Cloud._download");
    Ti.API.trace("ZZ.Internal.Cloud._download [url : " + url + "]");
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.trace("ZZ.Internal.Cloud._download.onload");
            null != successCallback && successCallback(this.responseData);
        },
        onerror: function(e) {
            Ti.API.trace("ZZ.Internal.Cloud._download.onerror");
            Ti.API.trace("ZZ.Internal.Cloud._download.onerror [e : " + JSON.stringify(e) + "]");
            null != errorCallback && errorCallback(e.error);
        },
        timeout: 15e3
    });
    xhr.open("GET", url);
    xhr.send();
};