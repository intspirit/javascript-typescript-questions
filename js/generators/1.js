function* generator(i) {
  yield i++;
}
const num = 3;

const gen = generator(num);

for (let j = 0; j < num; j++) {
  console.log(gen.next().value);
}

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/383?comment=184
