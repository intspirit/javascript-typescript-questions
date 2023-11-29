const worker = new Worker('./worker.js');
const num = prompt('Enter a number');
worker.postMessage(num);
document.body.innerHTML += `Input: ${num};`;

// What will be the output if a user enters 123?

// Try yourself and read the explanation: https://t.me/intspirit/826?comment=1120
