let bar = function foo() {
  return new Object();
}

console.log(bar() === foo());

// What will be the output?
