"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
У вас есть массив.Каждое значение из этого массива может быть либо строкой, либо целым числом.Ваша задача - вернуть два значения.Первый - это объединение всех строк из данного массива.Второй - это сумма всех целых чисел из данного массива.

Ввод: список строк и INT

Вывод: массив


sumByTypes([]) == ['', 0]
sumByTypes([1, 2, 3]) == ['', 6]
sumByTypes(['1', 2, 3]) == ['1', 5]
sumByTypes(['1', '2', 3]) == ['12', 3]
sumByTypes(['1', '2', '3']) == ['123', 0]
sumByTypes(['size', 12, 'in', 45, 0]) == ['sizein', 57]

 */
function sumByTypes(values) {
    // your code here
    var str = values.filter(function (f) { return typeof f === "string"; }).reduce(function (acum, curent) { return acum + curent; }, "");
    var num = values.filter(function (f) { return typeof f === "number"; }).reduce(function (acum, curent) { return acum + curent; }, 0);
    return [str, num];
}
console.log('Example:');
//console.log(sumByTypes([]));
//console.log(sumByTypes(['1', 2, 3])); //['1', 5]
// These "asserts" are used for self-checking
assert_1.strict.deepEqual(sumByTypes([]), ['', 0]);
assert_1.strict.deepEqual(sumByTypes([1, 2, 3]), ['', 6]);
assert_1.strict.deepEqual(sumByTypes(['1', 2, 3]), ['1', 5]);
assert_1.strict.deepEqual(sumByTypes(['1', '2', 3]), ['12', 3]);
assert_1.strict.deepEqual(sumByTypes(['1', '2', '3']), ['123', 0]);
assert_1.strict.deepEqual(sumByTypes(['size', 12, 'in', 45, 0]), ['sizein', 57]);
