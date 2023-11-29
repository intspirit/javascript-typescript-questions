function getFruits(fruitList, ...args, favorite) {
  return [...fruitList, ...args, favorite];
}

console.log(getFruits(['apple', 'banana'], 'orange', 'pear'));

// What will be the output?
