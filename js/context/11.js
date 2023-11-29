function User(name) {
  this.name = 'Alex';

  return {
    name,
    getName: () => this.name
  };
}

const user = new User('John');

console.log(user.getName());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/375?comment=172
