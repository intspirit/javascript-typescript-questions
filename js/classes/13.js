class Foo {
  foo = true;
  static [Symbol.hasInstance](val) {
    return 'foo' in val;
  }
}

class Bar extends Foo {}

console.log(new Foo() instanceof Bar);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/666?comment=771
