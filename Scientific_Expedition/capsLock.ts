import {strict as assert} from "assert";

/*
 Джо Палука обладает такими толстыми пальцами, что всегда задевает клавишу “Caps Lock” когда пытается нажать кнопку “a”. (Правда когда Джо пытается напечатать заглавную версию “a”, требующую нажатия нескольких клавиш, он более внимателен, и всегда жмет [Shift] + [a] правильно). Ваша программа должна вернуть то, что получится у Джо при наборе переданного текста. “Caps Lock” влияет только на кнопки от “a” до “z”, и не оказывает эффекта на другие клавиши. Перед набором текст “Caps Lock” выключен.

В клавиатуре Джо Caps Lock всегда выводит буквы в верхнем регистре. Это значит, что если Caps Lock нажат и Джо нажимает Shift + 'b', он получил 'B' (в верхнем регистре)

Входные данные: Строка. Текст, который печатает Джо.

Выходные данные: Строка. Текст, который получится у Джо после набора.

 Примеры:
capsLock('Why are you asking me that?') == 'Why RE YOU sking me thT?'
capsLock('Always wanted to visit Zambia.') == 'AlwYS Wnted to visit ZMBI.'
capsLock('Aloha from Hawaii') == 'Aloh FROM HwII'

 */

function capsLock(text: string): string {
    // your code here
    let temp = text.split("a");
    //console.log(temp)
    return temp.map((a, i) => i % 2 == 0 ? a : a.toUpperCase()).join("");

}


console.log("Example:");
console.log(capsLock("Why are you asking me that?"));

// These "asserts" are used for self-checking
assert.equal(
    capsLock("Why are you asking me that?"),
    "Why RE YOU sking me thT?"
);
assert.equal(
    capsLock("Always wanted to visit Zambia."),
    "AlwYS Wnted to visit ZMBI."
);
assert.equal(capsLock("Aloha from Hawaii"), "Aloh FROM HwII");