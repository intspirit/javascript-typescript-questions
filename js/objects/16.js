/* sloppy mode */
const obj = { foo: 'bar' };

Object.preventExtensions(obj);

obj.foo = 'baz';

console.log(obj.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/428?comment=259
