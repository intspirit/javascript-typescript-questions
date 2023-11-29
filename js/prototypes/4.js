class User {
  constructor(name) {
    this.name = name;
  }
}

const Alex = new User('Alex');

User.prototype.sayHello = function() {
  console.log(`Hello from ${this.name}`);
};

Alex.sayHello();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/563?comment=541
