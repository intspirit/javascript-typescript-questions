function foo(bar, getBar = () => bar) {
  var bar = 10;
  console.log(getBar());
}

foo(5);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/351?comment=134
