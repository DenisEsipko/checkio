"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
В данной строке вы должны изменить каждое слово, реверс слова.
 */
function backwardStringByWord(text) {
    var temp = text.split(" ");
    var reverse = temp.map(function (x) { return Array.from(x).reverse().join(""); });
    var str = reverse.toString();
    return str.replace(/[,]/g, " ");
    //Ver 2
    /*
    return  text.replace(/\w+/g, w => [...w].reverse().join(''));
    */
}
console.log('Example:');
//console.log(backwardStringByWord(''));
console.log(backwardStringByWord('hello     world'));
// These "asserts" are used for self-checking
assert_1.strict.equal(backwardStringByWord(''), '');
assert_1.strict.equal(backwardStringByWord('world'), 'dlrow');
assert_1.strict.equal(backwardStringByWord('hello world'), 'olleh dlrow');
assert_1.strict.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert_1.strict.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');
