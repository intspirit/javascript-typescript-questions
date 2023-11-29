class NumOperations {
  num;
  constructor(num) {
    this.num = num;
  }
  fib(n = this.num) {
    return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
  }
}
const num = new NumOperations(3);
const worker = new Worker('worker.js');
worker.postMessage(num);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/830?comment=1129
