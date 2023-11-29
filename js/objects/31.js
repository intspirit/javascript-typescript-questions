class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const user = new User('John', 'Smith');

const clone1 = { ...user };
const clone2 = Object.assign({}, user);

console.log(clone1.fullName, clone2.fullName);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/680?comment=799
