"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
А может быть это шифр? Может быть, но это не точно.

Вам надо проверить, что 2 данные строки изометричны. Это значит что символ из одной строки может стать в соответствие символам из другой строки.

Один символ одной строки может соответствовать только одному символу другой строки. Два или более символа одной строки могут соответствовать одному символу другой строки, но не наоборот.

 Example:
isometricStrings('add', 'egg') == true
isometricStrings('foo', 'bar') == false
isometricStrings('', '') == true
isometricStrings('all', 'all') == true
isometricStrings('gogopy', 'doodle') == false

 */
function isometricStrings(line1, line2) {
    var mapSimvol = {};
    var temp = line1.split("");
    return temp.every(function (value, index) {
        if (mapSimvol[value] != undefined) {
            return mapSimvol[value] == line2[index];
        }
        else {
            return mapSimvol[value] = line2[index];
        }
    });
}
console.log('Example:');
console.log(isometricStrings('add', 'egg'));
// These "asserts" are used for self-checking
assert_1.strict.equal(isometricStrings('add', 'egg'), true);
assert_1.strict.equal(isometricStrings('foo', 'bar'), false);
assert_1.strict.equal(isometricStrings('', ''), true);
assert_1.strict.equal(isometricStrings('all', 'all'), true);
assert_1.strict.equal(isometricStrings('gogopy', 'doodle'), false);
