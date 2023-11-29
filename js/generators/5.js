function* createGenerator() {
  yield* 'Hello';
  yield* 'World';
}

const res = [];
for (let value of createGenerator()) {
  res.push(value);
}

console.log(res);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/618?comment=655
