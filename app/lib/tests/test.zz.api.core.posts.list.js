exports.test = function(options) {

	ZZ.API.Core.Posts.list(function(posts){
		Ti.API.info("ZZ.API.Core.Posts.list success [response : " + JSON.stringify(posts) + "]");
	}, function(error){
		Ti.API.error("ZZ.API.Core.Posts.list error [error : " + error + "]");
	});	

};