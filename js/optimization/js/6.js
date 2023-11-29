var list = document.getElementById('l');
/* A loop */
console.time("A");
for (var i = 0; i < 100000; i++) {
  var li = document.createElement('li');
  li.textContent = i;
  list.appendChild(li);
}
console.timeEnd("A");
/* B loop */
console.time("B");
var documentFragment = document.createDocumentFragment();
for (var i = 0; i < 100000; i++) {
  var li = document.createElement('li');
  li.textContent = i;
  documentFragment.appendChild(li);
}
list.appendChild(documentFragment);
console.timeEnd("B");

// Which loop is more efficient?

// Try yourself and read the explanation: https://t.me/intspirit/771?comment=997
