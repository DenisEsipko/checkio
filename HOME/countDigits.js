"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
Вам нужно подсчитать количество цифр в данной строке.

 Input: A Str.
 Output: An Int.
 */
function countDigits(text) {
    var arrNum = text.match(/\d/g);
    return arrNum === null ? 0 : arrNum.length;
}
console.log('Example:');
console.log(countDigits('hig'));
// These "asserts" are used for self-checking
assert_1.strict.equal(countDigits('hi'), 0);
assert_1.strict.equal(countDigits('who is 1st here'), 1);
assert_1.strict.equal(countDigits('my numbers is 2'), 1);
assert_1.strict.equal(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 8);
assert_1.strict.equal(countDigits('5 plus 6 is'), 2);
assert_1.strict.equal(countDigits(''), 0);
