/* sloppy mode */
const obj = {};

Object.preventExtensions(obj);

obj.foo = 'bar';

console.log(obj.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/426?comment=256
