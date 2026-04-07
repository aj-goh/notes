// Create new hashmap
const hashmap = new Map();

// Add key-value pairs
hashmap.set('apple', 1.5);
hashmap.set('banana', 0.8);
hashmap.set('orange', 1.2);

// Retrieve values
console.log(hashmap.get('apple'));  // 1.5

// Check for key existence
console.log(hashmap.has('grapes'));  // false

// Delete a key-value pair
hashmap.delete('banana');

// Get the size of the map
console.log(hashmap.size);  // 2

// Iterate over keys
for (const key of hashmap.keys()) {
    console.log(key);  // apple, orange
}
