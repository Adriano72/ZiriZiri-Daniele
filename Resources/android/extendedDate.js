exports.extentedData = function() {
    Date.prototype.DAYNAMES = [ "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato" ];
    Date.prototype.MONTHNAMES = [ "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" ];
    Date.prototype.msPERMIN = 6e4;
    Date.prototype.msPERDAY = 864e5;
    Date.prototype.addWeekDays = function(d) {
        var startDay = this.getDay();
        var wkEnd = 0;
        var m = d % 5;
        if (0 > d) {
            wkEnd = Math.ceil(d / 5);
            switch (startDay) {
              case 6:
                0 == m && 0 > wkEnd && wkEnd++;
                break;

              case 0:
                0 == m ? d++ : d--;
                break;

              default:
                -startDay >= m && wkEnd--;
            }
        } else if (d > 0) {
            wkEnd = Math.floor(d / 5);
            switch (startDay) {
              case 6:
                0 == m ? d-- : d++;
                break;

              case 0:
                0 == m && wkEnd > 0 && wkEnd--;
                break;

              default:
                m > 5 - startDay && wkEnd++;
            }
        }
        d += 2 * wkEnd;
        this.addDays(d);
    };
    Date.prototype.addDays = function(d) {
        this.setDate(this.getDate() + d);
    };
    Date.prototype.addWeeks = function(w) {
        this.setDate(this.addDays(7 * w));
    };
    Date.prototype.addMonths = function(m) {
        this.setMonth(this.getMonth() + m);
    };
    Date.prototype.addMonthsTrunc = function(m) {
        var d = this.getDate();
        this.setMonth(this.getMonth() + m);
        d > this.getDate() && this.setDate(0);
    };
    Date.prototype.addYears = function(y) {
        var m = this.getMonth();
        this.setFullYear(this.getFullYear() + y);
        this.getMonth() > m && this.setDate(0);
    };
    Date.prototype.copy = function() {
        return new Date(this.getTime());
    };
    Date.prototype.getDaysBetween = function(d) {
        var tmp = d.copy();
        tmp.setUTCHours(this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds(), this.getUTCMilliseconds());
        var time = tmp.getTime() - this.getTime();
        return time / this.msPERDAY;
    };
    Date.prototype.getCDay = function() {
        return this.getDayName().slice(0, 3);
    };
    Date.prototype.getDayName = function() {
        return this.DAYNAMES[this.getDay()];
    };
    Date.prototype.getDayOfYear = function() {
        var start = new Date(this.getFullYear(), 0, 0);
        return -1 * this.getDaysBetween(start);
    };
    Date.prototype.getCMonth = function() {
        return this.getMonthName().slice(0, 3);
    };
    Date.prototype.getMonthName = function() {
        return this.MONTHNAMES[this.getMonth()];
    };
    Date.prototype.getWeekDays = function(d) {
        var wkEnds = 0, days = 0;
        var s = 0, e = 0;
        days = Math.abs(this.getDaysBetween(d));
        if (days) {
            s = this > d ? d.getDay() : this.getDay();
            e = this > d ? this.getDay() : d.getDay();
            wkEnds = Math.floor(days / 7);
            6 != s && s > e && wkEnds++;
            s == e || 6 != s && 6 != e || days--;
            days -= 2 * wkEnds;
        }
        return days;
    };
    Date.prototype.getMonthsBetween = function(d) {
        var d1 = 12 * this.getFullYear() + this.getMonth();
        var d2 = 12 * d.getFullYear() + d.getMonth();
        return d2 - d1;
    };
    Date.prototype.getMonthsBetween2 = function(d) {
        var sDate, eDate;
        var d1 = 12 * this.getFullYear() + this.getMonth();
        var d2 = 12 * d.getFullYear() + d.getMonth();
        var sign;
        var months = 0;
        var sDay, sLastDay, sAdj, eDay, eAdj, adj;
        if (this == d) months = 0; else if (d1 == d2) months = (d.getDate() - this.getDate()) / this.lastday(); else {
            if (d2 > d1) {
                sDate = this;
                eDate = d;
                sign = 1;
            } else {
                sDate = d;
                eDate = this;
                sign = -1;
            }
            sDay = sDate.getDate();
            sLastDay = sDate.lastday();
            eDay = eDate.getDate();
            eLastDay = eDate.lastday();
            if (sDay > eLastDay) adj = eDay / eLastDay; else {
                sAdj = sLastDay - sDay;
                eAdj = eDay > sLastDay ? sLastDay : eDay;
                adj = (sAdj + eAdj) / sLastDay;
            }
            months = Math.abs(d2 - d1) + (adj - 1);
            0 != months % 1 ? months = (months * sign).toFixed(2) : months *= sign;
        }
        return months;
    };
    Date.prototype.getYearsBetween = function(d) {
        var months = this.getMonthsBetween(d);
        return months / 12;
    };
    Date.prototype.getAge = function(d) {
        d || (d = new Date());
        return this.getYearsBetween(d).toFixed(2);
    };
    Date.prototype.lastday = function() {
        var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
        return d.getDate();
    };
    Date.prototype.sameDayEachWeek = function(d, date) {
        var aDays = new Array();
        var eDate, nextDate, adj;
        if (this > date) {
            eDate = this;
            nextDate = new Date(date.getTime());
        } else {
            eDate = date;
            nextDate = new Date(this.getTime());
        }
        adj = (d - nextDate.getDay() + 7) % 7;
        nextDate.setDate(nextDate.getDate() + adj);
        while (eDate > nextDate) {
            aDays[aDays.length] = new Date(nextDate.getTime());
            nextDate.setDate(nextDate.getDate() + 7);
        }
        return aDays;
    };
    Date.prototype.to12HourString = function() {
        var h = this.getHours();
        var m = "0" + this.getMinutes();
        var s = "0" + this.getSeconds();
        var ap = "am";
        if (h >= 12) {
            ap = "pm";
            h >= 13 && (h -= 12);
        } else 0 == h && (h = 12);
        h = "0" + h;
        return h.slice(-2) + ":" + m.slice(-2) + ":" + s.slice(-2) + " " + ap;
    };
    Date.prototype.to24hourString = function() {
        var h = "0" + this.getHours();
        var m = "0" + this.getMinutes();
        var s = "0" + this.getSeconds();
        return h.slice(-2) + ":" + m.slice(-2) + ":" + s.slice(-2);
    };
    Date.prototype.toDateString || (Date.prototype.toDateString = function() {
        return this.toString().replace(/\d\d:\d\d:\d\d\s\w{2,3}\s/, "");
    });
    Date.prototype.toLocaleDateString || (Date.prototype.toLocaleDateString = function() {
        return this.getMonth() + 1 + "/" + this.getDate() + "/" + this.getFullYear();
    });
}();