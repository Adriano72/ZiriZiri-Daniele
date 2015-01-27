var args = arguments[0] || {};

function hideActionBar() {

	$.index.activity.actionBar.hide();

}

function goTimeline() {
	Alloy.createController("timeline_win").getView();
}

function manageClose() {

	var activity = Titanium.Android.currentActivity;
	activity.finish();

};

function createNewPost() {
	Alloy.createController("newPost", {
		_callback : function(o) {
			Alloy.Globals.loading.hide();
		},
		photoShortcut : false
	}).getView();
};

function createNewPostWithPhoto() {
	Alloy.createController("newPost", {
		_callback : function(o) {
			Alloy.Globals.loading.hide();
		},
		photoShortcut : true
	}).getView();
};