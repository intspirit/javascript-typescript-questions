const obj = (function(bar) {
  return {
    foo: function baz() {
      bar: 100;
      return bar;
    }
  }
})(300)

console.log(obj.foo());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/370?comment=165
