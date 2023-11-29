const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    console.log('hello');
    throw new Error('Exception!');
  });
});

promise
  .then(() => console.log('then'))
  .catch(() => console.log('catch'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/660?comment=757
