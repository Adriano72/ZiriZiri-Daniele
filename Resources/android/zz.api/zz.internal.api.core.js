var zzGlobals = require("zz.internal.globals");

var zzLocalDB = require("zz.internal.local.db");

var zzLocalFS = require("zz.internal.local.fs");

var zzCloud = require("zz.internal.cloud");

var zzInternalCoreLocal = require("zz.internal.api.core.local");

var zzInternalCoreCloud = require("zz.internal.api.core.cloud");

var zz = {
    Internal: {
        API: {
            Core: {
                Session: {},
                Posts: {},
                Post: {
                    Templates: {},
                    Aspects: {}
                },
                Aspect: {},
                Categories: {},
                Stories: {},
                Tags: {}
            }
        }
    }
};

zzLocalDB.ZZ.Internal.Local.DB.init();

zz.Internal.API.Core.Session.logIn = function(user, successCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Session.logIn");
    Ti.API.debug("ZZ.Internal.API.Core.Session.logIn [user : " + JSON.stringify(user) + "]");
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Session.logIn unable to perform login due to NULL user";
        _manageError({
            errorMessage: errorMessage
        });
        return;
    }
    var storedUser = zzLocalDB.ZZ.Internal.Local.DB.User.get(user);
    var online = zzGlobals.ZZ.Internal.Globals.isOnline();
    if (online) {
        var _logInSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Session.logIn._logInSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Session.logIn._logInSuccessCallback [response : " + JSON.stringify(response) + "]");
            user.token = response.sessionId;
            if (null == storedUser) {
                user = zzLocalDB.ZZ.Internal.Local.DB.Users.add({
                    username: user.username,
                    password: Ti.Utils.sha1(user.password),
                    token: user.token
                });
                zzLocalFS.ZZ.Internal.Local.FS.Directory.make(user.id);
            } else {
                user.id = storedUser.id;
                user.password = Ti.Utils.sha1(user.password);
                user = zzLocalDB.ZZ.Internal.Local.DB.User.update(user);
            }
            Ti.API.debug("ZZ.Internal.API.Core.Session.logIn user logged ONLINE [user : " + JSON.stringify(user) + "]");
            zzGlobals.ZZ.Internal.Globals.setCurrentUser(user);
            null != successCallback && successCallback(user);
        };
        var _logInErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Session.logIn._logInErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Session.logIn._logInErrorCallback [error : " + JSON.stringify(error) + "]");
            var errorMessage = "ZZ.Internal.API.Core.Session.logIn unable to perform login due to : " + error;
            _manageError({
                errorMessage: errorMessage
            });
        };
        zzCloud.ZZ.Internal.Cloud.Core.Session.logIn(user, _logInSuccessCallback, _logInErrorCallback);
        return;
    }
    if (null == storedUser) {
        var errorMessage = "ZZ.Internal.API.Core.Session.logIn unable to perform login due to OFFLINE";
        _manageError({
            errorMessage: errorMessage
        });
        return;
    }
    Ti.API.debug("ZZ.Internal.API.Core.Session.logIn trying performing login OFFLINE");
    if (Ti.Utils.sha1(user.password) == storedUser.password) {
        Ti.API.debug("ZZ.Internal.API.Core.Session.logIn user logged OFFLINE [user : " + JSON.stringify(storedUser) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentUser(storedUser);
        null != successCallback && successCallback(storedUser);
        return;
    }
    var errorMessage = "ZZ.Internal.API.Core.Session.logIn unable to perform login due to invalid password";
    _manageError({
        errorMessage: errorMessage
    });
    return;
};

zz.Internal.API.Core.Session.logOut = function() {
    Ti.API.debug("ZZ.Internal.API.Core.Session.logIn");
    throw "Not yet implemented";
};

