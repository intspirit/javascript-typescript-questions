function fullName() {
  return `${this.firstName} ${this.lastName}`;
}

const user = {
  firstName: 'Tom',
  lastName: 'Cruise',
};

const boundFn = fullName.bind(user);
const boundFn2 = boundFn.bind({
  firstName: 'Johnny',
  lastName: 'Depp'
});

console.log(boundFn2());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/542?comment=500
