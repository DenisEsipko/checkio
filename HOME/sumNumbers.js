"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function sumNumbers(test) {
    var x = test.split(" ").filter(function (x) { return Number.isFinite(Number(x)); }).map(function (x) { return Number(x); })
        .reduce(function (curent, acum) { return acum = acum + Number(curent); }, 0);
    // console.log(x);
    return x;
}
console.log('Example:');
console.log(sumNumbers('hi'));
// These "asserts" are used for self-checking
assert_1.strict.equal(sumNumbers('hi'), 0);
assert_1.strict.equal(sumNumbers('who is 1st here'), 0);
assert_1.strict.equal(sumNumbers('my numbers is 2'), 2);
assert_1.strict.equal(sumNumbers('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 3755);
assert_1.strict.equal(sumNumbers('5 plus 6 is'), 11);
assert_1.strict.equal(sumNumbers(''), 0);
