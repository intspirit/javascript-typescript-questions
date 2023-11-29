const obj = {
  x: 1,
  y: 2,
  sum: () => this.x + this.y
}

console.log(obj.sum.call({ x: 3, y: 4 }));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/638?comment=710
