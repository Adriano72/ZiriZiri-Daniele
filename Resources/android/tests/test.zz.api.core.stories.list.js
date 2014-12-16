exports.test = function() {
    var _coreSessionLogInCallback = function(response) {
        Ti.API.info("ZZ.API.Core.Session.logIn success [user : " + JSON.stringify(response) + "]");
        ZZ.API.Core.Stories.list(function(stories) {
            Ti.API.info("ZZ.API.Core.Stories.list success [response : " + JSON.stringify(stories) + "]");
        }, function(error) {
            Ti.API.error("ZZ.API.Core.Stories.list error [error : " + error + "]");
        });
    };
    ZZ.API.Core.Session.logIn({
        username: "rnduser_1418138154947",
        password: "password"
    }, _coreSessionLogInCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Session.logIn error [error : " + error + "]");
    });
};