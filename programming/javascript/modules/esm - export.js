// Named exports
const str = "Hello World";
const num = 1;
export { str, num };

export const bool = true;
export const list = [1, 2, 3];
export const user = { name: "John Doe" };

export function f1(a, b) { return a + b };
export const f2 = function (a, b) { return a + b };
export const f3 = (a, b) => a + b;

// Default exports (only 1 per file)
export default function defaultFn() { return "defaultFn" };
// export default function () { return "defaultFn" };
// export default () => "defaultFn";

// Live bindings (exports refrences, not just value copies)
export let counter = 0;
export const increment = () => counter++;
