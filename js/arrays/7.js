const arrayLike = {
  0: 'a',
  1: 'b'
};

const result = Array.prototype.join.call(arrayLike, '+');

console.log(result);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/598?comment=611
