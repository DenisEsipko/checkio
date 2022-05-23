import { strict as assert } from 'assert';
/*
 Дана строка и нужно найти ее первое слово.

При решении задачи обратите внимание на следующие моменты:

    В строке могут встречатся точки и запятые
    Строка может начинаться с буквы или, к примеру, с пробела или точки
    В слове может быть апостроф и он является частью слова
    Весь текст может быть представлен только одним словом и все

 */

function firstWord(text: string): string {
    return text.match(/([A-Za-z']+)/)[0];
}


console.log('Example:')
console.log(firstWord(" 3  Hello world"))

// These "asserts" using for self-checking and not for auto-testing
assert.equal(firstWord("Hello world"), "Hello")
assert.equal(firstWord(" a word "), "a")
assert.equal(firstWord("don't touch it"), "don't")
assert.equal(firstWord("greetings, friends"), "greetings")
assert.equal(firstWord("... and so on ..."), "and")
assert.equal(firstWord("hi"), "hi")