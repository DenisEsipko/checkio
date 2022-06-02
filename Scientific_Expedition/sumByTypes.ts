import {strict as assert} from "assert";

/*
У вас есть массив.Каждое значение из этого массива может быть либо строкой, либо целым числом.Ваша задача - вернуть два значения.Первый - это объединение всех строк из данного массива.Второй - это сумма всех целых чисел из данного массива.

Ввод: список строк и INT

Вывод: массив


sumByTypes([]) == ['', 0]
sumByTypes([1, 2, 3]) == ['', 6]
sumByTypes(['1', 2, 3]) == ['1', 5]
sumByTypes(['1', '2', 3]) == ['12', 3]
sumByTypes(['1', '2', '3']) == ['123', 0]
sumByTypes(['size', 12, 'in', 45, 0]) == ['sizein', 57]

 */

function sumByTypes(values: Array<number | string>): [string, number] {
    // your code here
    let str: string = values.filter(f => typeof f === "string").reduce((acum: string, curent: string) => acum + curent, "") as string;
    let num: number = values.filter(f => typeof f === "number").reduce((acum: number, curent: number) => acum + curent, 0) as number;
    return [str, num];
}

console.log('Example:');
//console.log(sumByTypes([]));
//console.log(sumByTypes(['1', 2, 3])); //['1', 5]

// These "asserts" are used for self-checking
assert.deepEqual(sumByTypes([]), ['', 0]);
assert.deepEqual(sumByTypes([1, 2, 3]), ['', 6]);
assert.deepEqual(sumByTypes(['1', 2, 3]), ['1', 5]);
assert.deepEqual(sumByTypes(['1', '2', 3]), ['12', 3]);
assert.deepEqual(sumByTypes(['1', '2', '3']), ['123', 0]);
assert.deepEqual(sumByTypes(['size', 12, 'in', 45, 0]), ['sizein', 57]);