let foo, bar;

await (async () => {
 ({ foo } = await import('./module.js'));
})();

console.log(foo);

({ bar } = await import('./module.js'));

console.log(bar);

// What will be the output?
