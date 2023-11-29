self.onmessage = (event) => sum(event.data);
function sum(num) {
  const result = num.split('').reduce((acc, cur) => acc + +cur, 0);
  document.body.innerHTML += `Output: ${result};`;
}
