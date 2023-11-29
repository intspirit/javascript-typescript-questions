const original = { foo: {} };
const clone = { ...original };

original.foo.bar = 'baz';

console.log(clone.foo.bar);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/344?comment=121
