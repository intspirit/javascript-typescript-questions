class Counter {
  #initValue = 0;

  constructor(initValue) {
    this.#initValue = initValue;
  }

  static {
    this.counter = 0;
    this.setCounter = (obj) => this.counter = obj.#initValue;
    this.count = () => ++this.counter;
  }
}

Counter.setCounter(new Counter(5));

console.log(Counter.count(), Counter.count());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/706?comment=852
