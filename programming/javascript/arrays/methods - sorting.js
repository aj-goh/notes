let arr = [1, 2, 3, 4, 5];

// Reverse
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

// Default alphabetical sort
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]

// Numerical sort
function comparison(a, b) { return a - b; }
arr.sort(comparison);
console.log(arr); // [1, 2, 3, 4, 5]

// About the comparison (alternative sort order) function:
// - Should return either a negative, zero, or positive value
// - If comparison(a, b) < 0 then a is sorted before b
// - If comparison(a, b) > 0 then b is sorted before a
// - If comparison(a, b) = 0 then no changes occur

function comparisonReverse(a, b) { return b - a; }
arr.sort(comparisonReverse);
console.log(arr); // [5, 4, 3, 2, 1]

// Classic shuffle (slightly biased)
function random() { return 0.5 - Math.random(); }
arr.sort(random);
console.log(arr); // [shuffled array]

// Fisher Yates shuffle (most popular unbiased method)
for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr); // [shuffled array]
