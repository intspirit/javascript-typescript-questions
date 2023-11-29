interface IUser {
  id: number;
  name: string;
  role: 'user' | 'admin';
}

const logUser = (user: IUser) => console.log(`${user.name}, ${user.role}`);

const john = {
  id: 1,
  name: 'John',
  role: 'admin'
} satisfies IUser;

logUser(john);

logUser({
  id: 2,
  name: 'Alex',
  role: 'user'
});

// Which user's logging will throw an error?

// Try yourself and read the explanation: https://t.me/intspirit/869?comment=1231
