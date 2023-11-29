'use strict';

const obj = { foo: 'bar' };

delete Object.prototype;

console.log(obj.hasOwnProperty('foo'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/430?comment=262
