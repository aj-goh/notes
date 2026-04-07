// var: function-scoped

var x = true;

function f() {
    // var x;
    if (false) {
        var x = false;
    }
    console.log(x); // undefined, as x initialisation hoisted to top of function scope
}

f();

// let: block-scoped

let y = true;

function g() {
    if (false) {
        let y = false;
    }
    console.log(y); // true, as y refers to y in global scope
}

g();
