console.time('first');
const arr = new Array(1_000_000);
for (let i = 0; i < arr.length; i++) {
  arr[i] = i;
}
console.timeEnd('first');

console.time('second');
const arr2 = [];
for (let i = 0; i < 1_000_000; i++) {
  arr2[i] = i;
}
console.timeEnd('second');

console.time('third');
const arr3 = [];
for (let i = 0; i < 1_000_000; i++) {
  arr3.push(i);
}
console.timeEnd('third');

// Which array takes the less time to create and fill?

// Try yourself and read the explanation: https://t.me/intspirit/846?comment=1183
