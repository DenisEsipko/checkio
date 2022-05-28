import { strict as assert } from 'assert';

/*
 Отсортируйте данный Array таким образом, чтобы его элементы оказались в порядке убывания частоты их появления, то есть по количеству раз, которое они появляются в элементах. Если два элемента имеют одинаковую частоту, они должны оказаться в том же порядке, в котором стояли изначально в Array.

Входные данные: Array

Выходные данные: Array
 */
function frequencySort(items: any[]): any[] {

    function count(list: Array<string | number>, item: string | number) {
        return list.filter(x => x == item).length;
    }

    return items.sort((a, b) => items.indexOf(a) - items.indexOf(b)).sort((a, b) => count(items, b) - count(items, a));


}

console.log('Example:');
console.log(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]));


// These "asserts" are used for self-checking and not for an auto-testing
 assert.deepEqual(frequencySort([4, 6, 2, 2, 6, 4, 4, 4]), [4, 4, 4, 4, 6, 6, 2, 2]);
assert.deepEqual(frequencySort(['bob', 'bob', 'carl', 'alex', 'bob']), ['bob', 'bob', 'bob', 'carl', 'alex']);
assert.deepEqual(frequencySort([17, 99, 42]), [17, 99, 42]);
assert.deepEqual(frequencySort([]), []);
assert.deepEqual(frequencySort([1]), [1]);