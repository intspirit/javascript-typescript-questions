Object.defineProperty(Object.prototype, 'foo', {
  writable: false,
  value: 1
});

const bar = { foo: 2 };

const baz = {};
baz.foo = 2;

console.log(bar.foo, baz.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/346?comment=125
