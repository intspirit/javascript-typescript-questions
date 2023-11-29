const user = {
  name: 'Oleg',
  age: 28
};

const changeUserAge = (val = {...user}) => val.age += 1;

const changeUser = (val = {...user}) => {
  val.age += 1;
  val.name = 'Ivan';
}

changeUserAge(user);
changeUser();

console.log(user);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/493?comment=388
