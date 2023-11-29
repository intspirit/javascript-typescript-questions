var foo = {
  x: 1,
  bar: {
    x: 2,
    baz: function () { return this.x; }
  }
}

const func = foo.bar.baz;

console.log(func(), foo.bar.baz(), foo.bar.baz.call(foo));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/586?comment=587
