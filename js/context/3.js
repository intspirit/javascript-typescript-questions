const user = {
  firstName: 'Tom',
  lastName: 'Cruise',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const user2 = {
  firstName: 'Johnny',
  lastName: 'Depp',
  __proto__: user
};

console.log(user2.fullName());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/538?comment=492
