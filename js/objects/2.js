function compareFruits(fruit1, fruit2 = fruit) {
  if (fruit1 !== fruit2) {
    return console.log('Different!');
  }

  console.log('Same!');
}

const fruit = { name: 'banana' };

compareFruits(fruit);

// What will be the output?
