function myFunc() {
  return 'hello';
}

const myArrowFunc = () => 'hello';

console.log(Object.hasOwn(myFunc.prototype, 'constructor'));
console.log(Object.hasOwn(myArrowFunc.prototype, 'constructor'));

// What will be the output?
