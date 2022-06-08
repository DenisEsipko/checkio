"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 Перед решением этой миссии можете попробовать решить миссию "Brackets" .

Ваша задача восстановить баланс открытых и закрытых скобок методом удаления ненужных, при этом использовать нужно минимальное количеством удалений.

В переданной строке могут использоваться только 3 типа скобок (), [] и {}.

Круглую скобку может закрывать только круглая скобка. Т.е. в этом выражении "(}" - баланса скобок нет. В пустой строке, т.е. в строке не содержащей ни одной скобки - баланс скобок есть, но при этом удаление всех скобок не является оптимальным решением.

Если правильных ответа больше одного, то выбран должен быть тот, у которого первый убираемый символ находится ближе к началу. Например для варианта "[(])" правильным ответом будет "()", т.к. убираемые квадратные скобки находятся ближе к началу строки

Input: Строка, состоящая из символов (){}[]

Output: Строка, состоящая из символов (){}[]

Example:
removeBrackets('(()()') == '()()'
removeBrackets('[][[[') == '[]'
removeBrackets('[[(}]]') == '[[]]'
removeBrackets('[[{}()]]') == '[[{}()]]'
removeBrackets('[[[[[[') == ''

 */
// do wie have valid brackets in w?
var valid = function (w, _) {
    if (_ === void 0) { _ = ''; }
    return w == '' || (w != (_ = w.replace(/\(\)|\[\]|\{\}/g, '')) && valid(_));
};
// caching results for better performance
var memo = {};
// do the thing caching subresults in for better performance
var removeBrackets = function (w) { return memo[w] = (memo[w] || valid(w))
    ? memo[w] || w
    : __spreadArray([], w, true).reduce(function (a, _, i) {
        return (_ = removeBrackets(w.substr(0, i) + w.substr(+i + 1))).length > a.length ? _ : a;
    }, ''); };
console.log("Example:");
console.log(removeBrackets("(()()"), '*', "()()");
//
// console.log(removeBrackets("[][[["), '*', "[]");
///console.log(removeBrackets("[[(}]]"), '*', "[[]]");
// console.log(removeBrackets("[[{}()]]"), '*', "[[{}()]]");
//  console.log(removeBrackets("[[[[[[") ,'*',"");
// console.log(removeBrackets("") ,'*',"");
//  console.log(removeBrackets("[(])") ,'*',"()");
//  console.log(removeBrackets("[[{}()]]([{])}(]{") ,'*',"[[{}()]([])]");
// These "asserts" are used for self-checking
// assert.equal(removeBrackets("(()()"), "()()");
// assert.equal(removeBrackets("[][[["), "[]");
// assert.equal(removeBrackets("[[(}]]"), "[[]]");
// assert.equal(removeBrackets("[[{}()]]"), "[[{}()]]");
// assert.equal(removeBrackets("[[[[[["), "");
// assert.equal(removeBrackets("[[[[}"), "");
// assert.equal(removeBrackets(""), "");
// assert.equal(removeBrackets("[(])"), "()");
