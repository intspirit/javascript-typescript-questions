const arr = [];
const arr2 = [];
const str = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < 10_000_000; i++) {
  let randomA = str[Math.floor(Math.random() * str.length)];
  let randomB = str[Math.floor(Math.random() * str.length)];
  arr.push({ [randomA]: i, [randomB]: i + 1 });
}

for (let i = 0; i < 10_000_000; i++) {
  // Here we create random property names but don't use them.
  // This is necessary to compare only the performance of creating objects.
  let randomA = str[Math.floor(Math.random() * str.length)];
  let randomB = str[Math.floor(Math.random() * str.length)];
  arr2.push({ a: i, b: i + 1 });
}

/*
Which loop is more efficient?

Try yourself and read the explanation: https://t.me/intspirit/767?comment=986
*/
