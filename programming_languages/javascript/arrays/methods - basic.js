let arr = [1, 2, 2, 3];

// Array length
console.log(arr.length); // 4

// Join elements to string with specified separator
console.log(arr.join("then")); // "1then2then2then3"

// Merge (concatenate) arrays
console.log(arr.concat([4, 5])); // [1, 2, 2, 3, 4, 5]

// Create new array (slice) given start and (end-1) index
console.log(arr.slice(1, 3)); // [2, 2]

// Remove specified number of elements from the original array given start index
console.log(arr.splice(1, 2)); // [2, 2]
console.log(arr); // [1, 3]

// "Flatten" nested arrays
let nested = [1, [2, 3], 4];
console.log(nested.flat()); // [1, 2, 3, 4]