zz.Internal.API.Core.Posts.list = function(successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Posts.list");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Posts.list unable to perform list due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var objs = [];
    var storedDatas = zzLocalDB.ZZ.Internal.Local.DB.Datas.findByUserRefAndTypeAndAliasAndStatusAndAction(user.id, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.POSTS, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE);
    var storedDataPosts = null;
    if (null != storedDatas && storedDatas.length > 0) {
        storedDataPosts = storedDatas.pop();
        objs = objs.concat(JSON.parse(storedDataPosts.serialized_data));
    }
    Ti.API.debug("ZZ.Internal.API.Core.Posts.list [cached.length : " + objs.length + "]");
    storedDatas = zzLocalDB.ZZ.Internal.Local.DB.Datas.findByUserRefAndTypeAndAliasAndStatusAndAction(user.id, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.MODEL, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.POST, null, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.TO_SYNC);
    var online = zzGlobals.ZZ.Internal.Globals.isOnline();
    if (online) {
        var _readSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Posts.list._readSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Posts.list._readSuccessCallback [response.length : " + response.length + ", response : " + JSON.stringify(response) + "]");
            var fetchedIds = _.pluck(response, "id");
            var mergedObjs = [];
            mergedObjs = mergedObjs.concat(response);
            mergedObjs = mergedObjs.concat(_.reject(objs, function(item) {
                return _.contains(fetchedIds, item.id);
            }));
            if (null == storedDataPosts) storedDataPosts = zzLocalDB.ZZ.Internal.Local.DB.Datas.add({
                type: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION,
                alias: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.POSTS,
                status: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED,
                action: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE,
                serialized_data: JSON.stringify(mergedObjs),
                user_ref: user.id,
                local_data_ref: null,
                remote_data_ref: null,
                local_fs_ref: null
            }); else {
                storedDataPosts.serialized_data = JSON.stringify(mergedObjs);
                storedDataPosts = zzLocalDB.ZZ.Internal.Local.DB.Data.update(storedDataPosts);
            }
            if (null == storedDataPosts) {
                var errorMessage = "ZZ.Internal.API.Core.Posts.list._readSuccessCallback unable to cache posts";
                _manageError({
                    errorMessage: errorMessage
                });
                return;
            }
            Ti.API.debug("ZZ.Internal.API.Core.Posts.list._readSuccessCallback posts cached");
            null != storedDatas && storedDatas.length > 0 && _.each(storedDatas, function(storedData) {
                var obj = JSON.parse(storedData.serialized_data);
                Ti.API.debug("ZZ.Internal.API.Core.Posts.list [post : " + JSON.stringify(obj) + "]");
                mergedObjs.push(obj);
            });
            mergedObjs = _.sortBy(mergedObjs, function(item) {
                return -item.referenceTime;
            });
            Ti.API.debug("ZZ.Internal.API.Core.Posts.list._readSuccessCallback [merged.length : " + mergedObjs.length + "]");
            null != successCallback && successCallback(mergedObjs);
        };
        var _readErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Posts.list._readErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Posts.list._readErrorCallback [error : " + JSON.stringify(error) + "]");
            var errorMessage = "ZZ.Internal.API.Core.Posts.list unable to perform list due to : " + error;
            _manageError({
                errorMessage: errorMessage
            });
        };
        zzCloud.ZZ.Internal.Cloud.Core.Posts.read(user, _readSuccessCallback, _readErrorCallback);
        return;
    }
    null != storedDatas && storedDatas.length > 0 && _.each(storedDatas, function(storedData) {
        var obj = JSON.parse(storedData.serialized_data);
        Ti.API.debug("ZZ.Internal.API.Core.Posts.list [post : " + JSON.stringify(obj) + "]");
        objs.push(obj);
    });
    objs = _.sortBy(objs, function(item) {
        return -item.referenceTime;
    });
    null != successCallback && successCallback(objs);
};

