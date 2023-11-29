const el = document.getElementById('box');

function foo() {
  console.log(el.offsetWidth);
}

function bar() {
  console.log(el.getBoundingClientRect().width);
}

function baz() {
  const observer = new IntersectionObserver((entries) => {
    console.log(entries[0].boundingClientRect.width);
  });
  observer.observe(el);
}

// Which function(s) causes reflow?

// Try yourself and read the explanation: https://t.me/intspirit/833?comment=1138
