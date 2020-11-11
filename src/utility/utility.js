import { store } from 'react-notifications-component';
import storage from '../utility/storage';
import { BehaviorSubject } from "rx";
import { useEffect } from 'react';
import imageCompression from 'browser-image-compression';

var moment = require('moment-timezone');
// for global loader service
export const isLoading = new BehaviorSubject(false);

export const isDialogOpen = new BehaviorSubject(false);

export const compressImage = async (file, options) => {
    return await imageCompression(file,options)
}

export const toFloatWithDecimal = (number) => {
    return parseFloat(number).toFixed(2);
}

export const manupulatingTime = (time) => {
    const manipulatedTime = {};
    const T = time.split(':');
    manipulatedTime['hour'] = T[0];
    manipulatedTime['minute'] = T[1];
    return manipulatedTime;
}
// Replace AM and PM
export const replaceAMPM = (time) => {
    if (time.includes('AM')) {
        return time.replace('AM', '');
    } else if (time.includes('PM')) {
        return time.replace('PM', '');
    } else {
        return time;
    }
}

export const  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getSearchParams = (history, key) => {
  const queryParamsString = history.location.search.substring(1), // remove the "?" at the start
      searchParams = new URLSearchParams( queryParamsString );
  return searchParams.get(key)
};

export const closeCompaignUI = (enable) => {
    storage.set("close_campaign_ui", enable);
}

export const isCompaignUIClosed = () => {
    return storage.get("close_campaign_ui", false);
}

//Convert 24-hour time-of-day string to 12-hour time with AM/PM 
export const timeconvert = (time) => {
    return moment(time).format('hh:mm A');
}

//Convert 12-hour time-of-day string to 24-hour time with AM/PM 
export const timeconvertFrom12To24Format = (time) => {
    return moment(time).format('HH:mm');
}

export const tConvert = (time) => {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}

// Calendar logic
export const getStartTimeAndEndTime = (startTime, endTime) => {

    const startTimeArray = startTime.split(':');
    const startTimeHour = parseInt(startTimeArray[0]);
    const startTimeMinute = parseInt(startTimeArray[1]);

    const endTimeArray = endTime.split(':');
    const endTimeHour = parseInt(endTimeArray[0]);
    const endTimeMinute = parseInt(endTimeArray[1]);
    return { startTimeHour, startTimeMinute, endTimeHour, endTimeMinute }
}

export const daysInThisMonth = (currentDate) => {
    var now = currentDate;
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

// providers Attributes Time Logic

export const EndTimeValidation = (startTime) => {
    const arr = startTime.split(':');
    let hour = parseInt(arr[0]);
    let minute = parseInt(arr[1]);

    if ((minute + 15) !== 60) {

        minute = minute + 15;
        return hour.toString().concat(":" + minute.toString())
    } else {

        hour = hour + 1
        return hour.toString().concat(":00");
    }
}

// for production removing console logs
export const removeConsoleLog = () => {
    function emptyfunc() { }
    console.log = emptyfunc;
    console.warn = emptyfunc;
    console.error = emptyfunc;
}

export const addDateTime = (date, month, year, hours, minutes) => {
    var mont = parseInt(month) + 1
    var x = year + ',' + mont + ',' + date + ' ' + hours + ':' + minutes;
    var dt = new Date(x);
    return dt
}

export const addSecondsToDate = (date, seconds) => {
    var month = parseInt(date.getMonth()) + 1
    var x = date.getFullYear() + ',' + month + ',' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + seconds;
    var dt = new Date(x);

    return dt
}

//keeping date and time intact just changing the timezone and returning the UTC
export const convertDateToDifferentTZ = (date, timezone) => {
    console.log(date, timezone);
    var now = moment(date);

    now.tz(timezone, true);
    console.log(date, timezone, now.toISOString());
    // console.log(now.format());
    // console.log(now.toISOString());
    return now.toISOString();
}

// export const convertStringToDateWithTZ = (string, timezone) => {


//     var now = moment(string);
//     // now.tz(timezone, true);
//     return now;
// }
export const convertDateToDifferentTZSansUTC = (date, timezone) => {
    var now = moment(date);
    now.tz(timezone, true);
    // console.log(now.format());
    // console.log(now.toISOString());
    return now.toDate();
}


//Converting UTC to specific timezone

export const convertUTCToDifferentTZ = (date, timezone) => {
    var d = new Date(date);

    var utc_offset = d.getTimezoneOffset();
    console.log("utc_offset:" + utc_offset);
    d.setMinutes(d.getMinutes() + utc_offset);
    console.log("utc:" + d);

    var timezone_offset = moment.tz(timezone).utcOffset()
    d.setMinutes(d.getMinutes() + timezone_offset);
    console.log("updated date" + d);

    return d;
}

///////// Service provider listing availability section - Hours computation logic 

export const getHoursBetween = (startDate, endDate) => {
    let diff = endDate.getHours() - startDate.getHours();
    var diffDates = [];
    for (var i = 0; i < diff; i++) {
        let date = new Date(startDate);
        date.setHours(startDate.getHours() + i);
        diffDates.push(date);
    }
    return diffDates;
};

export const getDateKey = date => {
    return (
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
};

export const computeHoursForAvailability = (availabilities, timezone) => {
    var availableDates = [];
    var datesAvailabilityMapping = {};
    for (var index in availabilities) {
        let dates = availabilities[index];
        let startDate = convertUTCToDifferentTZ(dates["start_time"], timezone);
        let endDate = convertUTCToDifferentTZ(dates["end_time"], timezone);

        let dateKey = getDateKey(startDate);
        availableDates.push(dateKey);
        let computedHours = getHoursBetween(startDate, endDate);
        if (datesAvailabilityMapping[dateKey]) {
            let hours = datesAvailabilityMapping[dateKey];
            hours = hours.concat(computedHours);
            datesAvailabilityMapping[dateKey] = hours;
        } else {
            datesAvailabilityMapping[dateKey] = computedHours;
        }
    }

    availableDates = availableDates.filter((ele, index) => {
        return availableDates.indexOf(ele) === index;
    });

    return { availableDates, datesAvailabilityMapping };
};

export const pad = (num, size) => {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}


export const getFormattedTime = (date) => {
    let hrs = pad(date.getHours(), 2)
    let minutes = date.getMinutes() === 0 ? "00" : pad(date.getMinutes(), 2);
    return hrs + ":" + minutes;
}

//////////////////////////////////////////////////////////////////////////////////////
//May 04, 2019
export const dateToString = (date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"]
    var mm = date.getMonth();
    var dt = date.getDate();
    var year = date.getFullYear();
    return months[mm] + " " + dt + ", " + year;
}

export const dateTimeToString = (date) => {
    const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"]
    var mm = date.getMonth();
    var dt = date.getDate();
    var hr = date.getHours();
    var min = date.getMinutes();
    // const time = tConvert(hr.toString() + ":" + min.toString());
    const time = timeconvert(date);
    return months[mm] + " " + dt + ", " + time;
}

export const roundOff = (date) => {
    var offset = 15;
    var tempDate = new Date(date);
    var minutes = date.getMinutes();
    var newMin = minutes + (offset - (minutes % offset));
    tempDate.setMinutes(newMin);
    tempDate.setSeconds(0);
    return tempDate;
}

export const isAllDay = (startTime, endTime) => {
    let startOfTheDay = startTime.getHours() === 0 && startTime.getMinutes() === 0;
    let endOfTheDay = endTime.getHours() === 23 && endTime.getMinutes() === 59;
    return startOfTheDay && endOfTheDay;
}


//toast

export const toastMsg = (msg, error = false, autoClose = 2000) => {
    if (error) {
        store.addNotification({
            title: "Error",
            message: msg,
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: autoClose,
                //   onScreen: true,
                showIcon: true
            }
        });
    } else {
        store.addNotification({
            title: "Success",
            message: msg,
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: autoClose,
                //   onScreen: true,
                showIcon: true
            }
        });
    }
}

