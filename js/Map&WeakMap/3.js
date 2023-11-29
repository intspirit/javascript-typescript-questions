const authorizedUsers = new Map();
const authorizedUsersWeak = new WeakMap();

function login(user) {
  authorizedUsers.set(user, true);
  authorizedUsersWeak.set(user, true);
}

let john = { id: 1, name: 'John' };

login(john);

john = null;

console.log(authorizedUsers.size, authorizedUsersWeak.size);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/656?comment=749
