'use strict';

function foo(a, a, b) {
  return a === arguments[0];
}

console.log(foo(1, 2, 3));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/432?comment=265
