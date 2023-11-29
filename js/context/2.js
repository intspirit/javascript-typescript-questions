const user = {
  firstName: 'Tom',
  lastName: 'Cruise',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const getName = user.fullName.bind({
  firstName: 'Johnny',
  lastName: 'Depp'
});

console.log(user.fullName(), getName());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/536?comment=488