zz.Internal.API.Core.Post.Templates.list = function(successCallback, errorCallback) {
    Ti.API.debug("ZZ.Api.Core.Post.Templates.list");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.Templates.list unable to perform list due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedDatas = zzLocalDB.ZZ.Internal.Local.DB.Datas.findByUserRefAndTypeAndAliasAndStatusAndAction(user.id, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.POSTTEMPLATES, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE);
    var storedDataTemplates = null;
    var objs = [];
    if (null != storedDatas && storedDatas.length > 0) {
        storedDataTemplates = storedDatas.pop();
        objs = objs.concat(JSON.parse(storedDataTemplates.serialized_data));
    }
    var online = zzGlobals.ZZ.Internal.Globals.isOnline();
    if (online) {
        var _readSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.Templates.list._readSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.Templates.list._readSuccessCallback [response : " + JSON.stringify(response) + "]");
            null != successCallback && successCallback(response);
            if (null == storedDataTemplates) storedDataTemplates = zzLocalDB.ZZ.Internal.Local.DB.Datas.add({
                type: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION,
                alias: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.POSTTEMPLATES,
                status: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED,
                action: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE,
                serialized_data: JSON.stringify(response),
                user_ref: user.id,
                local_data_ref: null,
                remote_data_ref: null,
                local_fs_ref: null
            }); else {
                storedDataTemplates.serialized_data = JSON.stringify(response);
                storedDataTemplates = zzLocalDB.ZZ.Internal.Local.DB.Data.update(storedDataTemplates);
            }
            if (null == storedDataTemplates) {
                var errorMessage = "ZZ.Internal.API.Core.Post.Templates.list._readSuccessCallback unable to cache post templates";
                _manageError({
                    errorMessage: errorMessage
                });
                return;
            }
            Ti.API.debug("ZZ.Internal.API.Core.Post.Templates.list._readSuccessCallback post templates cached");
        };
        var _readErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.Templates.list._readErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.Templates.list._readErrorCallback [error : " + JSON.stringify(error) + "]");
            var errorMessage = "ZZ.Internal.API.Core.Post.Templates.list unable to perform list due to : " + error;
            _manageError({
                errorMessage: errorMessage
            });
        };
        zzCloud.ZZ.Internal.Cloud.Core.Posts.Post.Templates.read(user, _readSuccessCallback, _readErrorCallback);
        return;
    }
    null != successCallback && successCallback(objs);
};

zz.Internal.API.Core.Posts.add = function(post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Posts.add");
    zzGlobals.ZZ.Internal.Globals.setCurrentPost(null);
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Posts.add unable to perform add due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    null == post && (post = {});
    var _addNewPostLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Posts.add._addNewPostLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Posts.add._addNewPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentPost(response);
        successCallback && successCallback(response);
    };
    var _addNewPostLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Posts.add._addNewPostLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Posts.add._addNewPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    zzInternalCoreLocal.ZZ.Internal.API.Core.Local.addNewPostLocal(user, post, _addNewPostLocalSuccessCallback, _addNewPostLocalErrorCallback);
};

zz.Internal.API.Core.Posts.remove = function(post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Posts.remove");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.remove unable to perform remove due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post) {
        var errorMessage = "ZZ.Internal.API.Core.Post.remove unable to perform remove due to NULL post";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedData = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    if (null != storedData && storedData.id == post.id) {
        var _removeNewPostLocalSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeNewPostLocalSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeNewPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
            zzGlobals.ZZ.Internal.Globals.setCurrentPost(null);
            null != successCallback && successCallback(response);
        };
        var _removeNewPostLocalErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeNewPostLocalErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeNewPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
            _manageError({
                errorMessage: error
            }, errorCallback);
        };
        zzInternalCoreLocal.ZZ.Internal.API.Core.Local.removeNewPostLocal(user, post, _removeNewPostLocalSuccessCallback, _removeNewPostLocalErrorCallback);
        return;
    }
    var _removeExistingPostLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeExistingPostLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeExistingPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentPost(null);
        null != successCallback && successCallback(response);
    };
    var _removeExistingPostLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeExistingPostLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._removeExistingPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    zzInternalCoreLocal.ZZ.Internal.API.Core.Local.removeExistingPostLocal(user, post, _removeExistingPostLocalSuccessCallback, _removeExistingPostLocalErrorCallback);
    return;
};

