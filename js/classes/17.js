class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get #fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const john = new User('John', 'Smith');

console.log(john.#fullName);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/694?comment=828
