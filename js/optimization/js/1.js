function generateRandomStrUsingConcatenation(length) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

console.time('Concatenation');
generateRandomStrUsingConcatenation(10000000);
console.timeEnd('Concatenation');

function generateRandomStrUsingArray(length) {
  let result = [];
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
};

console.time('Using array');
generateRandomStrUsingArray(10000000);
console.timeEnd('Using array');

// Which of the random string generation functions is more efficient?

// Try yourself and read the explanation: https://t.me/intspirit/756?comment=963
