function Foo () {
  this.value = 1;
};

function Bar() {
  this.value = 2;
  Foo.call(this);
};

console.log(new Bar());

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/730?comment=900
