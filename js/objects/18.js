'use strict';

const obj = { foo: 'bar' };

Object.seal(obj);

console.log(Object.isExtensible(obj));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/514?comment=433
