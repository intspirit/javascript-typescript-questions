'use strict';

function User() {
  this.firstName = 'Tom';
  this.lastName = 'Cruise';

  this.fullName = `${this.firstName} ${this.lastName}`;
}

const UserFunc = User.bind({
  firstName: 'Johnny',
  lastName: 'Depp'
});

const user = new UserFunc();

console.log(user.fullName);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/546?comment=508
