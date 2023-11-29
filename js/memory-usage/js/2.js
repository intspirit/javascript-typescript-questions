class Bar {
  bar = new Array(10000).join('bar');
  getBar() {
    return this.bar;
  }
}
class BarWithArrowFunction {
  bar = new Array(10000).join('bar');
  getBar = () => this.bar
}

let bars = [];
let barsWithArrowFunction = [];

for (let i = 0; i < 10000; i++) {
  bars.push(new Bar());
  barsWithArrowFunction.push(new BarWithArrowFunction());
}

// Which array takes up more memory?

// Try yourself and read the explanation: https://t.me/intspirit/744?comment=929
