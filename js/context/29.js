function getFoo() {
  this.baz = 1;
  return {
    baz: 2,
    bar: function () {
      return () => console.log(this.baz);
    }
  };
}

const foo = getFoo();
foo.bar()();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/738?comment=916
