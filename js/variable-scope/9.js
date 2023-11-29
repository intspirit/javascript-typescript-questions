let user = { name: 'Ivan' };

function setUser(user) {
  user = { name: 'Oleg' };
}

setUser(user);

console.log(user.name);

// What will be the output?
