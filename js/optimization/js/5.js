// 100 elements
const elements = [ ...document.querySelectorAll('.box') ];

console.time('A');
elements.forEach(element => element.classList.add('some-class'));
const rects = elements.map(element => element.getBoundingClientRect());
console.timeEnd('A');

console.time('B');
for (let i = 0; i < elements.length; i++) {
  elements[i].classList.add('some-class2');
  const rect = elements[i].getBoundingClientRect();
}
console.timeEnd('B');

// What time will be less?

// Try yourself and read the explanation: https://t.me/intspirit/769?comment=991
