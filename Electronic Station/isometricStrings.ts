import {strict as assert} from "assert";

/*
А может быть это шифр? Может быть, но это не точно.

Вам надо проверить, что 2 данные строки изометричны. Это значит что символ из одной строки может стать в соответствие символам из другой строки.

Один символ одной строки может соответствовать только одному символу другой строки. Два или более символа одной строки могут соответствовать одному символу другой строки, но не наоборот.

 Example:
isometricStrings('add', 'egg') == true
isometricStrings('foo', 'bar') == false
isometricStrings('', '') == true
isometricStrings('all', 'all') == true
isometricStrings('gogopy', 'doodle') == false

 */


function isometricStrings(line1: string, line2: string): boolean {


  let mapSimvol: object = {};
  let temp = line1.split("");
  return temp.every((value, index) => {
    if (mapSimvol[value] != undefined) {
      return mapSimvol[value] == line2[index];
    } else {
      return mapSimvol[value] = line2[index];
    }
  })

}

console.log('Example:');
console.log(isometricStrings('add', 'egg'));

// These "asserts" are used for self-checking
assert.equal(isometricStrings('add', 'egg'), true);
assert.equal(isometricStrings('foo', 'bar'), false);
assert.equal(isometricStrings('', ''), true);
assert.equal(isometricStrings('all', 'all'), true);
assert.equal(isometricStrings('gogopy', 'doodle'), false);
