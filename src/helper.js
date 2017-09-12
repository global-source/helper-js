/*!
 * Helper JS v.0.1
 * Basic helper functions from different development purposes.
 *
 * Author : Shankar Thiyagaraajan
 * Email  : shankarthiyagaraajan@gmail.com
 * GitHub : https://github.com/shankarThiyagaraajan
 *
 * Source
 * https://github.com/global-source/helper-js
 *
 * Site
 * https://global-source.github.io/helper-js/
 *
 * Copyright 2017
 *
 * Released under the MIT license
 * https://github.com/global-source/helper-js/blob/master/LICENSE
 *
 * Date: 2017-09-12
 */

// Count objects item.
function countItems(object) {
    var length = 0;
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            ++length;
        }
    }
    return length;
};

// Getting range of a number [From 0]
Number.prototype.range = function () {
    var list;
    list = Array.apply(null, Array(parseInt(this.toString()))).map(function (_, i) {
        return i;
    });
    return list;
};

// To return date without time "00:00:00:00"
Date.prototype.withoutTime = function () {
    try {
        var d = new Date(this);
        d.setUTCHours(0, 0, 0, 0);
        return d;
    } catch (e) {
        console.log(e.fileName + ' | ' + e.lineNumber + ' : ' + e.message);
    }
};

// To check array or object.
var isArrayOrObject = function (option) {
    // Getting actual type of the item
    var type = Object.prototype.toString.call(option);
    if (type === '[object Array]' || type === '[object Object]') {
        return true;
    }
    return false;
};

// To format date with different formats.
Date.prototype.formatDateTo = function (pattern, withoutUTC) {
    try {
        if (typeof withoutUTC === 'undefined') withoutUTC = false;
        var d = new Date(this);
        switch (pattern) {
            case 'dd-mm-yyyy':
                if (true === withoutUTC) {
                    d = d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear();
                } else {
                    d = d.getUTCDate() + '-' + d.getUTCMonth() + '-' + d.getFullYear();
                }

                break;
            case 'mm-dd-yyyy':
                if (true === withoutUTC) {
                    d = d.getMonth() + '-' + d.getDate() + '-' + d.getFullYear();
                } else {
                    d = d.getUTCMonth() + '-' + d.getUTCDate() + '-' + d.getFullYear();
                }
                break;
            case 'yyyy-dd-mm':
                if (true === withoutUTC) {
                    d = d.getFullYear() + '-' + d.getDate() + '-' + d.getMonth();
                } else {
                    d = d.getFullYear() + '-' + d.getUTCDate() + '-' + d.getUTCMonth();
                }
                break;
            default:
                if (true === withoutUTC) {
                    d = d.getFullYear() + '-' + d.getDate() + '-' + d.getMonth();
                } else {
                    d = d.getFullYear() + '-' + d.getUTCDate() + '-' + d.getUTCMonth();
                }
                break;
        }
        return d;

    } catch (e) {
        console.log(e.fileName + ' | ' + e.lineNumber + ' : ' + e.message);
    }
}

// To fixing the issue with date format as "dd/mm/yyyy" -> "yyyy/mm/dd",
// to achieve date parsing.
String.prototype.reverseDate = function (withoutDate) {
    try {
        if (typeof withoutDate === 'undefined') withoutDate = false;
        // To reversing the date format to generate date.
        var s = this.split('/').reverse().join('-');
        if (false === withoutDate) s = new Date(s);
        return s;
    } catch (e) {
        console.log(e.fileName + ' | ' + e.lineNumber + ' : ' + e.message);
    }
};

// To fixing the issue with date format to custom (default: dd/mm/yyyy),
// to achieve date parsing.
String.prototype.correctDate = function (withoutDate) {
    try {
        if (typeof withoutDate === 'undefined') withoutDate = false;
        // To reversing the date format to generate date.
        var s = this.split('/').reverse().join('-');
        if (false === withoutDate) s = new Date(s);
        return s;
    } catch (e) {
        console.log(e.fileName + ' | ' + e.lineNumber + ' : ' + e.message);
    }
};

// To split time panel.
function splitTime(time) {
    return /\d{1,2}:\d{1,2}/ig
        .exec(time)
        .pop()
        .split(":")
        .map(function (a) {
            return parseInt(a, 10);
        });
}

// To get difference between time.
function timeDifference(from, to) {

    if (from.length <= 0 || to.length <= 0) return false;

    var t1 = splitTime(from);
    var t2 = splitTime(to);
    if (from.toLowerCase().indexOf("pm") >= 0) {
        t1[0] = t1[0] + 12;
    }
    if (to.toLowerCase().indexOf("pm") >= 0) {
        t2[0] = t2[0] + 12;
    }
    var diff = [t2[0] - t1[0], t2[1] - t1[1]];
    return diff;
}
