const Num = () => {
  this.getNum = () => 10;
}

Num.prototype.getNum = () => 20;

const num = new Num();

console.log(num.getNum());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/489?comment=380
