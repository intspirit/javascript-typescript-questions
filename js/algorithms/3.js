function foo(n) {
  const cache = {};
  const bar = (i) => {
    if (i > n) return i;
    if (cache[i]) return cache[i];

    const res = bar(i + 1) + bar(i + 2);
    cache[i] = res;
    return res;
  }

  return bar(0);
}

console.log(foo(500));

// What is the complexity of the algorithm?
