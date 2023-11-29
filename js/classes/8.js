/* module */

class Greeting {
  constructor() {
    return Promise.resolve('Hello')
      .then(() => this);
  }
}

const msg = await new Greeting();

console.log(msg);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/532?comment=478
