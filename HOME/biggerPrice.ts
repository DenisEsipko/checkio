import {strict as assert} from 'assert';
/*
 Дана таблица всех доступных продуктов на складе. Данные представлены в виде массива объектов (array of objects)

Ваша миссия тут - это найти ТОП самых дорогих товаров. Количество товаров, которые мы ищем, будет передано в первом аргументе, а сами данные по товарам будут переданы вторым аргументом.

Вх. данные: Число и массив объектов (Integer and array of objects). У каждого объекта 2 атрибута "name" и "price"

Вых. данные: Такой же как и второй аргумент.
 */

interface Stock {
    name: string,
    price: number,
};

function biggerPrice(limit: number, data: Stock[]): Stock[] {

    let sortArr:Stock[] = data.sort((a,b)=>b.price-a.price);

    return sortArr.slice(0,limit);
}

console.log('Example:')
console.log(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]))

assert.deepEqual(biggerPrice(2, [
    {"name": "bread", "price": 100},
    {"name": "wine", "price": 138},
    {"name": "meat", "price": 15},
    {"name": "water", "price": 1}
]), [
    {"name": "wine", "price": 138},
    {"name": "bread", "price": 100}
])
assert.deepEqual(biggerPrice(1, [
    {"name": "pen", "price": 5},
    {"name": "whiteboard", "price": 170}
]), [{"name": "whiteboard", "price": 170}])