class Counter {
  #counter = 0;

  constructor() {}

  then(res) {
    res(this.#counter++);
  }
}

const counter = await new Counter();

console.log(counter);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/712?comment=864
