const obj = {
  logProp() {
    console.log(this.prop, super.prop);
  }
};

Object.setPrototypeOf(obj, { prop: 1 });

const log = obj.logProp;

log();

// What will be the output?

// Try yorself and read the explanation: https://t.me/intspirit/632?comment=688
