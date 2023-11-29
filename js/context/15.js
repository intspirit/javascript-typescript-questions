function User() {
  this.name = 'Alex';
  this.age = 25;

  return {
    getName: () => this.name,
    getAge: function() { return this.age }
  };
}

const user = new User();
const nameFunc = user.getName;
const ageFunc = user.getAge;

console.log(`${nameFunc()}, ${ageFunc()}`);

// What will be the output?
