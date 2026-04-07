// Named imports
import { str, num, bool as ok } from './esm - export.js';
if (ok) {
    console.log("Import OK");
}
console.log("str:", str);
console.log("num:", num);

// Default imports
import f from './esm - export.js';
console.log("Default:", f());

// Mixed imports
import f2, { str as str2, num as num2 } from './esm - export.js';
console.log("str:", str2);
console.log("num:", num2);
console.log("Default:", f2());

// Global imports
import * as myModule from './esm - export.js';
console.log("str:", myModule.str);
console.log("num:", myModule.num);
console.log("Default:", myModule.default());

// Dynamic imports
if (ok) {
    const myModule2 = await import('./esm - export.js');
    console.log("str:", myModule2.str);
    console.log("num:", myModule2.num);
    console.log("Default:", myModule2.default());
}
