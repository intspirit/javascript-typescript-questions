const transformBtn = document.getElementById('transform-btn');
const positionBtn = document.getElementById('position-btn');
const willChangeBtn = document.getElementById('will-change-btn');
const logo = document.getElementById('logo');

transformBtn.addEventListener('click', () => startAnimation('transform'));
positionBtn.addEventListener('click', () => startAnimation('position'));
willChangeBtn.addEventListener('click', () => startAnimation('will-change'));

function startAnimation(className) {
  logo.classList.add(className);
  setTimeout(() => {
    logo.classList.remove(className);
  }, 3000);
}

// Which animation is more effective?

// Try yourself and read the explanation: https://t.me/intspirit/779?comment=1011
