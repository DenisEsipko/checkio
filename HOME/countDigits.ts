import {strict as assert} from 'assert';

/*
Вам нужно подсчитать количество цифр в данной строке.

 Input: A Str.
 Output: An Int.
 */

function countDigits(text: string): number {

    let arrNum: Array<String> = text.match(/\d/g);
    return arrNum === null ? 0 : arrNum.length;
}

console.log('Example:');
console.log(countDigits('hig'));

// These "asserts" are used for self-checking
assert.equal(countDigits('hi'), 0);
assert.equal(countDigits('who is 1st here'), 1);
assert.equal(countDigits('my numbers is 2'), 1);
assert.equal(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'), 8);
assert.equal(countDigits('5 plus 6 is'), 2);
assert.equal(countDigits(''), 0);