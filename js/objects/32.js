const obj = { foo: {} };

const copy1 = { ...obj };
const copy2 = structuredClone(obj);

obj.foo.bar = 'baz';

console.log(copy1.foo.bar, copy2.foo.bar);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/710?comment=860
