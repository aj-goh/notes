let arr = [1, 2, 2, 3];

// Sum of array
let sum = 0;
for (let n of arr) sum += n;
console.log(sum); // 8

// Max / Min
console.log(Math.max(...arr)); // 3
console.log(Math.min(...arr)); // 1

// Reverse array
let reversed = arr.slice().reverse(); // copies the array then reverses it
console.log(reversed); // [3, 2, 2, 1]

// Remove duplicates
let unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3]

// Find all indices of value
let val = 2;
let indices = [];
arr.forEach((el, i) => { if (el === val) indices.push(i); });
console.log(indices); // [1, 2]

// Chunk array into smaller arrays
let size = 2;
let chunks = [];
for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
}
console.log(chunks); // [[1, 2], [2, 3]]

// Merge two sorted arrays
let a = [1, 3, 5];
let b = [2, 4, 6];
let merged = [], i = 0, j = 0;
while (i < a.length && j < b.length) {
    if (a[i] < b[j]) merged.push(a[i++]);
    else merged.push(b[j++]);
}
merged = merged.concat(a.slice(i)).concat(b.slice(j));
console.log(merged); // [1, 2, 3. 4, 5, 6]
