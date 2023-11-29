function myFunc() {
  this.a = 5;

  return { a: 10 };
}

const result = new myFunc();

console.log(result);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/501?comment=406
