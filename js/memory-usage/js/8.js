let button = document.getElementById('btn');

button.addEventListener('click', () => {
  console.log('click');
});

setTimeout(() => {
  // the button is located in the body
  document.body.removeChild(button);
}, 5000);

// What causes a memory leak?

// Try yourself and read the explanation: https://t.me/intspirit/759?comment=969
