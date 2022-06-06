"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 Наши Роботы никогда не упускают возможности, чтобы улучшить свои навыки в лингвистике. Сейчас они изучают английский алфавит и что с этим делать.

Алфавит разделен на гласные и согласные буквы (Да, мы разделили буквы, а не звуки).
Гласные -- A E I O U Y
Согласные -- B C D F G H J K L M N P Q R S T V W X Z

Дан текст с разными словами и/или числами, которые разделены пробелами и знаками пунктуации. Числа не считаются за слова (также как и смесь букв и цифр). Необходимо подсчитать слова, в которых гласные буквы чередуются с согласными (полосатые слова), то есть в таких словах нет двух гласных или двух согласных букв подряд. Слова состоящие из одной буквы - не "полосатые" (не считайте их). Регистр букв не имеет значения.

Входные данные: Текст, как строка (str).

Выходные данные: Количество "полосатых" слов, как целое число (int).

Примеры:
stripedWords('My name is ...') == 3
stripedWords('Hello world') == 0
stripedWords('A quantity of striped words.') == 1
stripedWords('Dog,cat,mouse,bird.Human.') == 3


Зачем это нужно: Концепции используемые в данной задаче могут быть полезным упражнением для лингвистического анализа. Обработка текста - это очень важный инструмент для анализа книг и языков.
 */
function stripedWords(line) {
    var vowels = 'AEIOUY';
    var consonants = 'BCDFGHJKLMNPQRSTVWXZ';
    var count = 0;
    var arrLine = line.toUpperCase().replace(/\.|,|\?/g, ' ').split(' ');
    arrLine.filter(function (e) { return e.length > 1 && !/\d/.test(e); })
        .map(function (e) {
        for (var i = 0; i < e.length - 1; i++) {
            var a = e[i], b = e[i + 1];
            if ((vowels.includes(a) && vowels.includes(b)) || (consonants.includes(a) && consonants.includes(b)))
                return 0;
        }
        count += 1;
    });
    return count;
}
//Ver 2
/*
var stripedWords=(l: string): number =>
    l.match(/\w+/gi).filter( x => x.length>1 && !/[AEIOUY]{2}|[^AEIOUY]{2}|\d/i.test(x) ).length;
 */
console.log('Example:');
console.log(stripedWords('My name is ...'));
// These "asserts" are used for self-checking
assert_1.strict.equal(stripedWords('My name is ...'), 3);
assert_1.strict.equal(stripedWords('Hello world'), 0);
assert_1.strict.equal(stripedWords('A quantity of striped words.'), 1);
assert_1.strict.equal(stripedWords('Dog,cat,mouse,bird.Human.'), 3);
