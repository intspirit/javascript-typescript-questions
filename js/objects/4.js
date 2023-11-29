function User() {
  this.verified = true;
}

const user = new User();
const admin = Object.create(user);

const clone1 = { ...admin };
const clone2 = Object.assign({}, admin);

console.log(admin.verified, clone1.verified, clone2.verified);

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/338?comment=109
