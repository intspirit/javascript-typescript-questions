function *Foo() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = new Foo();

for (i = 0; i < 3; i++) {
  console.log(gen.next().value);
}

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/385?comment=188
