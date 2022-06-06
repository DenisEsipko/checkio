"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 Дан текст, который содержит различные английские буквы и знаки препинания. Вам необходимо найти самую частую букву в тексте. Результатом должна быть буква в нижнем регистре.
При поиске самой частой буквы, регистр не имеет значения, так что при подсчете считайте, что "A" == "a". Убедитесь, что вы не считайте знаки препинания, цифры и пробелы, а только буквы.

Если в тексте две и больше буквы с одинаковой частотой, тогда результатом будет буква, которая идет первой в алфавите. Для примера, "one" содержит "o", "n", "e" по одному разу, так что мы выбираем "e".

Вх. данные: Текст для анализа, как строка.

Вых. данные: Наиболее частая буква, как строка.

 Примеры:
mostWanted('Hello World!') == 'l'
mostWanted('How do you do?') == 'o'
mostWanted('One') == 'e'
mostWanted('Oops!') == 'o'
mostWanted('AAaooo!!!!') == 'a'

 */
function mostWanted(text) {
    // your code here
    var mapChar = {};
    text.toLowerCase().match(/[A-Za-z]/g).forEach(function (x) {
        mapChar[x] = mapChar.hasOwnProperty(x) ? mapChar[x] + 1 : 1;
    });
    var abjArr = Object.entries(mapChar);
    abjArr
        .sort(function (a, b) { return a[0].charCodeAt(0) - b[0].charCodeAt(0); })
        .sort(function (a, b) { return Number(b[1]) - Number(a[1]); });
    return abjArr[0][0];
}
//Var 2
// function mostWanted(text: string): string {
//     let obj = {};
//     text = text.toLowerCase().replace(/[^a-z]/g, '');
//
//     return  Array.from(text).reduce((acu, cur) => {
//         //наполняем обект
//         obj[cur] = (obj[cur] || 0) + 1;
//
//         if (obj[acu] < obj[cur]) {
//             return cur;
//         } else {
//             if (acu < cur) {
//                 return obj[acu] == obj[cur] ? acu
//                     : acu;
//             } else {
//                 return obj[acu] == obj[cur] ? cur
//                     : acu;
//             }
//         }
//     }, text[0])
//
// }
console.log('Example:');
console.log(mostWanted('ffbbbaae'));
// These "asserts" are used for self-checking
assert_1.strict.equal(mostWanted('Hello World!'), 'l');
assert_1.strict.equal(mostWanted('How do you do?'), 'o');
assert_1.strict.equal(mostWanted('One'), 'e');
assert_1.strict.equal(mostWanted('Oops!'), 'o');
assert_1.strict.equal(mostWanted('AAaooo!!!!'), 'a');
assert_1.strict.equal(mostWanted('abe'), 'a');
