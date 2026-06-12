// Create promise callback with 2 params: resolve and reject
const callback = (res, rej) => {
    let success = true;
    setTimeout(() => {
        if (success) {
            // Call res function to resolve promise (success)
            res("Operation successful");
        } else {
            // Call rej function to reject promise (failure)
            rej("Operation failed");
        }
    }, 500);
};

// Create new promise objects using callback
const promise1 = new Promise(callback);
const promise2 = new Promise(callback);

// Determine what to do after promise is completed (either resolved or rejected)

// Syntax 1: then() with 2 params
promise1.then(
    value => console.log("Resolved:", value),
    error => console.log("Rejected:", error)
);

// Syntax 2: then() + catch()
promise2
    .then(value => console.log("Resolved:", value))
    .catch(error => console.log("Rejected:", error));