zz.Internal.API.Core.Post.update = function(post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Post.update");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.update unable to perform update due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post) {
        var errorMessage = "ZZ.Internal.API.Core.Post.update unable to perform update due to NULL post";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedData = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    if (null == storedData) {
        var _addExistingPostLocalSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._addExistingPostLocalSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._addExistingPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
            zzGlobals.ZZ.Internal.Globals.setCurrentPost(response);
            null != successCallback && successCallback(response);
        };
        var _addExistingPostLocalErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._addExistingPostLocalErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._addExistingPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
            _manageError({
                errorMessage: error
            }, errorCallback);
        };
        zzInternalCoreLocal.ZZ.Internal.API.Core.Local.addExistingPostLocal(user, post, _addExistingPostLocalSuccessCallback, _addExistingPostLocalErrorCallback);
        return;
    }
    if (storedData.id == post.id) {
        var _updateNewPostLocalSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateNewPostLocalSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateNewPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
            null != successCallback && successCallback(response);
        };
        var _updateNewPostLocalErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateNewPostLocalErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateNewPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
            _manageError({
                errorMessage: error
            }, errorCallback);
        };
        zzInternalCoreLocal.ZZ.Internal.API.Core.Local.updateNewPostLocal(user, post, _updateNewPostLocalSuccessCallback, _updateNewPostLocalErrorCallback);
        return;
    }
    var _updateExistingPostLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateExistingPostLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateExistingPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentPost(response);
        null != successCallback && successCallback(response);
    };
    var _updateExistingPostLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateExistingPostLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.update._updateExistingPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    zzInternalCoreLocal.ZZ.Internal.API.Core.Local.updateExistingPostLocal(user, post, _updateExistingPostLocalSuccessCallback, _updateExistingPostLocalErrorCallback);
};

zz.Internal.API.Core.Post.commit = function(post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Post.commit");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.commit unable to perform commit due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post) {
        var errorMessage = "ZZ.Internal.API.Core.Post.commit unable to perform commit due to NULL post";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedData = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    if (null == storedData) {
        var errorMessage = "ZZ.Internal.API.Core.Post.commit POST NOT STORED LOCALLY unable to perform commit [post : " + JSON.stringify(post) + "]";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var _commitPostLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.commit._commitPostLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.commit._commitPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentPost(null);
        null != successCallback && successCallback(response);
        zzInternalCoreCloud.ZZ.Internal.API.Core.Cloud.commitPostCloud(user, response);
    };
    var _commitPostLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.commit._commitPostLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.commit._commitPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    zzInternalCoreLocal.ZZ.Internal.API.Core.Local.commitPostLocal(user, post, _commitPostLocalSuccessCallback, _commitPostLocalErrorCallback);
    return;
};

zz.Internal.API.Core.Post.rollback = function(post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Post.rollback");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.rollback unable to perform rollback due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post) {
        var errorMessage = "ZZ.Internal.API.Core.Post.rollback unable to perform rollback due to NULL post";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedData = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    if (null == storedData) {
        var errorMessage = "ZZ.Internal.API.Core.Post.rollback POST NOT STORED LOCALLY unable to perform rollback [post : " + JSON.stringify(post) + "]";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var _rollbackPostLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.rollback._rollbackPostLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.rollback._rollbackPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentPost(response);
        null != successCallback && successCallback(response);
    };
    var _rollbackPostLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.rollback._rollbackPostLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.rollback._rollbackPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    zzInternalCoreLocal.ZZ.Internal.API.Core.Local.rollbackPostLocal(user, post, _rollbackPostLocalSuccessCallback, _rollbackPostLocalErrorCallback);
    return;
};

