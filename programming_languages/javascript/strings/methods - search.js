let str = "Hello World";

// Check occurrence of substring
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World"));   // true
console.log(str.includes("o"));       // true

// Get index of first/last occurrence of substring
console.log(str.search("o"));      // first occurence, 4
console.log(str.indexOf("o"));     // first occurence, 4
console.log(str.lastIndexOf("o")); // last occurence, 6

// Replace first occurrence of substring
console.log(str.replace("Hello", "Goodbye"));  // "Goodbye World"
console.log(str.replace(/Hello/, "Goodbye"));  // "Goodbye World"
console.log(str.replace(/hello/i, "Goodbye")); // case-insensitive search, "Goodbye World"

// Replace all occurrences of substring
console.log(str.replaceAll("o", "x"));  // "Hellx Wxrld"
console.log(str.replaceAll(/o/, "x"));  // "Hellx Wxrld"
console.log(str.replaceAll(/O/i, "x")); // case-insensitive search, "Hellx Wxrld"
