"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
;
function biggerPrice(limit, data) {
    var sortArr = data.sort(function (a, b) { return b.price - a.price; });
    return sortArr.slice(0, limit);
}
console.log('Example:');
console.log(biggerPrice(2, [
    { "name": "bread", "price": 100 },
    { "name": "wine", "price": 138 },
    { "name": "meat", "price": 15 },
    { "name": "water", "price": 1 }
]));
assert_1.strict.deepEqual(biggerPrice(2, [
    { "name": "bread", "price": 100 },
    { "name": "wine", "price": 138 },
    { "name": "meat", "price": 15 },
    { "name": "water", "price": 1 }
]), [
    { "name": "wine", "price": 138 },
    { "name": "bread", "price": 100 }
]);
assert_1.strict.deepEqual(biggerPrice(1, [
    { "name": "pen", "price": 5 },
    { "name": "whiteboard", "price": 170 }
]), [{ "name": "whiteboard", "price": 170 }]);
