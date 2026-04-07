// Function with closure

function makeAdder(x) {
    // Returns function with reference to local variable x
    return y => x + y;
}

const add5 = makeAdder(5);
console.log(add5(2));  // 7

const add10 = makeAdder(10);
console.log(add5(5));  // 15

// IIFE (anonymous) with closure

const counter = (() => {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    // Returns object containing methods with reference to local variable privateCounter
    return {
        increment() {
            changeBy(1);
        },
        decrement() {
            changeBy(-1);
        },
        value() {
            return privateCounter;
        }
    };
})();

console.log(counter.value());  // 0

counter.increment();
counter.increment();
console.log(counter.value());  // 2

counter.decrement();
console.log(counter.value());  // 1
