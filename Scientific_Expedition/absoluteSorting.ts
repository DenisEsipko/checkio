import {strict as assert} from "assert";
/*

Давайте посмотрим на сортировку. Дан массив с особыми правилами.
Массив содержит различные числа. Вам необходимо отсортировать их, но отсортировать на основе абсолютных значений в возрастающем порядке. Для примера, последовательность (-20, -5, 10, 15) будет отсортирована следующим образом (-5, 10, 15, -20). Ваша функция должна возвращать список (list) или кортеж (tuple).
Входные данные: Массив чисел как кортеж (tuple).
Выходные данные: Список (list) или кортеж (tuple) (но не генератор) отсортированный по абсолютным значениям чисел.

Дополнение: Результат вашей функции вы увидите как список (list) в панели выводов результатов проверки.

Примеры:
absoluteSorting([-20, -5, 10, 15]) == [-5, 10, 15, -20]
absoluteSorting([1, 2, 3, 0]) == [0, 1, 2, 3]
absoluteSorting([-1, -2, -3, 0]) == [0, -1, -2, -3]

 */
function absoluteSorting(values: number[]): number[] {
    // your code here
    return values.sort((a,b)=>Math.abs(a)-Math.abs(b));
}

console.log('Example:');
console.log(absoluteSorting([-20, -5, 10, 15]));

// These "asserts" are used for self-checking
assert.deepEqual(absoluteSorting([-20, -5, 10, 15]), [-5, 10, 15, -20]);
assert.deepEqual(absoluteSorting([1, 2, 3, 0]), [0, 1, 2, 3]);
assert.deepEqual(absoluteSorting([-1, -2, -3, 0]), [0, -1, -2, -3]);