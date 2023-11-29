const obj = Object.create({}, {
  foo: {
    writable: true,
    value: 1,
    enumerable: false
  }
});

const clone = Object.assign({}, obj);

console.log(clone.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/366?comment=159
