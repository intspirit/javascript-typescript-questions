class Parent {}

class Child extends Parent {}

let item = new Child();

console.log(item instanceof Child);
console.log(item instanceof Parent);

// What will be the output?
