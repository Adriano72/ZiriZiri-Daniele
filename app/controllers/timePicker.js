var args = arguments[0] || {};

var moment = require('alloy/moment');
moment.lang('it', Alloy.Globals.Moment_IT);

var bug_flag = 0;

//Ti.API.info("TIMER PICKER, DATA RICEVUTA: "+moment(args.par_data).format('LLL'));

$.picker.showTimePickerDialog({
	value : new Date(),
	callback : function(e) {
		if (e.cancel) {
			Ti.API.info('User canceled dialog');
		} else if(bug_flag == 0){
			bug_flag = 1;
			//Ti.API.info("SOLO DATA RICEVUTA: "+ moment(args.par_data).format('MMM DD YY'));
			var soloData = moment(args.par_data).format('YYYY-MM-DD');
			var soloOra = moment(e.value).format('HH:mm:ss');
			var dataCompleta = soloData.toString()+"T"+soloOra.toString();
			//Ti.API.info("STRINGHE DATA COMBINATE : "+dataCompleta);
			var finalData = moment(dataCompleta);
			
			//Ti.API.info("Data FINALE in moment: "+ moment(dataCompleta).format('Do MM YYYY, HH:mm:ss'));
			//Ti.API.info("Data FINALE in moment milliseconds: "+ moment(dataCompleta));
			
			//Ti.API.info('ORA SELEZIONATA: ' + moment(e.value).millisecond());
			
			args._callback(finalData);
		}
	}
});

