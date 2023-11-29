const animationBtn = document.getElementById('animation-btn');
const timeoutBtn = document.getElementById('timeout-btn');
const logo = document.getElementById('logo');

animationBtn.addEventListener('click', () => animate(requestAnimationFrame));
timeoutBtn.addEventListener('click', () => animate(setTimeout));

// animates a 360 degree rotation of the logo
function animate(fn) {
  let i = 0, done = false;
  logo.style.transform = `rotate(0deg)`;

  function cb() {
    i += 1;
    logo.style.transform = `rotate(${i}deg)`;
    if (i > 360) done = true;
    if (!done) fn(cb);
  }

  fn(cb);
}

// Which of the animations will continue to run in the same way in an inactive tab?

// Try yourself and read the explanation: https://t.me/intspirit/789?comment=1041
