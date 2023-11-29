class A {
  set foo(value) {
    console.log(value);
  }
  set bar(value) {
    console.log(value);
  }
}
class B extends A {
  foo = 'foo';
  constructor() {
    super();
    this.bar = 'bar';
  }
}

new B();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/700?comment=840
