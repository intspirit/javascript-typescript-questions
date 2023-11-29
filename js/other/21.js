try {
  try {
    throw new Error('oops');
  } catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  } finally {
    return;
  }
} catch (ex) {
  console.error('outer', ex.message);
}

// What will be the output?

// Try yourself and read the explanation: https://t.me/intspirit/614?comment=647
