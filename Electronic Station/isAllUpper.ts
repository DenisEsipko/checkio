import {strict as assert} from "assert";

/*
Проверьте, есть ли в данной строке все символы в верхнем регистре.Если строка пуста или не имеет никакой буквы в ней - функция должна вернуть False.

Ввод: строка.

Вывод: логический.

isAllUpper('ALL UPPER') == true
isAllUpper('all lower') == false
isAllUpper('mixed UPPER and lower') == false
isAllUpper('') == false

 */

function isAllUpper(text: string): boolean {
  // your code here

  let nevText = text.replace(/\s/g, "").replace(/\d/g, "").length

  let textUpper = text.match(/[A-Z]/g)?.length

  if (nevText != textUpper || text == "") {
    return false
  } else return true;
}

console.log('Example:');
console.log(isAllUpper('DDD AA'));

// These "asserts" are used for self-checking
assert.equal(isAllUpper('ALL UPPER'), true);
assert.equal(isAllUpper('all lower'), false);
assert.equal(isAllUpper('mixed UPPER and lower'), false);
assert.equal(isAllUpper(''), false);