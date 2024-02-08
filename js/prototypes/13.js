const obj = {
  foo: 1,
  get fooValue() {
    return super.foo;
  }
}

Object.setPrototypeOf(obj, { foo: 2 });

console.log(obj.fooValue);

// What will be the output?

