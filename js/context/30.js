'use strict';

this.baz = 1;
const cb = () => console.log(this.baz);

const foo = {
  baz: 2,
  bar: function () {
    return cb();
  }
};

foo.bar();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/742?comment=924
