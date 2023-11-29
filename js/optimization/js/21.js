function createArr() {
  const arr = new Array(10_000_000);

  for (let i = 0; i < 10_000_000; i++) {
    arr[i] = i;
  }

  arr[0] = 0.1;
  arr[1] = 10;
  arr[2] = '10';
  arr[3] = { a: 'hello' };

  return arr;
}

const arr = createArr();

// Updating array elements with which indexes produces the worst performance in V8?

// Try yourself and read the explanation: https://t.me/intspirit/842?comment=1172
