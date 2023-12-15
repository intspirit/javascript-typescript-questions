const circle = {
  x: 10,
  y: 10,
  r: 20
};

const circleStr = JSON.stringify(circle, (key, val) => {
  return val * 2;
});

console.log(circleStr);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/898?comment=1297
