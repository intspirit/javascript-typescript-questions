if (!globalThis.num) {
  globalThis.num = 0;
}

export const num = ++globalThis.num;
