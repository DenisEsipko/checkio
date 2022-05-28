import {strict as assert} from "assert";

/*
Вы должны разделить заданный массив на два массива.Если он имеет нечетное количество элементов, то в первом массиве должно быть больше элементов.Если у него нет элементов, то должны быть возвращены два пустых массива.



Ввод: список.

Вывод: список двух списков.
 */

function splitList(values: number[]): number[][] {
    // your code here

    // if(values.length % 2 ===0){
    //     let arr1 = values.slice(0,values.length/2)
    //     let arr2 = values.slice(values.length/2,values.length)
    //     // console.log(arr1)
    //     // console.log(arr2)
    //     return [arr1,arr2];
    // } else {
    //     let arr1 = values.slice(0, Math.ceil(values.length/2))
    //     let arr2 = values.slice(Math.ceil(values.length/2),values.length)
    //     // console.log(arr1)
    //     // console.log(arr2)
    //     return [arr1,arr2];
    // }

   return  values.length % 2 === 0 ? [values.slice(0,values.length/2),values.slice(values.length/2,values.length)] :
        [values.slice(0, Math.ceil(values.length/2)),values.slice(Math.ceil(values.length/2),values.length)];

}

console.log('Example:');
console.log(splitList([1, 2, 3, 4, 5]));

// These "asserts" are used for self-checking
assert.deepEqual(splitList([1, 2, 3, 4, 5, 6]), [[1, 2, 3], [4, 5, 6]]);
assert.deepEqual(splitList([1, 2, 3]), [[1, 2], [3]]);
assert.deepEqual(splitList([1, 2, 3, 4, 5]), [[1, 2, 3], [4, 5]]);
assert.deepEqual(splitList([1]), [[1], []]);
assert.deepEqual(splitList([]), [[], []]);