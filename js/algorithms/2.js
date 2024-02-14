function foo(i) {
  if (i > 10) {
    return i;
  }

  return foo(i + 1) + foo(i + 2);
}

console.log(foo(0));

// What will be the output?
