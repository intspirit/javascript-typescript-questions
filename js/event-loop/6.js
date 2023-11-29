console.log('start');

setTimeout(() => console.log('timeout'), 0);

queueMicrotask(() => console.log('microtask'));

console.log('end');

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/724?comment=888
