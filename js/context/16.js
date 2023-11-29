function foo() {
  this.num = 1;

  return () => {
    return () => {
      return this.num;
    }
  }
}

const func = foo()();

console.log(func());

// What will be the output?
