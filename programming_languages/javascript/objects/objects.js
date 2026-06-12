// Declaration
const user = {
    name: "John",
    age: 30,
    greet() {
        return `Hi, I'm ${this.name}`; // "this" refers to the user object itself
    }
};

// Access object property
console.log(user.name);
console.log(user["name"]);

// Access object method definition
console.log(user.greet);
console.log(user["greet"]);

// Execute object method
console.log(user.greet());
console.log(user["greet"]());

// Check if property exists in object
console.log("name" in user);          // true
console.log(user.name !== undefined); // true

// Get keys/values/entries of object
console.log(Object.keys(user));    // ["name", "age", "greet"]
console.log(Object.values(user));  // ["John", 30, [Function: greet]]
console.log(Object.entries(user)); // [["name", "John"], ["age", 30], ["greet", [Function: greet]]]

// Add object member
user.email = "john@example.com";

// Delete object member
delete user.age;
