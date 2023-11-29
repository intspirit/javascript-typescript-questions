'use strict';

function logUser(printUser = () => args.join(','), ...args) {
  console.log(printUser());
}

logUser(undefined, 'John', 25);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/582?comment=579
