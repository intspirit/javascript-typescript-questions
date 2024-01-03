function argsToString(...args) {
  const foo = args.join(',');
  const bar = arguments.join(',');
  return foo === bar;
}

console.log(argsToString(1, 2, 3));

// What will be the output?
