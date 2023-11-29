let i;
for (console.log(1), i = 0; console.log(2), i < 1; console.log(3), ++i) {
  console.log(4)
  console.log('i = ', i);
}

// What will be the output?
