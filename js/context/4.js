const user = {
  name: 'D\'Artagnan',
  getFriends(...args) {
    return args.join(', ');
  }
};

const getFriends = user.getFriends.bind(undefined, 'Athos');
const getFriends2 = getFriends.bind(undefined, 'Porthos');

console.log(getFriends2('Aramis'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/540?comment=496
