// Sum of first n numbers
function sumN(n) {
    return (n * (n + 1)) / 2;
}

// Sum of first n squares
function sumSquares(n) {
    return (n * (n + 1) * (2 * n + 1)) / 6;
}

// Factorial
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Fibonacci (recursive)
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// Fibonacci (iterative)
function fibIter(n) {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
}

// GCD (Greatest Common Divisor) – Euclidean Algorithm
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// LCM (Least Common Multiple)
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Modular exponentiation (fast power)
function modPow(base, exp, mod) {
    let result = 1;
    base %= mod;
    while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % mod;
        base = (base * base) % mod;
        exp = Math.floor(exp / 2);
    }
    return result;
}

// Distance between 2 points
function distance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Midpoint between 2 points
function midpoint(x1, y1, x2, y2) {
    return [(x1 + x2) / 2, (y1 + y2) / 2];
}

// Area of triangle (Heron’s formula)
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Random integer between min and max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Clamp number
function clamp(num, min, max) {
    return Math.max(min, Math.min(num, max));
}

// Euclidean distance (line)
function euclidean(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Manhattan distance (grid)
function manhattan(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

// nPr (permutations)
function nPr(n, r) {
    if (r > n) return 0;
    let result = 1;
    for (let i = 0; i < r; i++) {
        result *= (n - i);
    }
    return result;
}

// nCr (combinations)
function nCr(n, r) {
    if (r > n) return 0;
    let num = 1, den = 1;
    for (let i = 0; i < r; i++) {
        num *= (n - i);
        den *= (i + 1);
    }
    return num / den;
}
