'use strict';

const obj = { arr: ['foo'] };

Object.freeze(obj);

obj.arr.push('bar');

console.log(obj.arr.length);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/512?comment=429
