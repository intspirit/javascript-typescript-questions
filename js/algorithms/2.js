function foo(n) {
  const bar = (i) => {
    if (i > n) {
      return i;
    }

    return bar(i + 1) + bar(i + 2);
  }

  return bar(0);
}

console.log(foo(10));

// What is the approximate complexity of the algorithm?

// Try yourself and read the explanation: https://t.me/intspirit/942?comment=1400
