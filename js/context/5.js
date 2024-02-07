const square = {
  num: 3,
  pow() {
    return this.num * this.num;
  },
  double: () => 2 * this.num
};

console.log(square.pow(), square.double());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/936?comment=1387
