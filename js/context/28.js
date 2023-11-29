const foo = {
  baz: 1,
  bar: {
    baz: 2,
    getBaz: () => this.baz
  }
};

console.log(foo.bar.getBaz());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/736?comment=912
