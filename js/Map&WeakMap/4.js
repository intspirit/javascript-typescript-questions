const map = new WeakMap();

let id = 0
function addUser(obj) {
  map.set(id++, obj);
}

addUser({ name: 'Alex' });
addUser({ name: 'John' });

console.log(map.get(0).name);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/688?comment=816
