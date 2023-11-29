class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  [Symbol.toPrimitive] = () => this.age

  valueOf = () => 100 - this.age

  toString = () => 1
}

const alex = new User('Alex', 30);
const oleg = new User('Oleg', 20);

console.log(alex - oleg);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/468?comment=334
