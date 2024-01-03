function timer() {
  for (let i = 0; i < 10_000_000; i++) {}
  setTimeout(timer, 100);
}
timer();

function inerval() {
  for (let i = 0; i < 100_000_000; i++) {}
}
setInterval(inerval, 100);

// Which function takes the longest time between calls?

// Try yourself and read the explanation: https://t.me/intspirit/802?comment=1069
