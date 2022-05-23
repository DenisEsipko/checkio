"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
function threeWords(text) {
    var cont = 0;
    text.split(" ").forEach(function (x) {
        new RegExp('[A-Z,a-z]').test(x) ? cont += 1 : cont = 0;
        if (cont == 3)
            return true;
    });
    return false;
}
console.log('Example:');
//console.log(threeWords("Hello 55 World hello fff"))
console.log(threeWords("Hello World hello"));
assert_1.strict.equal(threeWords("Hello World hello"), true);
assert_1.strict.equal(threeWords("He is 123 man"), false);
assert_1.strict.equal(threeWords("1 2 3 4"), false);
assert_1.strict.equal(threeWords("bla bla bla bla"), true);
assert_1.strict.equal(threeWords("Hi"), false);
