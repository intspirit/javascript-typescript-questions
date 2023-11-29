var bar = {
  x: 1,
  foo: function() {
    console.log(this.x);
  }
};

bar.foo();
new bar.foo();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/316?comment=63
