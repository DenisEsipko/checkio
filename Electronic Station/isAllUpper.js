"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
Проверьте, есть ли в данной строке все символы в верхнем регистре.Если строка пуста или не имеет никакой буквы в ней - функция должна вернуть False.

Ввод: строка.

Вывод: логический.

isAllUpper('ALL UPPER') == true
isAllUpper('all lower') == false
isAllUpper('mixed UPPER and lower') == false
isAllUpper('') == false

 */
function isAllUpper(text) {
    // your code here
    var _a;
    var nevText = text.replace(/\s/g, "").replace(/\d/g, "").length;
    var textUpper = (_a = text.match(/[A-Z]/g)) === null || _a === void 0 ? void 0 : _a.length;
    if (nevText != textUpper || text == "") {
        return false;
    }
    else
        return true;
}
console.log('Example:');
console.log(isAllUpper('DDD AA'));
// These "asserts" are used for self-checking
assert_1.strict.equal(isAllUpper('ALL UPPER'), true);
assert_1.strict.equal(isAllUpper('all lower'), false);
assert_1.strict.equal(isAllUpper('mixed UPPER and lower'), false);
assert_1.strict.equal(isAllUpper(''), false);
