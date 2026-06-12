let str = "Hello World";

// String length
console.log(str.length); // 11

// Uppercase / lowercase
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"

// Pad string with specified characters
console.log(str.padStart(15, "x")); // "xxxxHello World"
console.log(str.padEnd(15, "x"));   // "Hello Worldxxxx"
console.log(str.repeat(3));         // "Hello WorldHello WorldHello World"

// Split string at specified characters
console.log(str.split(" ")); // ["Hello", "World"]
console.log(str.split(""));  // ["H", "e", ...]
console.log(str.split());    // ["Hello World"]

// Trim whitespaces
let messy = "   Hello   ";
console.log(messy.trim());      // "Hello"
console.log(messy.trimStart()); // "Hello   "
console.log(messy.trimEnd());   // "   Hello"
