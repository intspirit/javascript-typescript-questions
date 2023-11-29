import defaultFoo, { foo } from './module.js';

setTimeout(() => {
  console.log(foo, defaultFoo);
}, 2000);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/464?comment=326
