// Declaration
let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(5); // creates [undefined, undefined, ...]

// Accessing and modifying elements
console.log(arr1[0]); // 1
console.log(arr1[arr1.length - 1]); // last element, 5

arr1[2] = 99; // arr1 = [1, 2, 99, 4, 5]

// Iterate over array
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

for (let val of arr1) {
    console.log(val);
}

// Adding and removing elements
arr1.push(6);    // add to end
arr1.pop();      // remove last
arr1.unshift(0); // add to start
arr1.shift();    // remove first
