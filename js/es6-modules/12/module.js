export let num = 5;

console.log('module.js');

new Promise((resolve) => {
  setTimeout(() => {
    console.log('module.js: promise 1');
    num = 10;
    resolve();
  }, 1000);
});

new Promise((resolve) => {
  setTimeout(() => {
    console.log('module.js: promise 2');
    num = 20;
    resolve();
  }, 2000);
});
