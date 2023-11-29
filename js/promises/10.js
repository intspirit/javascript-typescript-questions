setTimeout(() => {
  console.log('timeout 1');
  const promise = new Promise((res) => res());
  promise.then(() => console.log('promise 1'));
});

setTimeout(() => console.log('timeout 2'));
const promise = new Promise((res) => res());
promise.then(() => console.log('promise 2'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/718?comment=876
