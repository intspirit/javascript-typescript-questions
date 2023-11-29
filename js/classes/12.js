class Foo {
  static [Symbol.hasInstance](val) {
    return 'foo' in val;
  }
}

const foo = new Foo();

console.log(foo instanceof Foo);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/664?comment=767
