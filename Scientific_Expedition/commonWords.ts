import {strict as assert} from "assert";

/*
 mirror

Продолжим изучение слов. Даны две строки со словами, разделенными запятыми. Попробуйте найти что общего между этими строками. Слова внутри каждой строки не повторяются.

Ваша функция должна находить все слова, которые появляются в обеих строках. Результат должен быть представлен, как строка со словами разделенными запятыми и отсортированными в алфавитном порядке.

Вх. данные: Два аргумента как строки (str).

Вых. данные: Общие слова как строка (str).

Примеры:
commonWords('hello,world', 'hello,earth') == 'hello'
commonWords('one,two,three', 'four,five,six') == ''
commonWords('one,two,three',
 'four,five,one,two,six,three') == 'one,three,two'



Как это используется: В этой задаче вы попрактикуетесь в работе с наборами и строками. И эти навыки будут полезными для лингвистического анализа.

Предусловия:
Каждая строка содержит не более 10 слов.
Все слова разделены запятыми.
Все слова состоят только из латинских букв в нижнем регистре.

 */

function commonWords(line1: string, line2: string): string {
    // your code here
    return line1.split(",").filter(x => line2.split(",").includes(x)).sort().join(",");
}

console.log('Example:');
console.log(commonWords('hello,world', 'hello,earth'));

// These "asserts" are used for self-checking
assert.equal(commonWords('hello,world', 'hello,earth'), 'hello');
assert.equal(commonWords('one,two,three', 'four,five,six'), '');
assert.equal(commonWords('one,two,three',
    'four,five,one,two,six,three'), 'one,three,two');