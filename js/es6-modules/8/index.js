import { shouldLoad } from './module1.js';

let num = 0;

if (shouldLoad) {
   ({ num } = import('./module2.js'));
}

console.log(num);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/407?comment=223
