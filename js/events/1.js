const btn = document.getElementById('btn');

btn.addEventListener('click', (event) => {
  console.log('handler 1');
}, false);

btn.addEventListener('click', (event) => {
  console.log('handler 2');
}, true);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/791?comment=1048
