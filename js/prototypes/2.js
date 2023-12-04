const obj = {};

console.log('prop' in obj === obj.hasOwnProperty('prop'));
console.log('toString' in obj === obj.hasOwnProperty('toString'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/884?comment=1267
