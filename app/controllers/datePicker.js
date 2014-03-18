var args = arguments[0] || {};

$.pkrData.minDate = new Date(2009, 0, 1);
$.pkrData.maxDate = new Date(2014, 11, 31);
$.pkrData.value = new Date();

$.pkrData.showDatePickerDialog({
	value : new Date(2010, 8, 1),
	callback : function(e) {
		if (e.cancel) {
			Ti.API.info('User canceled dialog');
		} else {
			Ti.API.info('User selected date: ' + e.value);
		}
	}
});