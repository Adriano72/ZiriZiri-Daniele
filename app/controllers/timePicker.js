var args = arguments[0] || {};

var bug_flag = 0;

Ti.API.info("SONO QUIIIIIIII");

$.pkrTime.showTimePickerDialog({
	value : new Date(Date.parse(args.par_data)),
	callback : function(e) {
		if (e.cancel) {
			Ti.API.info('User canceled dialog');
		} else if(bug_flag == 0){
			bug_flag = 1;
			Ti.API.info("PARSED DATA GOT: "+ new Date(Date.parse(args.par_data)));
			Ti.API.info("NOW DATA GOT: "+ new Date());
			args._callback(e.value);
			Ti.API.info('User selected time: ' + e.value);
		}
	}
});