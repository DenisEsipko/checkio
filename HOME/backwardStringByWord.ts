import {strict as assert} from 'assert';

/*
В данной строке вы должны изменить каждое слово, реверс слова.
 */
function backwardStringByWord(text: string): string {

    let temp:String[] = text.split(" ");
    let reverse: Array<String> = temp.map(x => Array.from(x).reverse().join(""));
    let str :string =reverse.toString();
    return str.replace(/[,]/g, " ");

    //Ver 2
    /*
    return  text.replace(/\w+/g, w => [...w].reverse().join(''));
    */

}

console.log('Example:');
//console.log(backwardStringByWord(''));
console.log(backwardStringByWord('hello     world'));

// These "asserts" are used for self-checking
assert.equal(backwardStringByWord(''), '');
assert.equal(backwardStringByWord('world'), 'dlrow');
assert.equal(backwardStringByWord('hello world'), 'olleh dlrow');
assert.equal(backwardStringByWord('hello   world'), 'olleh   dlrow');
assert.equal(backwardStringByWord('welcome to a game'), 'emoclew ot a emag');