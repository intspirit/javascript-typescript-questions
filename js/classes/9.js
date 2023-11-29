class Foo {
  static x = 2;

  y = 3;
}

class Bar extends Foo {
  static getSum() {
    return (super.x || 0) + (super.y || 0);
  }
}

console.log(Bar.getSum());

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/630?comment=684
