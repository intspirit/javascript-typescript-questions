const module1 = await import('./module1.js');
const module2 = await import('./module2.js');

console.log(module1, module2);

function pow(num1, num2) { return num1 * num2; }

console.log(pow(module1, module2));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/409?comment=227
