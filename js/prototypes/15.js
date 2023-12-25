const foo = {
  hello: () => console.log('hello')
};

const bar = Object.create(foo);
const baz = Object.create(bar);

console.log('hello' in bar);
console.log('hello' in baz);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/904?comment=1309
