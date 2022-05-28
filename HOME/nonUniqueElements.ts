import {strict as assert} from 'assert';

/*
 Дан непустой массив целых чисел (X). В этой задаче вам нужно вернуть массив, состоящий только из неуникальных элементов данного массива. Для этого необходимо удалить все уникальные элементы (которые присутствуют в данном массиве только один раз). Для решения этой задачи не меняйте оригинальный порядок элементов. Пример: [1, 2, 3, 1, 3], где 1 и 3 неуникальные элементы и результат будет [1, 3, 1, 3].

non-unique-elements

Вх. данные: Список (list) целых чисел (int).

Вых. данные: Итератор (an iterable) целых чисел (int).
 */
function nonUniqueElements(data: number[]): number[] {

    let res = counter(data);

    const newArr: Array<number> = [];
    data.forEach(x => res[x] > 1 ? newArr.push(x) : "stab")
    return newArr;


    function counter(data: number[]) {
        const res: object = {}
        for (let it of data) {
            res[it] = res[it] || 0;
            res[it] += 1;
        }
        return res;
    }


    // Ver 2

}

// Ver 2

// let nonUniqueElements = (data: number[]): number[] => (
//     data.filter((x: number) => data.lastIndexOf(x) != data.indexOf(x))
// )

console.log('Example:')
console.log(nonUniqueElements([1, 2, 3, 1, 3]))

assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3]);
assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), []);
assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5]);
assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9]);