zz.Internal.API.Core.Post.get = function(post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Post.get");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.get unable to perform get due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post) {
        var errorMessage = "ZZ.Internal.API.Core.Post.get unable to perform get due to NULL post";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedData = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    if (null == storedData) {
        var errorMessage = "ZZ.Internal.API.Core.Post.get unable to perform get [post : " + JSON.stringify(post) + "]";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    post = JSON.parse(storedData.serialized_data);
    Ti.API.debug("ZZ.Internal.API.Core.Post.get [post : " + JSON.stringify(post) + "]");
    null != successCallback && successCallback(post);
};

zz.Internal.API.Core.Post.Aspects.add = function(aspect, post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.add");
    zzGlobals.ZZ.Internal.Globals.setCurrentAspect(null);
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.Aspects.add unable to perform add due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post || null == post.id) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.add trying using current post");
        post = zzGlobals.ZZ.Internal.Globals.getCurrentPost();
        if (null == post || null == post.id) {
            var errorMessage = "ZZ.Internal.API.Core.Post.Aspects.add unable to perform add due to NULL post";
            _manageError({
                errorMessage: errorMessage
            }, errorCallback);
            return;
        }
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.add using current post [post : " + JSON.stringify(post) + "]");
    }
    null == aspect && (aspect = {});
    var storedData = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    var _addNewAspectLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.add._addNewAspectLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.add._addNewAspectLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentAspect(response);
        successCallback && successCallback(response);
    };
    var _addNewAspectLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.add._addNewAspectLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.add._addNewAspectLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    if (null == storedData) {
        _getPostLocalAndAddExistingPostLocal(user, post, _getAndAddPostLocalSuccessCallback, _getAndAddPostLocalErrorCallback);
        return;
    }
    zzInternalCoreLocal.ZZ.Internal.API.Core.Local.addNewAspectLocal(user, post, aspect, _addNewAspectLocalSuccessCallback, _addNewAspectLocalErrorCallback);
};

zz.Internal.API.Core.Post.Aspects.remove = function(aspect, post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Post.Aspects.remove unable to perform remove due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post || null == post.id) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove trying using current post");
        post = zzGlobals.ZZ.Internal.Globals.getCurrentPost();
        if (null == post || null == post.id) {
            var errorMessage = "ZZ.Internal.API.Core.Post.Aspects.remove unable to perform remove due to NULL post";
            _manageError({
                errorMessage: errorMessage
            }, errorCallback);
            return;
        }
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove using current post [post : " + JSON.stringify(post) + "]");
    }
    if (null == aspect) {
        var errorMessage = "ZZ.Internal.API.Core.Post.Aspects.remove unable to perform remove due to NULL aspect";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedDataAspect = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, aspect.id);
    var storedDataPost = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    var _removeNewAspectLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeNewAspectLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeNewAspectLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentAspect(null);
        null != successCallback && successCallback(response);
    };
    var _removeNewAspectLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeNewAspectLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeNewAspectLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    var _removeExistingAspectLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeExistingAspectLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeExistingAspectLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentAspect(null);
        null != successCallback && successCallback(response);
    };
    var _removeExistingAspectLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeExistingAspectLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Post.Aspects.remove._removeExistingAspectLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    var _removeFunction = storedDataAspect.id == aspect.id ? zzInternalCoreLocal.ZZ.Internal.API.Core.Local.removeNewAspectLocal : zzInternalCoreLocal.ZZ.Internal.API.Core.Local.removeExistingAspectLocal;
    var _removeFunctionSuccessCallback = storedDataAspect.id == aspect.id ? _removeNewAspectLocalSuccessCallback : _removeExistingAspectLocalSuccessCallback;
    var _removeFunctionErrorCallback = storedDataAspect.id == aspect.id ? _removeNewAspectLocalErrorCallback : _removeExistingAspectLocalErrorCallback;
    if (null == storedDataPost) {
        _getPostLocalAndAddExistingPostLocal(user, post, _getAndAddPostLocalSuccessCallback, _getAndAddPostLocalErrorCallback);
        return;
    }
    _removeFunction(user, response, aspect, _removeFunctionSuccessCallback, _removeFunctionErrorCallback);
};

