'use strict';

function foo(a, b) {
  arguments[1] = 2;
  console.log(b);
}

foo(0, 1);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/324?comment=1250
