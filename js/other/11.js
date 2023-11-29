const obj = new Proxy({
  foo: 'bar'
}, {
  get() {
    return 'baz';
  }
});

console.log(obj.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/362?comment=153
