'use strict';

const user = {
  name: 'Alex',
  printUser: () => {
    return `User: ${this.name}`
  }
}

console.log(user.printUser());

// What will be the output?
