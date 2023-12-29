function myFunc() {
  return 'hello';
}

const myArrowFunc = () => 'hello';

console.log(Object.hasOwn(myFunc.prototype, 'constructor'));
console.log(Object.hasOwn(myArrowFunc.prototype, 'constructor'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/906?comment=1313
