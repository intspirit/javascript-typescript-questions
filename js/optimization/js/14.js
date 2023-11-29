function foo() {
  a();
  b();
  c();
}

function bar() {
  setTimeout(a);
  setTimeout(b);
  setTimeout(c);
}

function baz() {
  Promise.resolve()
    .then(a)
    .then(b)
    .then(c);
}

// We have refactored 3 functions that were taking too long to execute.
// Which function will now give the browser time to respond to user input?

// Try yourself and read the explanation: https://t.me/intspirit/804?comment=1074
