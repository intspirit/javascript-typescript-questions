/* code runs in browser */
const user = {
  name: 'Max',
  printName() {
    console.log(this.name);
  }
}

setTimeout(user.printName, 100);

// What will be the output?
