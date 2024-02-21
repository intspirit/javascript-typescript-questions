class X extends Object {}
console.time('X');
for (let i = 0; i < 1_000_000; i++) {
  new X();
}
console.timeEnd('X');

class Y extends Date {}
console.time('Y');
for (let i = 0; i < 1_000_000; i++) {
  new Y();
}
console.timeEnd('Y');

class Z extends Error {}
console.time('Z');
for (let i = 0; i < 1_000_000; i++) {
  new Z();
}
console.timeEnd('Z');

// Which cycle is the longest?

// Try yourself and read the explanation: https://t.me/intspirit/861?comment=1215
