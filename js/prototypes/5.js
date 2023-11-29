const obj = {};

obj.foo = function () {
  console.log(bar);
};

obj.__proto__.bar = "baz";

obj.foo();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/330?comment=93
