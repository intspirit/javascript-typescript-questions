class Base {
  static {
    const propsMap = new Map(this.props.map((prop) => ([prop, prop])));
    this.checkPropExist = (key) => propsMap.has(key);
  }

  static props = ['title', 'date'];
}

console.log(Base.checkPropExist('title'));

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/708?comment=856
