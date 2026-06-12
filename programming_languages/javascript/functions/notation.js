// Traditional function notation
// Note: This is the only notation that allows hoisting of function
function f1(a, b) {
    return a + b;
}

// Function keyword notation
const f2 = function (a, b) {
    return a + b;
}

// Arrow function notation
const f3 = (a, b) => {
    return a + b;
}

// Arrow function with empty function bbody
const f4 = (a, b) => { }

// Arrow function with inline function body
const f5 = (a, b) => console.log(a + b);  // 3

// Arrow function with implicit return value
const f6 = (a, b) => a + b;

// Arrow function with one parameter
const f7 = a => a + a;

// Arrow function with no parameters
const f8 = () => 1 + 2;

console.log(
    f1(1, 2),  // 3
    f2(1, 2),  // 3
    f3(1, 2),  // 3
    f4(1, 2),  // undefined
    f5(1, 2),  // undefined
    f6(1, 2),  // 3
    f7(1),     // 2
    f8()       // 3
);
