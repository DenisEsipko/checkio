"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Вам дают список файлов.Вам нужно отсортировать этот список по расширению файла.Файлы с тем же расширением должны быть отсортированы по имени.

Некоторые возможные случаи:

    Имя файла не может быть пустой строкой;
    Файлы без расширения должны идти перед файлами с одним;
    Имя файла ".config" имеет пустое расширение и имя ".config";
    FileName "config."имеет пустое расширение и имя "config.";
    FileName "table.imp.xls" имеет расширение "xls" и имя "Table.imp";
    FileName ".Imp.xls" имеет расширение "XLS" и имя ". IMP".

Ввод: список имен файлов.

Вывод: список имен файлов.
 Example:
sortByExt(['1.cad', '1.bat', '1.aa']) == ['1.aa', '1.bat', '1.cad']
sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']) == ['1.aa', '1.bat', '2.bat', '1.cad']
sortByExt(['1.cad', '1.bat', '1.aa', '.bat']) == ['.bat', '1.aa', '1.bat', '1.cad']
sortByExt(['1.cad', '1.bat', '.aa', '.bat']) == ['.aa', '.bat', '1.bat', '1.cad']
sortByExt(['1.cad', '1.', '1.aa']) == ['1.', '1.aa', '1.cad']
sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']) == ['1.aa', '1.bat', '1.cad', '1.aa.doc']

 */
function sortByExt(files) {
    var arr = [];
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var x = files_1[_i];
        var a = x.split(/[\.]/g).filter(function (i) { return i.length > 0; });
        var b = '';
        if (a.length >= 2 && !x.endsWith('.'))
            b = a[a.length - 1];
        arr.push([b, x.replace(b, '')]);
    }
    return arr.sort().map(function (x) { return x[1].concat(x[0]); });
}
console.log('Example:');
console.log(sortByExt(['2.cad', '1.bat', '1.aa']));
//console.log(sortByExt(['2.cad', '1.bat', '1.aa', '2.bat']));
// These "asserts" are used for self-checking
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa']), ['1.aa', '1.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '2.bat']), ['1.aa', '1.bat', '2.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.bat']), ['.bat', '1.aa', '1.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '.aa', '.bat']), ['.aa', '.bat', '1.bat', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.', '1.aa']), ['1.', '1.aa', '1.cad']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '1.aa.doc']), ['1.aa', '1.bat', '1.cad', '1.aa.doc']);
// assert.deepEqual(sortByExt(['1.cad', '1.bat', '1.aa', '.aa.doc']), ['1.aa', '1.bat', '1.cad', '.aa.doc']);
