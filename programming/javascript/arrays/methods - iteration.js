let arr = [1, 2, 2, 3];

// Calls a function for each array element
arr.forEach(n => console.log(n)); // 1 2 2 3

// Returns true if every element pass a test
console.log(arr.every(n => n % 2 == 0)); // false

// Returns true if at least 1 element passes a test
console.log(arr.some(n => n % 2 == 0)); // true

// Performs a function on each element (new array)
const double = arr.map(n => n * 2);
console.log(double); // [2, 4, 4, 6]

// Filters elements that pass a test to produce a new array
const evens = arr.filter(n => n % 2 == 0);
console.log(evens); // [2, 2]

// Map but produces a value instead of array
const total = arr.reduce((sum, n) => sum + n);
console.log(total); // 8

// Converts an iterable to an array
console.log(Array.from("ABC")); // ["A", "B", "C"]
