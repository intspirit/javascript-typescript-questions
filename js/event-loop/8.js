new Promise((resolve) => setTimeout(() => resolve(), 1000))
  .then(() => console.log('promise'));

setTimeout(() => {
  console.log('timeout');
}, 1000);

requestIdleCallback(() => {
  console.log('requestIdleCallback');
}, { timeout: 1000 });

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/728?comment=896
