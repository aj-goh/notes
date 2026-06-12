// Count elements in an array
let arr = [1, 2, 2, 3];
let freq = {};
for (let el of arr) {
    freq[el] = (freq[el] || 0) + 1;
}
console.log(freq); // { 1: 1, 2: 2, 3: 1 }

// Compare if two strings are anagrams
let s1 = "art";
let s2 = "rat";
let isAnagram = true;
if (s1.length !== s2.length) isAnagram = false;
let count = {};
for (let ch of s1) count[ch] = (count[ch] || 0) + 1;
for (let ch of s2) {
    if (!count[ch]) isAnagram = false;
    count[ch]--;
}
console.log(isAnagram); // true

// Invert object (swap keys/values)
let obj = { a: 1, b: 2 };
let inverted = {};
for (let [k, v] of Object.entries(obj)) {
    inverted[v] = k;
}
console.log(inverted); // { 1: "a", 2: "b" }

// Group objects by property (array of objects => object of arrays)
let objArr = [{ type: "fruit", name: "apple" },
{ type: "fruit", name: "banana" },
{ type: "veg", name: "carrot" }];
let groupBy = "type";
let groups = objArr.reduce((acc, obj) => {
    let k = obj[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(obj);
    return acc;
}, {});
console.log(groups); // { fruit:[{apple}, {banana}], veg:[{carrot}] }
