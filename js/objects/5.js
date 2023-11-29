const original = {
  get foo() {
    return 123;
  }
};

const clone1 = Object.assign({}, original);
const clone2 = { ...original };

original.foo = 15;
clone1.foo = 15;
clone2.foo = 15;

console.log(original.foo, clone1.foo, clone2.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/340?comment=113
