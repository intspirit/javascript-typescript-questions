const arrayLike = { length: 5 };

Array.prototype.push.call(arrayLike, 1, 2, 3);

console.log(arrayLike.length);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/600?comment=615
