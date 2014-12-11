exports.test = function() {
    var _coreSessionLogInCallback = function(user) {
        Ti.API.info("ZZ.API.Core.Session.logIn success [user : " + JSON.stringify(user) + "]");
    };
    ZZ.API.Core.Session.logIn({
        username: "rnduser_1414682922894",
        password: "password"
    }, _coreSessionLogInCallback, function(error) {
        Ti.API.error("ZZ.API.Core.Session.logIn error [error : " + error + "]");
    });
};