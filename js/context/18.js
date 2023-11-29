'use strict';

const user = {
  firstName: 'Sirius',
  lastName: 'Black',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const getFullName = user.fullName.bind(null);

console.log(getFullName());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/544?comment=504
