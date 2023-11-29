let isSetterCalled = false;

class Foo {
  get prop() {
    return 'hello';
  }

  set prop(value) {
    isSetterCalled = true;
  }
}
class Bar extends Foo {
  constructor() {
    super();
    this.prop = 'hello';
  }
}

new Bar();

console.log(isSetterCalled);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/522?comment=449
