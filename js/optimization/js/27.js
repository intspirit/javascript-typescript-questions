// (Class version)
class Operations {
  constructor(num) {
    this.num = num;
  }
  double() {
    return this.num * 2;
  }
  square() {
    return this.num * this.num;
  }
}

const op = new Operations(5);
console.log(op.double());

// (Function version)
// module.js
export function double(num) {
  return num * 2;
}

export function square(num) {
  return num * num;
}

//index.js
import { double } from './module';

console.log(double(5));

// Which version of the code could be better minified?

// Try yourself and read the explanation: https://t.me/intspirit/854?comment=1200
