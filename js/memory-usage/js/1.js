let table = document.querySelector('table');
let cells = table.querySelectorAll('td');
let firstCell = cells[0];

console.log(firstCell.innerText);

document.body.removeChild(table);
table = null;
cells = null;

// What objects will remain in memory after the code is executed?

// Try yourself and read the explanation: https://t.me/intspirit/835?comment=1143
