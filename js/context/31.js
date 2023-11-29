'use strict';

function getFoo() {
  this.baz = 1;
  return {
    baz: 2,
    bar: function () {
      return () => console.log(this.baz);
    }
  };
}

const bar = getFoo().bar;

bar()();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/740?comment=920
