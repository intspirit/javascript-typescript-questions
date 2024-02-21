function foo() {
  for (let i = 0; i < 1_000_000_000; i++) {
    if (!(i % 1_000_000)) {
      setTimeout(() => {});
    }
  }
}

async function bar() {
  for (let i = 0; i < 1_000_000_000; i++) {
    if (!(i % 1_000_000)) {
      await new Promise((res) => res());
    }
  }
}

async function baz() {
  for (let i = 0; i < 1_000_000_000; i++) {
    if (!(i % 1_000_000)) {
      await new Promise((res) => setTimeout(res));
    }
  }
}

// Which function regularly breaks the loop to allow the browser to respond to user interaction?

// Try yourself and read the explanation: https://t.me/intspirit/806?comment=1079
