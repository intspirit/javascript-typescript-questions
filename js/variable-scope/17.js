function foo() {
  var bar = 10;
  return bar;
  function bar() {};
}

console.log(typeof foo());

// What will be the output?
