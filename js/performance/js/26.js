const strPrimitive = generateRandomString(100_000);
const strObject = new String(generateRandomString(100_000));

String.prototype.customMethod = (i) => i * i;

console.time('primitive');
for (let i = 0; i < 100_000; i++) {
  strPrimitive.customMethod(i);
}
console.timeEnd('primitive');

console.time('object');
for (let i = 0; i < 100_000; i++) {
  strObject.customMethod(i);
}
console.timeEnd('object');


function generateRandomString(length) {
  let result = [];
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  return result.join('');
};

// Which loop will run faster?

// Try yourself and read the explanation: https://t.me/intspirit/852?comment=1195
