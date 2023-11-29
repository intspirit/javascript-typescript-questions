globalThis.name = 'foo';

function log(name) {
  new Function("\tconsole.log(name);")();
}

log('bar');

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/714?comment=868
