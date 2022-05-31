/*
В данном словом вам нужно проверить, идет ли один символ сразу за другим.

Случаи, которые вы должны ожидать при решении этой задачи:

    Если в списке есть более одного символа, вы всегда должны считать первым
    Один из символов не в данном словом - ваша функция должна вернуть ложь;
    Любой символ появляется в слове более одного раза - используйте только первый;
    Два символа одинаковы - ваша функция должна вернуть ложь;
    Условие чувствительно к корпусу, что смягчает 'a' и 'a' - два разных символа.

Ввод: три аргумента.Первый - это заданная строка, вторая - это символ, который сначала идет, а третий - символ, который должен идти после первого.

Вывод: Bool.

Пример:

goesAfter('world', 'w', 'o') == true
goesAfter('world', 'w', 'r') == false
goesAfter('world', 'l', 'o') == false
goesAfter('panorama', 'a', 'n') == true
goesAfter('list', 'l', 'o') == false
goesAfter('', 'l', 'o') == false
goesAfter('list', 'l', 'l') == false
goesAfter('world', 'd', 'w') == false

 */
"use strict";
function goesAfter(word, first, second) {
    var start = word.indexOf(first);
    var end = word.indexOf(second);
    // console.log(start)
    // console.log(end)
    if (start != -1 && end != -1 && end === (start + 1)) {
        var temp = (word.substring(start, (start + 2)) === (first + second));
        return temp;
    }
    return false;
}
console.log(goesAfter('world', 'w', 'o'));
console.log(goesAfter("almaz", "m", "a"));
//
var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:');
    console.log(goesAfter('world', 'w', 'o'));
    // These "asserts" are used for self-checking
    assert.equal(goesAfter('world', 'w', 'o'), true);
    assert.equal(goesAfter('world', 'w', 'r'), false);
    assert.equal(goesAfter('world', 'l', 'o'), false);
    assert.equal(goesAfter('panorama', 'a', 'n'), true);
    assert.equal(goesAfter('list', 'l', 'o'), false);
    assert.equal(goesAfter('', 'l', 'o'), false);
    assert.equal(goesAfter('list', 'l', 'l'), false);
    assert.equal(goesAfter('world', 'd', 'w'), false);
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
