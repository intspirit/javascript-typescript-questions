/* sloppy mode */

function setFoo(obj) {
  obj.foo = 'bar';
  return obj;
}

const value = setFoo(true);

console.log(value.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/424?comment=253
