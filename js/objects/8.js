Object.defineProperty(Object.prototype, 'foo', {
  writable: false,
  value: 1,
});

const bar = { foo: 123 };

const clone = Object.assign({}, bar);

console.log(clone.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/348?comment=129
