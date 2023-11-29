const protoObj = { foo: 'bar' };
const __proto__ = protoObj;

const obj1 = { __proto__:  protoObj };
const obj2 = { '__proto__':  protoObj };
const obj3 = { ['__proto__']:  protoObj };
const obj4 = { __proto__ };

console.log(obj1.foo, obj2.foo, obj3.foo, obj4.foo);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/436?comment=271
