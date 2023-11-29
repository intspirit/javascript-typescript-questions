class Foo {
  static bar = 'bar';

  log() {
    console.log(this.bar)
  }

  static staticLog() {
    console.log(this.bar)
  }
}

(new Foo()).log();
Foo.staticLog();

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/692?comment=824
