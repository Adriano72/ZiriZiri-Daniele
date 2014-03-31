var args = arguments[0] || {};



$.pkrTime.showTimePickerDialog({
	value : new Date(),
	callback : function(e) {
		if (e.cancel) {
			Ti.API.info('User canceled dialog');
		} else {
			args(e.value);
			Ti.API.info('User selected date: ' + e.value);
		}
	}
});