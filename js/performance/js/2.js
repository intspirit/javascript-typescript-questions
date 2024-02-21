function foo(i) {
  if (i % 2) {
    return (a, b) => a < b;
  }
  return (a, b) => a > b;
}

const arr = [];
for (let i = 0; i < 10000000; i++) {
  arr.push(foo(i));
}

// Which of the functions is more efficient?

// Try yourself and read the explanation: https://t.me/intspirit/762?comment=975
