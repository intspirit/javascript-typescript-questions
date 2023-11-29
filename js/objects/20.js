let isSetterCalled = false;
const proto = {
  set foo(val) {
    isSetterCalled = true;
  }
}

const obj = {
  __proto__: proto,
  foo: 'bar'
};

console.log(isSetterCalled);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/516?comment=437
