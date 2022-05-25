import {strict as assert} from 'assert';

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


function betweenMarkers(text: string, begin: string, end: string): string {

    let numStrt: number;
    let numEnd: number;
    let str: String = ""

    if (text.includes(begin)) {
        numStrt = text.indexOf(begin) + begin.length
    } else numStrt = 0;

    if (text.includes(end)) {
        numEnd = text.indexOf(end,numStrt)
    } else numEnd = text.length;

    if (numEnd < numStrt-begin.length) return "";
    return text.substring(numStrt, numEnd);

    //Ver 2
    /*
        const p1 = text.includes(begin) ? text.indexOf(begin) + begin.length : 0;
        const p2 = text.includes(end) ? text.indexOf(end) : text.length;
        return text.slice(p1, p2);
     */

}


console.log('Example:')
console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')
console.log(betweenMarkers("<head><title>My new site</title></head>",
    "<title>", "</title>"), 'My new site')

console.log(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
console.log(betweenMarkers('No <hi>', '>', '<'), '')

assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
assert.equal(betweenMarkers("<head><title>My new site</title></head>",
    "<title>", "</title>"), 'My new site')
assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No')
assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi')
assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi')
assert.equal(betweenMarkers('No <hi>', '>', '<'), '')