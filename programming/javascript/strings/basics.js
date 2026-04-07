// Declaration
let str1 = "Hello";
let str2 = 'World';
let str3 = `Template ${str1}`;  // Template literal with interpolation

// Multiline string
let multiline = `Line 1
Line 2
Line 3`;
console.log(multiline);

// Accessing characters
console.log(str1[0]); // "H"
console.log(str1.charAt(1)); // "e"

// String length
console.log(str1.length); // 5

// Concatenation
let combined = str1 + " " + str2;  // "Hello World"
let combined2 = `${str1} ${str2}`; // Template literal

// Iterating over string
for (let char of str1) {
    console.log(char);
}
