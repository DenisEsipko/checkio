import {strict as assert} from "assert";

/*
 В этой миссии Вам надо определить, все ли элементы массива равны.

Входные: Array.

Выходные: Bool.
 */

function allTheSame(elements: any[]): boolean {

   return new Set([...elements]).size > 1 ? false : true;
}


console.log('Example:')
console.log(allTheSame([1, 1, 1]))

// These "asserts" are used for self-checking and not for an auto-testing

assert.equal(allTheSame([1, 1, 1]), true)
assert.equal(allTheSame([1, 2, 1]), false)
assert.equal(allTheSame(['a', 'a', 'a']), true)
assert.equal(allTheSame([]), true)
assert.equal(allTheSame([1]), true)