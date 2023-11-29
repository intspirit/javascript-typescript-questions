const proto = Object.defineProperties({}, {
  role: { value: 'user', enumerable: true },
  isAdmin: { value: false, enumerable: false }
});

const user = Object.create(proto, {
  [Symbol('id')]: { value: 'id', enumerable: true },
  firstName: { value: 'Alex', enumerable: true },
  lastName: { value: 'Smith', enumerable: false }
});

const keys = [];

for (let key in user) { keys.push(key) }

console.log(keys);

// What will be the output?
