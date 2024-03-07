function pow(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  return x * pow(x, n - 1);
}

function pow2(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n % 2 === 0) return pow2(x, n/2) * pow2(x, n/2);

  return x * pow2(x, (n - 1)/2) * pow2(x, (n - 1)/2);
}

console.log(pow(2, 4), pow2(2, 4)); // 16, 16

// Which algorithm is more efficient?
