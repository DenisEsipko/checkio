import {strict as assert} from 'assert';

/*
 Даны 2 строки. Необходимо найти индекс второго вхождения второй строки в первую.

Разберем самый первый пример, когда необходимо найти второе вхождение "s" в слове "sims". Если бы нам надо было найти ее первое вхождение, то тут все просто: с помощью функции indexOf мы можем узнать, что "s" – это самый первый символ в слове "sims", а значит индекс первого вхождения равен 0. Но нам необходимо найти вторую "s", а она 4-ая по счету. Значит индекс второго вхождения (и ответ на вопрос) равен 3.

Input: Две строки (String).

Output: Int or undefined
 */

function secondIndex(text: string, symbol: string): number | undefined {
    //Var 1

    // let textArr = Array.from(text);
    // let fist = textArr.indexOf(symbol)
    // let second: number = textArr.indexOf(symbol, fist + 1);
    //
    // if (second === -1) return undefined;
    // return second;

    //Var 2
    let cont = 0;
    let resault = undefined;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            cont = cont + 1;
            if (cont === 2) {
                resault = i;
            }
        }
    }
    return resault;

}


console.log('Example')
console.log(secondIndex("find the river", "e"))
console.log(secondIndex("sims", "s"))

// These "asserts" are used for self-checking and not for an auto-testing
assert.equal(secondIndex("sims", "s"), 3)
assert.equal(secondIndex("find the river", "e"), 12)
 assert.equal(secondIndex("hi", " "), undefined)
 assert.equal(secondIndex("hi mayor", " "), undefined)
assert.equal(secondIndex("hi mr Mayor", " "), 5)