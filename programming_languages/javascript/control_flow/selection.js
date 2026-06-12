// If-else

let a = 5, b = 10;
if (a > b) {
    console.log("a is bigger");
} else if (a < b) {
    console.log("b is bigger");
} else {
    console.log("a equals b");
}

// If-else ternary operator

console.log(a > b ? "a is bigger" : a < b ? "b is bigger" : "a equals b");

// Switch-case

let col = "red";
switch (col) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Caution");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Unknown color");
}
