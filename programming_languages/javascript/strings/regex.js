// Create regex
let re1 = /abc/; // literal
let re2 = new RegExp("abc"); // constructor

// Test if string matches pattern
console.log(/cat/.test("concatenate")); // true

// Match pattern
console.log("abc123".match(/\d+/)); // ["123"]

// Replace pattern
console.log("Hello 123".replace(/\d+/, "456")); // "Hello 456"

// Common patterns
let digits = /\d/;         // digits
let letters = /[a-zA-Z]/;  // letters
let alnum = /[a-zA-Z0-9]/; // alphanumeric characters
let whitespace = /\s/;     // whitespace characters
let word = /\w+/;          // word characters
let nonWord = /\W/;        // non-word characters
let startA = /^A/;         // starts with A
let endZ = /Z$/;           // ends with Z

// Quantifiers
let reOpt = /ab?/;      // b optional
let rePlus = /ab+/;     // one or more b's
let reStar = /ab*/;     // zero or more b's
let reExact = /a{3}/;   // exactly 3 a's
let reRange = /a{2,5}/; // between 2 to 5 a's


// Helper functions
function extractDigits(s) {
    return s.match(/\d+/g) || []; // array of all number groups
}

function removeNonAlpha(s) {
    return s.replace(/[^a-zA-Z]/g, ""); // keep letters only
}

function splitByWhitespace(s) {
    return s.split(/\s+/);
}

// Validate simple email
function isEmail(s) {
    return /^[\w.-]+@[\w.-]+\.\w+$/.test(s);
}

// Example usage
console.log(extractDigits("a1b2c3")); // ["1","2","3"]
console.log(removeNonAlpha("h3ll0!")); // "hll"
console.log(splitByWhitespace("split  by   spaces")); // ["split","by","spaces"]
console.log(isEmail("test@example.com")); // true
