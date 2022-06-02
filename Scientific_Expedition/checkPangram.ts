import {strict as assert} from "assert";
/*
 Панграмма (Греческий:παν γράμμα, pan gramma, "каждая буква") или предложение состоящее из разных букв алфавита, используя каждую букву по крайней мере один раз. Возможно, вы знакомы с хорошо известными панграммами "Эй, жлоб! Где туз? Прячь юных съёмщиц в шкаф" или "Любя, съешь щипцы, — вздохнёт мэр, — кайф жгуч".

Для этого задания, вы будете использовать латинский алфавит (A-Z). У вас есть текст с латинскими буквами и знаками препинания. Вы должны проверить является ли предложение панграммой или нет. Регистр не имеет значения.

Входные данные: Текст как строка.

Выходные данные: Является предложение панграммой или нет как логическое.

Примеры:
checkPangram("The quick brown fox jumps over the lazy dog.") == true
checkPangram("ABCDEF.") == false
1
2

Как это используется: Панграммы используют для отображения шрифтов, тестирования оборудования, развития почерка, каллиграфии и набора текста на клавиатуре.

Предусловия:
All ASCII English Letter(a-z,A-Z) and punctuations such as:
 */

function checkPangram(text: string): boolean {
    // your code here

    //ver 1
    // text = text.toLowerCase();
    // let regex = /([a-z])(?!.*\1)/g;
    // return (text.match(regex) || []).length === 26;

    //ver 2
    return  new Set(text.toLowerCase().match(/[a-z]/g)).size === 26;

}

console.log('Example:');
console.log(checkPangram(('qwertyuiopasdfghjklzxcvnmb')));

// These "asserts" are used for self-checking
assert.equal(checkPangram(('The quick brown fox jumps over the '
    + 'lazy dog.')), true);
assert.equal(checkPangram('ABCDEF'), false);
assert.equal(checkPangram('abcdefghijklmnopqrstuvwxyz'), true);
assert.equal(checkPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), true);
assert.equal(checkPangram('abcdefghijklmnopqrstuvwxy'), false);
assert.equal(checkPangram(('Bored? Craving a pub quiz fix? Why, '
    + 'just come to the Royal Oak!')), true);
assert.equal(checkPangram(("As quirky joke, chefs won't pay "
    + 'devil magic zebra tax.')), true);
assert.equal(checkPangram(('Six big devils from Japan quickly '
    + 'forgot how to walt.')), false);