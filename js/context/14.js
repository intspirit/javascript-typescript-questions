const obj = {
  bar: 100,
  foo: function() {
    return () => this.bar;
  }
}

const foo = obj.foo;
const bar = foo();

console.log(bar.call({ bar: 500 }));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/918?comment=1346
