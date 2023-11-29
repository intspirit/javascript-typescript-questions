const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('handler 1');
}, true);

btn.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('handler 2');
}, true);

btn.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('handler 3');
});

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/793?comment=1052
