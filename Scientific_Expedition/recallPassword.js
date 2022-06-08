"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function recallPassword(grille, password) {
    grille = grille.map(function (array) { return array.split('').map(function (x) { return x === 'X' ? 1 : 0; }); });
    password = password.map(function (array) { return array.split(''); });
    //console.log(grille ,"grille" )
    //console.log(password ,"password ")
    // находим слово по матрице
    var str = recall(grille, '');
    //console.log(str,"str1")
    // повторяем это 4 раза
    var i = 1;
    while (i < 4) {
        grille = transform(grille);
        str = recall(grille, str);
        i++;
    }
    return str;
    // вращаем кодовую матрицу
    function transform(matrix) {
        console.log(matrix, "M start");
        var x = matrix.map(function (x, i) { return x.map(function (_, _i) { return matrix[matrix.length - 1 - _i][i]; }); });
        console.log(x, "X");
        return x;
    }
    // находим слово по матрице
    function recall(matrix, str) {
        //console.log(matrix,"matrix")
        //console.log(str,"str")
        matrix.forEach(function (a, i) {
            a.forEach(function (b, j) {
                if (b)
                    str += password[i][j];
            });
        });
        return str;
    }
    var rotate90 = function (matrix) { return matrix.map(function (_, i) { return matrix.map(function (e) { return e[i]; }).reverse(); }); };
}
console.log('Example:');
console.log(recallPassword(['X...', '..X.', 'X..X', '....'], ['itdf', 'gdce', 'aton', 'qrdi']));
// These "asserts" are used for self-checking
// assert.equal(recallPassword(['X...', '..X.', 'X..X', '....'],
//   ['itdf', 'gdce', 'aton', 'qrdi']), 'icantforgetiddqd');
// assert.equal(recallPassword(['....', 'X..X', '.X..', '...X'],
//   ['xhwc', 'rsqx', 'xqzz', 'fyzr']), 'rxqrwsfzxqxzhczy');
