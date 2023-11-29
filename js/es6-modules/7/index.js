import { shouldLoad } from './module1.js';

let num = 0;

if (shouldLoad) {
  import { num } from './module2.js';
}

console.log(num);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/405?comment=220
