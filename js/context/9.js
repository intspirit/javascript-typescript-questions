'use strict';

function foo() {
  this.x = 1;
  (function() {
    this.x = 2;
  })();

  console.log(this.x);
}

foo();

new foo();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/314?comment=56
