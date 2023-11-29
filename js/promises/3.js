Promise.resolve(1)
  .then(x => { throw x })
  .then(x => console.log(`then ${x}`))
  .catch(err => console.log(`error ${err}`))
  .then(() => Promise.resolve(2))
  .catch(err => console.log(`error ${err}`))
  .then(x => console.log(`then ${x}`));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/567?comment=551
