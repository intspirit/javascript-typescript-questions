const promise1 = new Promise(
  (resolve, reject) => setTimeout(reject, 100, 'err')
);
const promise2 = new Promise(
  (resolve, reject) => setTimeout(resolve, 100, 'foo')
);

Promise.allSettled([promise1, promise2])
  .then((results) => results.forEach(({ value }) => console.log(value)));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/397?comment=208
