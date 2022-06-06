import {strict as assert} from "assert";

/*
 Ваша задача - написать функцию, которая преобразовывает текст (название другой функции) из формата CamelCase, принятого в JavaScript (MyFunctionName) в формат, принятый в Python (my_function_name), где все буквы - маленькие, а слова соединены знаком нижнего подчеркивания "_".

Входные данные: Название функции как строка в CamelCase

Output: То же самое название, но в under_score

Примеры:
fromCamelCase('MyFunctionName') == 'my_function_name'
fromCamelCase('IPhone') == 'i_phone'

 */
function fromCamelCase(name: string): string {
  // your code here

  let x = Array.from(name).reduce((acum, curent) => {
    if (curent.toUpperCase() === curent) {
      acum += "_";
      acum += curent.toLowerCase();
    } else acum += curent;
    return acum;
  }, "")

  return x.slice(1)
}

//Ver 2
/*
var fromCamelCase=(t)=>t.replace(/[A-Z]/g,c=>"_"+c.toLowerCase()).substr(1);
 */
console.log('Example:');
console.log(fromCamelCase('MyFunctionName'));

//These "asserts" are used for self-checking
assert.equal(fromCamelCase('MyFunctionName'), 'my_function_name');
assert.equal(fromCamelCase('IPhone'), 'i_phone');