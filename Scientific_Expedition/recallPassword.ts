import {strict as assert} from "assert";
import {log} from "util";


function recallPassword(grille, password) {
  grille = grille.map(array => array.split('').map(x => x === 'X' ? 1 : 0));
  password = password.map(array => array.split(''));

  //console.log(grille ,"grille" )
  //console.log(password ,"password ")

  // находим слово по матрице
  let str = recall(grille, '');
  //console.log(str,"str1")

  // повторяем это 4 раза
  let i = 1
  while (i < 4) {
    grille = transform(grille)
    str = recall(grille, str)
    i++
  }
  return str

  // вращаем кодовую матрицу
  function transform(matrix) {
    console.log(matrix, "M start")
    let x  = matrix.map((x, i) => x.map((_, _i) => matrix[matrix.length - 1 - _i][i]));
    console.log(x, "X")
    return x

  }

  // находим слово по матрице
  function recall(matrix:[[]], str:string):string {
    //console.log(matrix,"matrix")
    //console.log(str,"str")
    matrix.forEach((a, i) => {
      a.forEach((b, j) => {
        if (b) str += password[i][j]
      })
    })
    return str;
  }

   const rotate90 = matrix => matrix.map((_, i) => matrix.map(e=> e[i]).reverse());
}




console.log('Example:');
console.log(recallPassword(['X...', '..X.', 'X..X', '....'],
  ['itdf', 'gdce', 'aton', 'qrdi']));

// These "asserts" are used for self-checking
// assert.equal(recallPassword(['X...', '..X.', 'X..X', '....'],
//   ['itdf', 'gdce', 'aton', 'qrdi']), 'icantforgetiddqd');
// assert.equal(recallPassword(['....', 'X..X', '.X..', '...X'],
//   ['xhwc', 'rsqx', 'xqzz', 'fyzr']), 'rxqrwsfzxqxzhczy');