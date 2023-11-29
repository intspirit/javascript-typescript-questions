const promise1 = new Promise((resolve, reject) => reject('Error'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

Promise.any([promise1, promise2, promise3])
  .then((value) => console.log(value));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/395?comment=204
