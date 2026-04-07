// For loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of loop (arrays, iterables)

const nums = [0, 1, 2, 3, 4];
for (const num of nums) {
    console.log(num);
}

// For-in loop (objects, keys)

const person = { name: "Alice", age: 25 };
for (const key in person) {
    console.log(key, person[key]);
}


// While loop (checks condition before executing code)

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Do-While loop (executes code before checking condition)

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 4);


// Break and continue

for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // skip 3
    if (i === 7) break;    // stop loop
    console.log(i);
}
