import {strict as assert} from "assert";

/*
 Это первая миссия из серии. Вам необходимо найти длину самой длинной подстроки, которая состоит из одинаковых букв. Например, строка "aaabbcaaaa" состоит из четырех подстрок с одинаковыми буквами "aaa", "bb","c" и "aaaa". Последняя подстрока является самой длинной, что и делает ее ответом.

Входные данные: Строка.

Выходные данные: Целое число.

example

Пример:
longRepeat('sdsffffse') == 4
longRepeat('ddvvrwwwrggg') == 3

 */

function longRepeat(line: string): number {
  // your code here
  let count = 1;
  let max = 1;
  // if (line === "") return 0;
  //
  // for (let i = 0; i < line.length; i++) {
  //   if (line[i] === line[i + 1]) {
  //     count = count + 1;
  //     if (count > max) {
  //       max = count
  //     }
  //   } else count = 1
  // }
  // return max
  if (line === "") return 0;
  Array.from(line).forEach(((value, index) => {
    if (value === line[index + 1]) {
      count = count + 1;
      if (count > max) {
        max = count
      }
    } else count = 1
  }))
  return max;

}

console.log('Example:');
console.log(longRepeat('sdssse'));

// These "asserts" are used for self-checking
// assert.equal(longRepeat('sdsffffse'), 4);
// assert.equal(longRepeat('ddvvrwwwrggg'), 3);