zz.Internal.API.Core.Aspect.update = function(aspect, post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Aspect.update");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Aspect.update unable to perform update due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post || null == post.id) {
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update trying using current post");
        post = zzGlobals.ZZ.Internal.Globals.getCurrentPost();
        if (null == post || null == post.id) {
            var errorMessage = "ZZ.Internal.API.Core.Aspect.update unable to perform update due to NULL post";
            _manageError({
                errorMessage: errorMessage
            }, errorCallback);
            return;
        }
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update using current post [post : " + JSON.stringify(post) + "]");
    }
    if (null == aspect) {
        var errorMessage = "ZZ.Internal.API.Core.Aspect.update unable to perform update due to NULL aspect";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedDataAspect = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, aspect.id);
    var storedDataPost = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, post.id);
    var _updateNewAspectLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateNewAspectLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateNewAspectLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentAspect(response);
        null != successCallback && successCallback(response);
    };
    var _updateNewAspectLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateNewAspectLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateNewAspectLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    var _updateExistingAspectLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateExistingAspectLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateExistingAspectLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzGlobals.ZZ.Internal.Globals.setCurrentAspect(response);
        null != successCallback && successCallback(response);
    };
    var _updateExistingAspectLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateExistingAspectLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core.Aspect.update._updateExistingAspectLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    var _updateFunction = storedDataAspect.id == aspect.id ? zzInternalCoreLocal.ZZ.Internal.API.Core.Local.updateNewAspectLocal : zzInternalCoreLocal.ZZ.Internal.API.Core.Local.updateExistingAspectLocal;
    var _updateFunctionSuccessCallback = storedDataAspect.id == aspect.id ? _updateNewAspectLocalSuccessCallback : _updateExistingAspectLocalSuccessCallback;
    var _updateFunctionErrorCallback = storedDataAspect.id == aspect.id ? _updateNewAspectLocalErrorCallback : _updateExistingAspectLocalErrorCallback;
    if (null == storedDataPost) {
        _getPostLocalAndAddExistingPostLocal(user, post, _getAndAddPostLocalSuccessCallback, _getAndAddPostLocalErrorCallback);
        return;
    }
    _updateFunction(user, response, aspect, _updateFunctionSuccessCallback, _updateFunctionErrorCallback);
};

zz.Internal.API.Core.Aspect.get = function(aspect, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Aspect.get");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Aspect.get unable to perform get due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == aspect) {
        Ti.API.warn("ZZ.Internal.API.Core.Aspect.get unable to perform get due to NULL aspect");
        return null;
    }
    var storedData = zzLocalDB.ZZ.Internal.Local.DB.Data.getByUserRefAndIdOrRemoteDataRef(user.id, aspect.id);
    if (null == storedData) {
        var errorMessage = "ZZ.Internal.API.Core.Aspect.get unable to perform get [aspect : " + JSON.stringify(aspect) + "]";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    aspect = JSON.parse(storedData.serialized_data);
    Ti.API.debug("ZZ.Internal.API.Core.Aspect.get [aspect : " + JSON.stringify(aspect) + "]");
    var online = zzGlobals.ZZ.Internal.Globals.isOnline();
    online;
    null != successCallback && successCallback(aspect);
};

