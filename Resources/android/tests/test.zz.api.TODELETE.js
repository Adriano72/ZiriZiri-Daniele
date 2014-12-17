var _coreSessionLogInCallback = function(user) {
    Ti.API.info("ZZ.API.Core.Session.logIn success [user : " + JSON.stringify(user) + "]");
    ZZ.API.Core.Posts.add({
        name: "A Post From Titanium",
        referenceTime: new Date().getTime()
    }, _corePostsAddCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Posts.add error [error : " + error + "]");
    });
};

var _corePostsAddCallback = function(post) {
    Ti.API.info("ZZ.API.Core.Posts.add success [response : " + JSON.stringify(post) + "]");
    post.description = "An UPDATED Post From Titanium";
    ZZ.API.Core.Post.update(post, _corePostUpdateCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Post.update error [error : " + error + "]");
    });
};

var _corePostUpdateCallback = function(post) {
    Ti.API.info("ZZ.API.Core.Post.update success [response : " + JSON.stringify(post) + "]");
    ZZ.API.Core.Post.get(post, _corePostGetCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Post.get error [error : " + error + "]");
    });
};

var _corePostGetCallback = function(post) {
    Ti.API.info("ZZ.API.Core.Post.get success [response : " + JSON.stringify(post) + "]");
    ZZ.API.Core.Post.Aspects.add({
        name: "An Aspect From Titanium",
        referenceTime: new Date().getTime()
    }, null, _corePostAspectsAddCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Post.Aspects.add error [error : " + error + "]");
    });
};

var _corePostAspectsAddCallback = function(aspect) {
    Ti.API.info("ZZ.API.Core.Post.Aspects.add success [response : " + JSON.stringify(aspect) + "]");
    aspect.description = "An UPDATED Aspect From Titanium";
    ZZ.API.Core.Aspect.update(aspect, null, _coreAspectUpdateCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Aspect.update error [error : " + error + "]");
    });
};

var _coreAspectUpdateCallback = function(aspect) {
    Ti.API.info("ZZ.API.Core.Aspect.update success [response : " + JSON.stringify(aspect) + "]");
    ZZ.API.Core.Aspect.get(aspect, _coreAspectGetCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Aspect.get error [error : " + error + "]");
    });
};

var _coreAspectGetCallback = function(aspect) {
    Ti.API.info("ZZ.API.Core.Aspect.get success [response : " + JSON.stringify(aspect) + "]");
    ZZ.API.Files.Attachment.set(aspect, "Simple Text Content", function(response) {
        Ti.API.info("ZZ.API.Files.Attachment.set success [response : " + response + "]");
        ZZ.API.Files.Attachment.get(aspect, function(response) {
            Ti.API.info("ZZ.API.Files.Attachment.get success [response : " + JSON.stringify(response) + "]");
        }, function(error) {
            Ti.API.error("ZZ.API.Files.Attachment.get error [error : " + error + "]");
        });
    }, function(error) {
        Ti.API.error("ZZ.API.Files.Attachment.set error [error : " + error + "]");
    });
};