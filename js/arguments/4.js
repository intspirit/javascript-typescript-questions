function Operations(coef) {
  return {
    sum: (...args) => arguments[0] + coef
  }
}

const ops = Operations(0.1);

console.log(ops.sum(1, 2, 3));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/491?comment=384
