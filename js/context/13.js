const obj = {
  bar: 100,
  foo: function() {
    return () => this.bar;
  }
}

const fooFunc = obj.foo;
const barFunc = obj.foo();

console.log(
  barFunc.call({ bar: 500 }),
  fooFunc().call({ bar: 500 }),
  fooFunc.call({ bar: 500 })()
);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/377?comment=175
