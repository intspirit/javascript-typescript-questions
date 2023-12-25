const foo = {
  hello: () => console.log('hello')
};

const bar = Object.create(foo);
const baz = Object.create(bar);

console.log('hello' in bar);
console.log('hello' in baz);

// What will be the output?
