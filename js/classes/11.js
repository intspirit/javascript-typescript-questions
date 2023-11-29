class Foo {
  foo = 'foo';
}

class Bar extends Foo {
  constructor() {
    super();
    super.foo = 'bar';
    super.bar = 'bar';
  }
}

const b = new Bar();

console.log(b.foo, b.bar);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/640?comment=714
