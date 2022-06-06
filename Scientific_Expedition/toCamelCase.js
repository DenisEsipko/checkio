"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 Ваша задача - написать функцию, которая преобразовывает текст (название другой функции) из формата, принятого в Python (my_function_name) в CamelCase, принятый в JavaScript (MyFunctionName), где первая буква каждого слова - большая/заглавная.

Входные данные: Название функции как строка

Output: То же самое название, но в CamelCase

Примеры:
toCamelCase('my_function_name') == 'MyFunctionName'
toCamelCase('i_phone') == 'IPhone'

 */
function toCamelCase(name) {
    // your code here
    var isUpperCase = false;
    var x = Array.from(name).reduce(function (acum, curent, index) {
        if (index === 0) {
            acum += curent.toUpperCase();
        }
        else {
            if (curent === "_") {
                index += 1;
                isUpperCase = true;
            }
            else {
                if (isUpperCase === true) {
                    acum += curent.toUpperCase();
                    isUpperCase = false;
                }
                else
                    acum += curent;
            }
        }
        return acum;
    }, "");
    return x;
}
//Ver 2
/*
var toCamelCase = n => n.replace(/(^|_)(.)/g, (...x) => x[2].toUpperCase())
 */
console.log('Example:');
console.log(toCamelCase('my_function_name'));
// These "asserts" are used for self-checking
assert_1.strict.equal(toCamelCase('my_function_name'), 'MyFunctionName');
assert_1.strict.equal(toCamelCase('i_phone'), 'IPhone');
