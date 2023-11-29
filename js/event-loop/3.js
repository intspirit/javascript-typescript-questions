setTimeout(() => console.log('timeout 1'));

Promise.resolve().then(() => console.log('promise 1'));

Promise.resolve().then(() => setTimeout(() => console.log('timeout 2')));

Promise.resolve().then(() => console.log('promise 2'));

setTimeout(() => console.log('timeout 3'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/720?comment=880
