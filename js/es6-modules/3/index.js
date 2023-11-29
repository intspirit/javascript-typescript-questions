import { thing as importedThing } from './module.js';

setTimeout(() => {
  console.log(importedThing);
}, 1000);

// What will be the output?