zz.Internal.API.Core.Categories.list = function(successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Categories.list");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Categories.list unable to perform list due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedDatas = zzLocalDB.ZZ.Internal.Local.DB.Datas.findByUserRefAndTypeAndAliasAndStatusAndAction(user.id, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.CATEGORIES, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE);
    var storedDataCategories = null;
    var objs = [];
    if (null != storedDatas && storedDatas.length > 0) {
        storedDataCategories = storedDatas.pop();
        objs = objs.concat(JSON.parse(storedDataCategories.serialized_data));
    }
    var online = zzGlobals.ZZ.Internal.Globals.isOnline();
    if (online) {
        var _readSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Categories.list._readSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Categories.list._readSuccessCallback [response : " + JSON.stringify(response) + "]");
            null != successCallback && successCallback(response);
            if (null == storedDataCategories) storedDataCategories = zzLocalDB.ZZ.Internal.Local.DB.Datas.add({
                type: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION,
                alias: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.CATEGORIES,
                status: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED,
                action: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE,
                serialized_data: JSON.stringify(response),
                user_ref: user.id,
                local_data_ref: null,
                remote_data_ref: null,
                local_fs_ref: null
            }); else {
                storedDataCategories.serialized_data = JSON.stringify(response);
                storedDataCategories = zzLocalDB.ZZ.Internal.Local.DB.Data.update(storedDataCategories);
            }
            if (null == storedDataCategories) {
                var errorMessage = "ZZ.Internal.API.Core.Categories.list._readSuccessCallback unable to cache categories";
                _manageError({
                    errorMessage: errorMessage
                });
                return;
            }
            Ti.API.debug("ZZ.Internal.API.Core.Categories.list._readSuccessCallback categories cached");
        };
        var _readErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Categories.list._readErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Categories.list._readErrorCallback [error : " + JSON.stringify(error) + "]");
            var errorMessage = "ZZ.Internal.API.Core.Categories.list unable to perform list due to : " + error;
            _manageError({
                errorMessage: errorMessage
            });
        };
        zzCloud.ZZ.Internal.Cloud.Core.Categories.read(user, _readSuccessCallback, _readErrorCallback);
        return;
    }
    null != successCallback && successCallback(objs);
};

zz.Internal.API.Core.Stories.list = function(successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Stories.list");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Stories.list unable to perform list due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedDatas = zzLocalDB.ZZ.Internal.Local.DB.Datas.findByUserRefAndTypeAndAliasAndStatusAndAction(user.id, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.STORIES, null, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.TO_SYNC);
    var storedDataStories = null;
    var objs = [];
    if (null != storedDatas && storedDatas.length > 0) {
        storedDataStories = storedDatas.pop();
        objs = objs.concat(JSON.parse(storedDataStories.serialized_data));
    }
    var online = zzGlobals.ZZ.Internal.Globals.isOnline();
    if (online) {
        var _readSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Stories.list._readSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Stories.list._readSuccessCallback [response : " + JSON.stringify(response) + "]");
            null != successCallback && successCallback(response);
            if (null == storedDataStories) storedDataStories = zzLocalDB.ZZ.Internal.Local.DB.Datas.add({
                type: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION,
                alias: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.STORIES,
                status: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED,
                action: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE,
                serialized_data: JSON.stringify(response),
                user_ref: user.id,
                local_data_ref: null,
                remote_data_ref: null,
                local_fs_ref: null
            }); else {
                storedDataStories.serialized_data = JSON.stringify(response);
                storedDataStories = zzLocalDB.ZZ.Internal.Local.DB.Data.update(storedDataStories);
            }
            if (null == storedDataStories) {
                var errorMessage = "ZZ.Internal.API.Core.Stories.list._readSuccessCallback unable to cache stories";
                _manageError({
                    errorMessage: errorMessage
                });
                return;
            }
            Ti.API.debug("ZZ.Internal.API.Core.Stories.list._readSuccessCallback stories cached");
        };
        var _readErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Stories.list._readErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Stories.list._readErrorCallback [error : " + JSON.stringify(error) + "]");
            var errorMessage = "ZZ.Internal.API.Core.Stories.list unable to perform list due to : " + error;
            _manageError({
                errorMessage: errorMessage
            });
        };
        zzCloud.ZZ.Internal.Cloud.Core.Stories.read(user, _readSuccessCallback, _readErrorCallback);
        return;
    }
    null != successCallback && successCallback(objs);
};

