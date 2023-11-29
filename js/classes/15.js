this.a = 'outerA';
this.b = 'outerB';

class A {
  a = 'innerA';
  b = 'innerB';
  [this.a] = this.b;
}

const a_class = new A();

console.log(a_class);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/682?comment=804
