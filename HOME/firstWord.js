"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 Дана строка и нужно найти ее первое слово.

При решении задачи обратите внимание на следующие моменты:

    В строке могут встречатся точки и запятые
    Строка может начинаться с буквы или, к примеру, с пробела или точки
    В слове может быть апостроф и он является частью слова
    Весь текст может быть представлен только одним словом и все

 */
function firstWord(text) {
    return text.match(/([A-Za-z']+)/)[0];
}
console.log('Example:');
console.log(firstWord(" 3  Hello world"));
// These "asserts" using for self-checking and not for auto-testing
assert_1.strict.equal(firstWord("Hello world"), "Hello");
assert_1.strict.equal(firstWord(" a word "), "a");
assert_1.strict.equal(firstWord("don't touch it"), "don't");
assert_1.strict.equal(firstWord("greetings, friends"), "greetings");
assert_1.strict.equal(firstWord("... and so on ..."), "and");
assert_1.strict.equal(firstWord("hi"), "hi");
