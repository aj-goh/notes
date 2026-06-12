// Declaration
function add(a, b) {
    return a + b;
}

// Nested function
function doubleArr(arr) {
    function helper(x) {
        return x * 2;
    }
    return arr.map(helper);
}

// Default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Rest parameters (non-constant number of arguments)
function sum(...nums) {
    let sum = 0;
    for (let n of nums) sum += n;
    return sum;
}

// Invocation (calling functions)
console.log(add(2, 3));
console.log(greet());
console.log(sum(1, 2, 3, 4));
console.log(doubleArr([1, 2, 3]));  // [2,4,6]
