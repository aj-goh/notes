// Arithmetic

let a = 5, b = 3;
let sum = a + b;  // addition, 8
let diff = a - b; // subtraction, 2
let prod = a * b; // multiplication, 15
let quot = a / b; // division, 1.6666...
let rem = a % b;  // modulus, 2
let pow = a ** b; // exponentiation, 125

++a; // pre-increment
a++; // post-increment
++b; // pre-decrement
b--; // post-decrement

// Assignment shorthand

a += 3; // 8
a -= 2; // 6
a *= 2; // 12
a /= 3; // 4
a %= 3; // 1

// Comparison

console.log(a == b);  // loose equality
console.log(a === b); // strict equality
console.log(a != b);  // loose inequality
console.log(a !== b); // strict inequality

console.log(a > b, a >= b, a < b, a <= b);

// Logical

let t = true, f = false;
console.log(t && f); // AND, false
console.log(t || f); // OR, true
console.log(!t);     // NOT, false

// Ternary

let max = (a > b) ? a : b;

// Type conversion

let num = Number("7"); // 7
let str = String(123); // "123"
let bool = Boolean(0); // false
