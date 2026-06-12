// var: function-scoped

var x = 1;
console.log(x);  // 1
{
    var x = 2;  // update global var x
    console.log(x);  // 2
}
console.log(x);  // 2

// let: block-scoped

let y = 3;
console.log(y);  // 3
{
    let y = 4;  // create local var y
    console.log(y);  // 4
}
console.log(y);  // 3

// const: block-scoped

const z = 5;
console.log(z);  // 5
{
    const z = 6;  // create local var z
    console.log(z);  // 6
}
console.log(z);  // 5
