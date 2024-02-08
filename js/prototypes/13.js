const obj = {
  foo: 1,
  get fooValue() {
    return super.foo;
  }
}

Object.setPrototypeOf(obj, { foo: 2 });

console.log(obj.fooValue);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/938?comment=1391
