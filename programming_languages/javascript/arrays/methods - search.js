let arr = [1, 2, 2, 3];

// Check occurrence of element
console.log(arr.includes(2)); // true

// Get index of first/last occurrence of element
console.log(arr.indexOf(2));     // 1
console.log(arr.lastIndexOf(2)); // 2

// Get index of first/last element to pass a test
function even(n) { return n % 2 == 0 }
console.log(arr.findIndex(even));     // 1
console.log(arr.findLastIndex(even)); // 2

// Get value of first/last element to pass a test
console.log(arr.find(even));     // 2
console.log(arr.findLast(even)); // 2
