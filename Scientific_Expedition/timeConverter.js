"use strict";

function timeConverter(dayTime) {
    // your code here

    let tempArr = dayTime.split(":");
    let am_pm = (tempArr[0] < 12) ? "a.m." : "p.m.";
    let hour= tempArr[0] % 12 || 12;
    return `${hour}:${tempArr[1]} ${am_pm}`;
}
//
// console.log(timeConverter('12:30'),'12:30 p.m.');
// console.log(timeConverter('9:00'),'9:00 a.m.');
// console.log(timeConverter('23:15'),'11:15 p.m.');


var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(timeConverter('12:30'))

    // These "asserts" are used for self-checking and not for an auto-testing
    assert.equal(timeConverter('12:30'), '12:30 p.m.')
    assert.equal(timeConverter('09:00'), '9:00 a.m.')
    assert.equal(timeConverter('23:15'), '11:15 p.m.')
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}