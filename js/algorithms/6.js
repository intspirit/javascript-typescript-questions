function pow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  return x * pow(x, n - 1);
}

console.log(pow(2, 4)); // 16

// What is the time and space complexity of the algorithm?
