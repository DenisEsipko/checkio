import {strict as assert} from "assert";

/*
 Это вторая миссия серии с лампочками. Я буду стараться немного усложнять каждую последующую задачу.

Ты уже научился считать продолжительность горения лампочки, или как долго помещение было освещено. Теперь добавим еще один параметр - время начала подсчета.

Это значит, что лампочка продолжает включатся и выключатся, как и раньше. Но теперь, как результат работы функции, я хочу не просто знать, как долго было светло в комнате, а как долго комната была освещена, начиная с определенного момента.

Добавляется еще один аргумент –

start_watching

, и если он не передан, считаем, как и в предыдущей версии программы, за весь период.

example

Input: Два аргумента и только первый обязательный. Первый – an array of Date objects и второй – a Date object.

Output: Количество секунд как integer.

Example:
sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 0, 10),
],
new Date(2015, 1, 12, 10, 0, 5)) == 5

sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 0, 10),
], new Date(2015, 1, 12, 10, 0, 0)) == 10

sumLight([
    new Date(2015, 1, 12, 10, 0, 0),
    new Date(2015, 1, 12, 10, 10, 10),
    new Date(2015, 1, 12, 11, 0, 0),
    new Date(2015, 1, 12, 11, 10, 10),
], new Date(2015, 1, 12, 11, 0, 0)) == 610

 */

function sumLight(els: Date[], startWatching?: Date): number {
  let count: number = 0;
  let temp;
  if (startWatching == undefined) {
    console.log("без аргумента")
    while (els.length > 0) {
      temp = els.splice(0, 2);
      count += temp[1].getTime() - temp[0].getTime()
    }
    return (count / 1000);
  } else {
    console.log("с  аргументом")
    while (els.length > 0) {
      temp = els.splice(0, 2);

      if ((startWatching.getTime() >= temp[0].getTime()) && (startWatching.getTime() <= temp[1].getTime())) {

        count +=  temp[1].getTime() - startWatching.getTime()
      }
      else {
        if(temp[1].getTime() >= startWatching.getTime()) {
          count += temp[1].getTime() - temp[0].getTime()
        }
      }
    }
    return (count / 1000);
  }
}
 // Ver 2
/*
var sumLight = (e,s) => e.reduce((a,c,i) => a+(c<s?s:c)*(i%2?1:-1), 0)/1000;
 */

console.log("Example:");
// console.log(
//   sumLight(
//     [new Date(2015, 1, 12, 10, 0, 0), new Date(2015, 1, 12, 10, 0, 10)],
//     new Date(2015, 1, 12, 10, 0, 5)
//   )
// );

console.log(
  sumLight(
    [
      new Date(2015, 1, 12, 10, 0, 0),
      new Date(2015, 1, 12, 10, 10, 10),
      new Date(2015, 1, 12, 11, 0, 0),
      new Date(2015, 1, 12, 11, 10, 10),
    ],
    new Date(2015, 1, 12, 11, 0, 0)
  ),
  610
);

console.log(
  sumLight(
    [new Date(2015, 1, 12, 10, 0, 0),
         new Date(2015, 1, 12, 10, 0, 10)],
    new Date(2015, 1, 12, 10, 0, 0)
  ),
  10
);
//
//
assert.equal(
  sumLight(
    [new Date(2015, 1, 12, 10, 0, 0), new Date(2015, 1, 12, 10, 0, 10)],
    new Date(2015, 1, 12, 10, 0, 5)
  ),
  5
);

assert.equal(
  sumLight(
    [new Date(2015, 1, 12, 10, 0, 0), new Date(2015, 1, 12, 10, 0, 10)],
    new Date(2015, 1, 12, 10, 0, 0)
  ),
  10
);

assert.equal(
  sumLight(
    [
      new Date(2015, 1, 12, 10, 0, 0),
      new Date(2015, 1, 12, 10, 10, 10),
      new Date(2015, 1, 12, 11, 0, 0),
      new Date(2015, 1, 12, 11, 10, 10),
    ],
    new Date(2015, 1, 12, 11, 0, 0)
  ),
  610
);

assert.equal(
  sumLight(
    [
      new Date(2015, 1, 12, 10, 0, 0),
      new Date(2015, 1, 12, 10, 10, 10),
      new Date(2015, 1, 12, 11, 0, 0),
      new Date(2015, 1, 12, 11, 10, 10),
    ],
    new Date(2015, 1, 12, 11, 0, 10)
  ),
  600
);
//
assert.equal(
  sumLight(
    [
      new Date(2015, 1, 12, 10, 0, 0),
      new Date(2015, 1, 12, 10, 10, 10),
      new Date(2015, 1, 12, 11, 0, 0),
      new Date(2015, 1, 12, 11, 10, 10),
    ],
    new Date(2015, 1, 12, 10, 10, 0)
  ),
  620
);
//
assert.equal(
  sumLight(
    [
      new Date(2015, 1, 12, 10, 0, 0),
      new Date(2015, 1, 12, 10, 10, 10),
      new Date(2015, 1, 12, 11, 0, 0),
      new Date(2015, 1, 12, 11, 10, 10),
      new Date(2015, 1, 12, 11, 10, 10),
      new Date(2015, 1, 12, 12, 10, 10),
    ],
    new Date(2015, 1, 12, 12, 10, 10)
  ),
  0
);

assert.equal(
  sumLight(
    [
      new Date(2015, 1, 12, 10, 0, 0),
      new Date(2015, 1, 12, 10, 10, 10),
      new Date(2015, 1, 12, 11, 0, 0),
      new Date(2015, 1, 12, 11, 10, 10),
      new Date(2015, 1, 12, 11, 10, 10),
      new Date(2015, 1, 12, 12, 10, 10),
    ],
    new Date(2015, 1, 12, 12, 9, 10)
  ),
  60
);