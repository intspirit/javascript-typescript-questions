const promise = new Promise((resolve) => {
  resolve(new Promise((resolveInner) => {
    setTimeout(() => {
      resolveInner('hello');
    }, 1000);
  }))
});

promise.then((value) => console.log(value));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/662?comment=763
