"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
/*
 В математике и математической логике, Булева алгебра это подраздел алгебры, в котором значения переменных истинны или ложны, и обычно обозначенны 0 или 1 соответственно. В отличии от простой алгебры, где значение переменных — это числа, и основные операции это сложение и умножение, основные операции Булевой алегбры это конъюнкция — ∧, дизъюнкция — ∨, и отрицание — ¬.

В этой миссии вам нужно реализовать несколько булевых операций:
• конъюнкция ("conjunction") обозначенная x ∧ y, удовлетворяющая условиям x ∧ y = 1 если x = y = 1 и x ∧ y = 0 иначе.
• дизъюнкция ("disjunction") обозначенная x ∨ y, удовлетворяющая условиям x ∨ y = 0 если x = y = 0 и x ∨ y = 1 иначе.
• импликация ("implication") (прямая импликация) обозначенная x→y и описанная как ¬ x ∨ y. Если x это истина, тогда значение x → y берётся такое, как y. Но если x — ложь, тогда результат будет истина без учёта значения y.
• исключение ("exclusive") (исключающее ИЛИ) обозначенное x ⊕ y и описанное как (x ∨ y)∧ ¬ (x ∧ y). Результат истина если x и y различны, и ложь в противном случае. В терминах арифметики, это сложение по модулю 2, где 1 + 1 = 0.
• эквивалентность ("equivalence") обозначенная x ≡ y и описанная как ¬ (x ⊕ y). Это истина, когда x и y имеют одинаковые значения.

Здесь вы можете увидеть таблицу истинности для данных операций:

 x | y | x∧y | x∨y | x→y | x⊕y | x≡y |
--------------------------------------
 0 | 0 |  0  |  0  |  1  |  0  |  1  |
 1 | 0 |  0  |  1  |  0  |  1  |  0  |
 0 | 1 |  0  |  1  |  1  |  1  |  0  |
 1 | 1 |  1  |  1  |  1  |  0  |  1  |
--------------------------------------

Даны два булевых значения x и y как 1 или 0, и дано имя операции, как описано ранее. Вы должны вычислить значение и вернуть его как 1 или 0.

Входные значения: Три аргумента. X и Y как 0 или 1. Имя операции, как строка.

Выходное значение: Результат как 1 или 0.

Пример:
boolean(1, 0, "conjunction") == 0
boolean(0, 1, "exclusive") == 1
1
2

Как это используется: Здесь вы научитесь работать с булевыми значениями и операциями. По сути, цифры выступают здесь в роли булевых величин.
 */
function boolean(x, y, action) {
    // your code here
    if (action === "conjunction") {
        if (x === 1 && y === 1)
            return 1;
        else
            return 0;
    }
    if (action === "disjunction") {
        if (x == 0 && y == 0)
            return 0;
        else
            return 1;
    }
    if (action === "implication") {
        if (x == 1 && y == 0)
            return 0;
        else
            return 1;
    }
    if (action === "exclusive") {
        if ((x == 1 && y == 1) || (x == 0 && y == 0))
            return 0;
        else
            return 1;
    }
    if (action === "equivalence") {
        if ((x == 1 && y == 1) || (x == 0 && y == 0))
            return 1;
        else
            return 0;
    }
}
console.log('Example:');
console.log(boolean(0, 0, 'conjunction'));
// These "asserts" are used for self-checking
assert_1.strict.equal(boolean(0, 0, 'conjunction'), 0);
assert_1.strict.equal(boolean(0, 1, 'conjunction'), 0);
assert_1.strict.equal(boolean(1, 0, 'conjunction'), 0);
assert_1.strict.equal(boolean(1, 1, 'conjunction'), 1);
assert_1.strict.equal(boolean(0, 0, 'disjunction'), 0);
assert_1.strict.equal(boolean(0, 1, 'disjunction'), 1);
assert_1.strict.equal(boolean(1, 0, 'disjunction'), 1);
assert_1.strict.equal(boolean(1, 1, 'disjunction'), 1);
