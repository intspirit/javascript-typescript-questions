let foo, bar;

(async () => {
 ({ foo } = await import('./module.js'));
})();

console.log(foo);

({ bar } = await import('./module.js'));

console.log(bar);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/926?comment=1365
