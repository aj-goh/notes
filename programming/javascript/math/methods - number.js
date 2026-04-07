let num = 123.456;

// Round to total decimal places
console.log(num.toFixed(2)); // "123.46"

// Round to total digits
console.log(num.toPrecision(4)); // "123.5"

// toString with base
console.log((255).toString(16)); // "ff" (hex)
console.log((10).toString(2));   // "1010" (binary)

// Check Not-a-Number
console.log(isNaN("abc")); // true

// Check finite number
console.log(isFinite(100));      // true
console.log(isFinite(Infinity)); // false

// Parse to integer/float
console.log(parseInt("42px"));   // 42
console.log(parseFloat("3.14")); // 3.14
