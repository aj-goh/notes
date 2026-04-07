// Declaration

let a = 1;   // variable, block-scoped, mutable (changeable)
const b = 2; // constant, block-scoped, immutable (unchangeable)
var c = 3;   // variable, function-scoped, mutable (changeable) (avoid in modern JS)

a = 4; // allowed
b = 5; // error: const cannot be reassigned
c = 6; // allowed

// Data types (primitive)

let stringType = "Hello World";
let numberType = 123;
let booleanTyoe = true;
let nullType = null;
let nanType = NaN;
let undefinedType = undefined;

// Data types (reference)

let arrayType = [];
let objectType = {};
let functionType = () => { };

// Type checking

console.log(typeof numberType);  // "number"
console.log(typeof stringType);  // "string"
console.log(typeof arrayType);   // "object" (arrays are objects)
console.log(Array.isArray(arr)); // true

// Shortcuts

let x = 1, y = 2, z = x + y; // multiple declarations in one line
[a, b] = [b, a];             // quick variable swap (destructuring swap)
