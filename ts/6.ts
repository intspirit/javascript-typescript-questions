function setValue(val: number) {
  let res = val > 0 ? val : 'wrong number';

  if (typeof res === 'string') {
    console.log(`Error: ${res}`);
    res = false;
  } else {
    res = 'OK';
  }

  return res;
}

// Which line will cause an error in typescript?

// Try yourself and read the explanation: https://t.me/intspirit/875?comment=1249
