import { double, square } from './module.js';

export function calculate(value) {
  return value % 2 ? square(value) : double(value);
}

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/466?comment=330
