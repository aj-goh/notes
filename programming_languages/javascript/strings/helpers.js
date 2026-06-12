let str = "Hello World";

// Reverse str
let reversed = str.split("").reverse().join("");
console.log(reversed); // "dlroW olleH"

// Palindrome check    
let isPalindrome = str === reversed;
console.log(isPalindrome); // true

// Count occurrences of character
let char = "l";
let count = 0;
for (let i of str) if (i === char) count++;
console.log(count); // 3

// Remove all spaces
console.log(str.replace(/\s+/g, "")); // "HelloWorld"

// Uppercase / lowercase
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"

// Split str into array of words
let sentence = "This is a test";
let words = sentence.split(" ");  // ["This", "is", "a", "test"]

// Join array back to str
let newSentence = words.join("-"); // "This-is-a-test"

// Trim whitespace
let spaced = "   padded   ";
console.log(spaced.trim()); // "padded"

// Substr / Slice
console.log(str.slice(1, 4));  // "ell"
console.log(str.substring(1, 4)); // "ell"

// Replace characters
console.log(str.replace("e", "a"));  // "hallo"

// Replace all occurrences
console.log(str.replace(/l/g, "x")); // "hexxo"
