console.log('index.js');

import { num } from './module.js';

console.log('num =', num);

setTimeout(() => {
  console.log('timeout num =', num);
}, 1000);

setTimeout(() => {
  console.log('timeout num =', num);
}, 2000);

// What will be the output?
