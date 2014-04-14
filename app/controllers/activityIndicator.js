var args = arguments[0] || {};

function showIndicator(e) {
	$.spinner.show();
	// do some work that takes 6 seconds
	// ie. replace the following setTimeout block with your code

	Ti.App.addEventListener("loading_done", function() {
		
		setTimeout(function() {
			$.activityIndicator.hide();
			e.source.close();
		}, 500);

	});

}