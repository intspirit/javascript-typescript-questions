/* sloppy mode */
const protoObj1 = { foo: 'bar' };
const protoObj2 = { foo: 'baz' };

const obj = {
  __proto__: protoObj1,
  __proto__: protoObj2
}

console.log(obj.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/438?comment=274
