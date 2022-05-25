"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 Вам дана строка и два маркера (начальный и конечный). Вам необходимо найти текст, заключенный между двумя этими маркерами. Но есть несколько важных условий:

    Начальный и конечный маркеры всегда разные
    Если нет начального маркера, то началом считать начало строки
    Если нет конечного маркера, то концом считать конец строки
    Если нет ни конечного, ни начального маркеров, то просто вернуть всю строку
    Если конечный маркер стоит перед начальным, то вернуть пустую строку

Input: Три аргумента. Все строки. Второй и третий аргументы это начальный и конечный маркеры.

Output: Строка.
 */
function betweenMarkers(text, begin, end) {
    // return (-1 < text.indexOf(end) && text.indexOf(end) < text.indexOf(begin))
    //     ? '' : text.split(begin)[text.split(begin).length-1].split(end)[0];
    var numStrt;
    var numEnd;
    var str = "";
    if (text.includes(begin)) {
        numStrt = text.indexOf(begin) + begin.length;
    }
    else
        numStrt = 0;
    if (text.includes(end)) {
        numEnd = text.indexOf(end, numStrt);
    }
    else
        numEnd = text.length;
    if (numEnd < numStrt - begin.length)
        return "";
    return text.substring(numStrt, numEnd);
}
console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple');
console.log(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"), 'My new site');
console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No');
console.log(betweenMarkers('No <hi>', '>', '<'), '');
assert_1.strict.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert_1.strict.equal(betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"), 'My new site');
assert_1.strict.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No');
assert_1.strict.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi');
assert_1.strict.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi');
assert_1.strict.equal(betweenMarkers('No <hi>', '>', '<'), '');
