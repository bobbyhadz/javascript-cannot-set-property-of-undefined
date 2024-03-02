// TypeError: Cannot set properties of Undefined in JavaScript

// EXAMPLE 1 - Provide a fallback value for when the variable is `undefined`

const fromDb = undefined;

const obj = fromDb || {};
obj.myKey = 'my value';
console.log(obj); // 👉️ {myKey: 'my value'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if the variable is not `undefined` before setting a property

// const obj = undefined;

// if (obj != undefined) {
//   obj.property = 'value';
// }

// console.log(obj); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 3 - Setting nested properties on undefined values in Objects or Arrays

// const obj = {};

// if (obj['a']) {
//   obj['a']['b'] = 'my value';
// } else {
//   obj['a'] = {
//     b: 'my value',
//   };
// }

// console.log(obj); // 👉️ {a: {b: 'my value'}}

// ------------------------------------------------------------------

// // EXAMPLE 4 - Make sure to specify the required arguments when calling functions

// // 👇️ Provide an empty object as a default value
// function example(obj = {}) {
//   obj.first = 'John';
//   obj.last = 'Smith';

//   return obj;
// }

// const result = example();
// console.log(result); // 👉️ {first: 'John', last: 'Smith'}
