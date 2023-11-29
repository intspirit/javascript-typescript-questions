const promise1 = new Promise((res) => {
  res('Hello there!');
});

const promise2 = new Promise((res) => {
  res(Promise.resolve('Hello there!'));
});

console.log(promise1, promise2);

// What will be the output?
