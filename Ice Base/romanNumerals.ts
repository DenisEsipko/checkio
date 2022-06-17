import {strict as assert} from "assert";

/*
 Римские цифры пришли к нам из древней римской системы счета. Они основаны на особых буквах алфавита, которые в различных сочетаниях, путем суммирования (а иногда и разницы) описывают различные числа. Первые 10 римских чисел это:

I, II, III, IV, V, VI, VII, VIII, IX, and X.

Римская система счета имеет десятичное основание, но она непозиционная и не включает в себя 0 (ноль). Римские числа образуются путем комбинации следующих семи символов:
Символ	Значение
I	1 (unus)
V	5 (quinque)
X	10 (decem)
L	50 (quinquaginta)
C	100 (centum)
D	500 (quingenti)
M	1,000 (mille)

Узнать больше о римских цифрах вы можете в статье на Википедии.

В этой задаче, вам необходимо преобразовать данное целое число (от 1 до 3999) в римскую систему счета.

Вх. данные: Число, как целочисленное (int).

Вых. данные: Римское число, как строка (str).

Примеры:
romanNumerals(6) == 'VI'
  romanNumerals(76) == 'LXXVI'
  romanNumerals(13) == 'XIII'
  romanNumerals(44) == 'XLIV'
  romanNumerals(3999) == 'MMMCMXCIX'

 */

function romanNumerals(data: number): string {
  // your code here
  let obj = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  let str: string = ''

  for (let i in obj) {
    if (data < obj[i]) {
      continue
    }
    while (data >= obj[i]) {
      data -= obj[i]
      str += i
    }
  }
  return str;
}

console.log('Example:');
console.log(romanNumerals(1), " I");
// console.log(romanNumerals(50), 'L');
// console.log(romanNumerals(99), " XCIX");
// console.log(romanNumerals(587), 'DLXXXVII');

// These "asserts" are used for self-checking
assert.equal(romanNumerals(1), 'I');
assert.equal(romanNumerals(10), 'X');
assert.equal(romanNumerals(50), 'L');
assert.equal(romanNumerals(100), 'C');
assert.equal(romanNumerals(500), 'D');
assert.equal(romanNumerals(1000), 'M');
assert.equal(romanNumerals(3999), 'MMMCMXCIX');
assert.equal(romanNumerals(99), 'XCIX');
assert.equal(romanNumerals(88), 'LXXXVIII');
assert.equal(romanNumerals(587), 'DLXXXVII');
assert.equal(romanNumerals(2387), 'MMCCCLXXXVII');
assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII');
assert.equal(romanNumerals(76), 'LXXVI');
assert.equal(romanNumerals(6), 'VI');
assert.equal(romanNumerals(13), 'XIII');
assert.equal(romanNumerals(44), 'XLIV');