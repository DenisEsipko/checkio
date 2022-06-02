import {strict as assert} from "assert";

/*
 byrd

У Стефана есть друг -- маленькая робо-птичка. Какое-то время он пытался научить её говорить по-английски. И вот сегодня она произнесла первое слово: «hieeelalaooo». Звучит как «hello», но слишком уж много гласных. Стефан попросил Николу помочь с этим, и тот изучил, как птица меняет слова. Теперь нам осталось только написать модуль для перевода с птичьего.
Птичка меняет слова по следующим правилам:

    - после каждой согласной буквы она добавляет случайную гласную букву (l ⇒ la or le);
    - после каждой гласной буквы она добавляет две таких же буквы (a ⇒ aaa);

Гласные буквы == "aeiouy".

Вам дана птичья фраза как несколько слов, разделёных пробелами (каждая пара слов разделена одним пробелом). Птичка не знает ничего о знаках пунктуации и использует только буквы. Все слова даны в нижнем регистре. Необходимо перевести эту птичью песню в понятную простым роботам фразу.

Входные данные: Птичья фраза как строка (string).

Выходные данные: Перевод как строка (string).

Примеры:
translate('hieeelalaooo') == 'hello'
translate('hoooowe yyyooouuu duoooiiine') == 'how you doin'
translate('aaa bo cy da eee fe') == 'a b c d e f'
translate('sooooso aaaaaaaaa') == 'sos aaa'

Связь с реальной жизнью: Этот простой «шифр» похож на тот, который используют дети для своего «птичьего» языка. Но теперь-то вы легко взломаете их хитрости.

Предусловия: re.match("\A([a-z]+\ ?)+(?<!\ )\Z", phrase)
Фраза всегда имеет перевод.

 */
function translate(text: string): string {

    let str = "";
    for (let i = 0; i < text.length; i++) {
        let x = text[i].match("\[aeiouy]");
        if (text[i] === " ") {
            str += " ";
            continue;
        }
        if (x) {
            str += text[i];
            i += 2;
        } else {
            str += text[i];
            i++
        }
    }
    return str;
}

console.log('Example:');
console.log(translate('hieeelalaooo'));

// These "asserts" are used for self-checking
assert.equal(translate('hieeelalaooo'), 'hello');
assert.equal(translate('hoooowe yyyooouuu duoooiiine'), 'how you doin');
assert.equal(translate('aaa bo cy da eee fe'), 'a b c d e f');
assert.equal(translate('sooooso aaaaaaaaa'), 'sos aaa');