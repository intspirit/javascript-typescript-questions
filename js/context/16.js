globalThis.x = 'foo';

function foo() {
  this.x = 'bar';

  return () => {
    return this.x;
  }
}

console.log(foo()(), globalThis.x);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/916?comment=1342
