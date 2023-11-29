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

// Rank the animations in order of their performance, from best to worst

// Try yourself and read the explanation: https://t.me/intspirit/781?comment=1019
