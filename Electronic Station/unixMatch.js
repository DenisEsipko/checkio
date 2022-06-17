"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Бывают ситуации, когда среди огромного количества файлов на вашем компьютере или в отдельной папке вам необходимо найти файлы определенного типа - например, изображения с расширением '.jpg' или документы с расширением '.txt' или файлы, в названии которых есть слово 'butterfly'. Делая это вручную можно потратить слишком много времени. Именно для облегчения подобных задач служит матчинг или паттерны для поиска файлов по определенной маске.
Эта миссия поможет вам разобраться с тем, как это работает.

Ваша задача - определить, соответствует ли заданное имя файла заданному поисковому паттерну.

Вот небольшая таблица, которая показывает, какие символы могут использовать в паттернах.
* 	соответствует всему (любому количеству любых символов)
? 	соответствует любому одному символу

Входные данные: Два аргумента. Оба - строки.

Выходные данные: True or False.

Пример:
unixMatch('somefile.txt', '*') == true
unixMatch('other.exe', '*') == true
unixMatch('my.exe', '*.txt') == false
unixMatch('log1.txt', 'log?.txt') == true
unixMatch('log12.txt', 'log?.txt') == false

 */
function unixMatch(filename, pattern) {
    // let temp = pattern.split("*" && "?")
    //  console.log(temp)
    //
    //  return false
    //ver 2
    var pat = pattern.replace(/\./g, '\\.').replace(/\?/g, '.').replace(/\*/g, '.*');
    console.log(pat);
    return RegExp(pat).test(filename);
}
console.log('Example:');
//console.log(unixMatch('somefile.txt', '*'));
console.log(unixMatch('somefile.txt', '*'));
console.log(unixMatch('my.exe', '*.txt'));
// These "asserts" are used for self-checking
// assert.equal(unixMatch('somefile.txt', '*'), true);
// assert.equal(unixMatch('other.exe', '*'), true);
// assert.equal(unixMatch('my.exe', '*.txt'), false);
// assert.equal(unixMatch('log1.txt', 'log?.txt'), true);
// assert.equal(unixMatch('log12.txt', 'log?.txt'), false);
// assert.equal(unixMatch('log12.txt', 'log??.txt'), true);
