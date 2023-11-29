function createArr() {
  const arr = new Array(10_000_000);
  for (let i = 0; i < 10_000_000; i++) {
    arr[i] = Math.random();
  }
  return arr;
}

function foo() {
  for (let i = 0; i < arr.length; i++) {
    someFunc(arr[i]);
  }
}

function bar() {
  for (let i = 0; arr[i] !== undefined; i++) {
    someFunc(arr[i]);
  }
}

const arr = createArr();
foo();
bar();

// Which function will execute faster?

// Try yourself and read the explanation: https://t.me/intspirit/840?comment=1164
