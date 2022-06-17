import {strict as assert} from "assert";

/*
У вас есть текст и список слов.Вам нужно проверить, появляются ли слова в списке в том же порядке, что и в данном тексте.

Случаи, которые вы должны ожидать при решении этой задачи:

    Слово из списка нет в тексте - ваша функция должна вернуть False;
    Любое слово может появиться более одного раза в тексте - использовать только первое;
    Два слова в данном списке одинаковы - ваша функция должна вернуть False;
    Условие чувствительно к корпусу, что означает, что «Привет» и «hi» - это два разных слова;
    Текст включает в себя только английские буквы и пространства.

Ввод: два аргумента.Первый - это заданный текст, второй - список слов.

Вывод: Bool.
 Example:
wordsOrder('hi world im here', ['world', 'here']) == true
wordsOrder('hi world im here', ['here', 'world']) == false
wordsOrder('hi world im here', ['world']) == true
wordsOrder('hi world im here',
 ['world', 'here', 'hi']) == false
wordsOrder('hi world im here',
 ['world', 'im', 'here']) == true
wordsOrder('hi world im here',
 ['world', 'hi', 'here']) == false
wordsOrder('hi world im here', ['world', 'world']) == false
wordsOrder('hi world im here',
 ['country', 'world']) == false
wordsOrder('hi world im here', ['wo', 'rld']) == false
wordsOrder('', ['world', 'here']) == false

 */

function wordsOrder(text: string, words: string[]): boolean {

  if (new Set(words).size != words.length) return false;
  text.split(" ").map(word => word === words[0] ? words.shift() : "");
  console.log(words)
  return !words.length;
  // your code here
}

console.log('Example:');
//console.log(wordsOrder('hi world im here world', ['world', 'world']));
console.log(wordsOrder('hi world im here', ['here', 'world']))
//console.log(wordsOrder('hi world im here', ['world']))
// console.log(wordsOrder('hi world im here',
//   ['world', 'here', 'hi']))
//console.log(wordsOrder('hi world im here', ['wo', 'rld']))

// These "asserts" are used for self-checking
// assert.equal(wordsOrder('hi world im here', ['world', 'here']), true);
//  assert.equal(wordsOrder('hi world im here', ['here', 'world']), false);
//  assert.equal(wordsOrder('hi world im here', ['world']), true);
// assert.equal(wordsOrder('hi world im here',
//   ['world', 'here', 'hi']), false);
// assert.equal(wordsOrder('hi world im here',
//   ['world', 'im', 'here']), true);
// assert.equal(wordsOrder('hi world im here',
//   ['world', 'hi', 'here']), false);
// assert.equal(wordsOrder('hi world im here', ['world', 'world']), false);
// assert.equal(wordsOrder('hi world im here',
//   ['country', 'world']), false);
// assert.equal(wordsOrder('hi world im here', ['wo', 'rld']), false);
// assert.equal(wordsOrder('', ['world', 'here']), false);
// assert.equal(wordsOrder('hi world world im here',
//   ['world', 'world']), false);