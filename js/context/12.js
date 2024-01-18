'use strict';

const user = {
  name: 'Alex',
  printUser: () => {
    return `User: ${this.name}`
  }
}

console.log(user.printUser());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/920?comment=1351
