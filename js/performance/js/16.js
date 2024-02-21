async function foo() {
  for (let i = 0; i < 1_000_000_000; i++) {
    if (navigator.scheduling?.isInputPending()) {
      await pause();
    }
  }
}

async function pause() {
  return new Promise((res) => setTimeout(res));
}

foo();

/* When will the loop be paused?

- on scroll
- on click
- on mousemove
- all of the above
- never

Try yourself and read the explanation: https://t.me/intspirit/808?comment=1083

*/
