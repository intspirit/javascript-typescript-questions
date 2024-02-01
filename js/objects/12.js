'use strict';

Object.defineProperty(Object.prototype, 'foo', {
  writable: false,
  value: 1,
});

const bar = { foo: 123 };

const clone1 = { ...bar };

console.log(clone1.foo);

const clone2 = Object.assign({}, bar);

console.log(clone2.foo);

// What will be the output?
