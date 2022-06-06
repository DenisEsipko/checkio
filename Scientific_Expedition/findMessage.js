"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 "Где умный человек прячет лист? В лесу. Но что если леса нет? ... Он выращивает лес и прячет его там."
-- Гилберт Кит Честертон

Когда-нибудь пробовали отправить секретное сообщение кому-то не пользуясь услугами почты? Вы можете использовать газету, чтобы рассказать кому-то свой секрет. Даже если кто-то найдет ваше сообщение, легко отмахнуться и сказать что это паранойя и теория заговора. Один из самых простых способов спрятать ваше секретное сообщение это использовать заглавные буквы. Давайте найдем несколько таких секретных сообщений.

Дан кусок текста. Соберите все заглавные буквы в одно слово в том порядке как они встречаются в куске текста.

Например: текст = " H ow are you? E h, ok. L ow or L ower? O hhh.", если мы соберем все заглавные буквы, то получим сообщение "HELLO".

Входные данные: Текст как строка (юникод).

Выходные данные: Секретное сообщение как строка или пустая строка.

Пример:
findMessage(('How are you? Eh, ok. Low or Lower? '
 'Ohhh.')) == 'HELLO'
findMessage('hello world!') == ''
findMessage('HELLO WORLD!!!') == 'HELLOWORLD'

 */
function findMessage(message) {
    // // your code here
    var temp = message.match(/[A-Z]/g) || [];
    return temp.reduce(function (acum, curent) { return acum += curent; }, "");
}
//Ver 2
/*
function findMessage(message: string): string {
    return message.replace(/[^A-Z]/g, "");
}
 */
console.log('Example:');
console.log(findMessage('hello world!'));
// These "asserts" are used for self-checking
assert_1.strict.equal(findMessage(('How are you? Eh, ok. Low or Lower? '
    + 'Ohhh.')), 'HELLO');
assert_1.strict.equal(findMessage('hello world!'), '');
assert_1.strict.equal(findMessage('HELLO WORLD!!!'), 'HELLOWORLD');
