globalThis.x = 'foo';

function foo() {
  this.x = 'bar';

  return () => {
    return this.x;
  }
}

console.log(foo()(), globalThis.x);

// What will be the output?
