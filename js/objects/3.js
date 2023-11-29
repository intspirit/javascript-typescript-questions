let f = function() {
  console.log(1);
}

setTimeout(f, 1000);

f = function() {
  console.log(2);
}

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/528?comment=470
