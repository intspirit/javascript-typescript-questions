const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
  event.stopImmediatePropagation();
  console.log('handler 1');
}, true);

btn.addEventListener('click', (event) => {
  event.stopImmediatePropagation();
  console.log('handler 2');
}, true);

btn.addEventListener('click', (event) => {
  event.stopImmediatePropagation();
  console.log('handler 3');
});

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/796?comment=1057
