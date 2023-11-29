const promise = new Promise((resolve, reject) => {
  resolve();
  throw new Error('Exception!');
});

promise
  .then(() => console.log('then'))
  .catch(() => console.log('catch'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/658?comment=753
