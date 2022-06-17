import {strict as assert} from "assert";

/*
Ваша задача сейчас - найти все цитаты в тексте. Ну, и как это уже принято, сделать все как можно быстрее :)

Вам дана строка, которая состоит из символов и парного количества кавычек. Необходимо вернуть массив (Iterable) из текстов внутри кавычек. Необходимы цитаты только с использованием двойных кавычек ("). Одинарные ковычки (') не подходят.

Input: Строка.

Output: Массив (Iterable).

Example:
findQuotes('"Greetings"') == ['Greetings']
findQuotes('Hi') == []
findQuotes('good morning mister "superman"') == ['superman']
findQuotes('"this" doesn\'t make any "sense"') == ['this', 'sense']

 */


function findQuotes(text: string): string[] {

  return text.split('"').filter((d, i) => i % 2);
}

console.log('Example:');
 console.log(findQuotes('"Greetings"'));
// console.log(findQuotes('good morning mister "superman"'));
// console.log(findQuotes('Hi'));
// console.log(findQuotes('"Lorem Ipsum" is simply dummy text ' +
//   'of the printing and typesetting ' +
//   'industry. Lorem Ipsum has been the ' +
//   '"industry\'s standard dummy text ' +
//   'ever since the 1500s", when an ' +
//   'unknown printer took a galley of ' +
//   'type and scrambled it to make a type ' +
//   'specimen book. It has survived not ' +
//   'only five centuries, but also the ' +
//   'leap into electronic typesetting, ' +
//   'remaining essentially unchanged. "It ' +
//   'was popularised in the 1960s" with ' +
//   'the release of Letraset sheets ' +
//   'containing Lorem Ipsum passages, and ' +
//   'more recently with desktop ' +
//   'publishing software like Aldus ' +
//   'PageMaker including versions of ' +
//   'Lorem Ipsum.'), ['Lorem Ipsum',
//   "industry's standard dummy text ever " +
//   'since the 1500s',
//   'It was popularised in the 1960s']);

// These "asserts" are used for self-checking
assert.deepEqual(findQuotes('"Greetings"'), ['Greetings']);
assert.deepEqual(findQuotes('Hi'), []);
assert.deepEqual(findQuotes('good morning mister "superman"'), ['superman']);
assert.deepEqual(findQuotes('"this" doesn\'t make any "sense"'), ['this', 'sense']);
assert.deepEqual(findQuotes('"Lorem Ipsum" is simply dummy text ' +
  'of the printing and typesetting ' +
  'industry. Lorem Ipsum has been the ' +
  '"industry\'s standard dummy text ' +
  'ever since the 1500s", when an ' +
  'unknown printer took a galley of ' +
  'type and scrambled it to make a type ' +
  'specimen book. It has survived not ' +
  'only five centuries, but also the ' +
  'leap into electronic typesetting, ' +
  'remaining essentially unchanged. "It ' +
  'was popularised in the 1960s" with ' +
  'the release of Letraset sheets ' +
  'containing Lorem Ipsum passages, and ' +
  'more recently with desktop ' +
  'publishing software like Aldus ' +
  'PageMaker including versions of ' +
  'Lorem Ipsum.'), ['Lorem Ipsum',
  "industry's standard dummy text ever " +
  'since the 1500s',
  'It was popularised in the 1960s']);
assert.deepEqual(findQuotes('count empty quotes ""'), ['']);