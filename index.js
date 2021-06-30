function khmerDate(date, format = "dd mmm yyyy") {
    var convertor = "";
    var d = new Date(date);

    if (format.includes("dddd")) {
        format = format.replace("dddd", convertKhmerWeekDay(d))
    }
    if (format.includes("ddd")) {
        format = format.replace("ddd", convertKhmerWeekDay(d, true))
    }
    if (format.includes("dd")) {
        format = format.replace("dd", khmerNumber(d.getDate().toString()))
    }

    if (format.includes("mmmm")) {
        format = format.replace("mmmm", convertKhmerMonth(d))
    }
    if (format.includes("mmm")) {
        format = format.replace("mmm", convertKhmerMonth(d))
    }
    if (format.includes("mm")) {
        var month = (d.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "០" + month;
        }
        format = format.replace("mm", khmerNumber(month))
    }
    if (format.includes("yyyy")) {
        format = format.replace("yyyy", khmerNumber(d.getFullYear().toString()))
    }
    if (format.includes("yyy")) {
        format = format.replace("yyy", khmerNumber(d.getFullYear().toString()))
    }
    if (format.includes("yy")) {
        format = format.replace("yy", khmerNumber(d.getFullYear().toString().substring(2)))
    }
    if (format.includes("hr")) {
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'ល្ងាច' : 'ព្រឹក';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        format = format.replace("hr", khmerNumber(strTime))
    }
    if (format.includes("Hr")) {
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'ល្ងាច' : 'ព្រឹក';
        var strTime = hours + ':' + minutes;
        format = format.replace("Hr", khmerNumber(strTime))
    }

    convertor = format;
    return convertor;
}

function khmerNumber(number) {
    var khNumber = "";
    for (var i = 0; i < number.length; i++) {
        khNumber += convertKhmerNumber(number[i])
    }
    return khNumber;
}
function convertKhmerMonth(date) {
    switch (date.getMonth()) {
        case 0:
            return "មករា";
        case 1:
            return "កុម្ភៈ";
        case 2:
            return "មីនា";
        case 3:
            return "មេសា";
        case 4:
            return "ឧសភា";
        case 5:
            return "មិថុនា";
        case 6:
            return "កក្ដដា";
        case 7:
            return "សីហា";
        case 8:
            return "កញ្ញា";
        case 9:
            return "តុលា";
        case 10:
            return "វិច្ឆិកា";
        case 11:
            return "ធ្នូ";
        default:
            return "invalid weekday";
    }
}
function convertKhmerWeekDay(date, isShort = false) {
    switch (date.getDay()) {
        case 0:
            return isShort ? "អាទិ" : "អាទិត្យ";
        case 1:
            return isShort ? "ចន្ទ" : "ចន្ទ";
        case 2:
            return isShort ? "អង្គ" : "អង្គារ៍";
        case 3:
            return isShort ? "ពុធ" : "ពុធ";
        case 4:
            return isShort ? "ព្រហ" : "ព្រហស្បតិ៍";
        case 5:
            return isShort ? "សុក្រ" : "សុក្រ";
        case 6:
            return isShort ? "សៅរ៍" : "សៅរ៍";
        default:
            return "invalid weekday";
    }
}

function convertKhmerNumber(number) {
    switch (number) {
        case "0":
            return "០";
        case "1":
            return "១";
        case "2":
            return "២";
        case "3":
            return "៣";
        case "4":
            return "៤";
        case "5":
            return "៥";
        case "6":
            return "៦";
        case "7":
            return "៧";
        case "8":
            return "៨";
        case "9":
            return "៩";
        default:
            return number;
    }
}
export function isToday(day) {
    var date1 = new Date(day);
    var date2 = new Date(Date.now());
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    const is_today = Difference_In_Days.toString().substring(0, Difference_In_Days.toString().indexOf("."));
    if (is_today == "0") {
        return true;
    } else {
        return false;
    }
}

module.exports.khmerdate = { khmerDate, isToday, khmerNumber };