// Logical Operator AND (&&)

/* 

Evaluates operands and return true only if all are true

true && true // true
true && false // false
false && true // false
false && false // false 

*/ 

let x = 5;
let y = 10;

console.log(x > 0 && y > 0);
console.log(x > 0 && y < 0);
console.log(x < 0 && y > 0);
console.log(x < 0 && y < 0);