zz.Internal.API.Core.Tags.list = function(successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core.Tags.list");
    var user = zzGlobals.ZZ.Internal.Globals.getCurrentUser();
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core.Tags.list unable to perform list due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var storedDatas = zzLocalDB.ZZ.Internal.Local.DB.Datas.findByUserRefAndTypeAndAliasAndStatusAndAction(user.id, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.TAGS, null, zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.TO_SYNC);
    var storedDataTags = null;
    var objs = [];
    if (null != storedDatas && storedDatas.length > 0) {
        storedDataTags = storedDatas.pop();
        objs = objs.concat(JSON.parse(storedDataTags.serialized_data));
    }
    var online = zzGlobals.ZZ.Internal.Globals.isOnline();
    if (online) {
        var _readSuccessCallback = function(response) {
            Ti.API.debug("ZZ.Internal.API.Core.Tags.list._readSuccessCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Tags.list._readSuccessCallback [response : " + JSON.stringify(response) + "]");
            null != successCallback && successCallback(response);
            if (null == storedDataTags) storedDataTags = zzLocalDB.ZZ.Internal.Local.DB.Datas.add({
                type: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.TYPES.COLLECTION,
                alias: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ALIASES.TAGS,
                status: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.STATUSES.CACHED,
                action: zzLocalDB.ZZ.Internal.Local.DB.Data.CONSTANTS.ACTIONS.NONE,
                serialized_data: JSON.stringify(response),
                user_ref: user.id,
                local_data_ref: null,
                remote_data_ref: null,
                local_fs_ref: null
            }); else {
                storedDataTags.serialized_data = JSON.stringify(response);
                storedDataTags = zzLocalDB.ZZ.Internal.Local.DB.Data.update(storedDataTags);
            }
            if (null == storedDataTags) {
                var errorMessage = "ZZ.Internal.API.Core.Tags.list._readSuccessCallback unable to cache tags";
                _manageError({
                    errorMessage: errorMessage
                });
                return;
            }
            Ti.API.debug("ZZ.Internal.API.Core.Tags.list._readSuccessCallback tags cached");
        };
        var _readErrorCallback = function(error) {
            Ti.API.debug("ZZ.Internal.API.Core.Tags.list._readErrorCallback");
            Ti.API.debug("ZZ.Internal.API.Core.Tags.list._readErrorCallback [error : " + JSON.stringify(error) + "]");
            var errorMessage = "ZZ.Internal.API.Core.Tags.list unable to perform list due to : " + error;
            _manageError({
                errorMessage: errorMessage
            });
        };
        zzCloud.ZZ.Internal.Cloud.Core.Tags.read(user, _readSuccessCallback, _readErrorCallback);
        return;
    }
    null != successCallback && successCallback(objs);
};

exports.ZZ = zz;

exports.version = .2;

var _manageError = function(error, errorCallback) {
    Ti.API.trace("ZZ.Internal.API.Core._manageError");
    Ti.API.error(error.errorMessage);
    null != errorCallback && errorCallback(error);
};

var _getPostLocalAndAddExistingPostLocal = function(user, post, successCallback, errorCallback) {
    Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal");
    if (null == user) {
        var errorMessage = "ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal unable to perform retrieve due to NULL user";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    if (null == post) {
        var errorMessage = "ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal unable to perform retrieve due to NULL post";
        _manageError({
            errorMessage: errorMessage
        }, errorCallback);
        return;
    }
    var _addExistingPostLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._addExistingPostLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._addExistingPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        null != successCallback && successCallback(response);
    };
    var _addExistingPostLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._addExistingPostLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._addExistingPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        }, errorCallback);
    };
    var _getPostLocalSuccessCallback = function(response) {
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._getPostLocalSuccessCallback");
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._getPostLocalSuccessCallback [response : " + JSON.stringify(response) + "]");
        zzInternalCoreLocal.ZZ.Internal.API.Core.Local.addExistingPostLocal(user, post, _addExistingPostLocalSuccessCallback, _addExistingPostLocalErrorCallback);
    };
    var _getPostLocalErrorCallback = function(error) {
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._getPostLocalErrorCallback");
        Ti.API.debug("ZZ.Internal.API.Core._getPostLocalAndAddExistingPostLocal._getPostLocalErrorCallback [error : " + JSON.stringify(error) + "]");
        _manageError({
            errorMessage: error
        });
    };
    zzInternalCoreLocal.ZZ.Internal.API.Core.Local.getPostLocal(user, post, _getPostLocalSuccessCallback, _getPostLocalErrorCallback);
};