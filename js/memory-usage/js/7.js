function foo() {
  // returns a random string of 10000000 chars;
  let huge = generateRandomString(10000000);
  let huge2 = generateRandomString(10000000);

  function unused() {
    return huge;
  }

  return function bar() {
    if (huge2) {
      console.log('hello');
    }
  }
}

const bar = foo();

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

// What string(s) will remain in memory after the garbage collector is executed?

// Try yourself and read the explanation: https://t.me/intspirit/754?comment=956
