const worker = new Worker('./worker.js');
const obj = { foo: 'bar' };
worker.postMessage(obj);

setTimeout(() => obj.foo = 'baz', 1000);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/828?comment=1124
