setTimeout(() => console.log('timeout 1'));

const promise = new Promise(resolve => setTimeout(resolve));

promise.then(() => console.log('promise 1'));

Promise.resolve().then(() => console.log('promise 2'));

setTimeout(() => console.log('timeout 2'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/722?comment=884
