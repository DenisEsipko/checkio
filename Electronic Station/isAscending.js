"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
Определите, поднимается ли последовательность элементов элементов, чтобы каждый его элемент был строго больше, чем (и не просто равен) элементу, который предшествует ему.

Ввод: итерабильный с INT.

Вывод: Bool.
 Example:
isAscending([-5, 10, 99, 123456]) == true
isAscending([99]) == true
isAscending([4, 5, 6, 7, 3, 7, 9]) == false
isAscending([]) == true
isAscending([1, 1, 1, 1]) == false

 */
function isAscending(values) {
    // your code here
    //Ver 1
    /*
    let arrSort = values.slice().sort((a, b) => a - b)
    if (new Set(values).size != values.length) return false
    for (let i = 0; i < values.length; i++) {
      if (arrSort[i] !== values[i]) {
        return false;
      }
    }
    return true;
    */
    //Ver 2
    for (var i = 0; i < values.length; i++) {
        if (values[i] >= values[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log('Example:');
//console.log(isAscending([-5, 10, 99, 123456,-1]));
// These "asserts" are used for self-checking
assert_1.strict.equal(isAscending([-5, 10, 99, 123456]), true);
assert_1.strict.equal(isAscending([99]), true);
assert_1.strict.equal(isAscending([4, 5, 6, 7, 3, 7, 9]), false);
assert_1.strict.equal(isAscending([]), true);
assert_1.strict.equal(isAscending([1, 1, 1, 1]), false);
