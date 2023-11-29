requestIdleCallback(() => console.log(1));

setTimeout(() => console.log(2));

setTimeout(() => console.log(3));

queueMicrotask(() => console.log(4));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/726?comment=892