export const toastInfo = (msg, autoClose = 2000) => {
    store.addNotification({
        title: "Info!",
        message: msg,
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: autoClose,
            //   onScreen: true,
            showIcon: true
        }
    });
}

export const getSlots = (startTime, endTime) => {
    var slots = {};
    const StartTime = startTime.getHours() + (startTime.getMinutes() / 60);
    const EndTime = endTime.getHours() + (endTime.getMinutes() / 60);
    slots = { StartTime, EndTime };
    //  

    return slots;
}

export const convertCustomScheduleToCalendarAvailabilityResponse = (customSchedules, timezone) => {
    //     
    var dateTimeSlotsMapping = {}

    for (var index in customSchedules) {
        let schedule = customSchedules[index];
        let startTime = convertUTCToDifferentTZ(new Date(schedule.start_time), timezone)
        let endTime = convertUTCToDifferentTZ(new Date(schedule.end_time), timezone)
        let scheduleStatus = schedule.schedule_status
        //  
        let slots = getSlots(startTime, endTime);
        //  
        let dateKey = getDateKey(startTime);
        if (scheduleStatus === "unavailable") {
            dateTimeSlotsMapping[dateKey] = { slots: [slots] };
            dateTimeSlotsMapping[dateKey]['status'] = scheduleStatus

            //  
        } else {
            //   
            if (dateTimeSlotsMapping[dateKey]) {

                if (dateTimeSlotsMapping[dateKey]['status'] === 'available') {
                    //  
                    dateTimeSlotsMapping[dateKey]['slots'].push(slots);
                    dateTimeSlotsMapping[dateKey]['status'] = scheduleStatus;
                } else {

                    dateTimeSlotsMapping[dateKey] = { slots: [slots] };
                    dateTimeSlotsMapping[dateKey]['status'] = scheduleStatus
                }

            } else {
                dateTimeSlotsMapping[dateKey] = { slots: [slots] };
                dateTimeSlotsMapping[dateKey]['status'] = scheduleStatus;

            }
        }
        //  
    }
    return dateTimeSlotsMapping;
}

export function useOuterClickNotifier(onOuterClick, innerRef) {
    useEffect(
        () => {
            // only add listener, if the element exists
            if (innerRef.current) {
                document.addEventListener("click", handleClick);
            }

            // unmount previous first in case inputs have changed
            return () => document.removeEventListener("click", handleClick);

            function handleClick(e) {
                innerRef.current && !innerRef.current.contains(e.target) && onOuterClick(e);
            }
        },
        [onOuterClick, innerRef] // invoke again, if inputs have changed
    );
}
