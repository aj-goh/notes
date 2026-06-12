// Copy reference vs copy data

const nums = [1, 2, 3, 4, 5];

const numsCopy1 = nums;
const numsCopy2 = [...nums];

// Spread in functions

function printSum(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    console.log(sum);
}

printSum(1, 2, 3);
printSum(1, 2, 3, 4, 5);
printSum(...nums);

// Spread in arrays

const arr = [1, 2, 3];

const arrPushed = [...arr, 4];
arr.push(4);

console.log(arrPushed);
console.log(arr);

const arr1 = [1, 2, 3], arr2 = [4, 5, 6];

const arrCombined1 = [...arr1, ...arr2];
const arrCombined2 = arr1.concat(arr2);

console.log(arrCombined1);
console.log(arrCombined2);

// Spread in objects

const obj = { a: 1, b: 2 };

const objPushed = { ...obj, c: 3 };
obj.c = 3;

console.log(objPushed);
console.log(obj);

const obj1 = { a: 1, b: 2 }, obj2 = { c: 3, d: 4 };

const objCombined1 = { ...obj1, ...obj2 };
const objCombined2 = Object.assign({}, obj1, obj2);

console.log(objCombined1);
console.log(obj1);

// Object destructuring

const { a, b, c } = obj;

console.log(a);
console.log(b);
console.log(c);
