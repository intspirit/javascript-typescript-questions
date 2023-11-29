var x = 0;

function foo() {
  x++;
  this.x = x;
  return foo;
}

var bar = new new foo();

console.log(bar.x);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/321?comment=73
