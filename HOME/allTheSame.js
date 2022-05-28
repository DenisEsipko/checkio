"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 В этой миссии Вам надо определить, все ли элементы массива равны.

Входные: Array.

Выходные: Bool.
 */
function allTheSame(elements) {
    return new Set(__spreadArray([], elements, true)).size > 1 ? false : true;
}
console.log('Example:');
console.log(allTheSame([1, 1, 1]));
// These "asserts" are used for self-checking and not for an auto-testing
assert_1.strict.equal(allTheSame([1, 1, 1]), true);
assert_1.strict.equal(allTheSame([1, 2, 1]), false);
assert_1.strict.equal(allTheSame(['a', 'a', 'a']), true);
assert_1.strict.equal(allTheSame([]), true);
assert_1.strict.equal(allTheSame([1]), true);
