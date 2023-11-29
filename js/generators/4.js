async function* createAsyncGenerator() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
}

const asyncGen = createAsyncGenerator();

asyncGen.return(0);

asyncGen.next().then((res) => console.log(res.value));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/612?comment=641
