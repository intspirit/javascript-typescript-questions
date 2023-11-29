const user = {
  name: 'Alex',
  age: 35,
  email: 'alex@gmail.com'
};

const data = JSON.stringify(user, ['name', 'age']);

console.log(data);

// What will be the output?
