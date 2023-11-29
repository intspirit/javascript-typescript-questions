function* generator() {
  for (let i = 0; i < 3; i++) {
    yield i;
  }
}

for (const item of generator()) {
  console.log(item);
}

// What will be the output?
