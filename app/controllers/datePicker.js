var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);


var bug_flag = 0;

var v_date, v_time;

function showTimePicker(sel_data) {
	
	//Ti.API.info("SHOW DATE PIKER GOTTEN DATA: "+moment(sel_data).format('LLL'));
		
	var riga = Alloy.createController('timePicker', {par_data: sel_data, _callback: function(p_data) {
		
		Ti.API.info("FINAL DATE TIME: "+moment(p_data).format('LLL'));
		args(p_data);
		
	}});

};

$.pkrData.showDatePickerDialog({
	
	value : new Date(),
	callback : function(e) {
		if (e.cancel) {
			Ti.API.info('User canceled dialog');
		} else if(bug_flag == 0){
			bug_flag = 1;
			//Ti.API.info("EVENTO: "+JSON.stringify(e));
			showTimePicker(e.value);
			//Ti.API.info('User selected date: ' + e.value);
		}
	}
	
});