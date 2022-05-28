//import {strict as assert} from 'assert';
/*
Ваша задача в этой миссии определить популярность определенных слов в тексте.
На вход вашей функции передается 2 аргумента. Текст и массив слов, популярность которых необходимо определить.
При решении этой задачи обратите внимание на следующие моменты

    Слова необходимо искать во всеx регистрах. Т.е. если необходимо найти слово "one", значит для него будут подходить слова "one", "One", "oNe", "ONE" и.т.д.
    Искомые слова всегда указаны в нижнем регистре
    Если слово не найдено ни разу, то его необходимо вернуть в словаре со значением 0 (ноль)

Входные параметры: Текст и массив искомых слов.
Выходные параметры: Словарь, в котором ключами являются искомые слова и значениями то, сколько раз они встречаются в исходном тексте.
 */
"use strict";
function popularWords(text, words) {
    function counter(text) {
        var temp = text.split(/\s+/g);
        var res = {};
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var it = temp_1[_i];
            it = it.toLowerCase();
            res[it] = res[it] || 0;
            res[it] += 1;
        }
        return res;
    }
    var mapPopularWords = counter(text);
    var retObj = {};
    words.forEach(function (x) {
        retObj[x] = mapPopularWords[x] || 0;
    });
    return retObj;
}
console.log('Example:');
console.log(popularWords("\nWhen I was One\nI had just begun\nWhen I was Two\nI was nearly new", ['i', 'was', 'three', 'near']));
