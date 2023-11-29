const square = {
  num: 3,
  pow() {
    return this.num * this.num;
  },
  double: () => 2 * this.num
};

console.log(square.pow(), square.double());

// What will be the output?
