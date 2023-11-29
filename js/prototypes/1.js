class Animal {}
function Bird() {}

const animal = new Animal();
const bird = new Bird();

console.log(animal.toString === Object.prototype.toString);
console.log(bird.toString === Object.prototype.toString);

// What will be the output?
