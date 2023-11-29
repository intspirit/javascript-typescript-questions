class Animal {
  constructor(sound) {
    this.sound = sound;
  }
}

class Dog extends Animal {
  barking = `${this.sound} ${this.sound} ${this.sound}`;
}

console.log(new Dog('woof').barking);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/702?comment=844
