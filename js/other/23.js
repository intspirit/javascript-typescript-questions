let i = 0;
function counter(logFn) {
  const log = logFn || (val) => console.log(val);
  log(i++);
}

counter();

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/636?comment=706
