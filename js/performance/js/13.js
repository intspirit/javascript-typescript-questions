foo.addEventListener('touchstart', event => {
  console.log('foo');
}, { passive: true });

bar.addEventListener('touchstart', event => {
  console.log('bar');
}, { passive: false });

// Event licener of which element is more efficient?

// Try yourself and read the explanation: https://t.me/intspirit/798?comment=1061
