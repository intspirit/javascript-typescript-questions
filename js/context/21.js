class Foo {
  bar = 'bar';

  getBar = () => this.bar;
}

bar = 'baz';

const getBarFunc = new Foo().getBar;

console.log(getBarFunc());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/634?comment=692
