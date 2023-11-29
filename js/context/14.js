const obj = {
  bar: 100,
  foo: function() {
    return () => this.bar;
  }
}

const foo = obj.foo;
const bar = foo();

console.log(bar.call({ bar: 500 }));

// What will be the output?
