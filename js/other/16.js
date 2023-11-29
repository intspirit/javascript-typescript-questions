/* sloppy mode */

function setUndefinedValue() {
  undefined = 5;
  return undefined;
}

class A {
  static setUndefinedValue() {
    undefined = 10;
    return undefined;
  }
}

console.log(setUndefinedValue());
console.log(A.setUndefinedValue());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/415?comment=236
