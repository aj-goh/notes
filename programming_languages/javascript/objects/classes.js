// Declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi, I'm ${this.name}, ${this.age} years old.`;
    }
}

// Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // call parent constructor
        this.major = major;
    }
    study() {
        return `${this.name} is studying ${this.major}.`;
    }
}

// Usage
let p1 = new Person("Alice", 25);
console.log(p1.greet()); // Hi, I'm Alice, 25 years old.

let s1 = new Student("Bob", 20, "Math");
console.log(s1.greet()); // Hi, I'm Bob, 20 years old.
console.log(s1.study()); // Bob is studying Math.
