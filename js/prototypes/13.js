const obj = {
  get fooValue() {
    return super.foo;
  }
}

const proto = {};

Object.setPrototypeOf(proto, { foo: 1 });

Object.setPrototypeOf(obj, proto);

console.log(obj.fooValue);

// What will be the output?

