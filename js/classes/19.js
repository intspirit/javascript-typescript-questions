class Foo {
  x = 1;
  y = this.z;
  z = ++this.x;
}

const foo = new Foo();

console.log(foo.x, foo.y, foo.z);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/698?comment=836
