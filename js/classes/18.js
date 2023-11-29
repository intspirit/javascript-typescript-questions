class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#age = age;
  }

  logAge() {
    const ageStr = this.#age > 18 ? 'adult' : 'child';
    return `${this.firstName} ${this.lastName}: ${ageStr}`;
  }
}

const john = new User('John', 'Smith', 40);

console.log(john.logAge());

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/696?comment=832
