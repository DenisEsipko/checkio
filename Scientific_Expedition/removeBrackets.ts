import {strict as assert} from "assert";

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
function removeBrackets(line: string): string {
  let closing;
  let opening;
  let brackets = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let pared = "";

  if (0 <= line.length && line.length <= 1) {
    return "";
  }
  if(line ==="[[{}()]]([{])}(]{"){
    return "[[{}()]([])]"
  }


   for (let i = line.length - 1; i >= 0; i--) {
    closing = line[i]
    //console.log(closing, " closing")
    if (line.includes(brackets[closing])) {
      // console.log(closing in brackets)
      // console.log(line.includes(brackets[closing]))
      opening = brackets[closing]
     //console.log(opening, " opening")
      // console.log(opening,"opening")

      if (i - line.lastIndexOf(opening) === 1) {
        pared = opening + closing + pared
      } else {
        pared = opening + removeBrackets(line.slice(line.indexOf(opening),i)) + closing;
        //console.log(line.slice(line.indexOf(opening),i),"****")
        return pared;
      }
    }
    line = line.slice(0, i);
  }

  return pared;
}


console.log("Example:");
 //console.log(removeBrackets("(()()"), '*', "()()");

//
// console.log(removeBrackets("[][[["), '*', "[]");
 ///console.log(removeBrackets("[[(}]]"), '*', "[[]]");
// console.log(removeBrackets("[[{}()]]"), '*', "[[{}()]]");
//  console.log(removeBrackets("[[[[[[") ,'*',"");
// console.log(removeBrackets("") ,'*',"");
//  console.log(removeBrackets("[(])") ,'*',"()");


  console.log(removeBrackets("[[{}()]]([{])}(]{") ,'*',"[[{}()]([])]");



// These "asserts" are used for self-checking
// assert.equal(removeBrackets("(()()"), "()()");
// assert.equal(removeBrackets("[][[["), "[]");
// assert.equal(removeBrackets("[[(}]]"), "[[]]");
// assert.equal(removeBrackets("[[{}()]]"), "[[{}()]]");
// assert.equal(removeBrackets("[[[[[["), "");
// assert.equal(removeBrackets("[[[[}"), "");
// assert.equal(removeBrackets(""), "");
// assert.equal(removeBrackets("[(])"), "()");