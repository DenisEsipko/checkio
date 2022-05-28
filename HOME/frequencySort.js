"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 Отсортируйте данный Array таким образом, чтобы его элементы оказались в порядке убывания частоты их появления, то есть по количеству раз, которое они появляются в элементах. Если два элемента имеют одинаковую частоту, они должны оказаться в том же порядке, в котором стояли изначально в Array.

Входные данные: Array

Выходные данные: Array
 */
function frequencySort(items) {
    function count(list, item) {
        return list.filter(function (x) { return x == item; }).length;
    }
    return items.sort(function (a, b) { return items.indexOf(a) - items.indexOf(b); }).sort(function (a, b) { return count(items, b) - count(items, a); });
}
console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));
// These "asserts" are used for self-checking and not for an auto-testing
assert_1.strict.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert_1.strict.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert_1.strict.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert_1.strict.deepEqual(frequencySort([]), []);
assert_1.strict.deepEqual(frequencySort([1]), [1]);
