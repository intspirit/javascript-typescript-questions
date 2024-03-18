const reg = /\-/ig;

let match1 = reg.exec('2-1-1');
let match2 = reg.exec('2-1-2');
let match3 = reg.exec('2-1-3');

console.log(match1?.index, match2?.index, match3?.index);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/960?comment=1445
