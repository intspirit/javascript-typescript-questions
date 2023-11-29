function Counter() {
  this.num = 0;

  this.increment = () => void this.num++;
}

const counter = new Counter();

console.log(counter.increment());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/482?comment=363
