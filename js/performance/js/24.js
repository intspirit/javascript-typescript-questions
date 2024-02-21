function clone(arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++)
    result[i] = arr[i];
  return result;
}

const origin = new Array(100_000);
for (let i = 0; i < origin.length; i++) {
  origin[i] = Math.random();
}

const manualClone = clone(origin);
const sliceClone = origin.slice();
const spreadClone = [...origin];

// Which array cloning is the fastest?

// Try yourself and read the explanation: https://t.me/intspirit/849?comment=1186
