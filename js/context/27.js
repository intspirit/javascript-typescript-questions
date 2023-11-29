function Foo() {
  this.bar = 10;
}

Foo.prototype.getBar = function() {
  console.log(this.bar);
}

const foo = new Foo();

setTimeout(foo.getBar);

// What will be the output?
