var args = arguments[0] || {};

function hideActionBar() {

	$.index.activity.actionBar.hide();

}

function goTimeline(){
	Alloy.createController("timeline_win").getView();
}

function manageClose() {

	var activity = Titanium.Android.currentActivity;
	activity.finish();

};
