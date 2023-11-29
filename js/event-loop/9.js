setTimeout(() => {
  document.body.innerHTML = 'A';
});

requestAnimationFrame(() => {
  document.body.innerHTML = 'B';
});

setTimeout(() => {
  document.body.innerHTML = 'C';
});

document.body.innerHTML = 'D';

// What will you see on the screen?

// Try yourself and read the explanation: https://t.me/intspirit/785?comment=1030
