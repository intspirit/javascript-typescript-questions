// generate 1000 random dates
const datesToFormat = generateRandomDates(1000);

console.time('toLocaleDateString');
for (const date of datesToFormat) {
  const dateString = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
console.timeEnd('toLocaleDateString');

console.time('Intl.DateTimeFormat');
const formatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});
for (const date of datesToFormat) {
  const dateString = formatter.format(date);
}
console.timeEnd('Intl.DateTimeFormat');


function generateRandomDates(num) {
  const datesToFormat = [];
  for (let i = 0; i < num; i++) {
    datesToFormat.push(new Date());
  }

  return datesToFormat;
}

// Which date formatter is more efficient?

// Try yourself and read the explanation: https://t.me/intspirit/777?comment=1006
