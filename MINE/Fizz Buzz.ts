import {strict as assert} from "assert";

/*
"Fizz buzz" это игра со словами, с помощью которой мы будем учить наших роботов делению. Давайте обучим компьютер.

  Вы должны написать функцию, которая принимает положительное целое число и возвращает:
  "Fizz Buzz", если число делится на 3 и 5;
"Fizz", если число делится на 3;
"Buzz", если число делится на 5;
Число, как строку для остальных случаев.

  Входные данные: Число, как целочисленное (int).

  Выходные данные: Ответ, как строка (str).

  Примеры:
fizzBuzz(15) == "Fizz Buzz"
fizzBuzz(6) == "Fizz"
fizzBuzz(5) == "Buzz"
fizzBuzz(7) == "7"
*/

function fizzBuzz(a: number): string {
  // your code here
  if (a % 3 == 0 && a % 5 == 0){
    return "Fizz Buzz"
  }
  if (a % 3 == 0 ){
    return "Fizz"
  }
  if (a % 5 == 0 ){
    return "Buzz"
  }
    return ""+a;

  //war 2
  /*
  return a % 15 == 0 ? "Fizz Buzz" : a % 5 == 0 ? "Buzz" : a % 3 == 0 ? "Fizz" : ''+a;
   */
}

console.log('Example:');
console.log(fizzBuzz(7));

// These "asserts" are used for self-checking
assert.equal(fizzBuzz(15), 'Fizz Buzz');
assert.equal(fizzBuzz(6), 'Fizz');
assert.equal(fizzBuzz(10), 'Buzz');
assert.equal(fizzBuzz(7), '7');
