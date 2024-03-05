function pow(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }

  return res;
}

console.log(pow(2, 4)); // 16

// What is the time and space complexity of the algorithm?

// Try yourself and read the explanation: https://t.me/intspirit/952?comment=1429
