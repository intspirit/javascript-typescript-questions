'use strict';

let bar = 'bar';

function foo() {
  return bar;
  function bar() {};
  var bar = 10;
}

console.log(typeof foo());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/576?comment=567
