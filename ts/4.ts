interface IUser {
  id: number;
  name: string;
}
interface IUser {
  role?: 'user' | 'admin';
}
const user: IUser = { id: 1, name: 'Kevin', role: 'admin' };

type Shape = {
  width?: number;
  height?: number;
}
type Shape = {
  radius?: number;
};
const circle: Shape = { radius: 10 };

// Which type is used incorrectly?

// Try yourself and read the explanation: https://t.me/intspirit/871?comment=1240
