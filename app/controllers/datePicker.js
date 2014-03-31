var args = arguments[0] || {};

var bug_flag = 0;

var v_date, v_time;

function showTimePicker(sel_data) {
		
	var riga = Alloy.createController('timePicker', {par_data: sel_data, _callback: function(p_data) {
		
		Ti.API.info("FINAL DATE TIME: "+p_data);
		
	}});

};

$.pkrData.showDatePickerDialog({
	
	value : new Date(),
	callback : function(e) {
		if (e.cancel) {
			Ti.API.info('*************User canceled dialog');
		} else if(bug_flag == 0){
			bug_flag = 1;
			Ti.API.info("EVENTO: "+JSON.stringify(e));
			showTimePicker(e.value);
			Ti.API.info('User selected date: ' + e.value);
		}
	}
	
});