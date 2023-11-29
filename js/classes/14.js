class Shape {
  _radius = 0;

  get radius() {
    return this._radius;
  }
}

class Circle extends Shape {
  set radius(value) {
    this._radius = value;
  }
}

let circle = new Circle();

circle.radius = 10;

console.log(circle.radius);

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/690?comment=820
