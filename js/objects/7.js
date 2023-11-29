const user = {};

Object.defineProperty(user, 'name', {
  value: 'John'
});

delete user.name;

console.log(user.name);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/588?comment=591
