function argsToString(...args) {
  return args.join(',');
}

function argumentsToString() {
  return arguments.join(',');
}

console.log(argsToString(1, 2, 3));
console.log(argumentsToString(1, 2, 3));

// What will be the output?
