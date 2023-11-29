function User(name) {
  if (new.target === undefined) {
    return { name };
  }

  return name;
}

console.log(new User('Alex'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/470?comment=338
