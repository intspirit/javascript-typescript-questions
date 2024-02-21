class X {
  num = 25;
  foo() {
    return this.num * this.num;
  }
}
console.time('first');
for (let i = 0; i < 1_000_000; i++) {
  new X();
}
console.timeEnd('first');

function Y() {
  this.num = 25;
}
Y.prototype.foo = function() {
  return this.num * this.num;
};
console.time('second');
for (let i = 0; i < 1_000_000; i++) {
  new Y();
}
console.timeEnd('second');

// Which loop will execute faster?

// Try yourself and read the explanation: https://t.me/intspirit/860?comment=1209
