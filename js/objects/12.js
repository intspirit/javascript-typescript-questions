Object.defineProperty(Object.prototype, 'foo', {
  writable: false,
  value: 1,
});

const bar = { foo: 123 };

const clone = { ...bar };

console.log(clone.foo);

// What will be the output?
