'use strict';

function foo() {
  console.log(this);
}

function callFoo(fn) {
  fn();
}

let obj = { foo };

callFoo(obj.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/560?comment=536
