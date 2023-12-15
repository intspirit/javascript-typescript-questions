const el = document.getElementById('box'); // div with text
const body = document.body;

let i = 1;
const observer = new ResizeObserver((entries) => {
  const curFontSize = getComputedStyle(body).fontSize;
  body.style.fontSize = parseInt(curFontSize) + i + 'px';
  i++;
});

observer.observe(el);

// How many times will the ResizeObserver callback be called?

// Try yourself and read the explanation: https://t.me/intspirit/857?comment=1206
